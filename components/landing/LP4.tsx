'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from './LandingPage.module.css';
import TrackedCTA from './TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function LP4({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('AI Video Studio - LP4', '0', 'ai-video-studio-lp4');
  return (
    <Layout
      title={locale === 'en' ? "Just Upload — AI Content Studio | BerkahKarya" : "Tinggal Upload Doang — AI Content Studio | BerkahKarya"}
      description={locale === 'en' ? "Just upload your product photos. AI handles the rest. BerkahKarya AI Content Studio." : "Video viral tinggal upload. AI yang kerjain sisanya. BerkahKarya AI Content Studio."}
    >
      <div className={styles.wrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>{locale === 'en' ? 'Zero Effort Content' : 'Zero Effort Content'}</span>
            </div>

            <h1 className={styles.title}>
              {locale === 'en' ? 'Just' : 'Tinggal'}<br/>
              <span className={styles.gradientTextTeal}>{locale === 'en' ? 'Upload' : 'Upload Doang'}</span>
            </h1>

            <p className={styles.subtitle}>
              {locale === 'en' 
                ? 'Upload product photos. AI generates video + caption + hashtags + posting schedule. You? Just receive "Video ready" notifications.' 
                : 'Upload foto produk. AI generate video + caption + hashtag + jadwal posting. Kamu? Tinggal terima notifikasi "Video ready".'}
            </p>

            <div className={styles.ctaRow}>
              <TrackedCTA
                href="https://saas.aitradepulse.com/"
                className={styles.btnPrimary}
                productName="AI Video Studio - LP4 Hero"
                productId="ai-video-studio-lp4"
              >
                {locale === 'en' ? '⚡ Want It Easy' : '⚡ Mau Yang Gampang'}
              </TrackedCTA>
            </div>

            <div className={styles.trustStrip}>
              <span>{locale === 'en' ? '✓ Upload once' : '✓ Upload sekali'}</span>
              <span>{locale === 'en' ? '✓ 4 outputs' : '✓ Dapat 4 output'}</span>
              <span>{locale === 'en' ? '✓ AI handles the rest' : '✓ AI handle sisanya'}</span>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className={styles.imageSection}>
          <div className={styles.container}>
            <div className={styles.heroImageWrapper}>
              <Image
                src="https://i.postimg.cc/MGJ1Xf4N/Gemini-Generated-Image-m9dyorm9dyorm9dy.png"
                alt={locale === 'en' ? "AI Content Studio - Just Upload" : "AI Content Studio - Tinggal Upload Doang"}
                width={900}
                height={600}
                className={styles.heroImage}
                priority
                quality={75}
              />
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'Output' : 'Output'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? (
                <>Upload 1 Photo, <span className={styles.gradientText}>Get These 4</span></>
              ) : (
                <>Upload 1 Foto, <span className={styles.gradientText}>Dapat 4 Ini</span></>
              )}
            </h2>

            <div className={styles.grid4}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🎬</div>
                <h3>{locale === 'en' ? 'Cinematic Video' : 'Video Cinematic'}</h3>
                <p>{locale === 'en' ? 'Photos become professional moving videos. Ready for TikTok/Reels.' : 'Foto jadi video bergerak professional. Siap TikTok/Reels.'}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>📝</div>
                <h3>{locale === 'en' ? 'Viral Caption' : 'Caption Viral'}</h3>
                <p>{locale === 'en' ? 'Hook + storytelling + CTA. Agency-level copywriting.' : 'Hook + storytelling + CTA. Copywriting level agency.'}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>#️⃣</div>
                <h3>{locale === 'en' ? 'Optimized Hashtags' : 'Hashtag Optimized'}</h3>
                <p>{locale === 'en' ? 'Mix trending + niche + branded. Maximum reach.' : 'Mix trending + niche + branded. Maximum reach.'}</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>📅</div>
                <h3>{locale === 'en' ? 'Best Time to Post' : 'Best Time to Post'}</h3>
                <p>{locale === 'en' ? 'AI suggests optimal posting times based on your niche.' : 'AI suggest waktu posting optimal berdasar niche kamu.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? (
                <>Want It <span className={styles.gradientText}>Easy?</span></>
              ) : (
                <>Mau Yang <span className={styles.gradientText}>Gampang?</span></>
              )}
            </h2>
            <p className={styles.subtitle}>{locale === 'en' ? '3 free credits. Try it now.' : '3 kredit gratis. Langsung cobain.'}</p>
            <TrackedCTA
              href="https://saas.aitradepulse.com/"
              className={styles.btnPrimary}
              productName="AI Video Studio - LP4 Footer"
              productId="ai-video-studio-lp4-footer"
            >
              {locale === 'en' ? '⚡ Upload Now' : '⚡ Upload Sekarang'}
            </TrackedCTA>
          </div>
        </section>
      </div>
    </Layout>
  );
}
