'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from './LandingPage.module.css';
import TrackedCTA from './TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function LP6({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('AI Video Studio - LP6', '0', 'ai-video-studio-lp6');
  return (
    <Layout
      title={locale === 'en' ? "Real Seller Results — AI Content Studio | BerkahKarya" : "Hasil Nyata Seller — AI Content Studio | BerkahKarya"}
      description={locale === 'en' ? "Real results from sellers using AI Content Studio. Proof, not promises." : "Hasil nyata seller yang pakai AI Content Studio. Bukti, bukan janji."}
    >
      <div className={styles.wrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>{locale === 'en' ? 'Real Results, Real Sellers' : 'Real Results, Real Sellers'}</span>
            </div>

            <h1 className={styles.title}>
              {locale === 'en' ? 'Real Results from' : 'Hasil Nyata'}<br/>
              <span className={styles.gradientTextGold}>{locale === 'en' ? 'Sellers' : 'Seller'}</span>
            </h1>

            <p className={styles.subtitle}>
              {locale === 'en' 
                ? "Not theory. Not sweet promises. These are real results from sellers who've used AI Content Studio."
                : "Bukan teori. Bukan janji manis. Ini hasil real dari seller yang udah pakai AI Content Studio."}
            </p>

            <div className={styles.ctaRow}>
              <TrackedCTA
                href="https://saas.aitradepulse.com/"
                className={styles.btnPrimary}
                productName="AI Video Studio - LP6 Hero"
                productId="ai-video-studio-lp6"
              >
                {locale === 'en' ? '⭐ I Want Results Like This' : '⭐ Mau Hasil Kayak Gini'}
              </TrackedCTA>
            </div>

            <div className={styles.trustStrip}>
              <span>{locale === 'en' ? '✓ Verified results' : '✓ Verified results'}</span>
              <span>{locale === 'en' ? '✓ Real testimonials' : '✓ Real testimonials'}</span>
              <span>{locale === 'en' ? '✓ You can too' : '✓ Kamu bisa juga'}</span>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className={styles.imageSection}>
          <div className={styles.container}>
            <div className={styles.heroImageWrapper}>
              <Image
                src="https://i.postimg.cc/VNPX50T2/Gemini-Generated-Image-wqs45xwqs45xwqs4.png"
                alt={locale === 'en' ? "AI Content Studio - Real Seller Results" : "AI Content Studio - Hasil Nyata Seller"}
                width={900}
                height={600}
                className={styles.heroImage}
                priority
                quality={75}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'Testimonials' : 'Testimonials'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'What ' : 'Kata Mereka yang '}<span className={styles.gradientText}>{locale === 'en' ? 'They Say' : 'Udah Coba'}</span>
            </h2>

            <div className={styles.grid3}>
              <div className={styles.testiCard}>
                <div className={styles.testiStars}>★★★★★</div>
                <blockquote>
                  {locale === 'en'
                    ? "Used to upload 3x a week and was exhausted. Now I upload 2x daily easily. Views increased 400% in 2 weeks."
                    : "Dulu upload 3x seminggu udah ngos-ngosan. Sekarang upload 2x sehari santai. Views naik 400% dalam 2 minggu."}
                </blockquote>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>R</div>
                  <div>
                    <strong>Rina S.</strong>
                    <span>{locale === 'en' ? 'Fashion Seller, Bandung' : 'Seller Fashion, Bandung'}</span>
                  </div>
                </div>
              </div>
              <div className={styles.testiCard}>
                <div className={styles.testiStars}>★★★★★</div>
                <blockquote>
                  {locale === 'en'
                    ? "I was skeptical at first. Turns out these AI videos perform better than videos I spent hours editing myself. Mind blown."
                    : "Gue skeptis awalnya. Ternyata video AI ini performanya lebih bagus dari video yang gue edit sendiri berjam-jam. Mind blown."}
                </blockquote>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>A</div>
                  <div>
                    <strong>Andi W.</strong>
                    <span>{locale === 'en' ? 'Dropshipper, Jakarta' : 'Dropshipper, Jakarta'}</span>
                  </div>
                </div>
              </div>
              <div className={styles.testiCard}>
                <div className={styles.testiStars}>★★★★★</div>
                <blockquote>
                  {locale === 'en'
                    ? "Craziest ROI. Paid 49K, got 12 videos that generated millions in revenue. This is a game changer for SMEs."
                    : "ROI paling gila. Bayar 49K, dapat 12 video yang hasilin omset jutaan. Ini game changer buat UMKM."}
                </blockquote>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>D</div>
                  <div>
                    <strong>Dewi L.</strong>
                    <span>{locale === 'en' ? 'Culinary SME, Surabaya' : 'UMKM Kuliner, Surabaya'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <div className={styles.statNum}>500+</div>
                <div className={styles.statLabel}>{locale === 'en' ? 'Active Sellers' : 'Active Sellers'}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>12K+</div>
                <div className={styles.statLabel}>{locale === 'en' ? 'Videos Generated' : 'Videos Generated'}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>4.8★</div>
                <div className={styles.statLabel}>{locale === 'en' ? 'Average Rating' : 'Average Rating'}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>3x</div>
                <div className={styles.statLabel}>{locale === 'en' ? 'Avg Views Increase' : 'Avg Views Increase'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Your Turn to ' : 'Giliran Kamu '}<span className={styles.gradientText}>{locale === 'en' ? 'Prove It' : 'Buktiin'}</span>
            </h2>
            <p className={styles.subtitle}>{locale === 'en' ? 'Join 500+ sellers who have experienced the results.' : 'Join 500+ seller yang udah rasain hasilnya.'}</p>
            <TrackedCTA
              href="https://saas.aitradepulse.com/"
              className={styles.btnPrimary}
              productName="AI Video Studio - LP6 Footer"
              productId="ai-video-studio-lp6-footer"
            >
              {locale === 'en' ? '⭐ Try Free Now' : '⭐ Coba Gratis Sekarang'}
            </TrackedCTA>
          </div>
        </section>
      </div>
    </Layout>
  );
}
