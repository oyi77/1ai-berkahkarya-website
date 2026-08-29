'use client';

import { trackCTAClick } from '@/lib/tracking';
import styles from './MarketingHero.module.css';

interface CTA {
  text: string;
  href: string;
}

interface Props {
  eyebrow: string;
  title: string; // may contain <br/> and *italic emphasized* segments
  description: string;
  ctaPrimary: CTA;
  ctaSecondary: CTA;
  liveIndicator: string;
  stats: Array<{ value: string; label: string }>;
}

/**
 * Render the title, wrapping odd-indexed *asterisk* segments in an <em>
 * with gradient text. Non-em segments pass through as-is so `<br/>` works.
 */
function renderTitle(title: string) {
  const html = title
    .split('*')
    .map((part, i) =>
      i % 2 === 1 ? `<em class="${styles.titleEm}">${part}</em>` : part
    )
    .join('');
  return { __html: html };
}

export default function MarketingHero({
  eyebrow,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  liveIndicator,
  stats,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="marketing-hero-title">
      <div className={styles.wrap}>
        <span className={styles.eyebrow}>{eyebrow}</span>

        <h1
          id="marketing-hero-title"
          className={styles.title}
          dangerouslySetInnerHTML={renderTitle(title)}
        />

        <p className={styles.description}>{description}</p>

        <div className={styles.ctaRow} role="group" aria-label="Hero actions">
          <a
            href={ctaPrimary.href}
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={() => trackCTAClick('hero_primary', ctaPrimary.href)}
          >
            {ctaPrimary.text}
          </a>
          <a
            href={ctaSecondary.href}
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={() => trackCTAClick('hero_secondary', ctaSecondary.href)}
          >
            {ctaSecondary.text}
          </a>
        </div>

        <div className={styles.statsBlock}>
          <span className={styles.liveChip}>
            <span className={styles.liveDot} aria-hidden="true" />
            {liveIndicator}
          </span>

          <div className={styles.statsRow}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
