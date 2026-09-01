'use client';

import styles from './InvestorPage.module.css';

interface Props {
  title: string;
  description: string;
  email: string;
}

export default function InvestorCTA({ title, description, email }: Props) {
  return (
    <section className={styles.cta} id="cta" aria-labelledby="cta-title">
      <div className={styles.container}>
        <div className={styles.ctaCard}>
          <h2 id="cta-title" className={styles.ctaTitle}>{title}</h2>
          <p className={styles.ctaDesc}>{description}</p>
          <div className={styles.ctaButtons}>
            <a href={`mailto:${email}`} className="btn btn--primary">
              {email}
            </a>
            <a
              href="https://calendly.com/berkahkarya/investor-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
