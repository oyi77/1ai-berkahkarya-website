import styles from './_lp-base.module.css';

export interface Testimonial {
  name: string;
  role: { id: string; en: string };
  quote: { id: string; en: string };
  avatar: string;
  rating?: number;
}

interface TestimonialGridProps {
  locale?: string;
  testimonials: Testimonial[];
  title?: { id: string; en: string };
}

export default function TestimonialGrid({
  locale = 'id',
  testimonials,
  title,
}: TestimonialGridProps) {
  const defaultTitle = locale === 'id'
    ? 'Apa Kata Klien Kami'
    : 'What Our Clients Say';
  const sectionTitle = title ? (locale === 'id' ? title.id : title.en) : defaultTitle;

  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((t, i) => {
          const role = locale === 'id' ? t.role.id : t.role.en;
          const quote = locale === 'id' ? t.quote.id : t.quote.en;

          return (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {Array.from({ length: t.rating || 5 }, (_, j) => (
                  <span key={j} className={styles.star}>★</span>
                ))}
              </div>
              <p className={styles.testimonialQuote}>"{quote}"</p>
              <div className={styles.testimonialAuthor}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={styles.testimonialAvatar}
                  loading="lazy"
                />
                <div>
                  <p className={styles.testimonialName}>{t.name}</p>
                  <p className={styles.testimonialRole}>{role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
