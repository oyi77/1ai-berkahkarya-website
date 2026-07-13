'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 700,
  direction = 'up',
  threshold = 0.2,
  once = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, threshold, once]);

  const translateMap = {
    up: 'translateY(32px)',
    down: 'translateY(-32px)',
    left: 'translateX(32px)',
    right: 'translateX(-32px)',
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0, 0)' : translateMap[direction],
    transition: `opacity ${duration}ms cubic-bezier(0.19, 1, 0.22, 1), transform ${duration}ms cubic-bezier(0.19, 1, 0.22, 1)`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
}