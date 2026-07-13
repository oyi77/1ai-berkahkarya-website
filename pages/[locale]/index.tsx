import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import StatsRow from '@/components/StatsRow';
import FeatureGrid from '@/components/FeatureGrid';
import ServiceGrid from '@/components/ServiceGrid';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';
import TestimonialSection from '@/components/TestimonialSection';
import PersonaSwitcher from '@/components/PersonaSwitcher';
import BisnisShowcase from '@/components/BisnisShowcase';
import EcosystemDiagram from '@/components/EcosystemDiagram';
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

  const ecosystemItems = d.ecosystem.items.map((item) => ({
    ...item,
    href: withLocale(item.href),
  }));

  const testimonialItems = d.testimonials.items.map((t) => ({ ...t }));
  const bisnisCases = d.bisnisShowcase.cases.map((c) => ({ ...c }));

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      {/* Hero */}
      <HeroSection
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        description={d.hero.description}
        buttons={[]}
        dark
      />

      {/* Stats */}
      <StatsRow
        items={[...d.stats]}
        cta={d.statsCta ? { ...d.statsCta, href: withLocale(d.statsCta.href) } : undefined}
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
        cta={d.bisnisShowcase.cta}
      />

      {/* Testimonials */}
      <TestimonialSection title={d.testimonials.title} items={testimonialItems} />

      {/* Ecosystem Diagram */}
      <EcosystemDiagram
        title={d.ecosystemDiagram.title}
        subtitle={d.ecosystemDiagram.subtitle}
        visualPlaceholder={d.ecosystemDiagram.visualPlaceholder}
      />

      {/* Ecosystem / Services */}
      <ServiceGrid
        title={d.ecosystem.title}
        subtitle={d.ecosystem.subtitle}
        items={ecosystemItems}
      />

      {/* How It Works */}
      <HowItWorks title={d.howItWorks.title} steps={[...d.howItWorks.steps]} />

      {/* Developer Section */}
      <section id="developer" className="section" style={{ background: 'var(--surface-0)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-lg)', textAlign: 'center' }}>
          <span className="eyebrow">👨‍💻 Developers</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-4xl)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--text-inverse)',
            marginBottom: 'var(--space-4)',
          }}>
            {d.developerSection.title}
          </h2>
          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-inverse-muted)',
            marginBottom: 'var(--space-6)',
            maxWidth: '600px',
            margin: '0 auto var(--space-6)',
            lineHeight: 1.7,
          }}>
            {d.developerSection.description}
          </p>
          <a
            href={withLocale(d.developerSection.cta.href)}
            className="btn btn--primary"
          >
            {d.developerSection.cta.text}
          </a>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={d.cta.title}
        description={d.cta.description}
        button={{ text: d.cta.button.text, href: withLocale(d.cta.button.href) }}
      />
    </Layout>
  );
}