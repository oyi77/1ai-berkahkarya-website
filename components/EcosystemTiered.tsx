'use client';

import { useEffect, useRef, useState } from 'react';
import { trackCTAClick } from '@/lib/tracking';
import styles from './EcosystemTiered.module.css';

interface EcosystemItem {
  icon: string;
  name: string;
  desc: string;
  metric: string;
  href: string;
}

interface Tier {
  title: string;
  subtitle: string;
  items: EcosystemItem[];
}

interface Props {
  revenue: Tier;
  infrastructure: Tier;
  experimental: Tier;
}

function Card({
  item,
  index,
  accentVar,
  size,
}: {
  item: EcosystemItem;
  index: number;
  accentVar: string;
  size: 'lg' | 'md' | 'sm';
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

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

  const handleClick = () => {
    trackCTAClick(item.name, item.href);
  };

  return (
    <a
      ref={ref}
      href={item.href}
      className={`${styles.card} ${styles[`card_${size}`]}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)`,
        transitionDelay: `${index * 0.08}s`,
        ['--card-accent' as string]: accentVar,
      }}
      onClick={handleClick}
    >
      <span className={styles.metric}>{item.metric}</span>
      <span className={styles.icon}>{item.icon}</span>
      <h3 className={styles.name}>{item.name}</h3>
      <p className={styles.desc}>{item.desc}</p>
      <span className={styles.link}>Learn more</span>
    </a>
  );
}

function TierSection({
  tier,
  accentVar,
  accentClass,
  size,
  label,
}: {
  tier: Tier;
  accentVar: string;
  accentClass: string;
  size: 'lg' | 'md' | 'sm';
  label: string;
}) {
  return (
    <section className={styles.section}>
      <div className={`${styles.tierLabel} ${accentClass}`}>
        <span className={styles.labelAccent} />
        <span>{label}</span>
      </div>
      <h2 className={styles.title}>{tier.title}</h2>
      <p className={styles.subtitle}>{tier.subtitle}</p>
      <div className={`${styles.grid} ${styles[`grid_${size}`]}`}>
        {tier.items.map((item, i) => (
          <Card key={item.name} item={item} index={i} accentVar={accentVar} size={size} />
        ))}
      </div>
    </section>
  );
}

export default function EcosystemTiered({ revenue, infrastructure, experimental }: Props) {
  return (
    <section className={styles.wrap}>
      <TierSection
        tier={revenue}
        accentVar="var(--brand-teal)"
        accentClass={styles.accentTeal}
        size="lg"
        label="Core Revenue"
      />
      <TierSection
        tier={infrastructure}
        accentVar="var(--brand-violet)"
        accentClass={styles.accentViolet}
        size="md"
        label="Infrastructure"
      />
      <TierSection
        tier={experimental}
        accentVar="var(--brand-gold)"
        accentClass={styles.accentGold}
        size="sm"
        label="Growth & Experimental"
      />
    </section>
  );
}
