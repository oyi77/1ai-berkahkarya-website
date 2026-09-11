import { sendMetaCAPI, sendTikTokCAPI } from './capi';
import { TRACKING } from './config';
import { trackGAEvent, trackMetaCustomEvent, trackMetaEvent, trackTikTokEvent } from './pixels';
import { addEventToJourney, getReferrerSource, getUserSession } from './session';



// ============================================
// VIDEO TRACKING
// ============================================

/**
 * Track video play events
 */
export function trackVideoPlay(params: {
  video_title: string;
  video_id?: string;
  video_duration?: number;
  video_position?: number;  // percentage
}) {
  const session = getUserSession();

  addEventToJourney(`VideoPlay:${params.video_title}`);

  // GA4
  trackGAEvent('video_start', {
    video_title: params.video_title,
    video_id: params.video_id,
  });

  // Meta
  trackMetaCustomEvent('VideoPlay', {
    content_name: params.video_title,
    content_id: params.video_id,
  });

  // TikTok
  trackTikTokEvent('ViewContent', {
    content_type: 'video',
    content_name: params.video_title,
  });

  console.log('[Tracking] Video Play:', params);
}

/**
 * Track video completion
 */
export function trackVideoComplete(params: {
  video_title: string;
  video_id?: string;
  watch_time_seconds: number;
}) {
  const session = getUserSession();

  addEventToJourney(`VideoComplete:${params.video_title}`);

  // GA4
  trackGAEvent('video_complete', {
    video_title: params.video_title,
    video_id: params.video_id,
    watch_time: params.watch_time_seconds,
  });

  // Meta - high intent signal
  trackMetaEvent('Lead', {
    content_name: `Video Completed: ${params.video_title}`,
    content_category: 'video_engagement',
  });

  console.log('[Tracking] Video Complete:', params);
}

// ============================================
// FORM TRACKING
// ============================================

/**
 * Track form interactions
 */
export function trackFormStart(formName: string) {
  const session = getUserSession();

  addEventToJourney(`FormStart:${formName}`);

  trackGAEvent('form_start', {
    form_name: formName,
    session_id: session.session_id,
  });

  console.log('[Tracking] Form Start:', formName);
}

export function trackFormSubmit(params: {
  form_name: string;
  form_type: 'contact' | 'signup' | 'inquiry' | 'order' | 'other';
  email?: string;  // Will be hashed
  phone?: string;  // Will be hashed
  value?: number;
}) {
  const session = getUserSession();
  const referrerSource = getReferrerSource(session.first_touch.referrer);

  addEventToJourney(`FormSubmit:${params.form_name}`);

  // GA4
  trackGAEvent('form_submit', {
    form_name: params.form_name,
    form_type: params.form_type,
    traffic_source: referrerSource,
  });

  // Meta - Lead event
  trackMetaEvent('Lead', {
    content_name: params.form_name,
    content_category: params.form_type,
    value: params.value,
    currency: 'IDR',
  });

  sendMetaCAPI('Lead', {
    content_name: params.form_name,
    content_category: params.form_type,
    // Note: email/phone should be hashed on server-side for CAPI
  });

  // TikTok
  trackTikTokEvent('SubmitForm', {
    content_name: params.form_name,
    content_type: params.form_type,
  });

  sendTikTokCAPI('SubmitForm', {
    content_name: params.form_name,
  });

  console.log('[Tracking] Form Submit:', params);
}

// ============================================
// SOCIAL SHARE TRACKING
// ============================================

export function trackSocialShare(params: {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'whatsapp' | 'telegram' | 'copy_link' | 'other';
  content_name: string;
  content_url?: string;
}) {
  const session = getUserSession();

  addEventToJourney(`Share:${params.platform}`);

  // GA4
  trackGAEvent('share', {
    method: params.platform,
    content_type: 'page',
    content_id: params.content_name,
  });

  // Meta
  trackMetaCustomEvent('Share', {
    platform: params.platform,
    content_name: params.content_name,
  });

  console.log('[Tracking] Social Share:', params);
}

// ============================================
// DOWNLOAD TRACKING
// ============================================

export function trackDownload(params: {
  file_name: string;
  file_type: string;      // e.g., "pdf", "video", "image"
  file_category?: string; // e.g., "ebook", "guide", "template"
}) {
  const session = getUserSession();
  const referrerSource = getReferrerSource(session.first_touch.referrer);

  addEventToJourney(`Download:${params.file_name}`);

  // GA4
  trackGAEvent('file_download', {
    file_name: params.file_name,
    file_extension: params.file_type,
    file_category: params.file_category,
    traffic_source: referrerSource,
  });

  // Meta - Lead for lead magnet downloads
  if (params.file_category === 'ebook' || params.file_category === 'guide') {
    trackMetaEvent('Lead', {
      content_name: params.file_name,
      content_category: 'download',
    });
  }

  console.log('[Tracking] Download:', params);
}

// ============================================
// SEARCH TRACKING
// ============================================

export function trackSearch(params: {
  search_term: string;
  results_count?: number;
  search_type?: 'product' | 'content' | 'global';
}) {
  const session = getUserSession();

  addEventToJourney(`Search:${params.search_term}`);

  // GA4
  trackGAEvent('search', {
    search_term: params.search_term,
    results_count: params.results_count,
  });

  // Meta
  trackMetaEvent('Search', {
    search_string: params.search_term,
    content_type: params.search_type,
  });

  // TikTok
  trackTikTokEvent('Search', {
    query: params.search_term,
  });

  console.log('[Tracking] Search:', params);
}

// ============================================
// ERROR TRACKING
// ============================================

export function trackError(params: {
  error_type: 'page_not_found' | 'api_error' | 'payment_failed' | 'form_error' | 'other';
  error_message: string;
  error_page?: string;
}) {
  const session = getUserSession();

  addEventToJourney(`Error:${params.error_type}`);

  // GA4
  trackGAEvent('error', {
    error_type: params.error_type,
    error_message: params.error_message,
    page: params.error_page || window.location.pathname,
    session_id: session.session_id,
  });

  console.log('[Tracking] Error:', params);
}
