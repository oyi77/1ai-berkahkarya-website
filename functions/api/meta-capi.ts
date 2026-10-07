/**
 * Meta Conversions API proxy — CF Pages Function.
 *
 * Client tracking (lib/tracking/capi.ts) POSTs ke /api/meta-capi; Function ini
 * meneruskan ke Graph API dengan token dari secret. Token TIDAK PERNAH masuk
 * repo/bundle — set via `wrangler pages secret put META_CAPI_ACCESS_TOKEN`.
 *
 * Secrets:
 *   META_CAPI_ACCESS_TOKEN — token CAPI pixel 619475190242307
 *   META_PIXEL_ID          — (opsional, default pixel di atas)
 */

const DEFAULT_PIXEL_ID = '619475190242307';
const GRAPH_VERSION = 'v19.0';

interface Env {
  META_CAPI_ACCESS_TOKEN?: string;
  META_PIXEL_ID?: string;
}

interface HandlerContext {
  request: Request;
  env: Env;
}

export const onRequestPost = async ({ request, env }: HandlerContext): Promise<Response> => {
  const token = env.META_CAPI_ACCESS_TOKEN;
  if (!token) {
    return Response.json({ success: true, skipped: true, reason: 'no-token' });
  }
  const pixelId = env.META_PIXEL_ID || DEFAULT_PIXEL_ID;

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ success: false, error: 'invalid-json' }, { status: 400 });
  }

  const now = Math.floor(Date.now() / 1000);
  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: (body.event_name as string) || 'PageView',
        event_time: now,
        ...(body.event_id ? { event_id: body.event_id } : {}),
        event_source_url: (body.event_source_url as string) || '',
        action_source: 'website',
        user_data: {
          client_ip_address:
            request.headers.get('cf-connecting-ip') ||
            request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            '',
          client_user_agent: (body.user_agent as string) || request.headers.get('user-agent') || '',
          ...(body.fbc ? { fbc: body.fbc } : {}),
          ...(body.fbp ? { fbp: body.fbp } : {}),
        },
        ...((body.custom_data as Record<string, unknown>) ? { custom_data: body.custom_data } : {}),
      },
    ],
  };
  // Test Event passthrough — hanya untuk verifikasi Events Manager, bukan prod traffic.
  if (typeof body.test_event_code === 'string' && body.test_event_code) {
    payload.test_event_code = body.test_event_code;
  }

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) },
  );
  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) {
    return Response.json({ success: false, error: 'meta-rejected', details: data }, { status: 502 });
  }
  return Response.json({ success: true, events_received: data.events_received ?? 1 });
};
