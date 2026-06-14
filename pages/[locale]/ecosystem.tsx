import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { ecosystemData } from '@/data/ecosystem';

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

export default function EcosystemPage({ locale }: { locale: Locale }) {
  const d = ecosystemData[locale];

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

      {/* Service Matrix */}
      <section className="section">
        <div className="container">
          <h2>{d.matrix.title}</h2>
          <p>{d.matrix.subtitle}</p>
          <div className="ecosystem-grid">
            {d.matrix.services.map((service) => (
              <a
                key={service.name}
                href={withLocale(service.href)}
                className="ecosystem-card"
              >
                <div className="eco-header">
                  <span className="eco-emoji">{service.emoji}</span>
                  <div>
                    <h3>{service.name}</h3>
                    <span className="eco-tag">{service.tag}</span>
                  </div>
                </div>
                <p>{service.desc}</p>
                <div className="eco-meta">
                  {service.highlight && (
                    <span className="eco-highlight">{service.highlight}</span>
                  )}
                  {service.arch && (
                    <span className="eco-arch">{service.arch}</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Narrative */}
      <section className="section light-bg">
        <div className="container">
          <h2>{d.architecture.title}</h2>
          <p>{d.architecture.subtitle}</p>
          <div className="arch-stack">
            {d.architecture.layers.map((layer, idx) => (
              <div key={layer.title} className="arch-layer">
                <div className="arch-num">{idx + 1}</div>
                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="section">
        <div className="container">
          <h2>{d.proof.title}</h2>
          <div className="grid grid-3">
            {d.proof.items.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
