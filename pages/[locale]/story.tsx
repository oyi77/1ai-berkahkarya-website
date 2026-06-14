import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import { storyData } from '@/data/story';

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

export default function StoryPage({ locale }: { locale: Locale }) {
  const d = storyData[locale];

  const withLocale = (href: string) => `/${locale}${href}`;

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      {/* Hero Narrative */}
      <section className="story-hero">
        <div className="container">
          <span className="badge">{d.hero.badge}</span>
          <h1 style={{ whiteSpace: 'pre-line' }}>{d.hero.title}</h1>
          <p>{d.hero.subtitle}</p>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="section">
        <div className="container">
          <h2>{d.philosophy.title}</h2>
          <div className="grid grid-3">
            {d.philosophy.items.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Reality */}
      <section className="section light-bg">
        <div className="container">
          <h2>{d.daily.title}</h2>
          <p>{d.daily.subtitle}</p>
          <div className="grid grid-2 timeline">
            {d.daily.timeline.map((item) => (
              <div key={item.period} className="timeline-item">
                <strong>{item.period}</strong>
                <span>{item.duration}</span>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Hierarchy */}
      <section className="section">
        <div className="container">
          <h2>{d.hierarchy.title}</h2>
          <p>{d.hierarchy.subtitle}</p>
          <div className="hierarchy">
            {d.hierarchy.levels.map((level) => (
              <div key={level.role} className="hierarchy-level">
                <div className="hierarchy-card">
                  <h3>{level.role}</h3>
                  <p>{level.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section light-bg">
        <div className="container">
          <h2>{d.stats.title}</h2>
          <div className="grid grid-4">
            {d.stats.items.map((item) => (
              <div key={item.label} className="stat-card">
                <span className="stat-value">{item.value}</span>
                <span className="stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container cta-block">
          <h2>{d.cta.title}</h2>
          <p>{d.cta.desc}</p>
          <a href={withLocale(d.cta.href)} className="btn primary">
            {d.cta.button}
          </a>
        </div>
      </section>
    </Layout>
  );
}
