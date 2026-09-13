import { COLORS, sectionBase, innerBase, headingStyle } from './theme';

/* ─── How It Works ─── */

const STEPS = [
  {
    num: '1',
    title: 'Pilih Kelas',
    desc: 'Tentukan program yang sesuai dengan kebutuhan dan tujuanmu.',
    color: '#4ECDC4',
  },
  {
    num: '2',
    title: 'Konsultasi Gratis',
    desc: 'Konsultasi dulu via WhatsApp — gratis, nggak ada kewajiban apa pun.',
    color: COLORS.accent,
  },
  {
    num: '3',
    title: 'Mulai Belajar',
    desc: 'Ikuti 2x pertemuan intensif, kerjakan final project, dan kuasai skill barumu!',
    color: '#6366F1',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" style={{ ...sectionBase, background: '#fff' }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            Cara Belajar
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Mulai Belajar dalam 3 Langkah Mudah
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '480px', margin: '0 auto' }}>
            Dari konsultasi sampai mahir, kami dampingi kamu di setiap langkah.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 280px',
                maxWidth: '320px',
                textAlign: 'center',
                padding: '40px 28px',
                borderRadius: COLORS['card-radius'],
                background: COLORS['bg-alt'],
                border: `1px solid ${COLORS['border-light']}`,
                position: 'relative',
              }}
            >
              {/* Step number */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '28px',
                  background: step.color,
                  color: '#fff',
                  fontSize: '22px',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                {step.num}
              </div>

              {/* Connector line between steps */}
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    display: 'none',
                    position: 'absolute',
                    top: '68px',
                    right: '-40px',
                    width: '48px',
                    height: '2px',
                    background: COLORS.border,
                    '@media (min-width: 1024px)': { display: 'block' },
                  } as React.CSSProperties}
                  className="step-line"
                />
              )}

              <h3 style={{ ...headingStyle, fontSize: '18px', marginBottom: '8px' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: COLORS['text-secondary'] }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
