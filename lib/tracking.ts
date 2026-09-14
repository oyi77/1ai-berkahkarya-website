// Barrel: tracking split into lib/tracking/* modules (800-line rule)

export { TRACKING } from './tracking/config'
export type { UserSession } from './tracking/session'
export { addEventToJourney, generateSessionId, getReferrerSource, getUserSession } from './tracking/session'
export { sendMetaCAPI, sendTikTokCAPI, trackGAEvent, trackMetaCustomEvent, trackMetaEvent, trackTikTokEvent } from './tracking/pixels'
export { trackAddToCart, trackCTAClick, trackInitiateCheckout, trackProductView, trackPurchase, trackViewContent } from './tracking/funnel'
export type { CustomerLTV } from './tracking/ltv'
export { getAttributionReport, getCustomerLTV, recordPurchaseForLTV } from './tracking/ltv'
export { initScrollTracking, initTimeTracking, trackPricingSelect, trackPricingView, trackWhatsAppClick } from './tracking/wa_pricing_scroll'
export { calculateEngagementScore, getEngagementTier, trackDownload, trackError, trackFormStart, trackFormSubmit, trackSearch, trackSocialShare, trackVideoComplete, trackVideoPlay } from './tracking/content'
