'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from '../LandingPage.module.css';
import TrackedCTA from '../TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function JasaKonstruksiLP1({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Jasa Konstruksi - LP1', '0', 'jasa-konstruksi-lp1');

  return (
    <Layout
      title={locale === 'en' ? "Build & Renovate Without the Headache | BerkahKarya" : "Bangun & Renovasi Rumah Tanpa Pusing Mikirin Detail | BerkahKarya"}
      description={locale === 'en'
        ? "From design to handover. One team, one responsibility. Free initial consultation."
        : "Dari desain sampai serah terima. Satu tim, satu tanggung jawab. Gratis konsultasi awal."}
    >
      <div className={styles.wrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>JASA KONSTRUKSI</span>
            </div>
            <h1 className={styles.title}>
              {locale === 'en' ? <>Build & Renovate<br/></> : <>Bangun & Renovasi Rumah<br/></>}
              <span className={styles.gradientText}>{locale === 'en' ? 'Without the Headache' : 'Tanpa Pusing Mikirin Detail'}</span>
            </h1>

            <p className={styles.subtitle}>
              {locale === 'en'
                ? 'From design to handover. One team, one responsibility. Free initial consultation.'
                : 'Dari desain sampai serah terima. Satu tim, satu tanggung jawab. Gratis konsultasi awal.'}
            </p>

            <div className={styles.ctaRow}>
              <TrackedCTA
                href="https://wa.me/6285732740006"
                className={styles.btnPrimary}
                productName="Jasa Konstruksi - LP1 Hero"
                productId="jasa-konstruksi-lp1-hero"
              >
                {locale === 'en' ? 'Free Consultation' : 'Konsultasi Gratis'}
              </TrackedCTA>
            </div>

            <div className={styles.trustStrip}>
              <span>{locale === 'en' ? '✓ Free Consultation' : '✓ Gratis Konsultasi'}</span>
              <span>{locale === 'en' ? '✓ Detailed RAB' : '✓ RAB Detail'}</span>
              <span>{locale === 'en' ? '✓ Workmanship Guarantee' : '✓ Garansi Pengerjaan'}</span>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'Common Concerns' : 'Kekhawatiran Umum'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Why Most People ' : 'Kenapa Banyak Orang '}
              <span className={styles.gradientText}>{locale === 'en' ? 'Worry About Construction' : 'Takut Bangun Rumah?'}</span>
            </h2>

            <div className={styles.grid3}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>💰</div>
                <h3>{locale === 'en' ? 'Afraid of Budget Overruns?' : 'Takut Budget Membengkak?'}</h3>
                <p>{locale === 'en'
                  ? 'Detailed RAB breakdown, fully transparent. Zero surprise costs. You know exactly where every rupiah goes.'
                  : 'RAB detail, transparan dari awal. Tidak ada biaya mendadak. Anda tahu persis kemana setiap rupiah digunakan.'}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🔍</div>
                <h3>{locale === 'en' ? 'Can\'t Find a Trustworthy Contractor?' : 'Bingung Cari Kontraktor Terpercaya?'}</h3>
                <p>{locale === 'en'
                  ? 'Professional team with strict quality control. We vet every worker and use only proven materials.'
                  : 'Tim profesional dengan quality control ketat. Setiap pekerja terverifikasi, material teruji mutunya.'}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>📅</div>
                <h3>{locale === 'en' ? 'Tired of Endless Delays?' : 'Proyek Molor Gak Kelar-Kelar?'}</h3>
                <p>{locale === 'en'
                  ? 'Clear timeline with weekly progress reports. We stick to the schedule so you can plan with confidence.'
                  : 'Timeline jelas dengan laporan progress mingguan. Kami komitmen tepat waktu sesuai jadwal yang disepakati.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'Our Promise' : 'Yang Kami Berikan'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Everything You Need ' : 'Semua yang Anda Butuhkan '}
              <span className={styles.gradientText}>{locale === 'en' ? 'In One Package' : 'Dalam Satu Paket'}</span>
            </h2>

            <div className={styles.grid3}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>📐</div>
                <h3>{locale === 'en' ? 'Free Design + RAB' : 'Desain + RAB Gratis'}</h3>
                <p>{locale === 'en'
                  ? 'Get complete working drawings and a detailed RAB at no extra cost. Know your budget before you start.'
                  : 'Dapatkan gambar kerja dan RAB lengkap tanpa biaya tambahan. Ketahui anggaran Anda sejak awal.'}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>👷</div>
                <h3>{locale === 'en' ? 'Professional Execution' : 'Eksekusi Profesional'}</h3>
                <p>{locale === 'en'
                  ? 'Experienced team, strict supervision, quality materials. Every detail handled by experts.'
                  : 'Tim berpengalaman, pengawasan ketat, material berkualitas. Setiap detail ditangani ahlinya.'}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🛡️</div>
                <h3>{locale === 'en' ? 'Workmanship Guarantee' : 'Garansi Pengerjaan'}</h3>
                <p>{locale === 'en'
                  ? 'We ensure results match the agreement. Written guarantee for your peace of mind.'
                  : 'Kami pastikan hasil sesuai kesepakatan. Garansi tertulis untuk ketenangan Anda.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Ready to Build ' : 'Siap Bangun '}
              <span className={styles.gradientText}>{locale === 'en' ? 'Your Dream Home?' : 'Rumah Impian?'}</span>
            </h2>
            <p className={styles.subtitle}>
              {locale === 'en'
                ? 'Free consultation. Let\'s discuss your needs, location, and budget with zero obligation.'
                : 'Konsultasi gratis. Diskusi kebutuhan, lokasi, & budget tanpa biaya.'}
            </p>
            <TrackedCTA
              href="https://wa.me/6285732740006"
              className={styles.btnPrimary}
              productName="Jasa Konstruksi - LP1 Footer"
              productId="jasa-konstruksi-lp1-footer"
            >
              {locale === 'en' ? 'Free Consultation' : 'Konsultasi Gratis'}
            </TrackedCTA>
          </div>
        </section>
      </div>
    </Layout>
  );
}
