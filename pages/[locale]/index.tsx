import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import StatsRow from '@/components/StatsRow';
import FeatureGrid from '@/components/FeatureGrid';
import ServiceGrid from '@/components/ServiceGrid';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';
import { homeData } from '@/data/home';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function HomePage({ locale }: { locale: Locale }) {
  const d = homeData[locale];

  const withLocale = (href: string) => `/${locale}${href}`;

  const heroButtons = d.hero.buttons.map((btn) => ({
    ...btn,
    href: withLocale(btn.href),
  }));

  const ecosystemItems = d.ecosystem.items.map((item) => ({
    ...item,
    href: withLocale(item.href),
  }));

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      {/* Hero */}
      <HeroSection
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        description={d.hero.description}
        buttons={heroButtons}
        dark
      />

      {/* Stats */}
      <StatsRow items={[...d.stats]} />

      {/* Value Props — 3 differentiators */}
      <FeatureGrid title={d.valueProps.title} items={[...d.valueProps.items]} />

      {/* Ecosystem / Services */}
      <ServiceGrid
        title={d.ecosystem.title}
        subtitle={d.ecosystem.subtitle}
        items={ecosystemItems}
      />

      {/* How It Works */}
      <HowItWorks title={d.howItWorks.title} steps={[...d.howItWorks.steps]} />

      {/* CTA */}
      <CTASection
        title={d.cta.title}
        description={d.cta.description}
        button={{ text: d.cta.button.text, href: withLocale(d.cta.button.href) }}
      />
    </Layout>
  );
}
