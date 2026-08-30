import styles from './StorySection.module.css';

interface StoryPrinciple {
  emoji: string;
  title: string;
  desc: string;
}

interface StorySectionProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  quote: string;
  principles: StoryPrinciple[];
}

export default function StorySection({
  eyebrow,
  title,
  paragraphs,
  quote,
  principles,
}: StorySectionProps) {
  return (
    <section className={styles.section} id="cerita" aria-labelledby="story-title">
      <div className={styles.container}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 id="story-title" className={styles.title}>{title}</h2>

        {paragraphs.map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>{paragraph}</p>
        ))}

        <blockquote className={styles.quote}>{quote}</blockquote>

        <div className={styles.grid}>
          {principles.map((principle) => (
            <article key={principle.title} className={styles.card}>
              <span className={styles.emoji} aria-hidden="true">{principle.emoji}</span>
              <h3 className={styles.cardTitle}>{principle.title}</h3>
              <p className={styles.cardDesc}>{principle.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
