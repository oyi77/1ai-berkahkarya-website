import { useState, useEffect, useRef } from 'react';

/* ─── ScrollReveal Component ─── */

export function ScrollReveal({ children, delay = '0s' }: { children: React.ReactNode; delay?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Wrap sections with scroll-reveal ─── */

export function RevealedSection({ children, delay = '0s' }: { children: React.ReactNode; delay?: string }) {
  return (
    <ScrollReveal delay={delay}>
      {children}
    </ScrollReveal>
  );
}
