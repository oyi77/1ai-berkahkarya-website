import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import MarketingHero from '@/components/MarketingHero';
import StorySection from '@/components/StorySection';
import EcosystemShowcase from '@/components/EcosystemShowcase';
import AboutSection from '@/components/AboutSection';
import VisionMission from '@/components/VisionMission';
import MarketingCTA from '@/components/MarketingCTA';
import { ecosystemSaasData } from '@/data/ecosystem-saas';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function HomePage({ locale }: { locale: Locale }) {
  const d = ecosystemSaasData[locale];
  const href = (h: string) => (h.startsWith('/') ? `/${locale}${h}` : h);

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      {/* Hook — headline + proof + stats */}
      <MarketingHero
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        description={d.hero.description}
        ctaPrimary={d.hero.ctaPrimary}
        ctaSecondary={{ ...d.hero.ctaSecondary, href: href(d.hero.ctaSecondary.href) }}
        liveIndicator={d.hero.liveIndicator}
        stats={[
          ...d.hero.metrics.map((m) => ({ value: m.value, label: m.label })),
        ]}
      />

      {/* Story — cerita */}
      <StorySection
        eyebrow={d.story.eyebrow}
        title={d.story.title}
        paragraphs={[...d.story.paragraphs]}
        quote={d.story.quote}
        principles={[...d.story.principles]}
      />

      {/* Ecosystem — products */}
      <EcosystemShowcase
        title={d.products.title}
        subtitle={d.products.subtitle}
        items={[...d.products.items]}
      />

      {/* Who we are */}
      <AboutSection
        eyebrow={d.about.eyebrow}
        title={d.about.title}
        description={d.about.description}
        values={[...d.about.values]}
        stats={[...d.about.stats]}
      />

      {/* Vision & Mission */}
      <VisionMission
        eyebrow={d.visionMission.eyebrow}
        title={d.visionMission.title}
        vision={d.visionMission.vision}
        mission={d.visionMission.mission}
      />

      {/* Final CTA */}
      <MarketingCTA
        title={d.cta.title}
        description={d.cta.description}
        button={{ ...d.cta.button, href: href(d.cta.button.href) }}
      />
    </Layout>
  );
}
