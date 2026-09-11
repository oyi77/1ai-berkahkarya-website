import { sendMetaCAPI, sendTikTokCAPI } from './capi';
import { trackGAEvent, trackMetaEvent, trackTikTokEvent } from './pixels';
import { addEventToJourney, getReferrerSource, getUserSession } from './session';



// ============================================
// VIEW CONTENT — Page views with attribution
// ============================================

export function trackViewContent(pageName: string, pageType: string) {
  const session = getUserSession();
  const referrerSource = getReferrerSource(session.first_touch.referrer);

  const eventData = {
    content_name: pageName,
    content_type: pageType,
    session_id: session.session_id,
    referrer_source: referrerSource,
    utm_source: session.first_touch.utm_source,
    utm_campaign: session.first_touch.utm_campaign,
    page_view_number: session.page_views,
  };

  addEventToJourney(`ViewContent:${pageName}`);

  // GA4
  trackGAEvent('view_content', eventData);

  // Meta Pixel
  trackMetaEvent('ViewContent', eventData);
  sendMetaCAPI('ViewContent', eventData);

  // TikTok
  trackTikTokEvent('ViewContent', eventData);
  sendTikTokCAPI('ViewContent', eventData);
}

// ============================================
// PRODUCT VIEW — Specific product page view
// ============================================

export function trackProductView(productName: string, price?: string, productId?: string) {
  const session = getUserSession();
  const referrerSource = getReferrerSource(session.first_touch.referrer);

  const eventData = {
    content_name: productName,
    content_ids: [productId || productName],
    content_type: 'product',
    value: price ? parseFloat(price.replace(/\D/g, '')) : 0,
    currency: 'IDR',
    session_id: session.session_id,
    referrer_source: referrerSource,
    utm_source: session.first_touch.utm_source,
  };

  addEventToJourney(`ProductView:${productName}`);

  // GA4
  trackGAEvent('view_item', {
    item_name: productName,
    item_id: productId,
    price: price,
    traffic_source: referrerSource,
  });

  // Meta Pixel
  trackMetaEvent('ViewContent', eventData);
  sendMetaCAPI('ViewContent', eventData);

  // TikTok
  trackTikTokEvent('ViewContent', eventData);
  sendTikTokCAPI('ViewContent', eventData);
}
