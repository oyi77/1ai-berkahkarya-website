'use client';

import { useEffect, useRef } from 'react';
import styles from './HowItWorks.module.css';

interface EvidenceStep {
  num: string;
  title: string;
  desc: string;
  evidence?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  steps: EvidenceStep[];
}

export default function HowItWorks({ title, subtitle, steps }: Props) {
  const sectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add(styles.visible);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.wrap} ref={sectRef}>
      <div className={styles.container}>
        <p className={styles.label}>⚡ Bukti Operasional</p>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.num} className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>{s.num}</span>
                <h3>{s.title}</h3>
              </div>
              <div className={styles.stepContent}>
                <p className={styles.stepDesc}>{s.desc}</p>
                <div className={styles.stepEvidence}>
                  <span className={styles.evidenceLabel}>✓ Bukti:</span>
                  <span className={styles.evidenceText}>{s.evidence}</span>
                </div>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
