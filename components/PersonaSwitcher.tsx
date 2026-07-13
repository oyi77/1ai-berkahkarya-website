import styles from './PersonaSwitcher.module.css';

interface PersonaData {
  icon: string;
  title: string;
  description: string;
  cta: { text: string; href: string };
  visualPlaceholder: string;
  accent?: 'primary' | 'secondary';
}

interface Props {
  title: string;
  subtitle: string;
  personal: PersonaData;
  bisnis: PersonaData;
}

export default function PersonaSwitcher({ title, subtitle, personal, bisnis }: Props) {
  const personas = [
    { ...personal, id: 'personal', accent: personal.accent || 'primary' },
    { ...bisnis, id: 'bisnis', accent: bisnis.accent || 'secondary' },
  ];

  return (
    <section id="persona-switcher" className={styles.wrap} aria-labelledby="persona-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>🎯 Pilih Jalur</span>
          <h2 id="persona-title" className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        <div className={styles.grid} role="list">
          {personas.map((p) => (
            <article
              key={p.id}
              className={`${styles.card} ${styles[p.accent]}`}
              role="listitem"
            >
              <div className={styles.visualWrap}>
                <img
                  src={p.visualPlaceholder}
                  alt={`Dashboard ${p.title}`}
                  className={styles.visual}
                  loading="lazy"
                />
                <div className={styles.visualOverlay}>
                  <span className={styles.icon}>{p.icon}</span>
                </div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>

                <a
                  href={p.cta.href}
                  className={`${styles.cta} ${styles[p.accent]}`}
                >
                  {p.cta.text}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}