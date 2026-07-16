'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from './LandingPage.module.css';
import TrackedCTA from './TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function LP5({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('AI Video Studio - LP5', '0', 'ai-video-studio-lp5');
  return (
    <Layout
      title={locale === 'en' ? "This Is the New Way — AI Content Studio | BerkahKarya" : "Ini Cara Baru — AI Content Studio | BerkahKarya"}
      description={locale === 'en' ? "New way to create viral content. AI Content Studio by BerkahKarya." : "Cara baru bikin konten viral. AI Content Studio dari BerkahKarya."}
    >
      <div className={styles.wrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>The Future is Here</span>
            </div>

            <h1 className={styles.title}>
              {locale === 'en' ? 'This Is' : 'Ini'}<br/>
              <span className={styles.gradientTextIndigo}>{locale === 'en' ? 'the New Way' : 'Cara Baru'}</span>
            </h1>

            <p className={styles.subtitle}>
              {locale === 'en' ? 'Others still use 2020 methods. You? Use 2025 technology. Image-to-Video AI that creates viral content in minutes.' : 'Yang lain masih pakai cara 2020. Kamu? Pakai teknologi 2025. Image-to-Video AI yang bikin konten viral dalam hitungan menit.'}
            </p>

            <div className={styles.ctaRow}>
              <TrackedCTA
                href="https://saas.aitradepulse.com/"
                className={styles.btnPrimary}
                productName="AI Video Studio - LP5 Hero"
                productId="ai-video-studio-lp5"
              >
                {locale === 'en' ? '🚀 Upgrade Your Workflow' : '🚀 Upgrade Cara Kerja'}
              </TrackedCTA>
            </div>

            <div className={styles.trustStrip}>
              <span>{locale === 'en' ? '✓ Latest tech' : '✓ Teknologi terbaru'}</span>
              <span>{locale === 'en' ? '✓ First mover advantage' : '✓ First mover advantage'}</span>
              <span>{locale === 'en' ? '✓ Free trial' : '✓ Gratis coba'}</span>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className={styles.imageSection}>
          <div className={styles.container}>
            <div className={styles.heroImageWrapper}>
              <Image
                src="https://i.postimg.cc/fbQYkSF6/Gemini-Generated-Image-n24qbzn24qbzn24q.png"
                alt="AI Content Studio - Ini Cara Baru"
                width={900}
                height={600}
                className={styles.heroImage}
                priority
                quality={75}
              />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'Evolution' : 'Evolusi'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Content Creation' : 'Evolusi'} <span className={styles.gradientText}>{locale === 'en' ? 'Evolution' : 'Bikin Konten'}</span>
            </h2>

            <div className={styles.timeline}>
              <div className={`${styles.timelineItem} ${styles.timelineOld}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3>{locale === 'en' ? '2018 — Static Photos' : '2018 — Foto Statis'}</h3>
                  <p>{locale === 'en' ? 'Upload product photos to IG. Low engagement. Algorithm doesn\'t like it.' : 'Upload foto produk ke IG. Engagement rendah. Algoritma gak suka.'}</p>
                </div>
              </div>
              <div className={`${styles.timelineItem} ${styles.timelineOld}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3>{locale === 'en' ? '2020 — Manual Editing' : '2020 — Edit Manual'}</h3>
                  <p>{locale === 'en' ? 'Learn CapCut/Premiere. Spend hours. Limited output.' : 'Belajar CapCut/Premiere. Habis waktu berjam-jam. Output terbatas.'}</p>
                </div>
              </div>
              <div className={`${styles.timelineItem} ${styles.timelineOld}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3>{locale === 'en' ? '2022 — Hire Editor' : '2022 — Hire Editor'}</h3>
                  <p>{locale === 'en' ? 'Outsource to freelancer. Expensive, inconsistent, endless revisions.' : 'Outsource ke freelancer. Mahal, inkonsisten, revisi tanpa akhir.'}</p>
                </div>
              </div>
              <div className={`${styles.timelineItem} ${styles.timelineNew}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3>{locale === 'en' ? '2025 — AI Content Studio 🚀' : '2025 — AI Content Studio 🚀'}</h3>
                  <p>{locale === 'en' ? 'Upload photo → viral video automatically. 5 minutes. Rp 8,000. No skills needed.' : 'Upload foto → video viral otomatis. 5 menit. Rp 8.000. Tanpa skill.'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Ready to' : 'Siap'} <span className={styles.gradientText}>{locale === 'en' ? 'Upgrade?' : 'Upgrade?'}</span>
            </h2>
            <p className={styles.subtitle}>{locale === 'en' ? 'Don\'t miss out. Your competitors are already using this.' : 'Jangan ketinggalan. Kompetitor udah pakai ini.'}</p>
            <TrackedCTA
              href="https://saas.aitradepulse.com/"
              className={styles.btnPrimary}
              productName="AI Video Studio - LP5 Footer"
              productId="ai-video-studio-lp5-footer"
            >
              {locale === 'en' ? '🚀 Start Now' : '🚀 Mulai Sekarang'}
            </TrackedCTA>
          </div>
        </section>
      </div>
    </Layout>
  );
}
