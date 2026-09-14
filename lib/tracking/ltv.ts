import { getUserSession, getReferrerSource } from './session'
import { trackPurchase } from './funnel'
import { sendMetaCAPI, sendTikTokCAPI, trackGAEvent } from './pixels'

// ============================================

export interface CustomerLTV {
  customer_id: string;
  first_purchase_date: number;
  total_purchases: number;
  total_value: number;
  purchases: Array<{
    date: number;
    value: number;
    product: string;
    source: string;
  }>;
}

/** Get or create customer LTV record */
export function getCustomerLTV(customerId?: string): CustomerLTV {
  if (typeof window === 'undefined') {
    return { customer_id: '', first_purchase_date: 0, total_purchases: 0, total_value: 0, purchases: [] };
  }

  const stored = localStorage.getItem('bk_customer_ltv');
  if (stored) {
    return JSON.parse(stored);
  }

  const session = getUserSession();
  const newLTV: CustomerLTV = {
    customer_id: customerId || session.session_id,
    first_purchase_date: 0,
    total_purchases: 0,
    total_value: 0,
    purchases: [],
  };

  localStorage.setItem('bk_customer_ltv', JSON.stringify(newLTV));
  return newLTV;
}

/** Record purchase for LTV tracking */
export function recordPurchaseForLTV(value: number, productName: string) {
  if (typeof window === 'undefined') return;

  const session = getUserSession();
  const ltv = getCustomerLTV();
  
  ltv.purchases.push({
    date: Date.now(),
    value: value,
    product: productName,
    source: getReferrerSource(session.first_touch.referrer),
  });
  
  ltv.total_purchases++;
  ltv.total_value += value;
  
  if (!ltv.first_purchase_date) {
    ltv.first_purchase_date = Date.now();
  }

  localStorage.setItem('bk_customer_ltv', JSON.stringify(ltv));

  // Send LTV data to analytics
  trackGAEvent('ltv_update', {
    customer_id: ltv.customer_id,
    total_ltv: ltv.total_value,
    purchase_count: ltv.total_purchases,
    avg_order_value: Math.round(ltv.total_value / ltv.total_purchases),
    first_purchase_source: ltv.purchases[0]?.source,
  });

  console.log('[Tracking] LTV Updated:', ltv);
}

// ============================================
// ANALYTICS REPORT — Get full attribution data
// ============================================

export function getAttributionReport() {
  if (typeof window === 'undefined') return null;

  const session = getUserSession();
  const ltv = getCustomerLTV();

  return {
    session: {
      id: session.session_id,
      first_touch: session.first_touch,
      last_touch: session.last_touch,
      page_views: session.page_views,
      events: session.events,
      referrer_source: getReferrerSource(session.first_touch.referrer),
    },
    ltv: {
      customer_id: ltv.customer_id,
      total_purchases: ltv.total_purchases,
      total_value: ltv.total_value,
      avg_order_value: ltv.total_purchases > 0 ? Math.round(ltv.total_value / ltv.total_purchases) : 0,
      first_purchase_date: ltv.first_purchase_date ? new Date(ltv.first_purchase_date).toISOString() : null,
      purchases: ltv.purchases,
    },
    journey: session.events.map(e => {
      const [event, timestamp] = e.split(':');
      return { event, timestamp: new Date(parseInt(timestamp)).toISOString() };
    }),
  };
}
