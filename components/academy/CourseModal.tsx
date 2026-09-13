import type { Course } from './types';
import { overlayStyle, modalStyle, closeBtnStyle, tagStyle, btnPrimary } from './styles';
import { WA_PHONE } from './data';

export function CourseModal({
  course,
  onClose,
}: {
  course: Course;
  onClose: () => void;
}) {
  return (
    <div
      style={overlayStyle}
      onClick={(e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div style={modalStyle}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1.5rem',
          }}
        >
          <div>
            <span style={{ fontSize: '2rem' }}>{course.emoji}</span>
            <h3
              style={{
                margin: '0.5rem 0 0',
                color: '#fff',
                fontSize: '1.35rem',
              }}
            >
              {course.title}
            </h3>
            <p
              style={{
                margin: '0.25rem 0 0',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.85rem',
              }}
            >
              {course.tagline}
            </p>
          </div>
          <button onClick={onClose} style={closeBtnStyle}>
            ✕
          </button>
        </div>

        {/* Description */}
        <p
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
          }}
        >
          {course.description}
        </p>

        {/* Yang Akan Dipelajari */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4
            style={{
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            📚 Yang Akan Dipelajari
          </h4>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.25rem',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.85rem',
              lineHeight: 2,
            }}
          >
            {course.topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        {/* Cocok Untuk */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4
            style={{
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            🎯 Cocok Untuk
          </h4>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {course.audience.map((a) => (
              <span key={a} style={tagStyle}>
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Hasil Akhir */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4
            style={{
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            ✅ Hasil Akhir
          </h4>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.25rem',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.85rem',
              lineHeight: 2,
            }}
          >
            {course.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>

        {/* Price & CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.8rem',
              }}
            >
              Harga
            </p>
            <p
              style={{
                margin: '0.15rem 0 0',
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 700,
              }}
            >
              {course.price}
            </p>
          </div>
          <a
            href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(course.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={btnPrimary}
          >
            💬 Daftar Kelas {course.title} Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
