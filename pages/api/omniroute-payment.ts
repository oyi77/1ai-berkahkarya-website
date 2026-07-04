import type { NextApiRequest, NextApiResponse } from 'next';
import { createPaymentViaAggregator } from '../../lib/payment-wrapper';

interface ResponseData {
  success: boolean;
  paymentUrl?: string;
  plan?: string;
  amount?: { idr: number; usd: number };
  error?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { plan, email, name } = req.body as {
    plan?: string;
    email?: string;
    name?: string;
  };

  // Pricing mapping
  const prices: Record<string, { idr: number; usd: number }> = {
    starter: { idr: 75000, usd: 5 },
    pro: { idr: 285000, usd: 19 },
  };

  if (!plan || typeof plan !== 'string' || !prices[plan]) {
    return res.status(400).json({ success: false, error: 'Invalid plan' });
  }

  const { idr, usd } = prices[plan];

  try {
    const result = await createPaymentViaAggregator({
      gateway: 'tripay',
      amount: idr,
      currency: 'IDR',
      payment_method: 'QRIS',
      customer: {
        name: name || 'Customer',
        email: email || '',
      },
      metadata: {
        plan,
        usd_equivalent: usd,
      },
    });

    if (!result.success || !result.data?.payment_url) {
      return res.status(400).json({
        success: false,
        error: result.error?.message || 'Payment creation failed',
      });
    }

    return res.status(200).json({
      success: true,
      paymentUrl: result.data.payment_url,
      plan,
      amount: { idr, usd },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Payment gateway error';
    console.error('OmniRoute payment creation failed:', error);
    return res.status(500).json({
      success: false,
      error: message,
    });
  }
}
