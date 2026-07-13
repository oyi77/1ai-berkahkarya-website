import styles from './EcosystemDiagram.module.css';

interface Props {
  title: string;
  subtitle: string;
  visualPlaceholder: string;
}

export default function EcosystemDiagram({ title, subtitle, visualPlaceholder }: Props) {
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <p className={styles.label}>🏗️ Architecture</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.diagramWrapper}>
          <div className={styles.diagram}>
            {/* Central Hub */}
            <div className={styles.hub}>
              <div className={styles.hubCore}>
                <span className={styles.hubIcon}>🧠</span>
                <span className={styles.hubName}>1ai-hub</span>
              </div>
              <div className={styles.hubDesc}>Central Nervous System</div>
            </div>

            {/* Layer 1: Core Services */}
            <div className={styles.layer}>
              <div className={styles.layerLabel}>Core Services</div>
              <div className={styles.services}>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>🌐</span>
                  <span className={styles.serviceName}>OmniRoute</span>
                </div>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>🏪</span>
                  <span className={styles.serviceName}>1AI</span>
                </div>
              </div>
            </div>

            {/* Layer 2: Revenue Services */}
            <div className={styles.layer}>
              <div className={styles.layerLabel}>Revenue Engines</div>
              <div className={styles.services}>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>📢</span>
                  <span className={styles.serviceName}>1AI-Ads</span>
                </div>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>💼</span>
                  <span className={styles.serviceName}>1AI-Affiliate</span>
                </div>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>🎬</span>
                  <span className={styles.serviceName}>1AI-Content</span>
                </div>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>👥</span>
                  <span className={styles.serviceName}>1AI-Social</span>
                </div>
              </div>
            </div>

            {/* Layer 3: Automation & Infrastructure */}
            <div className={styles.layer}>
              <div className={styles.layerLabel}>Automation & Infra</div>
              <div className={styles.services}>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>⚡</span>
                  <span className={styles.serviceName}>1AI-Workflow</span>
                </div>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>📱</span>
                  <span className={styles.serviceName}>Phonefarm</span>
                </div>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>🚪</span>
                  <span className={styles.serviceName}>CF-Router</span>
                </div>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>💬</span>
                  <span className={styles.serviceName}>Waha</span>
                </div>
              </div>
            </div>

            {/* Layer 4: Specialized */}
            <div className={styles.layer}>
              <div className={styles.layerLabel}>Specialized</div>
              <div className={styles.services}>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>🔮</span>
                  <span className={styles.serviceName}>Poly-Trader</span>
                </div>
                <div className={styles.service}>
                  <span className={styles.serviceIcon}>⚖️</span>
                  <span className={styles.serviceName}>Paperclip</span>
                </div>
              </div>
            </div>
          </div>
          <p className={styles.placeholder}>{visualPlaceholder}</p>
        </div>
      </div>
    </section>
  );
}