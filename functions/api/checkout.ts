/**
 * Checkout endpoint — CF Pages Function.
 *
 * Static export can't run Next `/api/*` routes; this Function runs on the
 * CF edge and proxies to the 1ai-payment aggregator, holding the merchant
 * API key server-side (never exposed to the client).
 *
 * Secrets (set via `wrangler pages secret put`):
 *   PAYMENT_AGGREGATOR_URL — 1ai-payment base URL
 *   PAYMENT_API_KEY       — merchant API key
 */
interface Env {
  PAYMENT_AGGREGATOR_URL?: string;
  PAYMENT_API_KEY?: string;
}

interface CheckoutBody {
  gateway?: string;
  amount: number;
  currency?: string;
  payment_method?: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  product_name?: string;
  plan?: string;
  callback_url?: string;
}

interface HandlerContext {
  request: Request;
  env: Env;
}

export const onRequestPost = async ({ request, env }: HandlerContext): Promise<Response> => {
  const aggUrl = env.PAYMENT_AGGREGATOR_URL || 'http://localhost:3100';
  const apiKey = env.PAYMENT_API_KEY;

  if (!apiKey) {
    return Response.json({ success: false, error: 'Payment not configured (PAYMENT_API_KEY missing)' }, { status: 503 });
  }

  try {
    const body = (await request.json()) as CheckoutBody;

    if (!body.customer_name || !body.customer_email) {
      return Response.json({ success: false, error: 'customer_name and customer_email required' }, { status: 400 });
    }

    const payload = {
      gateway: body.gateway || 'tripay',
      amount: body.amount,
      currency: body.currency || 'IDR',
      payment_method: body.payment_method || 'QRIS',
      customer: {
        name: body.customer_name,
        email: body.customer_email,
        phone: body.customer_phone || '',
      },
      callback_url: body.callback_url || `${new URL(request.url).origin}/id/contact`,
      metadata: {
        plan: body.plan || 'default',
        product_name: body.product_name || 'Product',
      },
    };

    const res = await fetch(`${aggUrl}/api/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    const data = (await res.json()) as { success?: boolean; data?: { payment_url?: string; id?: string }; error?: { message?: string } };

    if (!res.ok || !data.success) {
      return Response.json({ success: false, error: data?.error?.message || 'Payment creation failed' }, { status: 502 });
    }

    return Response.json({
      success: true,
      checkout_url: data.data?.payment_url || '',
      reference: data.data?.id || '',
    });
  } catch (e) {
    return Response.json({ success: false, error: 'Payment gateway error' }, { status: 502 });
  }
};
