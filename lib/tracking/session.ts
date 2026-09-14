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

/** Get or create user session with referrer data */
export function getUserSession(): UserSession {
  if (typeof window === 'undefined') {
    return {
      session_id: 'server',
      first_touch: { referrer: '', landing_page: '', timestamp: 0 },
      last_touch: { referrer: '', page: '', timestamp: 0 },
      page_views: 0,
      events: [],
    };
  }

  const stored = localStorage.getItem('bk_user_session');
  const urlParams = new URLSearchParams(window.location.search);
  const referrer = document.referrer || 'direct';
  const currentPage = window.location.pathname;
  
  if (stored) {
    const session: UserSession = JSON.parse(stored);
    // Update last touch
    session.last_touch = {
      referrer: referrer,
      page: currentPage,
      timestamp: Date.now(),
    };
    session.page_views++;
    localStorage.setItem('bk_user_session', JSON.stringify(session));
    return session;
  }

  // New session
  const newSession: UserSession = {
    session_id: generateSessionId(),
    first_touch: {
      referrer: referrer,
      landing_page: currentPage,
      utm_source: urlParams.get('utm_source') || undefined,
      utm_medium: urlParams.get('utm_medium') || undefined,
      utm_campaign: urlParams.get('utm_campaign') || undefined,
      utm_content: urlParams.get('utm_content') || undefined,
      utm_term: urlParams.get('utm_term') || undefined,
      timestamp: Date.now(),
    },
    last_touch: {
      referrer: referrer,
      page: currentPage,
      timestamp: Date.now(),
    },
    page_views: 1,
    events: [],
  };

  localStorage.setItem('bk_user_session', JSON.stringify(newSession));
  return newSession;
}

/** Parse referrer to get source category */
export function getReferrerSource(referrer: string): string {
  if (!referrer || referrer === 'direct') return 'direct';
  
  const domain = new URL(referrer).hostname.toLowerCase();
  
  // Social Media
  if (domain.includes('facebook') || domain.includes('fb.com')) return 'facebook';
  if (domain.includes('instagram')) return 'instagram';
  if (domain.includes('tiktok')) return 'tiktok';
  if (domain.includes('twitter') || domain.includes('x.com')) return 'twitter';
  if (domain.includes('linkedin')) return 'linkedin';
  if (domain.includes('youtube')) return 'youtube';
  if (domain.includes('whatsapp') || domain.includes('wa.me')) return 'whatsapp';
  if (domain.includes('telegram') || domain.includes('t.me')) return 'telegram';
  
  // Search Engines
  if (domain.includes('google')) return 'google_organic';
  if (domain.includes('bing')) return 'bing_organic';
  if (domain.includes('yahoo')) return 'yahoo_organic';
  if (domain.includes('duckduckgo')) return 'duckduckgo';
  
  // E-commerce
  if (domain.includes('shopee')) return 'shopee';
  if (domain.includes('tokopedia')) return 'tokopedia';
  if (domain.includes('lazada')) return 'lazada';
  
  // Internal
  if (domain.includes('berkahkarya')) return 'internal';
  if (domain.includes('aitradepulse')) return 'saas_app';
  
  return 'referral_' + domain.split('.')[0];
}

/** Add event to user journey */
export function addEventToJourney(eventName: string) {
  if (typeof window === 'undefined') return;
  
  const stored = localStorage.getItem('bk_user_session');
  if (stored) {
    const session: UserSession = JSON.parse(stored);
    session.events.push(`${eventName}:${Date.now()}`);
    localStorage.setItem('bk_user_session', JSON.stringify(session));
  }
}
