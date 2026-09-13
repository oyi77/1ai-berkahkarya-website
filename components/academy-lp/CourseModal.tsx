import { useEffect, useRef, useCallback } from 'react';
import { trackWhatsAppClick } from '@/lib/tracking';
import { COLORS, headingStyle } from './theme';
import { WA_PHONE } from './data';
import type { Course } from './types';

export function CourseModal({ course, onClose }: { course: Course; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlay = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlay}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(27,27,58,0.6)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '24px',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
          animation: 'slideUp 0.3s ease',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: COLORS['bg-alt'],
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: COLORS['text-muted'],
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.border; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = COLORS['bg-alt']; }}
          aria-label="Tutup"
        >
          {'\u2715'}
        </button>

        {/* Icon + Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: course.iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              flexShrink: 0,
            }}
          >
            {course.emoji}
          </div>
          <div>
            <h3 style={{ ...headingStyle, fontSize: '22px', marginBottom: '2px' }}>{course.title}</h3>
            <p style={{ fontSize: '14px', fontWeight: '600', color: course.color }}>{course.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p style={{ fontSize: '14px', lineHeight: 1.7, color: COLORS['text-secondary'], marginBottom: '24px' }}>
          {course.description}
        </p>

        {/* Topics */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ ...headingStyle, fontSize: '14px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', color: COLORS['text-muted'] }}>
            {'\u{1F4DD}'} Yang Akan Dipelajari
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {course.topics.map((topic) => (
              <div key={topic} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: COLORS['text-secondary'], lineHeight: 1.5 }}>
                <span style={{ color: COLORS.accent, fontWeight: '700', flexShrink: 0 }}>{'\u2713'}</span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ ...headingStyle, fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: COLORS['text-muted'] }}>
            {'\u{1F465}'} Cocok Untuk
          </h4>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {course.audience.map((a) => (
              <span key={a} style={{ padding: '4px 12px', borderRadius: '8px', background: course.colorBg, color: course.color, fontSize: '13px', fontWeight: '600' }}>
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ ...headingStyle, fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: COLORS['text-muted'] }}>
            {'\u{1F3C6}'} Hasil Akhir
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {course.outcomes.map((o) => (
              <div key={o} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: COLORS['text-secondary'] }}>
                <span style={{ color: COLORS.success, fontWeight: '700', flexShrink: 0 }}>{'\u{2713}'}</span>
                <span>{o}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: `1px solid ${COLORS['border-light']}` }}>
          <div>
            <span style={{ fontSize: '13px', color: COLORS['text-muted'], fontWeight: '500' }}>Investasi</span>
            <p style={{ ...headingStyle, fontSize: '28px', color: course.color, margin: 0 }}>{course.price}</p>
          </div>
          <a
            href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(course.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                intent: 'Academy Enrollment',
                phone_number: WA_PHONE,
                message: course.waText,
                product_name: course.title,
                product_value: 500000,
              })
            }
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: COLORS['btn-radius'],
              background: COLORS.accent,
              color: '#fff',
              fontWeight: '700',
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: `0 4px 14px ${COLORS.accent}44`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS['accent-hover'];
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS.accent;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {'\u{1F4AC}'} Konsultasi Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
