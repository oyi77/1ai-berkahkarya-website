'use client';

import styles from './EcosystemCTA.module.css';
import { trackCTAClick } from '@/lib/tracking';

interface Step {
  title: string;
  description: string;
}

interface Props {
  title: string;
  subtitle: string;
  steps: Step[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: { text: string; href: string };
}

export default function EcosystemCTA({
  title,
  subtitle,
  steps,
  ctaTitle,
  ctaDescription,
  ctaButton,
}: Props) {
  return (
    <>
      {/* How it works — build/connect/scale */}
      <section className={styles.stepsSection} aria-labelledby="how-title">
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>
            <span className={styles.bullet} /> HOW IT WORKS
          </span>
          <h2 id="how-title" className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <ol className={styles.steps}>
            {steps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNum}>0{i + 1}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaWrap}>
          <h2 className={styles.ctaTitle}>{ctaTitle}</h2>
          <p className={styles.ctaDesc}>{ctaDescription}</p>
          <a
            href={ctaButton.href}
            className={styles.ctaBtn}
            onClick={() => trackCTAClick('ecosystem_cta', ctaButton.href)}
          >
            {ctaButton.text}
          </a>
        </div>
      </section>
    </>
  );
}
