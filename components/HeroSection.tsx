import styles from './HeroSection.module.css';
import { trackCTAClick } from '@/lib/tracking';

interface Button { text: string; href: string; primary?: boolean }
interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  buttons?: Button[];
  dark?: boolean;
  character?: { src: string; alt: string };
  badges?: readonly string[];
}

export default function HeroSection({ eyebrow, title, description, buttons, character, badges }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`${styles.container} ${character ? styles.withCharacter : ''}`}>
        <div className={styles.content}>
          {eyebrow && <span className={styles.badge}>{eyebrow}</span>}
          <h1 id="hero-title" className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
          <p className={styles.description}>{description}</p>
          {buttons && buttons.length > 0 && (
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
          <div className={styles.strip} aria-label="Trust indicators">
            {(badges || ['Setup <5 menit', 'Garansi 7 hari', 'Support via Telegram']).map((b, i) => (
              <div key={i} className={styles.stripItem}><span aria-hidden="true">✓</span><span>{b}</span></div>
            ))}
          </div>
        </div>
        {character && (
          <div className={styles.characterWrap} aria-hidden="true">
            <img src={character.src} alt={character.alt} className={styles.characterImg} />
            <div className={styles.glowOrb} aria-hidden="true" />
          </div>
        )}
      </div>
      <div className={styles.scrollIndicator} aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}