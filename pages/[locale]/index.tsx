import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import StatsRow from '@/components/StatsRow';
import FeatureGrid from '@/components/FeatureGrid';
import ServiceGrid from '@/components/ServiceGrid';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';
import TestimonialSection from '@/components/TestimonialSection';
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

  const personaPersonal = d.personaSwitcher.personal;
  const personaBisnis = d.personaSwitcher.bisnis;
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
      <section id="persona-switcher" className="dark-bg" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem'
          }}>
            🎯 Pilih Jalur
          </p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2,
            color: 'var(--text-white)', marginBottom: '0.5rem'
          }}>
            {d.personaSwitcher.title}
          </h2>
          <p style={{
            fontSize: '1.125rem', color: 'var(--text-white-60)', marginBottom: '3rem', maxWidth: '600px'
          }}>
            {d.personaSwitcher.subtitle}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {/* Personal Card */}
            <a href={withLocale(personaPersonal.cta.href)} className="card-dark" style={{
              display: 'flex', flexDirection: 'column', textDecoration: 'none',
              minHeight: '400px', justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>
                  {personaPersonal.icon}
                </span>
                <h3 style={{
                  fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '1rem'
                }}>
                  {personaPersonal.title}
                </h3>
                <p style={{
                  fontSize: '1rem', color: 'var(--text-white-70)', lineHeight: 1.6, marginBottom: '1.5rem'
                }}>
                  {personaPersonal.description}
                </p>
                <p style={{
                  fontSize: '0.75rem', color: 'var(--text-white-50)', fontStyle: 'italic'
                }}>
                  {personaPersonal.visualPlaceholder}
                </p>
              </div>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '1rem', fontWeight: 800, padding: '1rem 2rem',
                background: 'linear-gradient(135deg, var(--teal-primary), var(--teal-hover))',
                color: 'var(--dark-hero)', borderRadius: '8px', width: 'fit-content',
                textDecoration: 'none'
              }}>
                {personaPersonal.cta.text}
              </span>
            </a>

            {/* Bisnis Card */}
            <a href={withLocale(personaBisnis.cta.href)} className="card-dark" style={{
              display: 'flex', flexDirection: 'column', textDecoration: 'none',
              minHeight: '400px', justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>
                  {personaBisnis.icon}
                </span>
                <h3 style={{
                  fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-white)', marginBottom: '1rem'
                }}>
                  {personaBisnis.title}
                </h3>
                <p style={{
                  fontSize: '1rem', color: 'var(--text-white-70)', lineHeight: 1.6, marginBottom: '1.5rem'
                }}>
                  {personaBisnis.description}
                </p>
                <p style={{
                  fontSize: '0.75rem', color: 'var(--text-white-50)', fontStyle: 'italic'
                }}>
                  {personaBisnis.visualPlaceholder}
                </p>
              </div>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '1rem', fontWeight: 800, padding: '1rem 2rem',
                background: 'linear-gradient(135deg, var(--violet), var(--violet-light))',
                color: 'var(--text-white)', borderRadius: '8px', width: 'fit-content',
                textDecoration: 'none'
              }}>
                {personaBisnis.cta.text}
              </span>
            </a>
          </div>
        </div>
      </section>

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
      <section id="developer" className="dark-bg" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--teal-primary)', marginBottom: '0.75rem'
          }}>
            👨‍💻 Developers
          </p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2,
            color: 'var(--text-white)', marginBottom: '1rem'
          }}>
            {d.developerSection.title}
          </h2>
          <p style={{
            fontSize: '1.125rem', color: 'var(--text-white-60)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'
          }}>
            {d.developerSection.description}
          </p>
          <a href={withLocale(d.developerSection.cta.href)} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '1rem', fontWeight: 800, padding: '1rem 2.5rem',
            background: 'linear-gradient(135deg, var(--teal-primary), var(--teal-hover))',
            color: 'var(--dark-hero)', borderRadius: '8px', textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(0,217,255,0.3)'
          }}>
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