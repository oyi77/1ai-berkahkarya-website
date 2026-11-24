/**
 * Order status — Cloudflare Pages Function.
 *
 * The static confirmation page cannot hold the merchant API key, so it asks
 * this edge function. Status comes straight from 1ai-payment — the only
 * authoritative source. No state is trusted from the browser.
 */
interface Env {
  PAYMENT_AGGREGATOR_URL?: string;
  PAYMENT_API_KEY?: string;
}

interface HandlerContext {
  request: Request;
  env: Env;
}

export const onRequestGet = async ({ request, env }: HandlerContext): Promise<Response> => {
  const headers = { 'Cache-Control': 'no-store' };
  const apiKey = env.PAYMENT_API_KEY;
  if (!apiKey) {
    return Response.json({ paid: false, error: 'not configured' }, { status: 503, headers });
  }

  const ref = new URL(request.url).searchParams.get('ref') || '';
  if (!/^[a-zA-Z0-9_-]{3,128}$/.test(ref)) {
    return Response.json({ paid: false, error: 'invalid ref' }, { status: 400, headers });
  }

  const aggUrl = (env.PAYMENT_AGGREGATOR_URL || 'https://pay.berkahkarya.org').replace(/\/$/, '');

  try {
    const res = await fetch(`${aggUrl}/api/payments/${encodeURIComponent(ref)}`, {
      headers: { 'X-API-Key': apiKey },
    });
    const data = (await res.json()) as {
      success?: boolean;
      data?: { id?: string; status?: string; amount?: number; currency?: string };
    };
    const order = data.data;

    return Response.json(
      {
        paid: order?.status === 'success',
        status: order?.status || 'unknown',
        amount: order?.amount || null,
        currency: order?.currency || 'IDR',
      },
      { headers },
    );
  } catch {
    return Response.json({ paid: false, error: 'gateway unreachable' }, { status: 502, headers });
  }
};
