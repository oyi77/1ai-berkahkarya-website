import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import LiveStatusBar from '@/components/LiveStatusBar';
import SaaSShowcase from '@/components/SaaSShowcase';
import EcosystemCTA from '@/components/EcosystemCTA';
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
      {/* Hero — ecosystem value prop, live indicator, metrics */}
      <HeroSection
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        description={d.hero.description}
        ctaPrimary={d.hero.ctaPrimary}
        ctaSecondary={{ ...d.hero.ctaSecondary, href: href(d.hero.ctaSecondary.href) }}
        liveIndicator={d.hero.liveIndicator}
        metricHighlight={d.hero.metricHighlight}
        metrics={[...d.hero.metrics]}
      />

      {/* Status Layer — verified live services */}
      <LiveStatusBar
        title={d.status.title}
        subtitle={d.status.subtitle}
        services={[...d.status.services]}
      />

      {/* SaaS Product Showcase — live demos */}
      <SaaSShowcase
        title={d.products.title}
        subtitle={d.products.subtitle}
        items={[...d.products.items]}
      />

      {/* How it works + final CTA */}
      <EcosystemCTA
        title={d.howItWorks.title}
        subtitle={d.howItWorks.subtitle}
        steps={[...d.howItWorks.steps]}
        ctaTitle={d.cta.title}
        ctaDescription={d.cta.description}
        ctaButton={{ ...d.cta.button, href: href(d.cta.button.href) }}
      />
    </Layout>
  );
}
