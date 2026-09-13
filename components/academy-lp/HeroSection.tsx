import { trackWhatsAppClick } from '@/lib/tracking';
import { COLORS, innerBase, headingStyle } from './theme';
import { WA_PHONE } from './data';

export function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
        background: 'linear-gradient(135deg, #FFFAF0 0%, #FFFFFF 50%, #F7F7FC 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(78,205,196,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={innerBase}>
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Trust badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '50px',
              background: COLORS['accent-light'],
              color: COLORS.accent,
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '28px',
            }}
          >
            <span style={{ fontSize: '18px' }}>{'\u{1F393}'}</span>
            <span>Belajar Skill Digital — 2x Pertemuan Intensif, Langsung Praktik</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              ...headingStyle,
              fontSize: 'clamp(36px, 6vw, 64px)',
              letterSpacing: '-1.5px',
              marginBottom: '20px',
            }}
          >
            Siap Praktek dalam{' '}
            <span style={{ color: COLORS.accent, display: 'inline-block' }}>
              2x Pertemuan Intensif
            </span>
            {' '}— Dijamin Bisa!
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: 1.7,
              color: COLORS['text-secondary'],
              maxWidth: '640px',
              margin: '0 auto 36px',
              fontWeight: '400',
            }}
          >
            Belajar skill digital dari praktisi aktif lewat 2x pertemuan intensif. Kurikulum padat, langsung praktek, beneran bisa dipakai. Karyawan, IRT, pemilik usaha — semua cocok.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <a
              href="#programs"
              onClick={(e) => { e.preventDefault(); document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                borderRadius: COLORS['btn-radius'],
                background: COLORS.accent,
                color: '#fff',
                fontWeight: '700',
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                boxShadow: `0 6px 20px ${COLORS.accent}44`,
                cursor: 'pointer',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS['accent-hover'];
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 8px 28px ${COLORS.accent}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = COLORS.accent;
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 6px 20px ${COLORS.accent}44`;
              }}
            >
              Lihat Program Kami {'\u2192'}
            </a>
            <a
              href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Halo, saya mau konsultasi dulu tentang kelas di Berkah Karya Academy.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  intent: 'Academy Consultation',
                  phone_number: WA_PHONE,
                  message: 'Halo, saya mau konsultasi dulu tentang kelas di Berkah Karya Academy.',
                  product_value: 500000,
                })
              }
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                borderRadius: COLORS['btn-radius'],
                background: 'transparent',
                color: COLORS.primary,
                fontWeight: '700',
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                border: `2px solid ${COLORS.border}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = COLORS.accent;
                e.currentTarget.style.background = COLORS['accent-light'];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = COLORS.border;
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {'\u{1F4AC}'} Konsultasi Dulu
            </a>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              padding: '20px 32px',
              background: '#fff',
              borderRadius: '16px',
              boxShadow: `0 4px 20px ${COLORS.shadow}`,
              border: `1px solid ${COLORS['border-light']}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', lineHeight: 1 }}>{'\u{2B50}'}</span>
              <span style={{ fontSize: '14px', fontWeight: '700', color: COLORS.primary }}>4.9</span>
              <span style={{ fontSize: '13px', color: COLORS['text-muted'] }}>Rating Peserta</span>
            </div>
            <div style={{ width: '1px', height: '24px', background: COLORS.border }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', lineHeight: 1 }}>{'\u{1F465}'}</span>
              <span style={{ fontSize: '14px', fontWeight: '700', color: COLORS.primary }}>100+</span>
              <span style={{ fontSize: '13px', color: COLORS['text-muted'] }}>Alumni</span>
            </div>
            <div style={{ width: '1px', height: '24px', background: COLORS.border }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', lineHeight: 1 }}>{'\u{1F4DA}'}</span>
              <span style={{ fontSize: '14px', fontWeight: '700', color: COLORS.primary }}>4</span>
              <span style={{ fontSize: '13px', color: COLORS['text-muted'] }}>Program Kelas</span>
            </div>
            <div style={{ width: '1px', height: '24px', background: COLORS.border }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', lineHeight: 1 }}>{'\u{1F4B5}'}</span>
              <span style={{ fontSize: '14px', fontWeight: '700', color: COLORS.primary }}>Rp 500K</span>
              <span style={{ fontSize: '13px', color: COLORS['text-muted'] }}>Mulai dari</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
