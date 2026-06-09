import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';
import { roadmapData } from '@/data/roadmapData';
import styles from '@/components/RoadmapSection.module.css';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function RoadmapPage({ locale }: { locale: Locale }) {
  const d = roadmapData[locale];
  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      <HeroSection
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        description={d.hero.description}
        buttons={[...d.hero.buttons]}
      />
      <section className={styles.wrap}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            {locale === 'id' ? 'Fase Perjalanan' : 'Journey Phases'}
          </h2>
          <p className={styles.subtitle}>
            {locale === 'id'
              ? 'Setiap fase adalah milestone nyata dalam perjalanan membangun perusahaan AI otonom. Dari MVP hingga visi besar: Veris AI.'
              : 'Every phase is a real milestone in building an autonomous AI company. From MVP to the big vision: Veris AI.'}
          </p>
          <div className={styles.phases}>
            {d.phases.map((phase, i) => (
              <div key={i} className={styles.phase}>
                <div className={styles.phaseHeader}>
                  <span className={styles.phasePeriod}>{phase.period}</span>
                  <span className={`${styles.phaseBadge} ${styles[phase.status]}`}>
                    {phase.status === 'live'
                      ? (locale === 'id' ? 'Selesai' : 'Live')
                      : phase.status === 'current'
                      ? (locale === 'id' ? 'Sedang Berjalan' : 'In Progress')
                      : (locale === 'id' ? 'Direncanakan' : 'Planned')}
                  </span>
                </div>
                <h3>{locale === 'id' ? phase.title_id : phase.title_en}</h3>
                <p className={styles.tagline}>{locale === 'id' ? phase.tagline_id : phase.tagline_en}</p>
                <ul>
                  {(locale === 'id' ? phase.items_id : phase.items_en).map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={d.cta.title} description={d.cta.description} button={{ ...d.cta.button }} />
    </Layout>
  );
}
