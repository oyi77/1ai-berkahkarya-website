import styles from './VisionMission.module.css';

interface CardData {
  emoji: string;
  title: string;
  text: string;
}

interface Props {
  eyebrow: string;
  title: string;
  vision: CardData;
  mission: CardData;
}

export default function VisionMission({ eyebrow, title, vision, mission }: Props) {
  return (
    <section className={styles.section} aria-labelledby="vision-mission-title">
      <div className={styles.wrap}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 id="vision-mission-title" className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.visionCard}`}>
            <span className={styles.emoji} aria-hidden="true">{vision.emoji}</span>
            <h3 className={`${styles.cardTitle} ${styles.visionTitle}`}>{vision.title}</h3>
            <p className={styles.text}>{vision.text}</p>
          </article>
          <article className={`${styles.card} ${styles.missionCard}`}>
            <span className={styles.emoji} aria-hidden="true">{mission.emoji}</span>
            <h3 className={`${styles.cardTitle} ${styles.missionTitle}`}>{mission.title}</h3>
            <p className={styles.text}>{mission.text}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
