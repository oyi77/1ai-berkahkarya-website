import styles from './BisnisShowcase.module.css';

interface Case {
  title: string;
  metric1: string;
  metric2: string;
}

interface Props {
  title: string;
  subtitle: string;
  cases: Case[];
  cta: { text: string; href: string };
}

export default function BisnisShowcase({ title, subtitle, cases, cta }: Props) {
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <p className={styles.label}>📊 Real Results</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.grid}>
          {cases.map((c, i) => (
            <article key={i} className={`card-dark ${styles.card}`}>
              <h3 className={styles.caseTitle}>{c.title}</h3>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>{c.metric1}</span>
                  <span className={styles.metricLabel}>Konversi</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>{c.metric2}</span>
                  <span className={styles.metricLabel}>Revenue / CPA</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.ctaWrap}>
          <a href={cta.href} className={styles.cta}>
            {cta.text}
          </a>
        </div>
      </div>
    </section>
  );
}