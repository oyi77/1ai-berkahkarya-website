import { sendMetaCAPI, sendTikTokCAPI } from './capi';
import { trackGAEvent, trackMetaEvent, trackTikTokEvent } from './pixels';
import { addEventToJourney, getReferrerSource, getUserSession } from './session';



// ============================================
// ADD TO CART — External CTA Clicks (WhatsApp, SaaS, etc)
// ============================================

/** 
 * Track AddToCart event for external CTA clicks
 * Use this for: WhatsApp links, SaaS redirects, external checkouts
 */
export function trackAddToCart(params: {
  content_name: string;       // e.g., "AI Video Studio", "Growth Plan"
  content_id?: string;        // e.g., "lp1", "growth-plan"
  content_type?: string;      // e.g., "product", "service", "subscription"
  value?: number;             // e.g., 149000
  currency?: string;          // e.g., "IDR"
  destination: string;        // e.g., "whatsapp", "saas.aitradepulse.com"
  destination_url: string;    // full URL
}) {
  const session = getUserSession();
  const referrerSource = getReferrerSource(session.first_touch.referrer);
  
  const eventData = {
    content_name: params.content_name,
    content_ids: [params.content_id || params.content_name],
    content_type: params.content_type || 'product',
    value: params.value || 0,
    currency: params.currency || 'IDR',
    // Custom attribution data
    destination: params.destination,
    destination_url: params.destination_url,
    session_id: session.session_id,
    referrer_source: referrerSource,
    utm_source: session.first_touch.utm_source,
    utm_medium: session.first_touch.utm_medium,
    utm_campaign: session.first_touch.utm_campaign,
    landing_page: session.first_touch.landing_page,
    page_views_before_atc: session.page_views,
  };

  addEventToJourney('AddToCart');

  // GA4 — add_to_cart
  trackGAEvent('add_to_cart', {
    currency: params.currency || 'IDR',
    value: params.value || 0,
    items: [{
      item_name: params.content_name,
      item_id: params.content_id,
      price: params.value,
    }],
    // Custom dimensions
    traffic_source: referrerSource,
    utm_source: session.first_touch.utm_source,
    utm_campaign: session.first_touch.utm_campaign,
    destination_type: params.destination,
  });

  // Meta Pixel — AddToCart
  trackMetaEvent('AddToCart', eventData);

  // Meta CAPI — server-side AddToCart
  sendMetaCAPI('AddToCart', eventData);

  // TikTok Pixel — AddToCart
  trackTikTokEvent('AddToCart', eventData);

  // TikTok CAPI — server-side
  sendTikTokCAPI('AddToCart', eventData);

  // Pinterest (if available)
  if (typeof window !== 'undefined' && window.pintrk) {
    window.pintrk('track', 'addtocart', {
      product_name: params.content_name,
      value: params.value,
      currency: params.currency || 'IDR',
    });
  }

  console.log('[Tracking] AddToCart:', eventData);
}

// ============================================
// INITIATE CHECKOUT — Before redirect to payment/WA
// ============================================

export function trackInitiateCheckout(params: {
  content_name: string;
  content_id?: string;
  value?: number;
  currency?: string;
  num_items?: number;
}) {
  const session = getUserSession();
  const referrerSource = getReferrerSource(session.first_touch.referrer);

  const eventData = {
    content_name: params.content_name,
    content_ids: [params.content_id || params.content_name],
    value: params.value || 0,
    currency: params.currency || 'IDR',
    num_items: params.num_items || 1,
    session_id: session.session_id,
    referrer_source: referrerSource,
    utm_source: session.first_touch.utm_source,
    utm_campaign: session.first_touch.utm_campaign,
  };

  addEventToJourney('InitiateCheckout');

  // GA4
  trackGAEvent('begin_checkout', {
    currency: params.currency || 'IDR',
    value: params.value || 0,
    items: [{ item_name: params.content_name, item_id: params.content_id, price: params.value }],
    traffic_source: referrerSource,
  });

  // Meta Pixel
  trackMetaEvent('InitiateCheckout', eventData);
  sendMetaCAPI('InitiateCheckout', eventData);

  // TikTok
  trackTikTokEvent('InitiateCheckout', eventData);
  sendTikTokCAPI('InitiateCheckout', eventData);

  console.log('[Tracking] InitiateCheckout:', eventData);
}

