import { COLORS, sectionBase, innerBase, headingStyle } from './theme';

/* ─── Siapa Yang Cocok ─── */

const PERSONAS = [
  { icon: '\u{1F454}', title: 'Karyawan', desc: 'Upgrade skill digital tanpa ganggu jam kerja' },
  { icon: '\u{1F3E0}', title: 'Ibu Rumah Tangga', desc: 'Cari penghasilan tambahan dari rumah' },
  { icon: '\u{1F393}', title: 'Mahasiswa', desc: 'Persiapan masuk dunia kerja dengan skill siap pakai' },
  { icon: '\u{1F3EA}', title: 'Pelaku UMKM', desc: 'Tingkatkan omzet lewat pemasaran digital' },
  { icon: '\u{1F468}\u200D\u{1F4BC}', title: 'Pemilik Bisnis', desc: 'Efektifkan budget marketing tim Anda' },
  { icon: '\u{1F4F1}', title: 'Content Creator', desc: 'Bikin konten yang benar-benar menghasilkan' },
];

const cardBase: React.CSSProperties = {
  background: '#fff',
  borderRadius: 16,
  padding: '24px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  boxShadow: '0 2px 12px rgba(0,0,0,.06)',
  transition: 'transform .2s, box-shadow .2s',
};

export function SiapaCocokSection() {
  return (
    <section id="siapa-cocok" style={{ ...sectionBase, background: '#fff' }}>
      <div style={innerBase}>
        <h2 style={headingStyle}>Siapa yang Cocok?</h2>
        <p style={{
          textAlign: 'center' as const,
          fontSize: 18,
          color: '#555',
          maxWidth: 640,
          margin: '0 auto 48px',
          lineHeight: 1.6,
        }}>
          Program ini dirancang untuk siapa pun yang ingin langsung praktek —
          tanpa perlu latar belakang teknis atau pengalaman sebelumnya.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 14,
          maxWidth: 860,
          margin: '0 auto',
        }}>
          {PERSONAS.map(p => (
            <div key={p.title} style={cardBase}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <span style={{ fontSize: 28 }}>{p.icon}</span>
              <div>
                <strong style={{ fontSize: 16, display: 'block' }}>{p.title}</strong>
                <span style={{ fontSize: 14, color: '#666' }}>{p.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
