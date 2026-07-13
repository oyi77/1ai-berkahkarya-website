import styles from './StatsRow.module.css';

interface Stat {
  value: string;
  label: string;
}

interface Props {
  items: Stat[];
  cta?: { text: string; href: string };
}

export default function StatsRow({ items, cta }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        {items.map((s) => (
          <div key={s.label} className={styles.item}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
      {cta && (
        <div className={styles.ctaWrap}>
          <a href={cta.href} className={styles.ctaLink}>
            {cta.text}
          </a>
        </div>
      )}
    </div>
  );
}
