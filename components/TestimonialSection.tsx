import { useEffect, useRef, useState } from 'react';
import styles from './TestimonialSection.module.css';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  metric?: string;
  company?: string;
}

interface Props {
  title: string;
  items: Testimonial[];
}

export default function TestimonialSection({ title, items }: Props) {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]));
            }, index * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <section ref={containerRef} className={styles.wrap} aria-labelledby="testimonial-title">
      <div className={styles.container}>
        <p className={styles.label}>💬 Testimoni</p>
        <h2 id="testimonial-title" className={styles.title}>{title}</h2>

        <div className={styles.grid} role="list">
          {items.map((item, index) => (
            <article
              key={item.name}
              className={`${styles.card} ${visibleCards.has(index) ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 120}ms` }}
              role="listitem"
            >
              <div className={styles.header}>
                <div className={styles.stars} aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                {item.metric && (
                  <span className={styles.metricBadge}>{item.metric}</span>
                )}
              </div>

              <blockquote className={styles.quote}>
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <footer className={styles.author}>
                <div className={styles.avatarWrapper}>
                  <div className={styles.avatar} aria-hidden="true">
                    {item.avatar}
                  </div>
                  <div className={styles.avatarRing} />
                </div>
                <div className={styles.authorInfo}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.role}>{item.role}</p>
                  {item.company && <p className={styles.company}>{item.company}</p>}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}