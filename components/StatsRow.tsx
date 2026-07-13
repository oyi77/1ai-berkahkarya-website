'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsRow.module.css';

interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface Props {
  items: Stat[];
  cta?: { text: string; href: string };
}

export default function StatsRow({ items, cta }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetValues = items.map((item) => {
      const numStr = item.value.replace(/[^\d.]/g, '');
      return parseFloat(numStr) || 0;
    });

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const currentValues = targetValues.map((target) => Math.floor(target * eased));
      setAnimatedValues(currentValues);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimatedValues(targetValues);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, items]);

  return (
    <div ref={containerRef} className={styles.wrap}>
      <div className={styles.row}>
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`${styles.item} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <span className={styles.value}>
              {item.prefix || ''}
              {isVisible && animatedValues[index] !== undefined
                ? animatedValues[index].toLocaleString()
                : item.value}
              {item.suffix || ''}
            </span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
      {cta && (
        <div className={styles.ctaWrap}>
          <a href={cta.href} className={styles.ctaLink}>
            {cta.text}
          </a>
        </div>
      )}
    </div>
  );
}