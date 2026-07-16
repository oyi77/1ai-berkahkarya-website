'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from '../LandingPage.module.css';
import TrackedCTA from '../TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function JasaDesignLP1({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Jasa Design - LP1', '0', 'jasa-design-lp1');

  return (
    <Layout
      title={locale === 'en' ? "Turn Your Dream Space Into Reality | BerkahKarya" : "Wujudkan Ruang Impian Anda | BerkahKarya"}
      description={locale === 'en'
        ? "From concept to working drawings. Architecture, interior, 3D visualization. Free initial consultation."
        : "Dari konsep sampai gambar kerja. Arsitektur, interior, 3D visualisasi. Gratis konsultasi awal."}
    >
      <div className={styles.wrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>JASA DESIGN</span>
            </div>
            <h1 className={styles.title}>
              {locale === 'en' ? <>Turn Your<br/></> : <>Wujudkan<br/></>}
              <span className={styles.gradientText}>{locale === 'en' ? 'Dream Space' : 'Ruang Impian'}</span>
            </h1>

            <p className={styles.subtitle}>
              {locale === 'en'
                ? 'From concept to working drawings. Architecture, interior, 3D visualization, and detailed RAB — one team, one responsibility. Free initial consultation.'
                : 'Dari konsep sampai gambar kerja. Arsitektur, interior, 3D visualisasi, dan RAB detail — satu tim, satu tanggung jawab. Gratis konsultasi awal.'}
            </p>

            <div className={styles.ctaRow}>
              <TrackedCTA
                href="https://wa.me/6285732740006"
                className={styles.btnPrimary}
                productName="Jasa Design - LP1 Hero"
                productId="jasa-design-lp1-hero"
              >
                {locale === 'en' ? 'Free Consultation' : 'Konsultasi Gratis'}
              </TrackedCTA>
            </div>

            <div className={styles.trustStrip}>
              <span>{locale === 'en' ? '✓ Free Consultation' : '✓ Gratis Konsultasi'}</span>
              <span>{locale === 'en' ? '✓ 3D Visualization' : '✓ 3D Visualisasi'}</span>
              <span>{locale === 'en' ? '✓ Revision Guarantee' : '✓ Garansi Revisi'}</span>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'Common Concerns' : 'Kekhawatiran Umum'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Why Designing Your Home ' : 'Kenapa Desain Rumah '}
              <span className={styles.gradientText}>{locale === 'en' ? 'Feels Overwhelming' : 'Terasa Sulit?'}</span>
            </h2>

            <div className={styles.grid3}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>{'\uD83D\uDCAD'}</div>
                <h3>{locale === 'en' ? 'Can\'t Find the Right Designer?' : 'Bingung Cari Desainer?'}</h3>
                <p>{locale === 'en'
                  ? 'Too many options, uncertain quality. You don\'t know if their style matches your vision until it\'s too late.'
                  : 'Banyak pilihan, kualitas tidak pasti. Gaya desainer belum tentu cocok dengan visi Anda.'}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>{'\uD83D\uDCB0'}</div>
                <h3>{locale === 'en' ? 'Architect Fees Too Expensive?' : 'Biaya Arsitek Mahal?'}</h3>
                <p>{locale === 'en'
                  ? 'Traditional architect fees can be prohibitive. You deserve professional design at a fair, transparent price.'
                  : 'Tarif arsitek tradisional bisa sangat mahal. Anda berhak dapat desain profesional dengan harga wajar dan transparan.'}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>{'\uD83D\uDCCF'}</div>
                <h3>{locale === 'en' ? 'Won\'t Fit the Budget?' : 'Takut Gak Sesuai Budget?'}</h3>
                <p>{locale === 'en'
                  ? 'Designs that look great but break the bank. Without a detailed RAB from the start, costs spiral out of control.'
                  : 'Desain keren tapi biaya membengkak. Tanpa RAB detail dari awal, biaya bisa tidak terkendali.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'What You Get' : 'Yang Anda Dapatkan'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Complete Design ' : 'Layanan Design '}
              <span className={styles.gradientText}>{locale === 'en' ? 'Under One Roof' : 'Lengkap Satu Atap'}</span>
            </h2>

            <div className={styles.grid3}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>{'\uD83C\uDFA8'}</div>
                <h3>{locale === 'en' ? 'Custom Design' : 'Desain Custom'}</h3>
                <p>{locale === 'en'
                  ? 'Every design is tailored to your taste, needs, and budget. Minimalist, modern, tropical — your style, your home.'
                  : 'Setiap desain disesuaikan dengan selera, kebutuhan, dan budget Anda. Minimalis, modern, tropis — gaya Anda, rumah Anda.'}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>{'\uD83D\uDDFC'}</div>
                <h3>{locale === 'en' ? '3D Realistic Visualization' : '3D Visualisasi Realistis'}</h3>
                <p>{locale === 'en'
                  ? 'See your home before it\'s built. Photorealistic 3D renders of exterior and interior with real materials and lighting.'
                  : 'Lihat rumah Anda sebelum dibangun. Render 3D fotorealistik dengan material dan pencahayaan asli.'}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>{'\uD83D\uDCCB'}</div>
                <h3>{locale === 'en' ? 'Detailed RAB & Transparent' : 'RAB Detail & Transparan'}</h3>
                <p>{locale === 'en'
                  ? 'Detailed cost breakdown per work item. Transparent pricing, no hidden fees. You know where every rupiah goes.'
                  : 'Rincian biaya detail per item pekerjaan. Harga transparan, tidak ada biaya tersembunyi. Anda tahu persis kemana setiap rupiah digunakan.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Ready to Create ' : 'Siap Wujudkan '}
              <span className={styles.gradientText}>{locale === 'en' ? 'Your Dream Home' : 'Rumah Impian Anda'}?</span>
            </h2>
            <TrackedCTA
              href="https://wa.me/6285732740006"
              className={styles.btnPrimary}
              productName="Jasa Design - LP1 Footer"
              productId="jasa-design-lp1-footer"
            >
              {locale === 'en' ? 'Free Consultation' : 'Konsultasi Gratis'}
            </TrackedCTA>
          </div>
        </section>
      </div>
    </Layout>
  );
}
