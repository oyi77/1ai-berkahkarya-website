import styles from './EcosystemDiagram.module.css';

interface Props {
  title: string;
  subtitle: string;
  visualPlaceholder: string;
}

interface Service {
  icon: string;
  name: string;
}

interface Layer {
  label: string;
  services: Service[];
  color: string;
}

const layers: Layer[] = [
  {
    label: 'Core Gateway',
    color: 'var(--color-primary)',
    services: [
      { icon: '🌐', name: 'OmniRoute' },
      { icon: '🏪', name: '1AI' },
    ],
  },
  {
    label: 'Revenue Engines',
    color: 'var(--color-secondary)',
    services: [
      { icon: '📢', name: '1AI-Ads' },
      { icon: '💼', name: '1AI-Affiliate' },
      { icon: '🎬', name: '1AI-Content' },
      { icon: '👥', name: '1AI-Social' },
    ],
  },
  {
    label: 'Automation & Infra',
    color: 'var(--color-accent)',
    services: [
      { icon: '⚡', name: '1AI-Workflow' },
      { icon: '📱', name: 'Phonefarm' },
      { icon: '🚪', name: 'CF-Router' },
      { icon: '💬', name: 'Waha' },
    ],
  },
  {
    label: 'Specialized',
    color: 'var(--color-warning)',
    services: [
      { icon: '🔮', name: 'Poly-Trader' },
      { icon: '⚖️', name: 'Paperclip' },
    ],
  },
];

export default function EcosystemDiagram({ title, subtitle, visualPlaceholder }: Props) {
  const totalLayers = layers.length;

  return (
    <section className={styles.wrap} aria-labelledby="ecosystem-title">
      <div className={styles.container}>
        <p className={styles.label}>🏗️ Architecture</p>
        <h2 id="ecosystem-title" className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.diagramWrapper}>
          <div className={styles.diagram} role="img" aria-label="Ecosystem architecture diagram">
            {/* SVG Connections - Hub to Layers */}
            <svg className={styles.connections} viewBox="0 0 800 600" preserveAspectRatio="none">
              <defs>
                <linearGradient id="conn-primary" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="conn-secondary" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="conn-accent" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="conn-warning" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-warning)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--color-warning)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Hub center: 400, 80 */}
              {/* Layer 1 centers: 300, 180 | 500, 180 */}
              {/* Layer 2 centers: 200, 300 | 400, 300 | 600, 300 | 700, 300 */}
              {/* Layer 3 centers: 250, 420 | 400, 420 | 550, 420 | 650, 420 */}
              {/* Layer 4 centers: 320, 520 | 480, 520 */}

              {/* Hub pulse ring */}
              <circle
                cx="400"
                cy="80"
                r="60"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="1"
                opacity="0.3"
                className={styles.pulseRing}
              />
              <circle
                cx="400"
                cy="80"
                r="75"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="1"
                opacity="0.2"
                className={styles.pulseRing}
                style={{ animationDelay: '1s' }}
              />

              {/* Connections from Hub to Layer 1 */}
              <path
                d="M400 110 Q350 145 300 180"
                stroke="url(#conn-primary)"
                strokeWidth="2"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '0.1s' }}
              />
              <path
                d="M400 110 Q450 145 500 180"
                stroke="url(#conn-primary)"
                strokeWidth="2"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '0.2s' }}
              />

              {/* Layer 1 to Layer 2 connections */}
              <path
                d="M300 210 Q250 255 200 300"
                stroke="url(#conn-secondary)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '0.3s' }}
              />
              <path
                d="M300 210 Q350 255 400 300"
                stroke="url(#conn-secondary)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '0.4s' }}
              />
              <path
                d="M500 210 Q450 255 400 300"
                stroke="url(#conn-secondary)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '0.5s' }}
              />
              <path
                d="M500 210 Q550 255 600 300"
                stroke="url(#conn-secondary)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '0.6s' }}
              />
              <path
                d="M500 210 Q600 255 700 300"
                stroke="url(#conn-secondary)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '0.7s' }}
              />

              {/* Layer 2 to Layer 3 connections */}
              <path
                d="M200 330 Q225 375 250 420"
                stroke="url(#conn-accent)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '0.8s' }}
              />
              <path
                d="M400 330 Q325 375 250 420"
                stroke="url(#conn-accent)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '0.9s' }}
              />
              <path
                d="M400 330 Q400 375 400 420"
                stroke="url(#conn-accent)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '1.0s' }}
              />
              <path
                d="M400 330 Q475 375 550 420"
                stroke="url(#conn-accent)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '1.1s' }}
              />
              <path
                d="M600 330 Q575 375 550 420"
                stroke="url(#conn-accent)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '1.2s' }}
              />
              <path
                d="M600 330 Q625 375 650 420"
                stroke="url(#conn-accent)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '1.3s' }}
              />
              <path
                d="M700 330 Q675 375 650 420"
                stroke="url(#conn-accent)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '1.4s' }}
              />

              {/* Layer 3 to Layer 4 connections */}
              <path
                d="M250 450 Q285 485 320 520"
                stroke="url(#conn-warning)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '1.5s' }}
              />
              <path
                d="M400 450 Q360 485 320 520"
                stroke="url(#conn-warning)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '1.6s' }}
              />
              <path
                d="M400 450 Q440 485 480 520"
                stroke="url(#conn-warning)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '1.7s' }}
              />
              <path
                d="M550 450 Q515 485 480 520"
                stroke="url(#conn-warning)"
                strokeWidth="1.5"
                fill="none"
                className={styles.connLine}
                style={{ animationDelay: '1.8s' }}
              />
            </svg>

            {/* Hub */}
            <div className={styles.hub}>
              <div className={styles.hubCore}>
                <span className={styles.hubIcon}>🧠</span>
                <span className={styles.hubName}>1ai-hub</span>
              </div>
              <div className={styles.hubDesc}>Central Nervous System</div>
            </div>

            {/* Layers */}
            {layers.map((layer, layerIndex) => (
              <div key={layer.label} className={styles.layer}>
                <div className={styles.layerLabel} style={{ color: layer.color }}>
                  {layer.label}
                </div>
                <div className={styles.services}>
                  {layer.services.map((service, serviceIndex) => (
                    <div
                      key={service.name}
                      className={styles.service}
                      style={{ borderColor: `${layer.color}40` }}
                    >
                      <span className={styles.serviceIcon}>{service.icon}</span>
                      <span className={styles.serviceName}>{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Connector dots between layers */}
            <div className={styles.connectorDots} aria-hidden="true">
              <div className={styles.connectorDot} style={{ background: 'var(--color-primary)' }} />
              <div className={styles.connectorDot} style={{ background: 'var(--color-secondary)' }} />
              <div className={styles.connectorDot} style={{ background: 'var(--color-accent)' }} />
              <div className={styles.connectorDot} style={{ background: 'var(--color-warning)' }} />
            </div>
          </div>

          <p className={styles.placeholder}>{visualPlaceholder}</p>
        </div>
      </div>
    </section>
  );
}