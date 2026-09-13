import type { Course } from './types';
import { btnPrimary } from './styles';
import { WA_PHONE } from './data';

export function FooterCTA({ courses }: { courses: Course[] }) {
  return (
    <section
      style={{
        padding: '4rem 1.5rem',
        background: 'linear-gradient(135deg, #14142b, #1a1a3e)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>
          🚀
        </span>
        <h2
          style={{
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 700,
            margin: '0 0 0.75rem',
          }}
        >
          Siap Mulai Perjalanan Belajarmu?
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
            lineHeight: 1.6,
          }}
        >
          Konsultasi dulu via WhatsApp. Tanya apa aja, nggak ada kewajiban daftar.
          Kami bantu pilihkan kelas yang paling cocok buat kamu.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            alignItems: 'center',
          }}
        >
          {courses.map((course) => (
            <a
              key={course.id}
              href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(course.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...btnPrimary,
                width: '100%',
                maxWidth: '400px',
                justifyContent: 'center',
                fontSize: '0.9rem',
                padding: '0.75rem 1.5rem',
              }}
            >
              {course.emoji} Tanya Kelas {course.title}
            </a>
          ))}
        </div>

        <p
          style={{
            marginTop: '1.5rem',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '0.75rem',
          }}
        >
          Atau hubungi langsung via{' '}
          <a
            href={`https://wa.me/${WA_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#a5b4fc', textDecoration: 'none' }}
          >
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
