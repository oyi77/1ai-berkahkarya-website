import styles from './AboutSection.module.css';

interface AboutValue {
  emoji: string;
  title: string;
  desc: string;
}

interface AboutStat {
  value: string;
  label: string;
}

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  values: AboutValue[];
  stats: AboutStat[];
}

export default function AboutSection({
  eyebrow,
  title,
  description,
  values,
  stats,
}: Props) {
  return (
    <section className={styles.wrap} id="tentang" aria-labelledby="about-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="about-title" className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.columns}>
          <div className={styles.values} role="list">
            {values.map((value) => (
              <article key={value.title} className={styles.valueCard} role="listitem">
                <span className={styles.valueEmoji} aria-hidden="true">
                  {value.emoji}
                </span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.desc}</p>
              </article>
            ))}
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
