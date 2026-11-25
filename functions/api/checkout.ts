/**
 * Checkout endpoint — Cloudflare Pages Function.
 *
 * Static export can't run Next `/api/*` routes; this Function runs on the
 * edge and proxies to the 1ai-payment aggregator, holding the merchant
 * API key server-side (never exposed to the client).
 *
 * Secrets (set via `npx wrangler pages secret put`):
 *   PAYMENT_AGGREGATOR_URL - 1ai-payment base URL
 *   PAYMENT_API_KEY        - merchant API key
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
  sku?: string;
  locale?: string;
  project_order_id?: string;
  idempotency_key?: string;
  callback_url?: string;
  fulfillment_type?: string;
  cohort?: string;
}

interface HandlerContext {
  request: Request;
  env: Env;
}

const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

export const onRequestPost = async ({ request, env }: HandlerContext): Promise<Response> => {
  const aggUrl = (env.PAYMENT_AGGREGATOR_URL || 'https://pay.berkahkarya.org').replace(/\/$/, '');
  const apiKey = env.PAYMENT_API_KEY;

  if (!apiKey) {
    return Response.json(
      { success: false, error: 'Payment not configured (PAYMENT_API_KEY missing)' },
      { status: 503 },
    );
  }

  let body: CheckoutBody;
  try {
    body = (await request.json()) as CheckoutBody;
  } catch {
    return Response.json({ success: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const customerName = clean(body.customer_name, 128);
  const customerEmail = clean(body.customer_email, 254);
  const amount = Number(body.amount);

  if (!customerName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
    return Response.json(
      { success: false, error: 'Valid customer_name and customer_email required' },
      { status: 400 },
    );
  }
  if (!Number.isFinite(amount) || amount < 1000) {
    return Response.json({ success: false, error: 'Invalid amount' }, { status: 400 });
  }

  const origin = new URL(request.url).origin;
  const locale = body.locale === 'en' ? 'en' : 'id';
  const sku = clean(body.sku || body.plan || 'default', 64) || 'default';
  const orderRef = clean(body.project_order_id || body.idempotency_key, 128);
  const requestedType = clean(body.fulfillment_type, 32);
  const fulfillmentType = ['digital_download', 'cohort_class', 'service'].includes(
    requestedType,
  )
    ? requestedType
    : 'digital_download';
  const cohort = clean(body.cohort, 64);

  const payload = {
    gateway: clean(body.gateway, 32) || 'tripay',
    amount,
    currency: clean(body.currency, 8) || 'IDR',
    payment_method: clean(body.payment_method, 64) || 'QRIS',
    // Fulfillment endpoint — NOT a marketing/contact page.
    callback_url: body.callback_url || `${origin}/api/payment-confirmed`,
    success_url: `${origin}/${locale}/payment-success`,
    cancel_url: `${origin}/${locale}/payment-success?cancelled=1`,
    ...(orderRef ? { project_order_id: orderRef, idempotency_key: orderRef } : {}),
    customer: {
      name: customerName,
      email: customerEmail,
      phone: clean(body.customer_phone, 32),
    },
    metadata: {
      plan: sku,
      sku,
      product_name: clean(body.product_name, 128) || 'Product',
      buyer_email: customerEmail,
      fulfillment_type: fulfillmentType,
      ...(cohort ? { cohort } : {}),
    },
  };

  try {
    const res = await fetch(`${aggUrl}/api/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    const data = (await res.json()) as {
      success?: boolean;
      data?: { payment_url?: string; id?: string };
      error?: { message?: string };
    };

    if (!res.ok || !data.success) {
      return Response.json(
        { success: false, error: data?.error?.message || 'Payment creation failed' },
        { status: 502 },
      );
    }

    return Response.json({
      success: true,
      checkout_url: data.data?.payment_url || '',
      reference: data.data?.id || '',
      amount,
    });
  } catch {
    return Response.json({ success: false, error: 'Payment gateway error' }, { status: 502 });
  }
};
