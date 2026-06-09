import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import StatsRow from '@/components/StatsRow';
import CTASection from '@/components/CTASection';
import { storyData } from '@/data/storyData';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function StoryPage({ locale }: { locale: Locale }) {
  const d = storyData[locale];
  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      <HeroSection
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        description={d.hero.description}
        buttons={[...d.hero.buttons]}
      />
      <StatsRow items={[...d.stats]} />
      <section className="light-bg">
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '5rem 1.5rem' }}>
          {d.sections.map((section, i) => (
            <div
              key={i}
              style={{
                marginBottom: i < d.sections.length - 1 ? '3.5rem' : 0,
                paddingBottom: i < d.sections.length - 1 ? '3.5rem' : 0,
                borderBottom: i < d.sections.length - 1 ? '1px solid var(--border-light)' : 'none',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}
              >
                {section.title}
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                }}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTASection title={d.cta.title} description={d.cta.description} button={{ ...d.cta.button }} />
    </Layout>
  );
}
