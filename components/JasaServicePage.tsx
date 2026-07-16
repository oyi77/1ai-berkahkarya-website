import { useState, useEffect, useCallback } from 'react';
import styles from '@/styles/JasaService.module.css';

type Locale = 'id' | 'en';

export interface JasaServiceContent {
  heroTag: string;
  heroTitle: string;
  heroTitleEm: string;
  heroSub: string;
  heroCta: string;
  heroCtaLink: string;

  problemLabel: string;
  problemTitle: string;
  problemTitleEm: string;
  problems: { icon: string; title: string; desc: string; }[];

  delivLabel: string;
  delivTitle: string;
  delivTitleEm: string;
  deliverables: { icon: string; title: string; desc: string; }[];

  processLabel: string;
  processTitle: string;
  processTitleEm: string;
  processSteps: { num: string; title: string; desc: string; }[];

  benefitLabel: string;
  benefitTitle: string;
  benefitTitleEm: string;
  benefits: { icon: string; title: string; desc: string; }[];

  pricingLabel: string;
  pricingTitle: string;
  pricingTitleEm: string;
  pricingSub: string;
  pricingNote: string;
  plans: {
    name: string;
    price: string;
    unit: string;
    desc: string;
    items: string[];
    highlight: boolean;
    cta: string;
    ctaLink: string;
  }[];

  usecaseLabel: string;
  usecaseTitle: string;
  usecaseTitleEm: string;
  useCases: { title: string; desc: string; }[];

  ctaLabel: string;
  ctaTitle: string;
  ctaTitleEm: string;
  ctaSub: string;
  ctaBtn: string;
  ctaBtnLink: string;
  ctaSecondary: string;
}

interface Props {
  locale: Locale;
  content: JasaServiceContent;
  pageName?: string;
}
export default function JasaServicePage({ locale, content, pageName }: Props) {
  const isIndonesian = locale === 'id';

  // Scroll depth tracking
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const thresholds = [25, 50, 75, 100];
    const fired = new Set<number>();
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
        const name = pageName || 'jasa-service-landing';
        if (window.fbq) window.fbq('track', 'ViewContent', {
          content_name: name,
          content_category: 'landing_page',
          value: 1, currency: 'IDR',
        });
        if (window.gtag) window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
        });
        if (window.ttq) window.ttq.track('ViewContent', {
          content_name: name,
        });
      } catch {}
    }
  }, [pageName]);

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
          <div className={styles.tag}>{content.heroTag}</div>
          <h1>{content.heroTitle} <em>{content.heroTitleEm}</em></h1>
          <p className={styles.heroSub}>{content.heroSub}</p>
          <div className={styles.heroBtns}>
            <a href={content.heroCtaLink} className="btn-primary" target="_blank" rel="noopener" onClick={() => handleWa('hero_cta')}>
              {content.heroCta}
            </a>
            <button className="btn-secondary" onClick={() => scrollTo('harga')}>
              {isIndonesian ? 'Lihat Harga \u2193' : 'See Pricing \u2193'}
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className={`${styles.sec} ${styles.secAlt}`}>
        <div className={styles.secInner}>
          <div className={styles.secHead}>
            <span className={styles.secLbl}>{content.problemLabel}</span>
            <h2>{content.problemTitle} <em>{content.problemTitleEm}</em></h2>
          </div>
          <div className={styles.probGrid}>
            {content.problems.map((p, i) => (
              <div key={i} className={styles.probItem}>
                <span className={styles.probIcon}>{p.icon}</span>
                <div><h4>{p.title}</h4><p>{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className={styles.sec} id="layanan">
        <div className={styles.secInner}>
          <div className={styles.secHeadCenter}>
            <span className={styles.secLbl}>{content.delivLabel}</span>
            <h2>{content.delivTitle} <em>{content.delivTitleEm}</em></h2>
          </div>
          <div className={styles.delivGrid}>
            {content.deliverables.map((d, i) => (
              <div key={i} className={styles.delivCard}>
                <span className={styles.delivIcon}>{d.icon}</span>
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={`${styles.sec} ${styles.secAlt}`} id="proses">
        <div className={styles.secInner}>
          <div className={styles.secHeadCenter}>
            <span className={styles.secLbl}>{content.processLabel}</span>
            <h2>{content.processTitle} <em>{content.processTitleEm}</em></h2>
          </div>
          <div className={styles.steps}>
            {content.processSteps.map((s, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.sec}>
        <div className={styles.secInner}>
          <div className={styles.secHeadCenter}>
            <span className={styles.secLbl}>{content.benefitLabel}</span>
            <h2>{content.benefitTitle} <em>{content.benefitTitleEm}</em></h2>
          </div>
          <div className={styles.benefitGrid}>
            {content.benefits.map((b, i) => (
              <div key={i} className={styles.benefit}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <div>
                  <strong>{b.title}</strong>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className={`${styles.sec} ${styles.secAlt}`} id="harga">
        <div className={styles.secInner}>
          <div className={styles.secHeadCenter}>
            <span className={styles.secLbl}>{content.pricingLabel}</span>
            <h2>{content.pricingTitle} <em>{content.pricingTitleEm}</em></h2>
            <p>{content.pricingSub}</p>
          </div>
          <div className={styles.pricingGrid}>
            {content.plans.map((plan, i) => (
              <div key={i} className={`${styles.plan} ${plan.highlight ? styles.highlight : ''}`}>
                <div className={styles.planName}>{plan.name}</div>
                <div className={styles.planPrice}>{plan.price} <span>{plan.unit}</span></div>
                <p className={styles.planDesc}>{plan.desc}</p>
                <ul className={styles.planItems}>
                  {plan.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
                <a href={plan.ctaLink} className={styles.planBtn} target="_blank" rel="noopener" onClick={() => handleWa(`pricing_${plan.name}`)}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className={styles.pricingNote}>{content.pricingNote}</p>
        </div>
      </section>

      {/* USE CASES */}
      <section className={styles.sec} id="cocok-untuk">
        <div className={styles.secInner}>
          <div className={styles.secHeadCenter}>
            <span className={styles.secLbl}>{content.usecaseLabel}</span>
            <h2>{content.usecaseTitle} <em>{content.usecaseTitleEm}</em></h2>
          </div>
          <div className={styles.usecaseGrid}>
            {content.useCases.map((uc, i) => (
              <div key={i} className={styles.usecaseItem}>
                <h4>{uc.title}</h4>
                <p>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaFinal}>
        <div className={styles.ctaInner}>
          <span className={styles.secLbl} style={{ display: 'block', textAlign: 'center' }}>{content.ctaLabel}</span>
          <h2>{content.ctaTitle} <em>{content.ctaTitleEm}</em></h2>
          <p>{content.ctaSub}</p>
          <div className={styles.ctaBtns}>
            <a href={content.ctaBtnLink} className="btn-primary" target="_blank" rel="noopener" onClick={() => handleWa('cta_final')}>
              {content.ctaBtn}
            </a>
            <a href={content.ctaSecondary} className="btn-secondary">
              {isIndonesian ? 'Lihat Semua Layanan' : 'View All Services'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