// ============================================
// PURCHASE — Call when payment confirmed
// ============================================

export function trackPurchase(params: {
  content_name: string;
  content_id?: string;
  value: number;
  currency?: string;
  transaction_id?: string;
  num_items?: number;
}) {
  const session = getUserSession();
  const referrerSource = getReferrerSource(session.first_touch.referrer);

  const eventData = {
    content_name: params.content_name,
    content_ids: [params.content_id || params.content_name],
    value: params.value,
    currency: params.currency || 'IDR',
    transaction_id: params.transaction_id,
    num_items: params.num_items || 1,
    // Full attribution
    session_id: session.session_id,
    referrer_source: referrerSource,
    first_touch_referrer: session.first_touch.referrer,
    utm_source: session.first_touch.utm_source,
    utm_medium: session.first_touch.utm_medium,
    utm_campaign: session.first_touch.utm_campaign,
    utm_content: session.first_touch.utm_content,
    landing_page: session.first_touch.landing_page,
    page_views_total: session.page_views,
    customer_journey: session.events.join(' > '),
  };

  addEventToJourney('Purchase');

  // GA4
  trackGAEvent('purchase', {
    transaction_id: params.transaction_id,
    currency: params.currency || 'IDR',
    value: params.value,
    items: [{ item_name: params.content_name, item_id: params.content_id, price: params.value }],
    traffic_source: referrerSource,
    utm_source: session.first_touch.utm_source,
  });

  // Meta Pixel
  trackMetaEvent('Purchase', eventData);
  sendMetaCAPI('Purchase', eventData);

  // TikTok
  trackTikTokEvent('CompletePayment', eventData);
  sendTikTokCAPI('CompletePayment', eventData);

  // Pinterest
  if (typeof window !== 'undefined' && window.pintrk) {
    window.pintrk('track', 'checkout', {
      value: params.value,
      currency: params.currency || 'IDR',
      order_id: params.transaction_id,
    });
  }

  console.log('[Tracking] Purchase:', eventData);
}

// ============================================
// CTA CLICK — General CTA tracking (uses AddToCart for external)
// ============================================

/** 
 * Track CTA click — automatically uses AddToCart for external links
 */
export function trackCTAClick(ctaName: string, destination: string) {
  const isExternal = destination.startsWith('http') && !destination.includes('berkahkarya.org');
  const isWhatsApp = destination.includes('wa.me') || destination.includes('whatsapp');
  const isTelegram = destination.includes('t.me') || destination.includes('telegram');
  
  if (isExternal || isWhatsApp || isTelegram) {
    // External CTA → Track as AddToCart
    let destinationType = 'external';
    if (isWhatsApp) destinationType = 'whatsapp';
    else if (isTelegram) destinationType = 'telegram';
    else if (destination.includes('aitradepulse')) destinationType = 'saas_app';
    
    trackAddToCart({
      content_name: ctaName,
      content_id: ctaName.toLowerCase().replace(/\s+/g, '-'),
      content_type: 'cta_conversion',
      destination: destinationType,
      destination_url: destination,
    });
  } else {
    // Internal navigation → Track as Lead
    const session = getUserSession();
    
    trackGAEvent('cta_click', {
      cta_name: ctaName,
      destination: destination,
    });

    trackMetaEvent('Lead', {
      content_name: ctaName,
      content_category: 'CTA',
      session_id: session.session_id,
    });

    sendMetaCAPI('Lead', {
      content_name: ctaName,
      content_category: 'CTA',
    });

    trackTikTokEvent('ClickButton', {
      content_name: ctaName,
      content_type: 'cta',
    });

    sendTikTokCAPI('ClickButton', { content_name: ctaName });
  }
}
