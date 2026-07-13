'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './ProofBar.module.css';
import { trackCTAClick } from '@/lib/tracking';

interface Stat {
  value: string;
  label: string;
  detail: string;
}

interface Props {
  title: string;
  stats: Stat[];
  growthMetric: { value: string; label: string };
  techBadges: string[];
}

function useIntersection(ref: React.RefObject<Element | null>, threshold = 0.2) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
}

function useCountUp(target: number, active: boolean, duration = 2000) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(target * eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCurrent(target);
      }
    };

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return current;
}

function StatCard({
  stat,
  index,
  isVisible,
  onToggle,
  expanded,
  onTrack,
}: {
  stat: Stat;
  index: number;
  isVisible: boolean;
  expanded: boolean;
  onToggle: () => void;
  onTrack: () => void;
}) {
  return (
    <button
      type="button"
      className={`${styles.statCard} ${isVisible ? styles.statVisible : ''} ${expanded ? styles.statExpanded : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={() => {
        onToggle();
        onTrack();
      }}
      aria-expanded={expanded}
    >
      <span className={styles.statValue}>{stat.value}</span>
      <span className={styles.statLabel}>{stat.label}</span>
      <span className={styles.toggleArrow} aria-hidden>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div className={styles.statDetail} role="region">
        <span>{stat.detail}</span>
      </div>
    </button>
  );
}

function TechBadge({ label }: { label: string }) {
  return <span className={styles.badge}>{label}</span>;
}

export default function ProofBar({ title, stats, growthMetric, techBadges }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(sectionRef, 0.2);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const growthNum = parseInt(growthMetric.value.replace(/[^\d.]/g, ''), 10) || 0;
  const growthPrefix = growthMetric.value.startsWith('+') ? '+' : '';
  const growthSuffix = growthMetric.value.replace(/^[+\d.]*/, '');
  const count = useCountUp(growthNum, isVisible, 2200);

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={i}
              isVisible={isVisible}
              expanded={expandedIndex === i}
              onToggle={() => handleToggle(i)}
              onTrack={() => trackCTAClick(`proof-stat-${i}`, `stat:${stat.label}`)}
            />
          ))}
        </div>

        <div className={`${styles.growthWrap} ${isVisible ? styles.growthVisible : ''}`}>
          <div className={styles.growthMetric}>
            <span className={styles.growthValue}>
              {growthPrefix}
              {count.toLocaleString()}
              {growthSuffix}
            </span>
            <span className={styles.growthLabel}>{growthMetric.label}</span>
          </div>
        </div>

        <div className={styles.badgesRow}>
          {techBadges.map((badge) => (
            <TechBadge key={badge} label={badge} />
          ))}
        </div>
      </div>
    </section>
  );
}
