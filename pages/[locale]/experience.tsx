import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import { experienceData } from '@/data/experience';

type Locale = 'id' | 'en';

/**
 * Story engine: reveal on scroll + parallax drift + progress bar.
 * Pure CSS/IO — no WebGL, no new deps. Text stays SSR for SEO.
 */
function useStoryEngine() {
  useEffect(() => {
    const els = document.querySelectorAll('.story-beat');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );
    els.forEach((el) => io.observe(el));

    const bar = document.getElementById('story-progress');
    const onScroll = () => {
      if (!bar) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
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
  useStoryEngine();

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      {/* Progress bar — the journey meter */}
      <div
        id="story-progress"
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'var(--gradient-primary)',
          transform: 'scaleX(0)',
          transformOrigin: '0 50%',
          zIndex: 60,
        }}
      />
      {/* Sticky CTA — visible from the start, unlike Santioni */}
      <a
        href={d.stickyCta.href}
        className="btn btn--primary"
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50 }}
      >
        {d.stickyCta.text}
      </a>

      {/* Intro — the title card */}
      <section
        className="section"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div className="container story-beat is-visible">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            {d.intro.kicker}
          </p>
          <h1
            className="glow-text"
            style={{ fontSize: 'var(--text-7xl)', lineHeight: 1, margin: 'var(--space-4) 0' }}
          >
            {d.intro.title}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)' }}>{d.intro.sub}</p>
          <p
            aria-hidden
            style={{
              marginTop: 'var(--space-8)',
              fontSize: 'var(--text-3xl)',
              animation: 'bounce-subtle 2s ease-in-out infinite',
            }}
          >
            ↓
          </p>
        </div>
      </section>

      {/* Acts — comic panels, mono → color */}
      {d.acts.map((act: (typeof d.acts)[number]) => {
        const color = act.mood === 'color';
        return (
          <section
            key={act.id}
            id={act.id}
            className="section"
            style={{
              minHeight: '110vh',
              display: 'flex',
              alignItems: 'center',
              background: color ? 'var(--gradient-hero)' : 'transparent',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <div className="container story-beat">
              <div
                className="card"
                style={{
                  padding: 'clamp(2rem, 6vw, 4.5rem)',
                  position: 'relative',
                  overflow: 'hidden',
                  filter: color ? 'none' : 'grayscale(1)',
                }}
              >
                {/* Giant act number — the comic panel mark */}
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: '-0.25em',
                    right: '0.1em',
                    fontSize: 'clamp(6rem, 20vw, 14rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: 'transparent',
                    WebkitTextStroke: color
                      ? '2px var(--accent)'
                      : '2px var(--border-strong)',
                    opacity: 0.5,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {act.no}
                </span>
                <p className="eyebrow">{act.eyebrow}</p>
                <h2
                  className={color ? 'text-gradient' : undefined}
                  style={{
                    fontSize: 'var(--text-5xl)',
                    lineHeight: 1.05,
                    whiteSpace: 'pre-line',
                    margin: 'var(--space-4) 0',
                  }}
                >
                  {act.title}
                </h2>
                <p
                  className="lead"
                  style={{ maxWidth: '40rem', whiteSpace: 'pre-line' }}
                >
                  {act.body}
                </p>
                <p style={{ marginTop: 'var(--space-5)' }}>
                  <span className="tag">{act.caption}</span>
                </p>
                {'cta' in act && act.cta && (
                  <p style={{ marginTop: 'var(--space-6)' }}>
                    <a href={act.cta.href} className="btn btn--primary">
                      {act.cta.text}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </Layout>
  );
}
