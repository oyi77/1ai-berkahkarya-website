import { useState, useEffect, useCallback } from 'react';
import styles from '@/styles/JasaOpenClaw.module.css';

type Locale = 'id' | 'en';

export interface JasaOpenClawContent {
  heroTag: string;
  heroTitle: string;
  heroTitleEm: string;
  heroSub: string;
  heroCta: string;
  heroCtaLink: string;
  heroVisualLabel: string;
  agentChips: { icon: string; name: string; role: string; status: string; }[];

  aboutLabel: string;
  aboutTitle: string;
  aboutTitleEm: string;
  aboutText: string[];
  highlights: { icon: string; title: string; desc: string; }[];

  divisionsLabel: string;
  divisionsTitle: string;
  divisionsTitleEm: string;
  divisionsSub: string;
  divisions: {
    emoji: string; title: string; tagline: string;
    agents: { name: string; desc: string; }[];
  }[];
  divisionsNote: string;

  processLabel: string;
  processTitle: string;
  processTitleEm: string;
  steps: { num: string; icon: string; title: string; desc: string; }[];

  usecaseLabel: string;
  usecaseTitle: string;
  usecaseTitleEm: string;
  useCases: { icon: string; title: string; desc: string; }[];

  ctaLabel: string;
  ctaTitle: string;
  ctaTitleEm: string;
  ctaSub: string;
  ctaBtn: string;
  ctaBtnLink: string;
  ctaSecondary: string;
  ctaNote: string;
}

interface Props {
  locale: Locale;
  content: JasaOpenClawContent;
}

export default function JasaOpenClawPage({ locale, content }: Props) {
  const isIndonesian = locale === 'id';


  // Scroll depth tracking
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const thresholds = [25, 50, 75, 100];
    let fired = new Set<number>();
    const handler = () => {
      const scrollPct = Math.round(
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
      );
      thresholds.forEach(t => {
        if (scrollPct >= t && !fired.has(t)) {
          fired.add(t);
          try {
            if (window.gtag) window.gtag('event', 'scroll_depth', { event_category: 'engagement', event_label: `${t}%` });
            if (window.fbq) window.fbq('track', 'ScrollDepth', { value: t, currency: 'IDR' });
            if (window.ttq) window.ttq.track('ScrollDepth', { content_name: `${t}%` });
          } catch {}
        }
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Page view tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        if (window.fbq) window.fbq('track', 'ViewContent', {
          content_name: 'jasa-openclaw-landing', content_category: 'landing_page',
          value: 1, currency: 'IDR',
        });
        if (window.gtag) window.gtag('event', 'page_view', {
          page_title: document.title, page_location: window.location.href,
        });
        if (window.ttq) window.ttq.track('ViewContent', { content_name: 'jasa-openclaw-landing' });
      } catch {}
    }
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const trackWhatsApp = (label: string) => {
    try {
      if (window.fbq) window.fbq('track', 'Contact', {
        content_name: label, content_category: 'whatsapp_cta', value: 1, currency: 'IDR',
      });
      if (window.gtag) window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement', event_label: label, value: 1,
      });
      if (window.ttq) window.ttq.track('Contact', { content_name: label });
    } catch {}
  };

  const handleWa = useCallback((label: string) => {
    trackWhatsApp(label);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroTag}><span />{content.heroTag}</div>
            <h1>{content.heroTitle} <em>{content.heroTitleEm}</em></h1>
            <p className={styles.heroSub}>{content.heroSub}</p>
            <div className={styles.heroBtns}>
              <a href={content.heroCtaLink} className="btn-primary" target="_blank" rel="noopener noreferrer" onClick={() => handleWa('hero_cta')}>
                {content.heroCta}
              </a>
              <button className="btn-secondary" onClick={() => scrollTo('divisi')}>
                {isIndonesian ? 'Lihat Divisi \u2193' : 'View Divisions \u2193'}
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualLabel}>{content.heroVisualLabel}</div>
            {content.agentChips.map((ac, i) => (
              <div key={i} className={styles.agentChip}>
                <div className={styles.agentIcon}>{ac.icon}</div>
                <div className={styles.agentInfo}>
                  <div className={styles.agentName}>{ac.name}</div>
                  <div className={styles.agentRole}>{ac.role}</div>
                </div>
                <div className={styles.agentStatus}>{ac.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <span className={styles.secLabel}>{content.aboutLabel}</span>
              <h2>{content.aboutTitle} <em>{content.aboutTitleEm}</em></h2>
              {content.aboutText.map((t, i) => <p key={i}>{t}</p>)}
            </div>
            <div className={styles.highlights}>
              {content.highlights.map((h, i) => (
                <div key={i} className={styles.hl}>
                  <div className={styles.hlIcon}>{h.icon}</div>
                  <div className={styles.hlBody}>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className={styles.divisions} id="divisi">
        <div className={styles.divisionsInner}>
          <div className={styles.sectionHead}>
            <span className={styles.secLabel}>{content.divisionsLabel}</span>
            <h2>{content.divisionsTitle} <em>{content.divisionsTitleEm}</em></h2>
            <p>{content.divisionsSub}</p>
          </div>
          <div className={styles.divGrid}>
            {content.divisions.map((div, i) => (
              <div key={i} className={styles.divCard}>
                <div className={styles.divHead}>
                  <span className={styles.divEmoji}>{div.emoji}</span>
                  <h3 className={styles.divTitle}>{div.title}</h3>
                  <div className={styles.divTagline}>{div.tagline}</div>
                </div>
                <div className={styles.agentsList}>
                  {div.agents.map((ag, j) => (
                    <div key={j} className={styles.ag}>
                      <div className={styles.agDot} />
                      <div>
                        <div className={styles.agName}>{ag.name}</div>
                        <div className={styles.agDesc}>{ag.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className={styles.divNote}>{content.divisionsNote}</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process} id="proses">
        <div className={styles.processInner}>
          <div className={styles.sectionHead}>
            <span className={styles.secLabel}>{content.processLabel}</span>
            <h2>{content.processTitle} <em>{content.processTitleEm}</em></h2>
          </div>
          <div className={styles.steps}>
            {content.steps.map((s, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <span className={styles.stepIcon}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className={styles.usecases}>
        <div className={styles.usecasesInner}>
          <div className={styles.sectionHead}>
            <span className={styles.secLabel}>{content.usecaseLabel}</span>
            <h2>{content.usecaseTitle} <em>{content.usecaseTitleEm}</em></h2>
          </div>
          <div className={styles.ucGrid}>
            {content.useCases.map((uc, i) => (
              <div key={i} className={styles.uc}>
                <span className={styles.ucIcon}>{uc.icon}</span>
                <h4>{uc.title}</h4>
                <p>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <span className={styles.secLabel} style={{ display: 'block', textAlign: 'center' }}>{content.ctaLabel}</span>
          <h2>{content.ctaTitle} <em>{content.ctaTitleEm}</em></h2>
          <p>{content.ctaSub}</p>
          <div className={styles.ctaBtns}>
            <a href={content.ctaBtnLink} className="btn-primary" target="_blank" rel="noopener noreferrer" onClick={() => handleWa('cta_final')}>
              {content.ctaBtn}
            </a>
            <a href={content.ctaSecondary} className="btn-secondary">
              {isIndonesian ? 'Lihat Semua Layanan' : 'View All Services'}
            </a>
          </div>
          <p className={styles.ctaNote}>{content.ctaNote}</p>
        </div>
      </section>
    </>
  );
}
