'use client';

import styles from './LiveStatusBar.module.css';

interface StatusService {
  name: string;
  status: string;
}

interface Props {
  title: string;
  subtitle: string;
  services: StatusService[];
}

export default function LiveStatusBar({ title, subtitle, services }: Props) {
  return (
    <section className={styles.section} aria-labelledby="status-title">
      <div className={styles.wrap}>
        <div className={styles.header}>
          <span className={styles.statusBadge}>
            <span className={styles.dot} aria-hidden="true" />
            ALL SYSTEMS OPERATIONAL
          </span>
          <h2 id="status-title" className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <ul className={styles.list}>
          {services.map((s) => (
            <li key={s.name} className={styles.item}>
              <span className={styles.okDot} aria-hidden="true" />
              <span className={styles.host}>{s.name}</span>
              <span className={styles.status}>{s.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
