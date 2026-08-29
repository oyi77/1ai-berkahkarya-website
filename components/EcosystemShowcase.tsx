'use client';

import { trackCTAClick } from '@/lib/tracking';
import styles from './EcosystemShowcase.module.css';
import type { SaasProduct } from '@/data/ecosystem-saas';

interface Props {
  title: string;
  subtitle: string;
  items: SaasProduct[];
}

export default function EcosystemShowcase({ title, subtitle, items }: Props) {
  return (
    <section className={styles.section} id="ecosystem" aria-labelledby="ecosystem-title">
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>LIVE PRODUCTS</span>
          <h2 id="ecosystem-title" className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${item.status === 'starting' ? styles.cardStarting : ''}`}
              onClick={() => trackCTAClick('ecosystem_showcase', item.url)}
              aria-label={`${item.name} — ${item.tagline}. Open live demo`}
            >
              <span
                className={`${styles.badge} ${item.status === 'starting' ? styles.badgeStarting : ''}`}
              >
                {item.status === 'live' ? 'LIVE' : 'STARTING'}
              </span>
              <span className={styles.icon} aria-hidden="true">{item.emoji}</span>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.name}>{item.name}</h3>
              <span className={styles.tagline}>{item.tagline}</span>
              <p className={styles.desc}>{item.description}</p>
              <span className={styles.highlight}>{item.highlight}</span>
              <span className={styles.link}>
                <span className={styles.linkText}>Open Live Demo</span>
                <span className={styles.linkArrow} aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
