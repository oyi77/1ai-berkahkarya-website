import { COLORS, sectionBase, innerBase, headingStyle } from './theme';

export function CommunitySection() {
  const benefits = [
    { icon: '\u{1F4AC}', title: 'Grup Telegram Eksklusif', desc: 'Tanya jawab langsung dengan mentor dan sesama peserta. 24/7 aktif.' },
    { icon: '\u{1F504}', title: 'Akses Revisi Materi', desc: 'Tidak puas dengan kelas? Bisa ulang di batch berikutnya GRATIS.' },
    { icon: '\u{1F4BB}', title: 'Belajar Online & Offline', desc: 'Hadir langsung atau via Zoom — fleksibel sesuai kondisimu.' },
    { icon: '\u{1F393}', title: 'E-Sertifikat', desc: 'Setiap lulus dapat e-sertifikat sebagai bukti kompetensimu.' },
  ];

  return (
    <section style={{ ...sectionBase, background: '#fff' }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            {'\u{1F465}'} Komunitas & Benefit
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 36px)', marginBottom: '12px' }}>
            Lebih dari Sekadar Kelas
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '480px', margin: '0 auto' }}>
            Kamu dapat akses penuh ke ekosistem belajar Berkah Karya Academy.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 220px',
                maxWidth: '260px',
                padding: '28px 20px',
                borderRadius: '16px',
                background: COLORS['bg-alt'],
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 28px ${COLORS.shadow}`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px', lineHeight: 1 }}>{b.icon}</div>
              <h3 style={{ ...headingStyle, fontSize: '15px', marginBottom: '6px' }}>{b.title}</h3>
              <p style={{ fontSize: '13px', color: COLORS['text-secondary'], lineHeight: 1.6 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
