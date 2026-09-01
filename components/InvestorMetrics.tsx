'use client';

import styles from './InvestorPage.module.css';
import type { Metric } from '@/data/investor-data';

interface Props {
  metrics: Metric[];
  locale: 'id' | 'en';
}

export default function InvestorMetrics({ metrics, locale }: Props) {
  return (
    <section className={styles.metrics} aria-labelledby="metrics-title">
      <div className={styles.container}>
        <h2 id="metrics-title" className="sr-only">
          {locale === 'id' ? 'Metrik Utama' : 'Key Metrics'}
        </h2>
        <div className={styles.metricGrid}>
          {metrics.map((metric) => (
            <div key={metric.labelEn} className={styles.metricCard}>
              <div className={styles.metricIcon} aria-hidden="true">{metric.icon}</div>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>
                {locale === 'id' ? metric.labelId : metric.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
