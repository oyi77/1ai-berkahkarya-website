import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';
import { careerData } from '@/data/career';
import styles from '@/styles/career.module.css';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function CareerPage({ locale }: { locale: Locale }) {
  const d = careerData[locale];

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      <HeroSection
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        description={d.hero.description}
      />

      {/* Company Culture */}
      <section className="light-bg">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{d.culture.title}</h2>
          <div className={styles.grid}>
            {d.culture.items.map((item) => (
              <div key={item.title} className={`card-light ${styles.card}`}>
                <span className={styles.icon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{d.openings.title}</h2>
          <div className={styles.jobs}>
            {d.openings.items.map((job) => (
              <a key={job.role} href={job.link} target="_blank" rel="noopener noreferrer" className={`card-light ${styles.jobCard}`}>
                <div className={styles.jobHeader}>
                  <h3>{job.role}</h3>
                  <span className={styles.jobType}>{job.type}</span>
                </div>
                <p className={styles.jobDesc}>{job.desc}</p>
                <span className={styles.applyLink}>
                  {locale === 'id' ? 'Lamar Sekarang' : 'Apply Now'} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={d.cta.title} description={d.cta.description} button={{ ...d.cta.button }} />
    </Layout>
  );
}
