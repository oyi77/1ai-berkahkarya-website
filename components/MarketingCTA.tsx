'use client';

import styles from './MarketingCTA.module.css';
import { trackCTAClick } from '@/lib/tracking';

interface Props {
  title: string;
  description: string;
  button: { text: string; href: string };
}

export default function MarketingCTA({ title, description, button }: Props) {
  return (
    <section className={styles.section} aria-labelledby="marketing-cta-title">
      <div className={styles.inner}>
        <h2 id="marketing-cta-title" className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a
          href={button.href}
          className={styles.button}
          onClick={() => trackCTAClick('marketing_cta', button.href)}
        >
          {button.text}
        </a>
      </div>
    </section>
  );
}
