import styles from './VideoShowcase.module.css';

interface VideoShowcaseProps {
  title: string;
  subtitle: string;
  src: string;
}

export default function VideoShowcase({ title, subtitle, src }: VideoShowcaseProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.videoWrapper}>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={src}
            className={styles.video}
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
