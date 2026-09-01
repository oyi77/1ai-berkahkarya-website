'use client';

import styles from './InvestorPage.module.css';

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export default function InvestorHero({ eyebrow, title, subtitle, ctaPrimary, ctaSecondary }: Props) {
  return (
    <section className={styles.hero} aria-labelledby="investor-hero-title">
      <span className={styles.heroEyebrow}>{eyebrow}</span>
      <h1 id="investor-hero-title" className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroSubtitle}>{subtitle}</p>
      <div className={styles.heroCtas}>
        <a href="#cta" className="btn btn--primary">{ctaPrimary}</a>
        <a href="#cta" className="btn btn--secondary">{ctaSecondary}</a>
      </div>
    </section>
  );
}
