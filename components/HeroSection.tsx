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
  buttons?: Array<{ text: string; href: string; primary?: boolean }>;
  character?: { src: string; alt: string };
  badges?: readonly string[];
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  metricHighlight?: MetricHighlight;
  liveIndicator?: string;
  /** Ledger metrics table — key-value rows under hero title */
  metrics?: Array<{ label: string; value: string; highlight?: boolean }>;
  /** Dark theme variant */
  dark?: boolean;
}

export default function HeroSection({
  eyebrow, title, description, buttons, character, badges,
  ctaPrimary, ctaSecondary, metricHighlight, liveIndicator, metrics,
}: HeroProps) {
  const hasDualCTA = ctaPrimary || ctaSecondary;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* Red accent bar at top */}
      <div className={styles.accentBar} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Eyebrow — red ink stamp */}
          {eyebrow && (
            <span className={styles.eyebrow}>
              <span className={styles.bullet} /> {eyebrow}
            </span>
          )}

          {/* Title — document heading */}
          <h1 id="hero-title" className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
          
          {/* Underline rule */}
          <div className={styles.titleRule} />

          {/* Description — body text */}
          <p className={styles.description}>{description}</p>

          {/* Dual CTA */}
          {hasDualCTA && (
            <div className={styles.buttons} role="group" aria-label="Hero actions">
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href}
                  className={`${styles.btn} ${styles.btnStamp}`}
                  onClick={() => trackCTAClick('hero_primary', ctaPrimary.href)}
                >
                  {ctaPrimary.text}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className={`${styles.btn} ${styles.btnOutline}`}
                  onClick={() => trackCTAClick('hero_secondary', ctaSecondary.href)}
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
                  className={`${styles.btn} ${btn.primary ? styles.btnStamp : styles.btnOutline}`}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => trackCTAClick(`hero_${btn.text}`, btn.href)}
                >
                  {btn.text}
                </a>
              ))}
            </div>
          )}

          {/* Metric highlight + live indicator */}
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

          {/* Ledger metrics table */}
          {metrics && metrics.length > 0 && (
            <div className={styles.metricsTable}>
              <table>
                <tbody>
                  {metrics.map((m, i) => (
                    <tr key={i} className={m.highlight ? styles.metricRowHighlight : styles.metricRow}>
                      <td className={styles.metricLabelCol}>{m.label}</td>
                      <td className={styles.metricValueCol}>{m.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Badge strip (only when no metric row to avoid clutter) */}
          {!metricHighlight && !liveIndicator && badges && badges.length > 0 && (
            <div className={styles.strip} aria-label="Trust indicators">
              {badges.map((b) => (
                <span key={b} className={styles.stripItem}>{b}</span>
              ))}
            </div>
          )}
        </div>

        {/* Character illustration area — replaced by metrics when provided */}
        {character && !metrics && (
          <div className={styles.characterWrap}>
            <div className={styles.glowOrb} />
            <img src={character.src} alt={character.alt} className={styles.characterImg} />
          </div>
        )}
      </div>

      {/* Bottom decorative rule */}
      <div className={styles.bottomRule}>
        <span className={styles.bottomRuleDot} />
        <span className={styles.bottomRuleLine} />
        <span className={styles.bottomRuleDot} />
      </div>
    </section>
  );
}
