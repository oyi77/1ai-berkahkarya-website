import { sectionStyle, innerStyle } from './styles';
import { VALUE_PROPS } from './data';

export function ValuePropsSection() {
  return (
    <section style={{ ...sectionStyle, padding: '4rem 1.5rem' }}>
      <div style={innerStyle}>
        <h2
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
          }}
        >
          Kenapa Belajar di Berkah Karya Academy?
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.9rem',
            marginBottom: '2.5rem',
          }}
        >
          Kami bikin belajar semudah dan seenyaman mungkin buat kamu
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {VALUE_PROPS.map((vp) => (
            <div
              key={vp.title}
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>
                {vp.emoji}
              </span>
              <h3
                style={{
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 700,
                  margin: '0 0 0.35rem',
                }}
              >
                {vp.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                }}
              >
                {vp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
