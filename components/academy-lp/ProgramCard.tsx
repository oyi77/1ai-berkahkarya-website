import { useState } from 'react';
import { trackWhatsAppClick, trackViewContent } from '@/lib/tracking';
import { COLORS, headingStyle } from './theme';
import { WA_PHONE } from './data';
import type { Course } from './types';

export function ProgramCard({ course, onDetail }: { course: Course; onDetail: (c: Course) => void }) {
  const [hovered, setHovered] = useState(false);

  const cardHover: React.CSSProperties = hovered
    ? { transform: 'translateY(-6px)', boxShadow: `0 20px 40px ${COLORS['shadow-lg']}` }
    : { transform: 'translateY(0)', boxShadow: `0 4px 16px ${COLORS.shadow}` };

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: COLORS['card-radius'],
        border: `1px solid ${COLORS['border-light']}`,
        padding: '32px',
        transition: 'all 0.3s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        ...cardHover,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {course.badge && (
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            padding: '4px 12px',
            borderRadius: '50px',
            background: course.colorBg,
            color: course.color,
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0.3px',
          }}
        >
          {course.badge}
        </div>
      )}

      {/* Icon */}
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
          marginBottom: '20px',
        }}
      >
        {course.emoji}
      </div>

      {/* Duration badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '4px 10px',
          borderRadius: '6px',
          background: COLORS['bg-alt'],
          fontSize: '12px',
          fontWeight: '600',
          color: COLORS['text-secondary'],
          marginBottom: '12px',
        }}
      >
        {'\u{1F552}'} {course.duration}
      </div>

      {/* Title & Tagline */}
      <h3 style={{ ...headingStyle, fontSize: '20px', marginBottom: '4px' }}>{course.title}</h3>
      <p style={{ fontSize: '14px', fontWeight: '600', color: course.color, marginBottom: '12px' }}>
        {course.tagline}
      </p>

      {/* Description */}
      <p style={{ fontSize: '14px', lineHeight: 1.7, color: COLORS['text-secondary'], marginBottom: '16px' }}>
        {course.description.length > 120 ? course.description.slice(0, 120) + '...' : course.description}
      </p>

      {/* Audience tags */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {course.audience.slice(0, 3).map((a) => (
          <span
            key={a}
            style={{
              padding: '3px 10px',
              borderRadius: '6px',
              background: COLORS['bg-alt'],
              fontSize: '12px',
              fontWeight: '500',
              color: COLORS['text-secondary'],
            }}
          >
            {a}
          </span>
        ))}
        {course.audience.length > 3 && (
          <span style={{ padding: '3px 10px', borderRadius: '6px', background: COLORS['bg-alt'], fontSize: '12px', fontWeight: '500', color: COLORS['text-muted'] }}>
            +{course.audience.length - 3}
          </span>
        )}
      </div>

      {/* Price & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: `1px solid ${COLORS['border-light']}` }}>
        <span style={{ ...headingStyle, fontSize: '22px', color: course.color }}>{course.price}</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => {
              onDetail(course);
              trackViewContent(course.title, 'course_detail');
            }}
            style={{
              padding: '8px 18px',
              borderRadius: '12px',
              background: COLORS['bg-alt'],
              color: COLORS.primary,
              fontWeight: '600',
              fontSize: '13px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS['accent-light'];
              e.currentTarget.style.color = COLORS.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS['bg-alt'];
              e.currentTarget.style.color = COLORS.primary;
            }}
          >
            Detail Materi
          </button>
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
              gap: '4px',
              padding: '8px 18px',
              borderRadius: '12px',
              background: course.color,
              color: '#fff',
              fontWeight: '600',
              fontSize: '13px',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            {'\u{1F4AC}'} Konsultasi
          </a>
        </div>
      </div>
    </div>
  );
}
