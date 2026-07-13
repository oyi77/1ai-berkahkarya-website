'use client';

import { trackCTAClick } from '@/lib/tracking';
import styles from './HeroSection.module.css';

interface CTA {
  text: string;
  href: string;
}

interface MetricHighlight {
  value: string;
  label: string;
}

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  /** Legacy single-CTA array — use ctaPrimary/ctaSecondary instead for new design */
  buttons?: Array<{ text: string; href: string; primary?: boolean }>;
  character?: { src: string; alt: string };
  badges?: readonly string[];
  /** New dual CTA */
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  metricHighlight?: MetricHighlight;
  liveIndicator?: string;
}

export default function HeroSection({
  eyebrow, title, description, buttons, character, badges,
  ctaPrimary, ctaSecondary, metricHighlight, liveIndicator,
}: HeroProps) {
  const hasDualCTA = ctaPrimary || ctaSecondary;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`${styles.container} ${character ? styles.withCharacter : ''}`}>
        <div className={styles.content}>
          {eyebrow && <span className={styles.badge}>{eyebrow}</span>}
          <h1 id="hero-title" className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
          <p className={styles.description}>{description}</p>

          {/* Dual CTA - new design */}
          {hasDualCTA && (
            <div className={styles.buttons} role="group" aria-label="Hero actions">
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href}
                  className={`${styles.btn} ${styles.primary}`}
                  onClick={() => trackCTAClick(`hero_primary`, ctaPrimary.href)}
                >
                  {ctaPrimary.text}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className={`${styles.btn} ${styles.secondary}`}
                  onClick={() => trackCTAClick(`hero_secondary`, ctaSecondary.href)}
                >
                  {ctaSecondary.text}
                </a>
              )}
            </div>
          )}

          {/* Legacy buttons fallback */}
          {!hasDualCTA && buttons && buttons.length > 0 && (
            <div className={styles.buttons} role="group" aria-label="Hero actions">
              {buttons.map((btn) => (
                <a
                  key={btn.text}
                  href={btn.href}
                  className={`${styles.btn} ${btn.primary ? styles.primary : styles.secondary}`}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => trackCTAClick(`hero_${btn.text}`, btn.href)}
                >
                  {btn.text}
                </a>
              ))}
            </div>
          )}

          {/* Metric highlight + live indicator row */}
          {(metricHighlight || liveIndicator) && (
            <div className={styles.metaRow}>
              {metricHighlight && (
                <div className={styles.metricHighlight}>
                  <span className={styles.metricValue}>{metricHighlight.value}</span>
                  <span className={styles.metricLabel}>{metricHighlight.label}</span>
                </div>
              )}
              {liveIndicator && (
                <span className={styles.liveIndicator}>{liveIndicator}</span>
              )}
            </div>
          )}

          {/* Trust strip — hide when metricRow is shown to avoid clutter */}
          {!metricHighlight && !liveIndicator && (
            <div className={styles.strip} aria-label="Trust indicators">
              {(badges || ['Setup <5 menit', 'Garansi 7 hari', 'Support via Telegram']).map((b, i) => (
                <div key={i} className={styles.stripItem}><span aria-hidden="true">✓</span><span>{b}</span></div>
              ))}
            </div>
          )}
        </div>
        {character && (
          <div className={styles.characterWrap}>
            <div className={styles.glowOrb} aria-hidden="true" />
            <picture>
              <source srcSet={`${character.src}?w=600`} media="(min-width: 768px)" />
              <img
                src={character.src}
                alt={character.alt}
                className={styles.characterImg}
                loading="lazy"
                width={400}
                height={500}
              />
            </picture>
          </div>
        )}
      </div>
      <div className={styles.scrollIndicator} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
