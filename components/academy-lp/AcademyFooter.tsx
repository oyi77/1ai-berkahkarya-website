import { trackWhatsAppClick } from '@/lib/tracking';
import { COLORS, innerBase, headingStyle } from './theme';
import { COURSES, WA_PHONE } from './data';

export function AcademyFooter() {
  return (
    <footer
      style={{
        background: '#111128',
        color: 'rgba(255,255,255,0.7)',
        padding: '60px 0 0',
      }}
    >
      <div style={innerBase}>
        <div
          style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Brand */}
          <div style={{ flex: '1 1 260px', maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '24px' }}>{'\u{1F393}'}</span>
              <span style={{ fontSize: '18px', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px' }}>
                Berkah<span style={{ color: COLORS.accent }}>Karya</span>
              </span>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
              AI Ecosystem untuk bisnis Indonesia. Tools, automation, dan sistem AI yang langsung menghasilkan.
            </p>
          </div>

          {/* Program */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Program</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {COURSES.map((c) => (
                <a
                  key={c.id}
                  href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(c.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      intent: 'Academy Enrollment',
                      phone_number: WA_PHONE,
                      message: c.waText,
                      product_name: c.title,
                      product_value: 500000,
                    })
                  }
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  {c.title}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Informasi</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Tentang Kami', 'Hubungi Kami', 'FAQ', 'Kebijakan Privasi'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Kontak</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={`https://wa.me/${WA_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    intent: 'Academy Contact',
                    phone_number: WA_PHONE,
                    product_value: 500000,
                  })
                }
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                {'\u{1F4F1}'} {WA_PHONE}
              </a>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginTop: '8px' }}>
                Perumahan Nirwana Regency<br />
                Blok C12, Jombang<br />
                Jawa Timur
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            padding: '24px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
            {'\u00A9'} 2026 BerkahKarya · Berkah Karya Digital Agency
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
            Mitra Pendidikan: <a href="https://ypsma.org" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.accent, textDecoration: 'none' }}>YPSMA Jombang</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
