import styles from './_lp-base.module.css';

export interface PricingTier {
  name: { id: string; en: string };
  price: { id: string; en: string };
  originalPrice?: { id: string; en: string };
  description: { id: string; en: string };
  features: { id: string[]; en: string[] };
  highlighted?: boolean;
  cta: { id: string; en: string };
  ctaLink: string;
  badge?: { id: string; en: string };
}

interface PricingCardProps {
  tier: PricingTier;
  locale?: string;
}

export default function PricingCard({ tier, locale = 'id' }: PricingCardProps) {
  const name = locale === 'id' ? tier.name.id : tier.name.en;
  const price = locale === 'id' ? tier.price.id : tier.price.en;
  const originalPrice = tier.originalPrice ? (locale === 'id' ? tier.originalPrice.id : tier.originalPrice.en) : null;
  const description = locale === 'id' ? tier.description.id : tier.description.en;
  const features = locale === 'id' ? tier.features.id : tier.features.en;
  const cta = locale === 'id' ? tier.cta.id : tier.cta.en;
  const badge = tier.badge ? (locale === 'id' ? tier.badge.id : tier.badge.en) : null;

  return (
    <div className={`${styles.pricingCard} ${tier.highlighted ? styles.pricingCardHighlighted : ''}`}>
      {badge && <div className={styles.pricingBadge}>{badge}</div>}
      <h3 className={styles.pricingName}>{name}</h3>
      <div className={styles.pricingPriceWrap}>
        {originalPrice && (
          <span className={styles.pricingOriginal}>{originalPrice}</span>
        )}
        <span className={styles.pricingAmount}>{price}</span>
      </div>
      <p className={styles.pricingDesc}>{description}</p>
      <ul className={styles.pricingFeatures}>
        {features.map((f, i) => (
          <li key={i} className={styles.pricingFeatureItem}>
            <span className={styles.pricingCheck}>✓</span> {f}
          </li>
        ))}
      </ul>
      <a href={tier.ctaLink} className={styles.pricingCta}>
        {cta}
      </a>
    </div>
  );
}
