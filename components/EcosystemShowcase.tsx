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
    <section className={styles.section} id="produk" aria-labelledby="ecosystem-title">
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
            >
              {item.status === 'starting' && (
                <span className={`${styles.badge} ${styles.badgeStarting}`}>
                  <span className={styles.badgeDot} /> STARTING
                </span>
              )}
              {item.shot ? (
                <div className={styles.screenshotWrap}>
                  <img
                    src={item.shot}
                    alt={`${item.name} dashboard`}
                    className={styles.screenshot}
                    loading="lazy"
                  />
                  <div className={styles.screenshotOverlay}>
                    <span className={styles.screenshotUrl}>{item.url}</span>
                    <span className={styles.screenshotBadge}>LIVE</span>
                  </div>
                </div>
              ) : (
                <span
                  className={`${styles.iconTile} ${item.status === 'starting' ? styles.iconTileStarting : ''}`}
                  aria-hidden="true"
                >
                  {item.emoji}
                  <span className={styles.iconDot} />
                </span>
              )}
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