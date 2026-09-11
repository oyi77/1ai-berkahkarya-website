import { CLIENT_CAPI_ENABLED, TRACKING } from './config';
import { getReferrerSource, getUserSession } from './session';



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
