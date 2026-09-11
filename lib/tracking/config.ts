


// ============================================
// TRACKING CONFIGURATION — EDIT IDS HERE
// ============================================

export const TRACKING = {
  // Google Analytics 4
  GA_ID: 'G-V9C14XZ9SG',

  // Meta (Facebook) Pixel
  META_PIXEL_ID: '771021905629860',

  // TikTok Pixel
  TIKTOK_PIXEL_ID: 'D6IA84RC77UCTB9KG9OG',

  // TikTok Events API (server-side) — supplied via TRACKING_TIKTOK_EVENTS_API_TOKEN env var
  TIKTOK_EVENTS_API_TOKEN: process.env.TRACKING_TIKTOK_EVENTS_API_TOKEN || '',
  // Meta Conversions API (server-side) — supplied via TRACKING_META_CAPI_TOKEN env var
  META_CAPI_TOKEN: process.env.TRACKING_META_CAPI_TOKEN || '',
  // Pinterest Tag (conversion tracking) — empty = tag disabled.
  // Set a real tag ID to enable; avoid placeholder IDs that fire junk events.
  PINTEREST_TAG_ID: '',

  // Pinterest domain verification
  PINTEREST_VERIFICATION: '9212df9ddce352a5ada074e7d33a9e77',
} as const;
// Client-side CAPI requires a server to proxy /api/* — static exports
// (CF Pages, Netlify static) cannot serve API routes, and the calls would
// 405 on every page load. GTM server-side (stape) covers server events there.
// Enable only when deploying to a host that serves Next.js API routes.
export const CLIENT_CAPI_ENABLED = process.env.NEXT_PUBLIC_ENABLE_CLIENT_CAPI === 'true';

// ============================================
// USER SESSION & REFERRER TRACKING
// ============================================

export interface UserSession {
  session_id: string;
  first_touch: {
    referrer: string;
    landing_page: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
    timestamp: number;
  };
  last_touch: {
    referrer: string;
    page: string;
    timestamp: number;
  };
  page_views: number;
  events: string[];
}
/** Generate unique session ID */
export function generateSessionId(): string {
  return 'sess_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
}
