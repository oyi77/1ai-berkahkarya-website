import type { NextApiRequest, NextApiResponse } from 'next';
import { createPaymentViaAggregator } from '../../lib/payment-wrapper';
import { PRICING } from '../../lib/pricing-products';
import { requireMethod } from '../../lib/api-middleware';

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

const postHandler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {

  const { plan, customer_name, customer_email, customer_phone } = req.body as {
    plan?: string;
    customer_name?: string;
    customer_email?: string;
    customer_phone?: string;
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
      gateway: 'midtrans',
      amount,
      currency: 'IDR',
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
};
export default requireMethod('POST', postHandler);
