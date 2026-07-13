'use client';

import { useEffect, useRef, useState } from 'react';
import { trackCTAClick } from '@/lib/tracking';
import styles from './SocialProof.module.css';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  metric?: string;
}

interface Props {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  userCount: string;
  userCountLabel: string;
  cta: { text: string; href: string };
}

function Counter({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [animated, setAnimated] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    const raw = value.replace(/[^\d.]/g, '');
    const target = parseFloat(raw) || 0;

    const duration = 2200;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(target * eased);

      if (current !== countRef.current) {
        countRef.current = current;
        setAnimated(current);
      }

      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isVisible, value]);

  if (!isVisible || !animated) {
    return <span className={styles.countNum}>{animated || 0}</span>;
  }

  return <span className={styles.countNum}>{animated.toLocaleString()}</span>;
}

export default function SocialProof({
  title,
  subtitle,
  testimonials,
  userCount,
  userCountLabel,
  cta,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.wrap} aria-labelledby="social-proof-title">
      <div className={styles.container}>
        {/* User count */}
        <div className={styles.countWrap}>
          <span className={styles.countLabel}>{userCountLabel}</span>
          <Counter value={userCount} isVisible={isVisible} />
          <span className={styles.countSuffix}>+</span>
        </div>

        {/* Title & subtitle */}
        <h2 id="social-proof-title" className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        {/* Testimonials grid */}
        <div className={styles.grid} role="list">
          {testimonials.map((item, i) => (
            <article
              key={item.name}
              className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
              role="listitem"
            >
              {/* Stars */}
              <div className={styles.stars} aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              {/* Quote */}
              <blockquote className={styles.quote}>
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <footer className={styles.author}>
                <div className={styles.avatarRing}>
                  <span className={styles.avatar}>{item.avatar}</span>
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.role}>{item.role}</span>
                </div>
                {item.metric && (
                  <span className={styles.metricBadge}>{item.metric}</span>
                )}
              </footer>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrap}>
          <a
            href={cta.href}
            className={styles.cta}
            onClick={(e) => {
              trackCTAClick(cta.text, cta.href);
            }}
          >
            {cta.text}
          </a>
        </div>
      </div>
    </section>
  );
}
