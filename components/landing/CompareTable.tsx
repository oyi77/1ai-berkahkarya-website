import styles from './_lp-base.module.css';

export interface CompareRow {
  feature: { id: string; en: string };
  before: { id: string; en: string };
  after: { id: string; en: string };
}

interface CompareTableProps {
  locale?: string;
  rows: CompareRow[];
  title?: { id: string; en: string };
  beforeLabel?: { id: string; en: string };
  afterLabel?: { id: string; en: string };
}

export default function CompareTable({
  locale = 'id',
  rows,
  title,
  beforeLabel,
  afterLabel,
}: CompareTableProps) {
  const sectionTitle = title
    ? (locale === 'id' ? title.id : title.en)
    : (locale === 'id' ? 'Sebelum vs Sesudah' : 'Before vs After');
  const labelBefore = beforeLabel
    ? (locale === 'id' ? beforeLabel.id : beforeLabel.en)
    : (locale === 'id' ? 'Tanpa Layanan Ini' : 'Without This Service');
  const labelAfter = afterLabel
    ? (locale === 'id' ? afterLabel.id : afterLabel.en)
    : (locale === 'id' ? 'Dengan Layanan Ini' : 'With This Service');

  return (
    <section className={styles.compareSection}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.compareTable}>
        <div className={styles.compareHeader}>
          <div className={styles.compareFeatureCol}>{locale === 'id' ? 'Aspek' : 'Aspect'}</div>
          <div className={styles.compareBeforeCol}>{labelBefore}</div>
          <div className={styles.compareAfterCol}>{labelAfter}</div>
        </div>
        {rows.map((row, i) => {
          const feature = locale === 'id' ? row.feature.id : row.feature.en;
          const before = locale === 'id' ? row.before.id : row.before.en;
          const after = locale === 'id' ? row.after.id : row.after.en;

          return (
            <div key={i} className={`${styles.compareRow} ${i % 2 === 0 ? styles.compareRowEven : ''}`}>
              <div className={styles.compareFeatureCol}>{feature}</div>
              <div className={styles.compareBeforeCol}>{before}</div>
              <div className={styles.compareAfterCol}>{after}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
