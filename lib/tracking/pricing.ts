import { sendMetaCAPI, sendTikTokCAPI } from './capi';
import { TRACKING } from './config';
import { trackAddToCart } from './ecommerce';
import { trackGAEvent, trackMetaEvent, trackTikTokEvent } from './pixels';
import { addEventToJourney, getReferrerSource, getUserSession } from './session';



// ============================================
// WHATSAPP TRACKING — Specific WA link tracking
// ============================================

/**
 * Track WhatsApp click with full attribution
 * Use: trackWhatsAppClick('Sales Inquiry', '6281234567890', 'Halo, saya mau tanya...')
 */
export function trackWhatsAppClick(params: {
  intent: string;           // e.g., "Sales Inquiry", "Support", "Order"
  phone_number: string;     // e.g., "6281234567890"
  message?: string;         // Pre-filled message
  product_name?: string;    // e.g., "AI Video Studio Growth"
  product_value?: number;   // e.g., 149000
}) {
  const session = getUserSession();
  const referrerSource = getReferrerSource(session.first_touch.referrer);
  
  const waUrl = `https://wa.me/${params.phone_number}${params.message ? '?text=' + encodeURIComponent(params.message) : ''}`;
  
  const eventData = {
    content_name: params.intent,
    content_type: 'whatsapp_inquiry',
    content_ids: [params.product_name || params.intent],
    value: params.product_value || 0,
    currency: 'IDR',
    // Attribution
    destination: 'whatsapp',
    destination_url: waUrl,
    phone_number: params.phone_number,
    intent_type: params.intent,
    product_name: params.product_name,
    session_id: session.session_id,
    referrer_source: referrerSource,
    utm_source: session.first_touch.utm_source,
    utm_campaign: session.first_touch.utm_campaign,
    landing_page: session.first_touch.landing_page,
    page_views_before: session.page_views,
  };

  addEventToJourney(`WhatsApp:${params.intent}`);

  // GA4
  trackGAEvent('contact', {
    method: 'whatsapp',
    intent: params.intent,
    product: params.product_name,
    value: params.product_value,
    traffic_source: referrerSource,
  });

  // Also track as AddToCart for funnel
  trackMetaEvent('AddToCart', eventData);
  sendMetaCAPI('AddToCart', eventData);

  // Lead event for WhatsApp
  trackMetaEvent('Lead', {
    content_name: `WA: ${params.intent}`,
    content_category: 'WhatsApp',
    value: params.product_value,
  });
  sendMetaCAPI('Lead', {
    content_name: `WA: ${params.intent}`,
    content_category: 'WhatsApp',
  });

  // TikTok
  trackTikTokEvent('Contact', eventData);
  sendTikTokCAPI('Contact', eventData);

  console.log('[Tracking] WhatsApp Click:', eventData);
}

// ============================================
// PRICING PAGE TRACKING
// ============================================

/**
 * Track pricing page view
 */
export function trackPricingView(pricingTier?: string) {
  const session = getUserSession();
  const referrerSource = getReferrerSource(session.first_touch.referrer);

  const eventData = {
    content_name: 'Pricing Page',
    content_type: 'pricing',
    content_category: pricingTier || 'all_tiers',
    session_id: session.session_id,
    referrer_source: referrerSource,
    utm_source: session.first_touch.utm_source,
  };

  addEventToJourney('PricingView');

  // GA4
  trackGAEvent('view_pricing', {
    tier: pricingTier,
    traffic_source: referrerSource,
  });

  // Meta
  trackMetaEvent('ViewContent', {
    ...eventData,
    content_type: 'pricing_page',
  });

  console.log('[Tracking] Pricing View:', eventData);
}

/**
 * Track pricing tier selection (hover/click)
 */
export function trackPricingSelect(params: {
  tier_name: string;        // e.g., "Starter", "Growth", "Kingdom"
  price: number;            // e.g., 49000, 149000, 499000
  currency?: string;
  action: 'hover' | 'click' | 'select';
}) {
  const session = getUserSession();
  const referrerSource = getReferrerSource(session.first_touch.referrer);

  const eventData = {
    content_name: params.tier_name,
    content_type: 'pricing_tier',
    value: params.price,
    currency: params.currency || 'IDR',
    action: params.action,
    session_id: session.session_id,
    referrer_source: referrerSource,
  };

  if (params.action === 'click' || params.action === 'select') {
    addEventToJourney(`PricingSelect:${params.tier_name}`);

    // Track as AddToCart when they click a tier
    trackAddToCart({
      content_name: `Plan: ${params.tier_name}`,
      content_id: params.tier_name.toLowerCase(),
      content_type: 'subscription',
      value: params.price,
      currency: params.currency || 'IDR',
      destination: 'pricing_select',
      destination_url: window.location.href,
    });
  }

  // GA4
  trackGAEvent('select_pricing', {
    tier: params.tier_name,
    price: params.price,
    action: params.action,
    traffic_source: referrerSource,
  });

  console.log('[Tracking] Pricing Select:', eventData);
}
