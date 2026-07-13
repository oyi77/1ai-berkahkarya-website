'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './ProductShowcase.module.css';
import { trackGAEvent, trackMetaEvent, sendMetaCAPI, trackTikTokEvent, sendTikTokCAPI } from '@/lib/tracking';
import { products, type Product } from '@/data/product-showcase';


interface Props {
  locale: 'id' | 'en';
}


const badgeClass: Record<string, string> = {
  new: styles.badgeNew,
  hot: styles.badgeHot,
  pro: styles.badgePro,
  popular: styles.badgePopular,
};

export default function ProductShowcase({ locale }: Props) {
  const items = products[locale];
  const featured = items[0]; // AI Video Studio
  const rest = items.slice(1);

  useEffect(() => {
    // Track section view + referrer
    const referrer = document.referrer || 'direct';
    const path = window.location.pathname;

    trackGAEvent('view_product_showcase', {
      page_path: path,
      referrer,
      locale,
    });

    trackMetaEvent('ViewContent', {
      content_name: 'Product Showcase Homepage',
      content_type: 'product_listing',
    });

    sendMetaCAPI('ViewContent', {
      content_name: 'Product Showcase Homepage',
      content_type: 'product_listing',
      referrer_url: referrer,
    });

    trackTikTokEvent('ViewContent', {
      content_name: 'Product Showcase Homepage',
      content_type: 'product_listing',
    });

    sendTikTokCAPI('ViewContent', {
      content_name: 'Product Showcase Homepage',
      content_type: 'product_listing',
    });
  }, [locale]);

  function handleCardClick(product: Product) {
    const referrer = typeof window !== 'undefined' ? document.referrer || 'direct' : '';
    trackGAEvent('product_card_click', {
      product_name: product.name,
      product_href: product.href,
      referrer,
      locale,
    });
    trackMetaEvent('ViewContent', {
      content_name: product.name,
      content_type: 'product_card',
    });
    sendMetaCAPI('ViewContent', {
      content_name: product.name,
      referrer_url: referrer,
    });
    trackTikTokEvent('ViewContent', { content_name: product.name });
    sendTikTokCAPI('ViewContent', { content_name: product.name });
  }

  return (
    <section className={styles.section} id="products">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            {locale === 'id' ? '🚀 13 Solusi AI & Jasa Digital · Siap Pakai Hari Ini' : '🚀 13 AI Solutions & Digital Services · Ready Today'}
          </span>
          <h2>
            {locale === 'id'
              ? 'Pilih Solusi AI yang Anda Butuhkan'
              : 'Choose the AI Solution You Need'}
          </h2>
          <p>
            {locale === 'id'
              ? 'Setiap produk bisa dipakai terpisah atau sebagai ekosistem terintegrasi. Mulai dari Rp 49K.'
              : 'Each product works standalone or as an integrated ecosystem. Starting from Rp 49K.'}
          </p>
        </div>

        <div className={styles.grid}>
          {/* Featured card (AI Video Studio) */}
          <Link
            href={featured.href}
            className={`${styles.card} ${styles.cardFeatured}`}
            onClick={() => handleCardClick(featured)}
          >
            {featured.badge && (
              <span className={`${styles.cardBadge} ${badgeClass[featured.badge.type]}`}>
                {featured.badge.label}
              </span>
            )}
            <div className={styles.cardTop}>
              <span className={styles.cardIcon}>{featured.emoji}</span>
              <div className={styles.cardName}>{featured.name}</div>
              <div className={styles.cardTagline}>{featured.tagline}</div>
              <p className={styles.cardDesc}>{featured.desc}</p>
              <ul className={styles.cardBenefits}>
                {featured.benefits.map((b, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className={styles.cardBottom} style={{ borderTop: 'none', padding: '0' }}>
                {featured.priceLabel && <span style={{ fontSize: '0.7rem', color: '#999' }}>{featured.priceLabel}</span>}
                <div className={styles.priceValue}>{featured.price}</div>
                <span className={styles.priceSub}>{featured.priceSub}</span>
                <span className={styles.cardCta}>{featured.cta}</span>
              </div>
            </div>
            {featured.featuredStats && (
              <div className={styles.cardFeaturedRight}>
                {featured.featuredStats.map((s, i) => (
                  <div key={i} className={styles.featuredStat}>
                    <span className={styles.featuredStatNum}>{s.num}</span>
                    <span className={styles.featuredStatLabel}>{s.label}</span>
                  </div>
                ))}
                <span className={styles.featuredCta}>{featured.cta}</span>
              </div>
            )}
          </Link>

          {/* Regular cards */}
          {rest.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className={styles.card}
              onClick={() => handleCardClick(product)}
            >
              {product.badge && (
                <span className={`${styles.cardBadge} ${badgeClass[product.badge.type]}`}>
                  {product.badge.label}
                </span>
              )}
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{product.emoji}</span>
                <div className={styles.cardName}>{product.name}</div>
                <div className={styles.cardTagline}>{product.tagline}</div>
                <p className={styles.cardDesc}>{product.desc}</p>
                <ul className={styles.cardBenefits}>
                  {product.benefits.map((b, i) => (
                    <li key={i}>
                      <span className={styles.checkIcon}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardPrice}>
                  {product.priceLabel && <span className={styles.priceLabel}>{product.priceLabel}</span>}
                  <span className={styles.priceValue}>{product.price}</span>
                  <span className={styles.priceSub}>{product.priceSub}</span>
                </div>
                <span className={styles.cardCta}>{product.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
