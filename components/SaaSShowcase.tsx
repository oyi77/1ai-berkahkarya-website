'use client';

import { trackCTAClick } from '@/lib/tracking';
import styles from './SaaSShowcase.module.css';
import type { SaasProduct } from '@/data/ecosystem-saas';

interface Props {
  title: string;
  subtitle: string;
  items: SaasProduct[];
}

export default function SaaSShowcase({ title, subtitle, items }: Props) {
  return (
    <section className={styles.section} id="produk" aria-labelledby="saas-title">
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            <span className={styles.bullet} /> LIVE DEMOS
          </span>
          <h2 id="saas-title" className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={() => trackCTAClick('saas_showcase', item.url)}
              aria-label={`${item.name} — ${item.tagline}. Open live demo`}
            >
              <span className={styles.liveBadge}>
                <span className={styles.liveDot} /> LIVE
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
