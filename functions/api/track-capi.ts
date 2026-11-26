/**
 * Meta Conversions API relay — Cloudflare Pages Function.
 *
 * The repo uses `output: 'export'`, so pages/api/track-capi.ts is not part of
 * the deployed site. The ebook LP posts here instead; this function forwards
 * validated events to Meta without exposing the access token to the browser.
 *
 * Secrets: META_PIXEL_ID, META_CAPI_ACCESS_TOKEN.
 * Fail closed when either is missing (no silent success).
 */
interface Env {
  META_PIXEL_ID?: string;
  META_CAPI_ACCESS_TOKEN?: string;
}

interface HandlerContext {
  request: Request;
  env: Env;
}

interface CapiBody {
  event_name?: string;
  event_time?: number;
  action_source?: string;
  event_source_url?: string;
  user_data?: { client_user_agent?: string; email?: string; phone?: string };
  custom_data?: Record<string, unknown>;
}

const ALLOWED_EVENTS = new Set([
  'PageView',
  'ViewContent',
  'AddToCart',
  'InitiateCheckout',
  'Purchase',
  'Lead',
  'Contact',
]);

async function sha256(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value.toLowerCase().trim());
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function cookieValue(header: string, name: string): string | undefined {
  for (const part of header.split(';')) {
    const [k, ...rest] = part.trim().split('=');
    if (k === name) return decodeURIComponent(rest.join('='));
  }
  return undefined;
}

export const onRequestPost = async ({ request, env }: HandlerContext): Promise<Response> => {
  const pixelId = env.META_PIXEL_ID;
  const token = env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !token) {
    return Response.json({ success: false, error: 'CAPI not configured' }, { status: 503 });
  }

  let body: CapiBody;
  try {
    body = (await request.json()) as CapiBody;
  } catch {
    return Response.json({ success: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const eventName = String(body.event_name || '');
  if (!ALLOWED_EVENTS.has(eventName)) {
    return Response.json({ success: false, error: 'Unsupported event_name' }, { status: 400 });
  }

  const headers = request.headers;
  const clientIp =
    headers.get('cf-connecting-ip') ||
    (headers.get('x-forwarded-for') || '').split(',')[0]?.trim() ||
    headers.get('x-real-ip') ||
    '';
  const cookie = headers.get('cookie') || '';
  const userData = body.user_data || {};

  const payloadUserData: Record<string, string> = {
    client_ip_address: clientIp,
    client_user_agent: userData.client_user_agent || headers.get('user-agent') || '',
  };
  const fbc = cookieValue(cookie, '_fbc');
  const fbp = cookieValue(cookie, '_fbp');
  if (fbc) payloadUserData.fbc = fbc;
  if (fbp) payloadUserData.fbp = fbp;
  if (userData.email) payloadUserData.em = await sha256(userData.email);
  if (userData.phone) payloadUserData.ph = await sha256(userData.phone);

  const eventTime =
    typeof body.event_time === 'number' && body.event_time > 0
      ? body.event_time
      : Math.floor(Date.now() / 1000);

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: eventTime,
        action_source: body.action_source || 'website',
        event_source_url: body.event_source_url || '',
        user_data: payloadUserData,
        custom_data: body.custom_data || {},
      },
    ],
    access_token: token,
  };

  try {
    const res = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = (await res.json()) as Record<string, unknown>;
    if (!res.ok) {
      return Response.json({ success: false, error: 'CAPI request failed', result }, { status: 502 });
    }
    return Response.json({ success: true, result });
  } catch {
    return Response.json({ success: false, error: 'CAPI unreachable' }, { status: 502 });
  }
};
