'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './InvestorSection.module.css';
import { trackCTAClick } from '@/lib/tracking';

interface Metric {
  value: string;
  label: string;
}

interface BMItem {
  name: string;
  desc: string;
}

interface Props {
  title: string;
  subtitle: string;
  traction: { title: string; metrics: Metric[]; note: string };
  businessModel: { title: string; items: BMItem[] };
  architecture: { title: string; value: string };
  trackRecord: { title: string; achievements: string[] };
  cta: { title: string; description: string; button: { text: string; href: string } };
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

function CountUp({ value, visible }: { value: string; visible: boolean }) {
  const [display, setDisplay] = useState('');
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!visible) return;

    const numStr = value.replace(/[^\d.]/g, '');
    const target = parseFloat(numStr) || 0;
    const hasDecimal = value.includes('.');
    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.floor(target * eased);

      if (hasDecimal) {
        setDisplay(`${(current / 100).toFixed(2)}`);
      } else {
        setDisplay(current.toLocaleString());
      }

      if (t < 1) requestAnimationFrame(animate);
      else setDisplay(value.replace(/[^\d.]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    };

    requestAnimationFrame(animate);
  }, [visible, value]);

  if (!display) return <>{value}</>;
  return <>{display}</>;
}

function MetricCard({ metric, index, visible }: { metric: Metric; index: number; visible: boolean }) {
  const prefix = metric.value.match(/^[^\d]+/)?.[0] || '';
  const suffix = metric.value.includes('%') ? '%' : '';

  return (
    <div
      className={`${styles.metricCard} ${!visible ? styles.hidden : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className={styles.metricValue}>
        {prefix}
        <CountUp value={metric.value} visible={visible} />
        {suffix}
      </span>
      <span className={styles.metricLabel}>{metric.label}</span>
    </div>
  );
}

function BMItemCard({ item, index, visible }: { item: BMItem; index: number; visible: boolean }) {
  return (
    <div
      className={`${styles.bmCard} ${!visible ? styles.hidden : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.bmIconWrap}>{item.name.charAt(0)}</div>
      <div className={styles.bmContent}>
        <div className={styles.bmName}>{item.name}</div>
        <div className={styles.bmDesc}>{item.desc}</div>
      </div>
    </div>
  );
}

export default function InvestorSection({
  title,
  subtitle,
  traction,
  businessModel,
  architecture,
  trackRecord,
  cta,
}: Props) {
  const [headerRef, headerVisible] = useInView(0.1);
  const [tractionRef, tractionVisible] = useInView(0.1);
  const [bmRef, bmVisible] = useInView(0.1);
  const [archRef, archVisible] = useInView(0.1);
  const [recordRef, recordVisible] = useInView(0.1);
  const [ctaRef, ctaVisible] = useInView(0.1);

  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        {/* ── Header ── */}
        <div ref={headerRef} className={styles.header}>
          <div className={styles.accentLine} />
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {/* ── 1. Traction ── */}
        <div ref={tractionRef} className={styles.subsection}>
          <div className={styles.subsectionHeader}>
            <div className={`${styles.accentLine} ${styles.accentLineEmerald}`} />
            <h3 className={styles.subsectionTitle}>{traction.title}</h3>
          </div>
          <div className={styles.metricsGrid}>
            {traction.metrics.map((m, i) => (
              <MetricCard key={m.label} metric={m} index={i} visible={tractionVisible} />
            ))}
          </div>
          <p className={styles.tractionNote}>{traction.note}</p>
        </div>

        {/* ── 2. Business Model ── */}
        <div ref={bmRef} className={styles.subsection}>
          <div className={styles.subsectionHeader}>
            <div className={`${styles.accentLine} ${styles.accentLineGold}`} />
            <h3 className={styles.subsectionTitle}>{businessModel.title}</h3>
          </div>
          <div className={styles.bmGrid}>
            {businessModel.items.map((item, i) => (
              <BMItemCard key={item.name} item={item} index={i} visible={bmVisible} />
            ))}
          </div>
        </div>

        {/* ── 3. Architecture ── */}
        <div ref={archRef} className={styles.subsection}>
          <div className={styles.subsectionHeader}>
            <div className={`${styles.accentLine} ${styles.accentLineViolet}`} />
            <h3 className={styles.subsectionTitle}>{architecture.title}</h3>
          </div>
          <div className={`${styles.archCard} ${!archVisible ? styles.hidden : ''}`}>
            <div className={styles.archLabel}>{architecture.title}</div>
            <div className={styles.archValue}>{architecture.value}</div>
          </div>
        </div>

        {/* ── 4. Track Record ── */}
        <div ref={recordRef} className={styles.subsection}>
          <div className={styles.subsectionHeader}>
            <div className={`${styles.accentLine} ${styles.accentLineEmerald}`} />
            <h3 className={styles.subsectionTitle}>{trackRecord.title}</h3>
          </div>
          <div className={styles.recordList}>
            {trackRecord.achievements.map((a, i) => (
              <div
                key={i}
                className={`${styles.recordCard} ${!recordVisible ? styles.hidden : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={styles.checkIcon} aria-hidden="true">✓</div>
                <div className={styles.recordText}>{a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. CTA ── */}
        <div
          ref={ctaRef}
          className={`${styles.ctaWrap} ${!ctaVisible ? styles.hidden : ''}`}
        >
          <h3 className={styles.ctaTitle}>{cta.title}</h3>
          <p className={styles.ctaDesc}>{cta.description}</p>
          <a
            href={cta.button.href}
            className={styles.ctaBtn}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick(cta.button.text, cta.button.href)}
          >
            {cta.button.text}
          </a>
        </div>
      </div>
    </section>
  );
}
