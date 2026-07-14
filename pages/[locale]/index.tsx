import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ProofBar from '@/components/ProofBar';
import VideoShowcase from '@/components/VideoShowcase';
import PersonaSwitcher from '@/components/PersonaSwitcher';
import FeatureGrid from '@/components/FeatureGrid';
import BisnisShowcase from '@/components/BisnisShowcase';
import PricingPreview from '@/components/PricingPreview';
import EcosystemTiered from '@/components/EcosystemTiered';
import HowItWorks from '@/components/HowItWorks';
import SocialProof from '@/components/SocialProof';
import InvestorSection from '@/components/InvestorSection';
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
  const d = JSON.parse(JSON.stringify(homeData[locale]));

  const withLocale = (href: string) => `/${locale}${href}`;

  const testimonialItems = d.testimonials.items.map((t) => ({ ...t }));
  const bisnisCases = d.bisnisShowcase.cases.map((c) => ({ ...c }));

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      {/* Hero — dual CTA, live indicator, metric */}
      <HeroSection
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        description={d.hero.description}
        ctaPrimary={d.hero.ctaPrimary}
        ctaSecondary={d.hero.ctaSecondary}
        metricHighlight={d.hero.metricHighlight}
        liveIndicator={d.hero.liveIndicator}
      />

      {/* Proof Bar — key metrics, growth, tech badges */}
      <ProofBar
        title={d.proofBar.title}
        stats={d.proofBar.stats}
        growthMetric={d.proofBar.growthMetric}
        techBadges={d.proofBar.techBadges}
      />

      {/* Intro Video */}
      <VideoShowcase
        title="BerkahKarya in 25 Seconds"
        subtitle="See how we help businesses grow with AI-powered content automation"
        src="/videos/berkahkarya-intro.mp4"
      />

      {/* Persona Switcher */}
      <PersonaSwitcher
        title={d.personaSwitcher.title}
        subtitle={d.personaSwitcher.subtitle}
        personal={d.personaSwitcher.personal}
        bisnis={d.personaSwitcher.bisnis}
      />

      {/* Value Props — 3 differentiators */}
      <FeatureGrid title={d.valueProps.title} items={[...d.valueProps.items]} />

      {/* Bisnis Showcase — R.E.V System cases */}
      <BisnisShowcase
        title={d.bisnisShowcase.title}
        subtitle={d.bisnisShowcase.subtitle}
        cases={bisnisCases}
        cta={{ text: d.bisnisShowcase.cta.text, href: withLocale(d.bisnisShowcase.cta.href) }}
      />

      {/* Pricing Preview — Free / Pro tier cards */}
      <PricingPreview
        title={d.pricingPreview.title}
        subtitle={d.pricingPreview.subtitle}
        tiers={d.pricingPreview.tiers}
      />

      {/* Ecosystem — 3 visual tiers */}
      <EcosystemTiered
        revenue={{
          ...d.ecosystem.revenue,
          items: d.ecosystem.revenue.items.map(i => ({ ...i, href: withLocale(i.href) })),
        }}
        infrastructure={{
          ...d.ecosystem.infrastructure,
          items: d.ecosystem.infrastructure.items.map(i => ({ ...i, href: withLocale(i.href) })),
        }}
        experimental={{
          ...d.ecosystem.experimental,
          items: d.ecosystem.experimental.items.map(i => ({ ...i, href: withLocale(i.href) })),
        }}
      />

      {/* How It Works — evidence-based steps */}
      <HowItWorks
        title={d.howItWorks.title}
        subtitle={d.howItWorks.subtitle}
        steps={[...d.howItWorks.steps]}
      />

      {/* Social Proof — testimonials + user count + CTA */}
      <SocialProof
        title={d.socialProof.title}
        subtitle={d.socialProof.subtitle}
        testimonials={testimonialItems}
        userCount={d.socialProof.userCount}
        userCountLabel={d.socialProof.userCountLabel}
        cta={d.socialProof.cta}
      />


      {/* Investor Section */}
      <InvestorSection
        title={d.investor.title}
        subtitle={d.investor.subtitle}
        traction={d.investor.traction}
        businessModel={d.investor.businessModel}
        architecture={d.investor.architecture}
        trackRecord={d.investor.trackRecord}
        cta={d.investor.cta}
      />

      {/* Final CTA */}
      <CTASection
        title={d.cta.title}
        description={d.cta.description}
        button={{ text: d.cta.button.text, href: withLocale(d.cta.button.href) }}
      />
    </Layout>
  );
}
