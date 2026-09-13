import { useState, useEffect, useCallback } from 'react';
import { trackViewContent } from '@/lib/tracking';
import { COLORS, sectionBase, innerBase, headingStyle } from './theme';
import { TESTIMONIALS } from './data';

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" style={{ ...sectionBase, background: '#fff' }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            {'\u{1F91D}'} Testimoni
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Apa Kata Alumni Kami?
          </h2>
        </div>

        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            background: COLORS['bg-alt'],
            borderRadius: '24px',
            padding: '40px',
            border: `1px solid ${COLORS['border-light']}`,
            position: 'relative',
          }}
        >
          {/* Quote */}
          <div style={{ fontSize: '48px', lineHeight: 1, color: COLORS.accent, marginBottom: '8px', opacity: 0.4 }}>{'\u201C'}</div>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: COLORS['text-secondary'], fontStyle: 'italic', marginBottom: '24px' }}>
            {t.quote}
          </p>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: COLORS.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '700',
                fontSize: '18px',
                flexShrink: 0,
              }}
            >
              {t.name.charAt(0)}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: '700', fontSize: '15px', color: COLORS.primary, margin: 0 }}>{t.name}</p>
              <p style={{ fontSize: '13px', color: COLORS['text-muted'], margin: 0 }}>{t.company}</p>
            </div>
          </div>

          {/* Before / After */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            <div style={{ flex: 1, padding: '12px', borderRadius: '12px', background: '#FFEBEE', textAlign: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Sebelum</span>
              <p style={{ fontSize: '13px', fontWeight: '600', color: '#C62828', margin: '4px 0 0' }}>{t.before}</p>
            </div>
            <div style={{ flex: 1, padding: '12px', borderRadius: '12px', background: '#E8F5E9', textAlign: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#2E7D32', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Sesudah</span>
              <p style={{ fontSize: '13px', fontWeight: '600', color: '#1B5E20', margin: '4px 0 0' }}>{t.after}</p>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
            <button
              onClick={() => {
                prev();
                trackViewContent('testimonial_prev', 'testimonial_nav');
              }}
              style={{ width: '40px', height: '40px', borderRadius: '50%', border: `1px solid ${COLORS.border}`, background: '#fff', cursor: 'pointer', fontSize: '16px', color: COLORS['text-secondary'], transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS['text-secondary']; }}
              aria-label="Sebelumnya">{'\u2190'}</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    background: i === active ? COLORS.accent : COLORS.border,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={`Testimoni ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => {
                next();
                trackViewContent('testimonial_next', 'testimonial_nav');
              }}
              style={{ width: '40px', height: '40px', borderRadius: '50%', border: `1px solid ${COLORS.border}`, background: '#fff', cursor: 'pointer', fontSize: '16px', color: COLORS['text-secondary'], transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS['text-secondary']; }}
              aria-label="Selanjutnya">{'\u2192'}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
