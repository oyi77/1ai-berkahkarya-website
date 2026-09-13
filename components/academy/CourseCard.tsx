import type { Course } from './types';
import { cardStyle, tagStyle, btnPrimary } from './styles';
import { WA_PHONE } from './data';

export function CourseCard({
  course,
  onDetail,
}: {
  course: Course;
  onDetail: () => void;
}) {
  return (
    <div style={cardStyle}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '0.25rem',
        }}
      >
        <span
          style={{
            fontSize: '2rem',
            width: '3.25rem',
            height: '3.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(99,102,241,0.1)',
            borderRadius: '0.75rem',
          }}
        >
          {course.emoji}
        </span>
        <div>
          <h3 style={{ margin: 0, color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>
            {course.title}
          </h3>
          <p style={{ margin: '0.15rem 0 0', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
            {course.tagline}
          </p>
        </div>
      </div>

      <p
        style={{
          margin: 0,
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.85rem',
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {course.description.slice(0, 160)}...
      </p>

      <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
        {course.audience.slice(0, 3).map((a) => (
          <span key={a} style={tagStyle}>
            {a}
          </span>
        ))}
        {course.audience.length > 3 && (
          <span
            style={{
              ...tagStyle,
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            +{course.audience.length - 3}
          </span>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
          {course.price}
        </span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={onDetail}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'transparent',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Lihat Detail Materi
          </button>
          <a
            href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(course.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...btnPrimary,
              padding: '0.5rem 1rem',
              fontSize: '0.75rem',
            }}
          >
            💬 Daftar
          </a>
        </div>
      </div>
    </div>
  );
}
