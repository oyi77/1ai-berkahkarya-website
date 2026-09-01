'use client';

import styles from './InvestorPage.module.css';
import type { TeamMember } from '@/data/investor-data';

interface Props {
  team: TeamMember[];
  locale: 'id' | 'en';
}

export default function InvestorTeam({ team, locale }: Props) {
  const label = locale === 'id' ? 'Tim Kami' : 'Our Team';
  const subtitle = locale === 'id' ? 'Builder yang membangun ekosistem' : 'Builders creating the ecosystem';

  return (
    <section className={styles.team} aria-labelledby="team-title">
      <div className={styles.container}>
        <h2 id="team-title" className={styles.sectionHeading}>{label}</h2>
        <p className={styles.sectionSubheading}>{subtitle}</p>
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <div key={member.name} className={styles.teamCard}>
              <div className={styles.teamAvatar} aria-hidden="true">{member.avatar}</div>
              <div className={styles.teamName}>{member.name}</div>
              <div className={styles.teamTitle}>
                {locale === 'id' ? member.titleId : member.titleEn}
              </div>
              <p className={styles.teamBio}>
                {locale === 'id' ? member.bioId : member.bioEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
