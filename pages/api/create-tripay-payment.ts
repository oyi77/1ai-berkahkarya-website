import type { NextApiRequest, NextApiResponse } from 'next';
import { createPaymentViaAggregator } from '../../lib/payment-wrapper';
import { PRICING } from '../../lib/pricing-products';
import { requireMethod } from '../../lib/api-middleware';

interface ResponseData {
  success: boolean;
  reference?: string;
  merchant_ref?: string;
  checkout_url?: string;
  pay_code?: string | null;
  qr_url?: string | null;
  amount?: number;
  plan?: string;
  error?: string;
  details?: unknown;
  message?: string;
}

const postHandler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {

  const { plan, customer_name, customer_email, customer_phone, method } = req.body as {
    plan?: string;
    customer_name?: string;
    customer_email?: string;
    customer_phone?: string;
    method?: string;
  };
  if (!customer_name || !customer_email) {
    return res.status(400).json({
      success: false,
      error: 'customer_name and customer_email are required',
    });
  }

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
      gateway: 'tripay',
      amount,
      currency: 'IDR',
      payment_method: method || 'QRIS',
      customer: {
        name: customer_name,
        email: customer_email,
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

    // Return response in original shape for backward compatibility
    return res.status(200).json({
      success: true,
      reference: result.data.gateway_reference || undefined,
      merchant_ref: result.data.id,
      checkout_url: result.data.payment_url || undefined,
      pay_code: null,
      qr_url: null,
      amount,
      plan,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Payment gateway error';
    console.error('Tripay payment creation failed:', error);
    return res.status(500).json({
      success: false,
      error: 'Payment gateway error',
    });
  }
};
export default requireMethod('POST', postHandler);
