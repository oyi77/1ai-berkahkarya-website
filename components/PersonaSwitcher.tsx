import styles from './PersonaSwitcher.module.css';

interface PersonaData {
  icon: string;
  title: string;
  description: string;
  cta: { text: string; href: string };
  visualPlaceholder: string;
}

interface Props {
  title: string;
  subtitle: string;
  personal: PersonaData;
  bisnis: PersonaData;
}

export default function PersonaSwitcher({ title, subtitle, personal, bisnis }: Props) {
  return (
    <section id="persona-switcher" className={styles.wrap}>
      <div className={styles.container}>
        <p className={styles.label}>{title}</p>
        <h2 className={styles.title}>{subtitle}</h2>
        <div className={styles.grid}>
          <article className={`card-dark ${styles.card}`}>
            <div className={styles.visual}>{personal.visualPlaceholder}</div>
            <div className={styles.content}>
              <span className={styles.icon}>{personal.icon}</span>
              <h3>{personal.title}</h3>
              <p>{personal.description}</p>
              <a href={personal.cta.href} className={styles.cta}>
                {personal.cta.text}
              </a>
            </div>
          </article>
          <article className={`card-dark ${styles.card}`}>
            <div className={styles.visual}>{bisnis.visualPlaceholder}</div>
            <div className={styles.content}>
              <span className={styles.icon}>{bisnis.icon}</span>
              <h3>{bisnis.title}</h3>
              <p>{bisnis.description}</p>
              <a href={bisnis.cta.href} className={styles.cta}>
                {bisnis.cta.text}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}