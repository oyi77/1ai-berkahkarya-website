'use client';

import { useEffect, useRef, useState } from 'react';
import { trackCTAClick } from '@/lib/tracking';
import styles from './PricingPreview.module.css';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: { text: string; href: string };
  featured: boolean;
}

interface Props {
  title: string;
  subtitle: string;
  tiers: PricingTier[];
}

function CheckIcon() {
  return (
    <span className={styles.checkIcon} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="var(--brand-emerald)" opacity="0.15" />
        <path d="M8 12l3 3 5-5" stroke="var(--brand-emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Card({
  tier,
  index,
}: {
  tier: PricingTier;
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cardClass = [
    styles.card,
    tier.featured ? styles.featured : '',
    visible ? styles.cardVisible : styles.cardHidden,
  ]
    .filter(Boolean)
    .join(' ');

  const delay = `${index * 150}ms`;

  return (
    <div
      ref={ref}
      className={cardClass}
      style={{ transitionDelay: delay }}
    >
      {tier.featured && <span className={styles.popularBadge}>Popular</span>}

      <div className={styles.cardHeader}>
        <div className={styles.tierName}>{tier.name}</div>
        <div className={styles.priceRow}>
          <span className={styles.price}>{tier.price}</span>
          {tier.period && <span className={styles.period}>{tier.period}</span>}
        </div>
      </div>

      <p className={styles.description}>{tier.description}</p>

      <div className={styles.divider} />

      <ul className={styles.features}>
        {tier.features.map((f) => (
          <li key={f} className={styles.featureItem}>
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <a
          href={tier.cta.href}
          className={tier.featured ? styles.btnPrimary : styles.btnSecondary}
          onClick={() => trackCTAClick(tier.cta.text, tier.cta.href)}
        >
          {tier.cta.text}
        </a>
      </div>
    </div>
  );
}

export default function PricingPreview({ title, subtitle, tiers }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {tiers.map((tier, i) => (
            <Card key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
