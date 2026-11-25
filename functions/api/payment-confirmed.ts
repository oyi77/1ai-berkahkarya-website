/**
 * Payment callback — Cloudflare Pages Function.
 *
 * 1ai-payment forwards normalized events here (see forwarder.service.ts):
 *   POST {
 *     event_id, event: "payment.<status>", gateway, order_id,
 *     project_order_id, status, amount, currency, paid_at, metadata, timestamp
 *   }
 *   Header X-Payment-Signature = HMAC-SHA256(rawBody, merchant webhook_secret) as hex.
 *
 * The authoritative status is always queried from 1ai-payment by the browser
 * (see /api/order-status). This endpoint only validates + notifies, so a
 * forged callback can never unlock a download.
 *
 * Secret: PAYMENT_WEBHOOK_SECRET (merchant webhook secret from 1ai-payment).
 * Optional: TELEGRAM_BOT_TOKEN + TELEGRAM_ADMIN_CHAT_ID for sale alerts.
 */
interface Env {
  PAYMENT_WEBHOOK_SECRET?: string;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_ADMIN_CHAT_ID?: string;
}

interface HandlerContext {
  request: Request;
  env: Env;
}

interface PaymentEvent {
  event_id?: string;
  event?: string;
  order_id?: string;
  project_order_id?: string;
  status?: string;
  amount?: number;
  currency?: string;
  metadata?: Record<string, unknown>;
}

async function hmacHex(secret: string, body: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(body));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export const onRequestPost = async ({ request, env }: HandlerContext): Promise<Response> => {
  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const secret = env.PAYMENT_WEBHOOK_SECRET;
  if (!secret) {
    // Fail closed: without a secret we cannot tell a real event from a fake one.
    return Response.json({ ok: false, error: 'callback not configured' }, { status: 503 });
  }

  const signature = request.headers.get('X-Payment-Signature') || '';
  const expected = await hmacHex(secret, raw);
  if (!signature || !safeEqual(signature, expected)) {
    return Response.json({ ok: false }, { status: 401 });
  }

  let event: PaymentEvent;
  try {
    event = JSON.parse(raw) as PaymentEvent;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Always 200 for non-settlement events so the forwarder stops retrying.
  if (event.status !== 'success') {
    return Response.json({ ok: true, ignored: event.status || 'unknown' });
  }

  // Optional sale alert. Never block fulfillment on Telegram being up.
  const token = env.TELEGRAM_BOT_TOKEN;
  const chat = env.TELEGRAM_ADMIN_CHAT_ID;
  if (token && chat) {
    const product = String(event.metadata?.product_name || event.metadata?.sku || 'unknown');
    const text = `💰 Sale confirmed\n${product}\n${event.amount} ${event.currency || 'IDR'}\nref: ${event.order_id || event.event_id || '-'}`;
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chat, text }),
      });
    } catch {
      // Non-fatal.
    }
  }

  return Response.json({ ok: true, event_id: event.event_id || null });
};
