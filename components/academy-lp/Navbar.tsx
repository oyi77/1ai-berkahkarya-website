import { useState, useEffect } from 'react';
import { trackWhatsAppClick } from '@/lib/tracking';
import { COLORS } from './theme';
import { WA_PHONE } from './data';

/* ─── Navbar ─── */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#fff',
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : '1px solid transparent',
        boxShadow: scrolled ? `0 4px 20px ${COLORS.shadow}` : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span style={{ fontSize: '24px', lineHeight: 1 }}>{'\u{1F393}'}</span>
          <span style={{ fontSize: '18px', fontWeight: '800', color: COLORS.primary, letterSpacing: '-0.5px' }}>
            Berkah<span style={{ color: COLORS.accent }}>Karya</span> Academy
          </span>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: 'none', gap: '32px', alignItems: 'center', '@media (min-width: 768px)': { display: 'flex' } } as React.CSSProperties}
          className="desktop-nav">
          {[
            { label: 'Program', target: 'programs' },
            { label: 'Kenapa Kami', target: 'why-us' },
            { label: 'Testimoni', target: 'testimonials' },
          ].map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '15px',
                fontWeight: '600',
                color: COLORS['text-secondary'],
                cursor: 'pointer',
                padding: '8px 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.primary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS['text-secondary'])}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Halo, saya tertarik dengan kelas di Berkah Karya Academy. Mohon info lebih lanjut.')}`}
          onClick={() =>
            trackWhatsAppClick({
              intent: 'Academy Enrollment',
              phone_number: WA_PHONE,
              message: 'Halo, saya tertarik dengan kelas di Berkah Karya Academy. Mohon info lebih lanjut.',
              product_value: 500000,
            })
          }
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            borderRadius: COLORS['btn-radius'],
            background: COLORS.accent,
            color: '#fff',
            fontWeight: '700',
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'all 0.2s',
            boxShadow: `0 4px 14px ${COLORS.accent}44`,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = COLORS['accent-hover'];
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = `0 6px 20px ${COLORS.accent}66`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = COLORS.accent;
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = `0 4px 14px ${COLORS.accent}44`;
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Konsultasi Gratis
        </a>
      </div>
    </nav>
  );
}
