'use client';

import Link from 'next/link';
import { trackCTAClick } from '@/lib/tracking';
import { SERVICE_METADATA } from '@/data/lp-services';
import styles from './ServicesGrid.module.css';

interface Props {
  locale: 'id' | 'en';
}

export default function ServicesGrid({ locale }: Props) {
  const isId = locale === 'id';

  return (
    <section className={styles.section} id="layanan" aria-labelledby="services-title">
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            {isId ? 'LAYANAN & SOLUSI' : 'SERVICES & SOLUTIONS'}
          </span>
          <h2 id="services-title" className={styles.title}>
            {isId ? (
              <>
                Semua <em className={styles.titleEm}>layanan</em> dalam satu tempat
              </>
            ) : (
              <>
                Every <em className={styles.titleEm}>service</em> in one place
              </>
            )}
          </h2>
          <p className={styles.subtitle}>
            {isId
              ? 'Dari AI, konten, website, hingga konstruksi — buka penawaran lengkap dan hubungi langsung.'
              : 'From AI and content to websites and construction — open the full offer and connect directly.'}
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICE_METADATA.map((svc) => {
            const id = svc.lps[0];
            const url = `/${locale}/lp/${svc.service}/${id}`;
            return (
              <Link
                key={svc.service}
                href={url}
                className={styles.card}
                onClick={() => trackCTAClick(`services_${svc.service}`, url)}
              >
                <span className={styles.cardIcon} aria-hidden="true">{svc.icon}</span>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>
                    {isId ? svc.displayName.id : svc.displayName.en}
                  </h3>
                  <p className={styles.cardDesc}>
                    {isId ? svc.description.id : svc.description.en}
                  </p>
                  <span className={styles.cardLink}>
                    {isId ? 'Lihat Penawaran' : 'View Offer'} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
