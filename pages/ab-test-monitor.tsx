/**
 * A/B Test Monitor Dashboard (Simplified)
 * View real-time analytics from landing page tests
 */

import React, { useEffect, useState } from 'react';

interface AnalyticsEvent {
  timestamp: string;
  event: string;
  lpVariant?: number;
  [key: string]: any;
}

interface EventStats {
  lpViewed: number;
  ctaClicked: number;
  ctr: number;
}

const LP_NAMES: Record<string, Record<number, string>> = {
  legacy: {
    1: 'Konten Ini Bikin Laku',
    2: 'Serius Sesimpel Ini?',
    3: 'Masih Edit Manual?',
    4: 'Tinggal Upload Doang',
    5: 'Ini Cara Baru',
    6: 'Hasil Nyata Seller',
  },
  vilonafx: {
    1: 'AI Swarm (canvas)',
    2: 'Mission Control (pipeline)',
    3: 'Direct (clean-fast)',
  },
};
const SERVICE_VARIANTS: Record<string, number[]> = {
  legacy: [1, 2, 3, 4, 5, 6],
  vilonafx: [1, 2, 3],
  all: [1, 2, 3, 4, 5, 6],
};
const SERVICE_LINKS: Record<string, string> = {
  legacy: '/id/ai-video-studio',
  vilonafx: '/id/lp/vilonafx',
  all: '/id/lp',
};

export default function ABTestMonitor() {
  const [service, setService] = useState<string>('vilonafx');
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [stats, setStats] = useState<Record<number, EventStats>>({});
  const [lastUpdate, setLastUpdate] = useState<string>('');

  const loadAnalytics = () => {
    if (typeof window === 'undefined') return;

    try {
      const allEvents: AnalyticsEvent[] = JSON.parse(window.localStorage.getItem('berkahkarya_events') || '[]');
      const storedEvents = service === 'all' ? allEvents : allEvents.filter((e) => (e.service || 'legacy') === service);
      setEvents(storedEvents);

      const variantStats: Record<number, EventStats> = {};
      for (let i = 1; i <= 6; i++) {
        variantStats[i] = {
          lpViewed: 0,
          ctaClicked: 0,
          ctr: 0,
        };
      }

      storedEvents.forEach((event: AnalyticsEvent) => {
        if (!event.lpVariant) return;
        const v = event.lpVariant;
        if (!variantStats[v]) variantStats[v] = { lpViewed: 0, ctaClicked: 0, ctr: 0 };
        if (event.event === 'lpViewed') variantStats[v].lpViewed += 1;
        if (event.event === 'ctaClicked') variantStats[v].ctaClicked += 1;
      });

      Object.keys(variantStats).forEach((key) => {
        const v = parseInt(key);
        const stat = variantStats[v];
        stat.ctr = stat.lpViewed > 0 ? (stat.ctaClicked / stat.lpViewed) * 100 : 0;
      });

      setStats(variantStats);
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (error) {
      console.error('Failed to load analytics', error);
    }
  };

  useEffect(() => {
    loadAnalytics();
    const interval = setInterval(loadAnalytics, 3000);
    return () => clearInterval(interval);
  }, [service]);

  const totalViews = Object.values(stats).reduce((sum, s) => sum + s.lpViewed, 0);
  const totalClicks = Object.values(stats).reduce((sum, s) => sum + s.ctaClicked, 0);
  const overallCtr = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(2) : '0.00';

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f1e', color: '#fff', padding: '40px 20px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1>📊 A/B Test Monitor</h1>
        <p style={{ color: '#aaa' }}>Real-time analytics for landing page tests (localStorage)</p>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#aaa', fontSize: '12px', marginRight: '8px' }}>Service:</label>
          <select value={service} onChange={(e) => setService(e.target.value)} style={{ background: '#1a1a2e', color: '#fff', padding: '6px 10px', borderRadius: '6px', border: '1px solid #333' }}>
            <option value="vilonafx">vilonafx</option>
            <option value="legacy">legacy (tanpa service)</option>
            <option value="all">all</option>
          </select>
        </div>
        <p style={{ color: '#888', fontSize: '12px' }}>Last update: {lastUpdate} | Events: {events.length}</p>

        <div style={{ marginBottom: '30px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
          <div style={{ background: '#1a1a2e', padding: '15px', borderRadius: '8px' }}>
            <div style={{ color: '#aaa', fontSize: '12px' }}>Total Views</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{totalViews}</div>
          </div>
          <div style={{ background: '#1a1a2e', padding: '15px', borderRadius: '8px' }}>
            <div style={{ color: '#aaa', fontSize: '12px' }}>Total Clicks</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{totalClicks}</div>
          </div>
          <div style={{ background: '#1a1a2e', padding: '15px', borderRadius: '8px' }}>
            <div style={{ color: '#aaa', fontSize: '12px' }}>Overall CTR</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10b981' }}>{overallCtr}%</div>
          </div>
          <div style={{ background: '#1a1a2e', padding: '15px', borderRadius: '8px' }}>
            <div style={{ color: '#aaa', fontSize: '12px' }}>Raw Events</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{events.length}</div>
          </div>
        </div>

        <h2>Performance by Variant</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
          {(SERVICE_VARIANTS[service] || [1, 2, 3]).map((variant) => {
            const s = stats[variant] || { lpViewed: 0, ctaClicked: 0, ctr: 0 };
            const names = LP_NAMES[service] || LP_NAMES.legacy;
            return (
              <div key={variant} style={{ background: '#1a1a2e', padding: '15px', borderRadius: '8px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <strong>LP{variant}: {names[variant] || ('Variant ' + variant)}</strong>
                  <br />
                  <a href={`${SERVICE_LINKS[service] || SERVICE_LINKS.legacy}/${variant}/`} style={{ color: '#3b82f6', fontSize: '12px', textDecoration: 'none' }}>
                    View →
                  </a>
                </div>
                <div style={{ fontSize: '14px', color: '#aaa' }}>
                  Views: {s.lpViewed} | Clicks: {s.ctaClicked}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#10b981', marginTop: '5px' }}>
                  CTR: {s.ctr.toFixed(2)}%
                </div>
              </div>
            );
          })}
        </div>

        <h2>Recent Events</h2>
        <div style={{ background: '#0a0a14', padding: '15px', borderRadius: '8px', fontSize: '12px', maxHeight: '400px', overflowY: 'auto' }}>
          {events.slice().reverse().slice(0, 30).map((event, idx) => (
            <div key={idx} style={{ padding: '5px 0', borderBottom: '1px solid #333', color: '#aaa' }}>
              {new Date(event.timestamp).toLocaleTimeString()} | {event.event} | {event.service || 'legacy'}/LP{event.lpVariant} | {event.placement || ''}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px', padding: '15px', background: '#1a2a2e', borderRadius: '8px', fontSize: '12px', color: '#888' }}>
          💡 Tip: Check localStorage via DevTools for raw event data
        </div>
      </div>
    </div>
  );
}
