'use client';

import styles from './LiveStatusBar.module.css';
import type { SaasStatus } from '@/data/ecosystem-saas';

interface StatusService {
  name: string;
  status: SaasStatus;
}

interface Props {
  title: string;
  subtitle: string;
  services: StatusService[];
}

export default function LiveStatusBar({ title, subtitle, services }: Props) {
  const liveCount = services.filter((s) => s.status === 'live').length;
  const total = services.length;
  const allLive = liveCount === total;

  return (
    <section className={styles.section} aria-labelledby="status-title">
      <div className={styles.wrap}>
        <div className={styles.header}>
          <span className={allLive ? styles.statusBadge : styles.statusBadgePartial}>
            <span className={styles.dot} aria-hidden="true" />
            {allLive ? 'ALL SYSTEMS OPERATIONAL' : `${liveCount}/${total} SERVICES ONLINE`}
          </span>
          <h2 id="status-title" className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <ul className={styles.list}>
          {services.map((s) => (
            <li key={s.name} className={styles.item}>
              <span
                className={s.status === 'live' ? styles.okDot : styles.startingDot}
                aria-hidden="true"
              />
              <span className={styles.host}>{s.name}</span>
              <span className={s.status === 'live' ? styles.status : styles.statusStarting}>
                {s.status === 'live' ? '200 OK' : 'STARTING'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
