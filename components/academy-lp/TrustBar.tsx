import { COLORS, innerBase } from './theme';
import { PARTNER_NAMES } from './data';

export function TrustBar() {
  return (
    <section style={{ padding: '48px 0', background: '#fff', borderBottom: `1px solid ${COLORS['border-light']}` }}>
      <div style={innerBase}>
        <p style={{ textAlign: 'center', fontSize: '13px', fontWeight: '600', color: COLORS['text-muted'], textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '28px' }}>
          Mitra & Partner Kami
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            opacity: 0.6,
          }}
        >
          {PARTNER_NAMES.map((name, i) => (
            <div
              key={i}
              style={{
                fontSize: '16px',
                fontWeight: '700',
                color: COLORS['text-secondary'],
                letterSpacing: '-0.3px',
                padding: '8px 16px',
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
