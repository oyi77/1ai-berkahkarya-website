import { GetStaticPaths, GetStaticProps } from 'next';
import { Component, ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import { experienceData } from '@/data/experience';

type Locale = 'id' | 'en';

/**
 * WebGL scene — client-only (R3F), lazy-loaded so SSR/static export stays clean.
 * Text content stays server-rendered for SEO; the 3D canvas mounts behind it.
 */
const ExperienceScene = dynamic(() => import('@/components/experience/ExperienceScene'), {
  ssr: false,
});

/* Catch WebGL/runtime failures → degrade to the static gradient behind the text. */
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {}
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

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
  const [reduced, setReduced] = useState(false);
  const [webgl, setWebgl] = useState(true);
  useStoryEngine();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    setWebgl(webglAvailable());
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const showScene = !reduced && webgl;

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      {/* 3D scene behind everything — or a static gradient when reduced/no-WebGL */}
      {showScene ? (
        <SceneBoundary>
          <ExperienceScene />
        </SceneBoundary>
      ) : (
        <div
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            background: 'radial-gradient(ellipse at 50% 30%, #14141a 0%, #0a0a0a 60%)',
          }}
        />
      )}

      {/* Progress bar — hidden under reduced motion (no scrub to track) */}
      {!reduced && (
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
      )}

      {/* Sticky CTA — reachable from the start */}
      <a
        href={d.stickyCta.href}
        className="btn btn--primary"
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50 }}
      >
        {d.stickyCta.text}
      </a>

      {/* Intro — title card floating over the wasteland */}
      <section
        className="section"
        style={{
          minHeight: reduced ? undefined : '100vh',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="container story-beat is-visible" style={{ pointerEvents: 'none' }}>
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
            className="scroll-hint"
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

      {/* Acts — text floats over the living 3D scene */}
      {d.acts.map((act: (typeof d.acts)[number]) => {
        const color = act.mood === 'color';
        return (
          <section
            key={act.id}
            id={act.id}
            className="section"
            style={{
              minHeight: reduced ? undefined : '120vh',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div className="container story-beat">
              <div
                className="card"
                style={{
                  padding: 'clamp(2rem, 6vw, 4.5rem)',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid var(--glass-border)',
                }}
              >
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
                    WebkitTextStroke: color ? '2px var(--accent)' : '2px var(--border-strong)',
                    opacity: 0.45,
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
                <p className="lead" style={{ maxWidth: '40rem', whiteSpace: 'pre-line' }}>
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
      <p style={{ textAlign: 'center', color: 'var(--text-subtle)', fontSize: 'var(--text-xs)', paddingBottom: 'var(--space-6)', position: 'relative', zIndex: 1 }}>
        {d.credit}
      </p>
    </Layout>
  );
}
