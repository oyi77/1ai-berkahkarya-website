import { TRACKING } from './config';
import { trackGAEvent, trackMetaCustomEvent } from './pixels';
import { addEventToJourney, getUserSession } from './session';



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
// ENGAGEMENT SCORE — Calculate user engagement
// ============================================

export function calculateEngagementScore(): number {
  const session = getUserSession();
  let score = 0;

  // Page views (max 20 points)
  score += Math.min(session.page_views * 2, 20);

  // Events (max 40 points)
  const eventTypes = new Set(session.events.map(e => e.split(':')[0]));
  
  if (eventTypes.has('AddToCart')) score += 15;
  if (eventTypes.has('InitiateCheckout')) score += 10;
  if (eventTypes.has('WhatsApp')) score += 10;
  if (eventTypes.has('FormSubmit')) score += 10;
  if (eventTypes.has('VideoComplete')) score += 5;
  if (eventTypes.has('Scroll')) score += 5;
  if (eventTypes.has('TimeEngaged')) score += 5;
  if (eventTypes.has('PricingSelect')) score += 10;
  if (eventTypes.has('Download')) score += 5;

  // Time since first touch (recency bonus, max 20 points)
  const hoursSinceFirst = (Date.now() - session.first_touch.timestamp) / (1000 * 60 * 60);
  if (hoursSinceFirst < 1) score += 20;
  else if (hoursSinceFirst < 24) score += 15;
  else if (hoursSinceFirst < 72) score += 10;
  else if (hoursSinceFirst < 168) score += 5;

  return Math.min(score, 100);
}

/**
 * Get engagement tier based on score
 */
export function getEngagementTier(): 'cold' | 'warm' | 'hot' | 'burning' {
  const score = calculateEngagementScore();
  if (score >= 80) return 'burning';
  if (score >= 50) return 'hot';
  if (score >= 25) return 'warm';
  return 'cold';
}
