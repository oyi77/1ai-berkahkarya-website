'use client';

import styles from './InvestorPage.module.css';
import type { Product } from '@/data/investor-data';

interface Props {
  products: Product[];
  locale: 'id' | 'en';
}

export default function InvestorProducts({ products, locale }: Props) {
  const label = locale === 'id' ? 'Ekosistem Produk' : 'Product Ecosystem';
  const subtitle = locale === 'id' ? '10 produk AI yang sedang dibangun' : '10 AI products currently building';

  return (
    <section className={styles.products} aria-labelledby="products-title">
      <div className={styles.container}>
        <h2 id="products-title" className={styles.sectionHeading}>{label}</h2>
        <p className={styles.sectionSubheading}>{subtitle}</p>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.name} className={styles.productCard}>
              <div className={styles.productEmoji} aria-hidden="true">{product.emoji}</div>
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productCategory}>{product.category}</div>
              <span
                className={`${styles.badge} ${
                  product.status === 'live'
                    ? styles.badgeLive
                    : product.status === 'beta'
                    ? styles.badgeBeta
                    : styles.badgeStarting
                }`}
              >
                {product.status === 'live'
                  ? locale === 'id' ? 'LIVE' : 'LIVE'
                  : product.status === 'beta'
                  ? locale === 'id' ? 'BETA' : 'BETA'
                  : locale === 'id' ? 'MULAI' : 'STARTING'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
