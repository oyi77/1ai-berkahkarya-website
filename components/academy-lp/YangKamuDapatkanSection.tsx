import { COLORS, sectionBase, innerBase, headingStyle } from './theme';

const BENEFITS = [
  { icon: '\u{1F393}', title: 'Sertifikat Kelulusan', desc: 'Bukti resmi penyelesaian program yang bisa dipajang di LinkedIn & CV' },
  { icon: '\u{1F4DA}', title: 'Akses Materi Selamanya', desc: 'Review rekaman kelas kapan aja, di mana aja — tanpa batas waktu' },
  { icon: '\u{1F4AC}', title: 'Konsultasi 1 Bulan', desc: 'Tanya langsung ke mentor lewat grup eksklusif setelah kelas selesai' },
  { icon: '\u{1F91D}', title: 'Grup Komunitas', desc: 'Networking dengan sesama peserta dan alumni' },
  { icon: '\u{1F3C6}', title: 'Final Project & Portofolio', desc: 'Hasil nyata yang bisa langsung dipamerkan ke klien atau atasan' },
  { icon: '\u{1F504}', title: 'Garansi Bisa Ulang', desc: 'Gratis ikut lagi di batch berikutnya kalau belum puas' },
];

const benefitCard: React.CSSProperties = {
  background: COLORS['bg-alt'],
  borderRadius: 16,
  padding: '28px 24px',
  textAlign: 'center' as const,
  transition: 'transform .2s',
};

export function YangKamuDapatkanSection() {
  return (
    <section id="dapatkan" style={{ ...sectionBase, background: COLORS['bg-alt'] }}>
      <div style={innerBase}>
        <h2 style={headingStyle}>Yang Kamu Dapatkan</h2>
        <p style={{
          textAlign: 'center' as const,
          fontSize: 18,
          color: '#555',
          maxWidth: 600,
          margin: '0 auto 48px',
          lineHeight: 1.6,
        }}>
          Investasi sekali, manfaat jangka panjang.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 20,
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {BENEFITS.map(b => (
            <div key={b.title} style={benefitCard}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>{b.icon}</div>
              <h3 style={{ fontSize: 17, margin: '0 0 8px', color: COLORS['text-dark'] }}>{b.title}</h3>
              <p style={{ fontSize: 14, color: '#555', margin: 0, lineHeight: 1.5 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
