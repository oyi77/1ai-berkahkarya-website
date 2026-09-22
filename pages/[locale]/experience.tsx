import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import { experienceData } from '@/data/experience';

type Locale = 'id' | 'en';

/**
 * Hook: observes element visibility and toggles `is-visible` class.
 * Powers all `.animate-on-scroll` elements. Copied from index.tsx.
 */
function useScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function ExperiencePage({ locale }: { locale: Locale }) {
  const d = experienceData[locale];

  // Initialize scroll-triggered animations
  useScrollAnimations();

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      {/* Sticky CTA — visible from act 1, unlike Santioni */}
      <a
        href={d.stickyCta.href}
        className="btn btn--primary"
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50 }}
      >
        {d.stickyCta.text}
      </a>

      {d.acts.map((act, i) => {
        const isHero = act.id === 'tuang' || act.id === 'pour';
        const isFinale = i === d.acts.length - 1;
        return (
          <section
            key={act.id}
            id={act.id}
            className="section"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
          >
            <div className="container animate-on-scroll fade-up">
              <p className="eyebrow">{act.eyebrow}</p>
              <h1
                className={isHero ? 'glow-text' : undefined}
                style={{
                  fontSize: 'var(--text-6xl)',
                  lineHeight: 1.05,
                  whiteSpace: 'pre-line',
                  margin: 'var(--space-4) 0',
                }}
              >
                {act.title}
              </h1>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: 'var(--text-lg)',
                  maxWidth: '38rem',
                }}
              >
                {act.desc}
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                <span className="tag">{act.proof}</span>
              </p>
              {isFinale && (
                <p style={{ marginTop: 'var(--space-6)' }}>
                  <a href={d.stickyCta.href} className="btn btn--primary">
                    {d.stickyCta.text}
                  </a>
                </p>
              )}
            </div>
          </section>
        );
      })}
    </Layout>
  );
}
