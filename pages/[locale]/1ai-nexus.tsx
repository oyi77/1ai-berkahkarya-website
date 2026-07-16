import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import PricingTable from '@/components/PricingTable';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import StatsRow from '@/components/StatsRow';
import TestimonialSection from '@/components/TestimonialSection';
import { nexusData } from '@/data/1ai-nexus';
import styles from '@/components/landing/LandingPage.module.css';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function AINexusPage({ locale }: { locale: Locale }) {
  const d = nexusData[locale];

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      {/* ── Hero ── */}
      <HeroSection
        eyebrow={d.hero.badge}
        title={d.hero.title}
        description={d.hero.subtitle}
        buttons={[...d.hero.buttons]}
        badges={[...d.hero.trust]}
      />

      {/* ── Compare Grid: Pain vs Gain ── */}
      <section className={styles.section} style={{ background: 'var(--surface-0)' }}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>⚡ Perbandingan</span>
          <h2 className={styles.sectionTitle}>{d.compare.title}</h2>
          <div className={styles.compareGrid}>
            <div className={styles.compareOld}>
              <h3>{d.compare.old.label}</h3>
              <ul>
                {d.compare.old.items.map((item) => (
                  <li key={item}><span className={styles.xMark}>✕</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.compareNew}>
              <h3>{d.compare.new.label}</h3>
              <ul>
                {d.compare.new.items.map((item) => (
                  <li key={item}><span className={styles.checkMark}>✓</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <FeatureGrid title={d.features.title} items={[...d.features.items]} />

      {/* ── How It Works ── */}
      <HowItWorks title={d.howItWorks.title} steps={[...d.howItWorks.steps]} />

      {/* ── Stats ── */}
      <section className="section light-bg" style={{ padding: '3rem 0' }}>
        <StatsRow items={[...d.stats.items]} />
      </section>

      {/* ── Testimonials ── */}
      <TestimonialSection title={d.testimonials.title} items={[...d.testimonials.items]} />

      {/* ── Pricing ── */}
      <PricingTable
        tiers={d.pricing.tiers.map((t) => ({
          ...t,
          features: [...t.features],
          cta: { ...t.cta },
        }))}
      />

      {/* ── FAQ ── */}
      <FAQSection title={d.faq.title} items={[...d.faq.items]} />

      {/* ── Final CTA ── */}
      <CTASection
        title={d.cta.title}
        description={d.cta.description}
        button={{ ...d.cta.button }}
      />

      {/* ── Disclaimer ── */}
      <section style={{ background: 'var(--surface-1)', padding: '2rem 0' }}>
        <div className="container-sm">
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-light-subtle)',
              lineHeight: 1.6,
              textAlign: 'center' as const,
              maxWidth: '720px',
              margin: '0 auto',
            }}
            dangerouslySetInnerHTML={{ __html: d.disclaimer }}
          />
        </div>
      </section>
    </Layout>
  );
}
