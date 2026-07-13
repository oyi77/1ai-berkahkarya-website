import type { NextApiRequest, NextApiResponse } from 'next';
import { createPaymentViaAggregator } from '../../lib/payment-wrapper';

const PRICING: Record<string, { name: string; price: number }> = {
  'video-course': { name: '📹 Video Course Belajar AI', price: 299000 },
  'online-live': { name: '💻 Online Live Belajar AI', price: 799000 },
  'offline-workshop': { name: '🏫 Offline Workshop Belajar AI', price: 2500000 },
  'monthly-sub': { name: '🔄 Monthly Subscription Belajar AI', price: 199000 },
  'platinum-pass': { name: '👑 Platinum Pass Belajar AI', price: 9000000 },
};

interface ResponseData {
  success: boolean;
  snap_token?: string | null;
  redirect_url?: string | null;
  merchant_ref?: string;
  amount?: number;
  plan?: string;
  error?: string;
  details?: unknown;
  message?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { plan, customer_name, customer_email, customer_phone } = req.body as {
    plan?: string;
    customer_name?: string;
    customer_email?: string;
    customer_phone?: string;
  };

  if (!plan || typeof plan !== 'string' || !PRICING[plan]) {
    return res.status(400).json({
      success: false,
      error: `Invalid plan. Available: ${Object.keys(PRICING).join(', ')}`,
    });
  }

  const product = PRICING[plan];
  const amount = product.price;

  try {
    const result = await createPaymentViaAggregator({
      gateway: 'midtrans',
      amount,
      currency: 'IDR',
      customer: {
        name: customer_name || 'Student',
        email: customer_email || 'student@example.com',
        phone: customer_phone || '',
      },
      metadata: {
        plan,
        product_name: product.name,
      },
    });

    if (!result.success || !result.data) {
      return res.status(400).json({
        success: false,
        error: result.error?.message || 'Payment creation failed',
        details: result.error,
      });
    }

    return res.status(200).json({
      success: true,
      // gateway_reference holds the Snap token when aggregator returns it
      snap_token: result.data.gateway_reference || null,
      redirect_url: result.data.payment_url || null,
      merchant_ref: result.data.id,
      amount,
      plan,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Payment gateway error';
    console.error('Midtrans payment creation failed:', error);
    return res.status(500).json({
      success: false,
      error: 'Payment gateway error',
      message,
    });
  }
}
