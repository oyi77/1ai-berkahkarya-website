/**
 * Payment wrapper — proxy calls to 1ai-payment aggregator.
 *
 * This helper forwards payment requests to the centralized 1ai-payment service
 * while maintaining backward compatibility with existing endpoint shapes.
 */

const PAYMENT_AGGREGATOR_URL = process.env.PAYMENT_AGGREGATOR_URL || 'http://localhost:3100';
const PAYMENT_API_KEY: string = process.env.PAYMENT_API_KEY ?? (() => { throw new Error('PAYMENT_API_KEY env var required'); })();
const PROJECT_ID = 'berkahkarya-website';

export interface CreatePaymentRequest {
  gateway: 'tripay' | 'nowpayments' | 'scalev' | 'midtrans';
  amount: number;
  currency?: string;
  payment_method?: string;
  customer?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  project_order_id?: string;
  metadata?: Record<string, unknown>;
  callback_url?: string;
  idempotency_key?: string;
}

export interface CreatePaymentResponse {
  success: boolean;
  data?: {
    id: string;
    gateway: string;
    gateway_reference: string | null;
    status: string;
    amount: number;
    currency: string;
    payment_method: string | null;
    payment_url: string | null;
    metadata: Record<string, unknown> | null;
    created_at: string;
    updated_at: string;
  };
  error?: {
    code: string;
    message: string;
  };
}

/**
 * Create a payment via 1ai-payment aggregator.
 *
 * @param request - Payment creation request
 * @returns Payment response with payment URL
 * @throws Error on network or gateway failure
 */
export async function createPaymentViaAggregator(
  request: CreatePaymentRequest,
): Promise<CreatePaymentResponse> {
  const url = new URL('/api/payments', PAYMENT_AGGREGATOR_URL);

  const body = {
    gateway: request.gateway,
    amount: request.amount,
    currency: request.currency || 'IDR',
    payment_method: request.payment_method,
    customer: request.customer,
    project_order_id: request.project_order_id,
    metadata: request.metadata,
    callback_url: request.callback_url,
    idempotency_key: request.idempotency_key,
  };

  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      'X-API-Key': PAYMENT_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Payment aggregator error: ${response.status}`, errorText);
    throw new Error(`Payment creation failed: ${response.status} ${errorText}`);
  }

  const data = (await response.json()) as unknown;

  // Validate response shape
  if (!isCreatePaymentResponse(data)) {
    console.error('Invalid payment aggregator response:', data);
    throw new Error('Invalid payment aggregator response');
  }

  return data;
}

function isCreatePaymentResponse(value: unknown): value is CreatePaymentResponse {
  if (typeof value !== 'object' || value === null) return false;
  const obj = value as Record<string, unknown>;
  return (
    typeof obj.success === 'boolean' &&
    (obj.data === undefined ||
      (typeof obj.data === 'object' &&
        obj.data !== null &&
        typeof (obj.data as Record<string, unknown>).id === 'string'))
  );
}
