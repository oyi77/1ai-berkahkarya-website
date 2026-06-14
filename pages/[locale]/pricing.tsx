import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { pricingData } from '@/data/pricing';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { locale: 'id' } },
    { params: { locale: 'en' } },
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function PricingPage({ locale }: { locale: Locale }) {
  const d = pricingData[locale];

  const withLocale = (href: string) => `/${locale}${href}`;

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      {/* Hero */}
      <section className="story-hero">
        <div className="container">
          <span className="badge">{d.hero.badge}</span>
          <h1 style={{ whiteSpace: 'pre-line' }}>{d.hero.title}</h1>
          <p>{d.hero.subtitle}</p>
        </div>
      </section>

      {/* Confirmed Products */}
      <section className="section">
        <div className="container">
          <h2>{d.confirmed.title}</h2>
          <div className="pricing-grid">
            {d.confirmed.plans.map((plan) => (
              <div key={plan.name} className="plan">
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  {plan.price}
                </div>
                <p>{plan.desc}</p>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>✓ {f}</li>
                  ))}
                </ul>
                <a href={withLocale(plan.href)} className="btn primary">
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="section light-bg">
        <div className="container">
          <h2>{d.partner.title}</h2>
          <div className="grid grid-2">
            {d.partner.sections.map((s) => (
              <div key={s.heading} className="card">
                <h3>{s.heading}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="cta-block" style={{ marginTop: '2rem' }}>
            <h3>{d.partner.cta.title}</h3>
            <p>{d.partner.cta.desc}</p>
            <a href={withLocale(d.partner.cta.href)} className="btn primary">
              {d.partner.cta.button}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
