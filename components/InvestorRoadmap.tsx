'use client';

import styles from './InvestorPage.module.css';
import type { RoadmapQuarter } from '@/data/investor-data';

interface Props {
  roadmap: RoadmapQuarter[];
  locale: 'id' | 'en';
}

export default function InvestorRoadmap({ roadmap, locale }: Props) {
  const label = locale === 'id' ? 'Roadmap Pertumbuhan' : 'Growth Roadmap';
  const subtitle = locale === 'id' ? 'Target dan milestone kami' : 'Our targets and milestones';

  return (
    <section className={styles.roadmap} aria-labelledby="roadmap-title">
      <div className={styles.container}>
        <h2 id="roadmap-title" className={styles.sectionHeading}>{label}</h2>
        <p className={styles.sectionSubheading}>{subtitle}</p>
        <div className={styles.timeline}>
          {roadmap.map((quarter) => (
            <div
              key={quarter.quarter}
              className={`${styles.timelineItem} ${quarter.status === 'current' ? styles.current : ''}`}
            >
              <div className={styles.timelineDot} aria-hidden="true" />
              <div className={styles.timelineQuarter}>{quarter.quarter}</div>
              <div className={styles.timelineTitle}>
                {locale === 'id' ? quarter.titleId : quarter.titleEn}
              </div>
              <ul className={styles.timelineItems}>
                {quarter.items.map((item, i) => (
                  <li key={i}>{locale === 'id' ? item.id : item.en}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
