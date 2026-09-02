'use client';

import { useEffect, useRef, useState } from 'react';
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

export type Persona = 'pemula' | 'investor';

interface PersonaCopy {
  title: string;
  description: string;
  ctaPrimary: CTA;
  ctaSecondary: CTA;
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
  metrics?: Array<{ label: string; value: string; highlight?: boolean }>;
  dark?: boolean;
  /** Persona switcher for marketing pages */
  persona?: Persona;
  personaCopy?: { pemula: PersonaCopy; investor: PersonaCopy };
  onPersonaChange?: (persona: Persona) => void;
  /** Stats for bento grid */
  stats?: Array<{ value: string; label: string }>;
}

/**
 * Render the title, wrapping segments between *asterisks* in a gradient span.
 * Supports <br/> tags for line breaks.
 */
function renderTitle(title: string) {
  const parts = title.split(/(\*[^*]+\*|<br\s*\/?>)/g);
  return parts.map((part, i) => {
    if (part === '<br/>' || part === '<br />' || part === '<br>') {
      return <br key={i} />;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <span key={i} className={styles.gradientText}>
          {part.slice(1, -1)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function HeroSection({
  eyebrow,
  title,
  description,
  buttons,
  character,
  badges,
  ctaPrimary,
  ctaSecondary,
  metricHighlight,
  liveIndicator,
  metrics,
  dark = true,
  persona = 'pemula',
  personaCopy,
  onPersonaChange,
  stats,
}: HeroProps) {
  const hasDualCTA = ctaPrimary || ctaSecondary;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activePersona, setActivePersona] = useState<Persona>(persona);

  // Scroll-triggered fade-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePersonaChange = (p: Persona) => {
    setActivePersona(p);
    onPersonaChange?.(p);
  };
  // Determine effective CTA based on persona
  const effectiveCtaPrimary = personaCopy && activePersona === 'investor'
    ? personaCopy['investor'].ctaPrimary
    : ctaPrimary;
  const effectiveCtaSecondary = personaCopy && activePersona === 'investor'
    ? personaCopy['investor'].ctaSecondary
    : ctaSecondary;

  // Determine effective title/description based on persona
  const effectiveTitle = personaCopy && activePersona === 'investor'
    ? personaCopy['investor'].title
    : title;
  const effectiveDescription = personaCopy && activePersona === 'investor'
    ? personaCopy['investor'].description
    : description;
  return (
    <section
      ref={sectionRef}
      className={`${styles.hero} ${isVisible ? styles.visible : ''}`}
      aria-labelledby="hero-title"
      data-dark={dark}
    >
      {/* Animated mesh gradient background */}
      <div className={styles.meshGradient}>
        <div className={styles.meshOrb1} />
        <div className={styles.meshOrb2} />
        <div className={styles.meshOrb3} />
      </div>

      {/* Grid pattern overlay */}
      <div className={styles.gridPattern} />

      {/* Floating particles */}
      <div className={styles.particles} aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              '--delay': `${Math.random() * 8}s`,
              '--x': `${Math.random() * 100}%`,
              '--size': `${2 + Math.random() * 4}px`,
              '--duration': `${10 + Math.random() * 20}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Eyebrow with live indicator */}
          <div className={styles.topRow}>
            {eyebrow && (
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                {eyebrow}
              </span>
            )}
            {liveIndicator && (
              <span className={styles.liveIndicator}>
                <span className={styles.livePulse} />
                {liveIndicator}
              </span>
            )}
          </div>

          {/* Persona switcher pills */}
          {personaCopy && onPersonaChange && (
            <div className={styles.personaSwitcher}>
              <button
                className={`${styles.personaPill} ${activePersona === 'pemula' ? styles.personaActive : ''}`}
                onClick={() => handlePersonaChange('pemula')}
                aria-pressed={activePersona === 'pemula'}
              >
                Pemula
              </button>
              <button
                className={`${styles.personaPill} ${activePersona === 'investor' ? styles.personaActive : ''}`}
                onClick={() => handlePersonaChange('investor')}
                aria-pressed={activePersona === 'investor'}
              >
                Investor
              </button>
            </div>
          )}

          {/* Main title with gradient accent */}
          <h1 id="hero-title" className={styles.title}>
            {renderTitle(effectiveTitle)}
          </h1>

          {/* Description */}
          <p className={styles.description}>{effectiveDescription}</p>

          {/* CTA Buttons - Glassmorphism */}
          {hasDualCTA && (
            <div className={styles.buttons} role="group" aria-label="Hero actions">
              {effectiveCtaPrimary && (
                <a
                  href={effectiveCtaPrimary.href}
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  onClick={() => trackCTAClick('hero_primary', effectiveCtaPrimary.href)}
                >
                  <span className={styles.btnGlow} />
                  {effectiveCtaPrimary.text}
                </a>
              )}
              {effectiveCtaSecondary && (
                <a
                  href={effectiveCtaSecondary.href}
                  className={`${styles.btn} ${styles.btnGlass}`}
                  onClick={() => trackCTAClick('hero_secondary', effectiveCtaSecondary.href)}
                >
                  {effectiveCtaSecondary.text}
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
                  className={`${styles.btn} ${btn.primary ? styles.btnPrimary : styles.btnGlass}`}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => trackCTAClick(`hero_${btn.text}`, btn.href)}
                >
                  {btn.primary && <span className={styles.btnGlow} />}
                  {btn.text}
                </a>
              ))}
            </div>
          )}

          {/* Metric highlight */}
          {metricHighlight && (
            <div className={styles.metricHighlight}>
              <span className={styles.metricValue}>{metricHighlight.value}</span>
              <span className={styles.metricLabel}>{metricHighlight.label}</span>
            </div>
          )}

          {/* Legacy metrics table */}
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

          {/* Badge strip */}
          {!metricHighlight && !liveIndicator && badges && badges.length > 0 && (
            <div className={styles.strip} aria-label="Trust indicators">
              {badges.map((b) => (
                <span key={b} className={styles.stripItem}>{b}</span>
              ))}
            </div>
          )}
        </div>

        {/* Character illustration */}
        {character && !stats && !metrics && (
          <div className={styles.characterWrap}>
            <div className={styles.glowOrb} />
            <img src={character.src} alt={character.alt} className={styles.characterImg} />
          </div>
        )}
      </div>

      {/* Bento grid stats */}
      {stats && stats.length > 0 && (
        <div className={styles.bentoGrid}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`${styles.bentoCard} ${i === 0 ? styles.bentoLarge : ''}`}
              style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}
            >
              <span className={styles.bentoValue}>{stat.value}</span>
              <span className={styles.bentoLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </div>
    </section>
  );
}
