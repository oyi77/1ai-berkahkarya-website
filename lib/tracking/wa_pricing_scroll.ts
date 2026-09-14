import { TRACKING } from './config'
import { getUserSession, addEventToJourney, getReferrerSource } from './session'
import { trackAddToCart, trackInitiateCheckout, trackPurchase, trackCTAClick } from './funnel'
import { trackGAEvent, trackMetaEvent, trackMetaCustomEvent, sendMetaCAPI, trackTikTokEvent, sendTikTokCAPI } from './pixels'

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

// ============================================
// SCROLL DEPTH TRACKING
// ============================================

let scrollMilestones: number[] = [];

/**
 * Initialize scroll depth tracking
 * Call this in useEffect on page mount
 */
export function initScrollTracking() {
  if (typeof window === 'undefined') return;

  scrollMilestones = [];
  const thresholds = [25, 50, 75, 90, 100];

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    thresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !scrollMilestones.includes(threshold)) {
        scrollMilestones.push(threshold);
        trackScrollDepth(threshold);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Return cleanup function
  return () => window.removeEventListener('scroll', handleScroll);
}

function trackScrollDepth(percent: number) {
  const session = getUserSession();
  const pageName = window.location.pathname;

  addEventToJourney(`Scroll:${percent}%`);

  // GA4
  trackGAEvent('scroll_depth', {
    percent: percent,
    page: pageName,
    session_id: session.session_id,
  });

  // Meta custom event (only at key milestones)
  if (percent >= 75) {
    trackMetaCustomEvent('HighEngagement', {
      scroll_depth: percent,
      page: pageName,
    });
  }

  console.log(`[Tracking] Scroll Depth: ${percent}%`);
}

// ============================================
// TIME ON PAGE TRACKING
// ============================================

let pageLoadTime: number = 0;
let timeTrackingInterval: NodeJS.Timeout | null = null;

/**
 * Initialize time on page tracking
 */
export function initTimeTracking() {
  if (typeof window === 'undefined') return;

  pageLoadTime = Date.now();
  const milestones = [30, 60, 120, 300]; // seconds
  let trackedMilestones: number[] = [];

  timeTrackingInterval = setInterval(() => {
    const secondsOnPage = Math.floor((Date.now() - pageLoadTime) / 1000);
    
    milestones.forEach(milestone => {
      if (secondsOnPage >= milestone && !trackedMilestones.includes(milestone)) {
        trackedMilestones.push(milestone);
        trackTimeOnPage(milestone);
      }
    });
  }, 5000);

  // Track on page unload
  const handleUnload = () => {
    const totalSeconds = Math.floor((Date.now() - pageLoadTime) / 1000);
    trackTimeOnPage(totalSeconds, true);
  };

  window.addEventListener('beforeunload', handleUnload);

  return () => {
    if (timeTrackingInterval) clearInterval(timeTrackingInterval);
    window.removeEventListener('beforeunload', handleUnload);
  };
}

function trackTimeOnPage(seconds: number, isFinal = false) {
  const session = getUserSession();
  const pageName = window.location.pathname;

  // GA4
  trackGAEvent('time_on_page', {
    seconds: seconds,
    page: pageName,
    is_final: isFinal,
    session_id: session.session_id,
  });

  // High engagement (2+ minutes)
  if (seconds >= 120 && !isFinal) {
    trackMetaCustomEvent('HighEngagement', {
      engagement_type: 'time',
      seconds: seconds,
      page: pageName,
    });
    addEventToJourney(`TimeEngaged:${seconds}s`);
  }

  console.log(`[Tracking] Time on Page: ${seconds}s${isFinal ? ' (final)' : ''}`);
}

// ============================================
