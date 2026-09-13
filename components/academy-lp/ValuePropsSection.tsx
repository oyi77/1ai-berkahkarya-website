import { COLORS, sectionBase, innerBase, headingStyle } from './theme';
import { VALUE_PROPS } from './data';

export function ValuePropsSection() {
  return (
    <section id="why-us" style={{ ...sectionBase, background: COLORS['bg-alt'] }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            Kenapa Kami?
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Kenapa Belajar di Berkah Karya Academy?
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '520px', margin: '0 auto' }}>
            Kami bikin belajar semudah dan seenyaman mungkin buat kamu.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {VALUE_PROPS.map((vp, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 300px',
                maxWidth: '360px',
                background: '#fff',
                borderRadius: '16px',
                padding: '28px',
                border: `1px solid ${COLORS['border-light']}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 28px ${COLORS.shadow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: vp.colorBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '16px',
                }}
              >
                {vp.icon}
              </div>
              <h3 style={{ ...headingStyle, fontSize: '16px', marginBottom: '8px' }}>{vp.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: COLORS['text-secondary'] }}>{vp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
