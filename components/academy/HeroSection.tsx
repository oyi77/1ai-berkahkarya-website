import { innerStyle, btnPrimary } from './styles';

export function HeroSection({ scrollToCourses }: { scrollToCourses: () => void }) {
  return (
    <section
      style={{
        padding: '6rem 1.5rem 5rem',
        background: 'linear-gradient(135deg, #0a0a1a 0%, #14142b 50%, #0a0a1a 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ ...innerStyle, position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#a5b4fc',
            background: 'rgba(99,102,241,0.15)',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase' as const,
          }}
        >
          🎓 Berkah Karya Academy
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.2,
            margin: '0 auto 1rem',
            maxWidth: '800px',
          }}
        >
          Kuasai Skill Digital Paling Dibutuhkan{' '}
          <span style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Saat Ini
          </span>
          , Langsung dari Praktisi.
        </h1>

        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            lineHeight: 1.7,
            maxWidth: '650px',
            margin: '0 auto 2rem',
          }}
        >
          Belajar langsung dari praktisi yang sudah bertahun-tahun berkecimpung di industri. 
          Kurikulum praktis, bukan teori mulu. Langsung bisa dipakai kerja.
        </p>

        <button onClick={scrollToCourses} style={{ ...btnPrimary, fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}>
          Lihat Daftar Kursus ↓
        </button>
      </div>
    </section>
  );
}
