import { trackWhatsAppClick } from '@/lib/tracking';
import { COLORS, innerBase, headingStyle } from './theme';
import { WA_PHONE } from './data';

export function ClosingCTA() {
  return (
    <section
      style={{
        padding: '100px 0',
        background: COLORS.primary,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,166,35,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(78,205,196,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ ...innerBase, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            ...headingStyle,
            fontSize: 'clamp(28px, 4vw, 42px)',
            color: '#fff',
            marginBottom: '16px',
          }}
        >
          Siap Mulai{' '}
          <span style={{ color: COLORS.accent }}>Perjalanan Belajar</span>?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '500px',
            margin: '0 auto 36px',
          }}
        >
          Konsultasi dulu via WhatsApp. Tanya apa aja, nggak ada kewajiban daftar. Kami bantu pilihkan kelas yang paling cocok buat kamu.
        </p>

        <a
          href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Halo, saya mau konsultasi kelas di Berkah Karya Academy. Apakah ada yang cocok untuk saya?')}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackWhatsAppClick({
              intent: 'Academy Enrollment',
              phone_number: WA_PHONE,
              message: 'Halo, saya mau konsultasi kelas di Berkah Karya Academy. Apakah ada yang cocok untuk saya?',
              product_value: 500000,
            })
          }
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 40px',
            borderRadius: COLORS['btn-radius'],
            background: COLORS.accent,
            color: '#fff',
            fontWeight: '700',
            fontSize: '17px',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            boxShadow: `0 6px 24px ${COLORS.accent}55`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = COLORS['accent-hover'];
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = `0 10px 32px ${COLORS.accent}77`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = COLORS.accent;
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = `0 6px 24px ${COLORS.accent}55`;
          }}
        >
          {'\u{1F4AC}'} Konsultasi Gratis Sekarang
        </a>

        {/* Checklist */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            marginTop: '36px',
          }}
        >
          {[
            'Tanpa Biaya Konsultasi',
            'Garansi Bisa Ulang',
            'Mentor Berpengalaman',
            'E-Sertifikat',
          ].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: '500' }}>
              <span style={{ color: COLORS.accent, fontWeight: '700' }}>{'\u2713'}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
