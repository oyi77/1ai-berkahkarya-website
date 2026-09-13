import { COLORS, sectionBase, innerBase, headingStyle } from './theme';

export function CredibilitySection() {
  return (
    <section style={{ ...sectionBase, background: COLORS['bg-alt'] }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            {'\u{1F3C6}'} Sertifikasi & Mitra
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Didukung oleh Mitra & Lembaga Terpercaya
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '540px', margin: '0 auto' }}>
            Setiap kelas dilengkapi dengan e-sertifikat dan didukung oleh ekosistem digital terpercaya.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { name: 'YPSMA Jombang', desc: 'Yayasan Pendidikan dan Sosial Ma\'arif', color: '#6366F1', bg: '#EEEDFD' },
            { name: 'Vilona AI', desc: 'AI Agent Ecosystem untuk Bisnis', color: '#4ECDC4', bg: '#E8FAF8' },
            { name: 'BerkahKarya Digital', desc: 'Digital Agency & AI Solutions', color: COLORS.accent, bg: COLORS['accent-light'] },
          ].map((partner, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 280px',
                maxWidth: '340px',
                background: '#fff',
                borderRadius: '20px',
                padding: '32px',
                border: `1px solid ${COLORS['border-light']}`,
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 28px ${COLORS.shadow}`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: partner.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '28px',
                }}
              >
                {'\u{1F3EB}'}
              </div>
              <h3 style={{ ...headingStyle, fontSize: '16px', marginBottom: '6px' }}>{partner.name}</h3>
              <p style={{ fontSize: '13px', color: COLORS['text-secondary'], lineHeight: 1.5 }}>{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
