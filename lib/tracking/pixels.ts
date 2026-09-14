import { TRACKING, CLIENT_CAPI_ENABLED } from './config'
import { getUserSession, getReferrerSource } from './session'

// ============================================
// META PIXEL HELPERS
// ============================================

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
    gtag: (...args: unknown[]) => void;
    ttq: {
      track: (event: string, data?: Record<string, unknown>) => void;
      page: () => void;
      identify: (data: Record<string, unknown>) => void;
    };
    pintrk: (...args: unknown[]) => void;
  }
}

/** Track Meta Pixel standard event */
export function trackMetaEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    if (data) {
      window.fbq('track', event, data);
    } else {
      window.fbq('track', event);
    }
  }
}

/** Track Meta Pixel custom event */
export function trackMetaCustomEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    if (data) {
      window.fbq('trackCustom', event, data);
    } else {
      window.fbq('trackCustom', event);
    }
  }
}

// ============================================
// GA4 HELPERS
// ============================================

/** Track GA4 event */
export function trackGAEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, params);
  }
}

// ============================================
// TIKTOK PIXEL HELPERS
// ============================================

/** Track TikTok Pixel event */
export function trackTikTokEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.ttq) {
    if (data) {
      window.ttq.track(event, data);
    } else {
      window.ttq.track(event);
    }
  }
}

// ============================================
// SERVER-SIDE APIS (CAPI)
// ============================================

/** Send event via TikTok Events API (server-side) */
export function sendTikTokCAPI(eventName: string, data?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !TRACKING.TIKTOK_PIXEL_ID || !CLIENT_CAPI_ENABLED) return;

  const session = getUserSession();
  const payload = {
    event_name: eventName,
    event_source_url: window.location.href,
    user_agent: navigator.userAgent,
    custom_data: {
      ...data,
      session_id: session.session_id,
      referrer_source: getReferrerSource(session.first_touch.referrer),
      utm_source: session.first_touch.utm_source,
      utm_campaign: session.first_touch.utm_campaign,
    },
  };

  fetch('/api/tiktok-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

/** Send event via Meta Conversions API (server-side) */
export function sendMetaCAPI(eventName: string, customData?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !TRACKING.META_PIXEL_ID || !CLIENT_CAPI_ENABLED) return;

  const getCookie = (name: string) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : undefined;
  };

  const session = getUserSession();
  const payload = {
    event_name: eventName,
    event_source_url: window.location.href,
    user_agent: navigator.userAgent,
    fbc: getCookie('_fbc'),
    fbp: getCookie('_fbp'),
    custom_data: {
      ...customData,
      session_id: session.session_id,
      referrer_source: getReferrerSource(session.first_touch.referrer),
      utm_source: session.first_touch.utm_source,
      utm_medium: session.first_touch.utm_medium,
      utm_campaign: session.first_touch.utm_campaign,
      landing_page: session.first_touch.landing_page,
      page_views: session.page_views,
    },
  };

  fetch('/api/meta-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

// ============================================
