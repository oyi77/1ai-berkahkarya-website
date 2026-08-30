'use client';

import { trackCTAClick, trackViewContent } from '@/lib/tracking';
import { learningTracks, instructorData, siteStats } from '@/data/belajarai';
import styles from './AcademySection.module.css';

interface Props {
  locale: 'id' | 'en';
}

const COPY = {
  id: {
    eyebrow: 'AI ACADEMY',
    title: 'Belajar AI — *langsung praktek*, bukan teori.',
    subtitle:
      '4 jalur belajar yang dirancang untuk kebutuhan nyata: UMKM, konten, pelajar, dan guru. Dipandu praktisi 10+ tahun di production.',
    cta: 'Lihat Semua Kursus →',
    statsLabel: 'yang sudah belajar & mempraktekkan',
    instructorEyebrow: 'DIBIMBING OLEH',
    instructorRole: 'Lead Instructor & Founder BerkahKarya',
    instructorNote: 'Kontributor aktif framework yang dipakai ribuan developer global.',
    trackLevel: 'Level',
    trackCourses: 'kursus',
    start: 'Mulai Belajar',
  },
  en: {
    eyebrow: 'AI ACADEMY',
    title: 'Learn AI — *hands-on*, not theory.',
    subtitle:
      '4 learning paths built for real needs: SMEs, content creators, students, and teachers. Guided by a 10+ year production practitioner.',
    cta: 'Explore All Courses →',
    statsLabel: 'learners already building with AI',
    instructorEyebrow: 'TAUGHT BY',
    instructorRole: 'Lead Instructor & Founder BerkahKarya',
    instructorNote: 'Active contributor to frameworks used by thousands of developers worldwide.',
    trackLevel: 'Level',
    trackCourses: 'courses',
    start: 'Start Learning',
  },
} as const;

export default function AcademySection({ locale }: Props) {
  const c = COPY[locale];
  const href = (h: string) => (h.startsWith('/') ? `/${locale}${h}` : h);

  return (
    <section className={styles.section} id="academy" aria-labelledby="academy-title">
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>{c.eyebrow}</span>
          <h2
            id="academy-title"
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: c.title
              .split('*')
              .map((part, i) =>
                i % 2 === 1 ? `<em className="${styles.titleEm}">${part}</em>` : part
              )
              .join('') }}
          />
          <p className={styles.subtitle}>{c.subtitle}</p>
        </div>

        {/* Learning track cards */}
        <div className={styles.tracks}>
          {learningTracks.map((track) => (
            <a
              key={track.id}
              href={href('/academy')}
              className={styles.track}
              onClick={() => {
                trackCTAClick('academy_track', track.title);
                trackViewContent(track.title, 'academy_track');
              }}
              style={{ '--track-color': track.color, '--track-bg': track.colorBg } as React.CSSProperties}
            >
              {track.badge && <span className={styles.trackBadge}>{track.badge}</span>}
              <span className={styles.trackIcon} aria-hidden="true">{track.icon}</span>
              <h3 className={styles.trackTitle}>{track.title}</h3>
              <p className={styles.trackSubtitle}>{track.subtitle}</p>
              <p className={styles.trackDesc}>{track.desc}</p>
              <div className={styles.trackMeta}>
                <span>{track.courseCount} {c.trackCourses}</span>
                <span>·</span>
                <span>{c.trackLevel}: {track.level}</span>
              </div>
              <span className={styles.trackCta}>{c.start} →</span>
            </a>
          ))}
        </div>

        {/* Site stats */}
        <div className={styles.statsBar}>
          {siteStats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
          <span className={styles.statsNote}>{c.statsLabel}</span>
        </div>

        {/* Instructor credibility */}
        <div className={styles.instructor}>
          <div className={styles.instructorHead}>
            <span className={styles.instructorAvatar} aria-hidden="true">👨‍💻</span>
            <div>
              <span className={styles.instructorEyebrow}>{c.instructorEyebrow}</span>
              <h4 className={styles.instructorName}>{instructorData.name}</h4>
              <p className={styles.instructorRole}>{c.instructorRole}</p>
            </div>
          </div>
          <p className={styles.instructorNote}>{c.instructorNote}</p>
          <div className={styles.contributionRow}>
            {instructorData.contributions.slice(0, 5).map((cItem) => (
              <span key={cItem.name} className={styles.contribution}>
                <span aria-hidden="true">{cItem.icon}</span> {cItem.name}
                <span className={styles.contributionStars}>★{cItem.stars}</span>
              </span>
            ))}
          </div>
          <a
            href={href('/academy')}
            className={styles.ctaBtn}
            onClick={() => trackCTAClick('academy_cta', href('/academy'))}
          >
            {c.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
