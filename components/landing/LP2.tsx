'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from './LandingPage.module.css';
import TrackedCTA from './TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function LP2({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('AI Video Studio - LP2', '0', 'ai-video-studio-lp2');
  return (
    <Layout 
      title={locale === 'en' ? "For Real, This Simple? — AI Content Studio | BerkahKarya" : "Serius, Sesimpel Ini? — AI Content Studio | BerkahKarya"}
      description={locale === 'en' ? "Create viral content as simple as uploading a photo. BerkahKarya AI Content Studio." : "Bikin konten viral sesimpel upload foto. AI Content Studio BerkahKarya."}
    >
      <div className={styles.wrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>{locale === 'en' ? '3 Steps. Done.' : '3 Langkah. Selesai.'}</span>
            </div>
            
            <h1 className={styles.title}>
              {locale === 'en' ? 'For Real,' : 'Serius,'}<br/>
              <span className={styles.gradientTextPurple}>{locale === 'en' ? 'This Simple?' : 'Sesimpel Ini?'}</span>
            </h1>
            
            <p className={styles.subtitle}>
              {locale === 'en' ? 'Upload photo → pick style → viral video ready. No skills. No expensive software. No wasting hours.' : 'Upload foto → pilih style → video viral siap download. Gak perlu skill. Gak perlu software mahal. Gak perlu waktu berjam-jam.'}
            </p>
            
            <div className={styles.ctaRow}>
              <TrackedCTA 
                href="https://saas.aitradepulse.com/" 
                className={styles.btnPrimary}
                productName="AI Video Studio - LP2 Hero"
                productId="ai-video-studio-lp2"
              >
                {locale === 'en' ? '😱 See For Yourself' : '😱 Buktiin Sendiri'}
              </TrackedCTA>
            </div>
            
            <div className={styles.trustStrip}>
              <span>{locale === 'en' ? '✓ Literally 3 steps' : '✓ Literally 3 langkah'}</span>
              <span>{locale === 'en' ? '✓ 5 minutes done' : '✓ 5 menit selesai'}</span>
              <span>{locale === 'en' ? '✓ Free trial' : '✓ Gratis coba'}</span>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className={styles.imageSection}>
          <div className={styles.container}>
            <div className={styles.heroImageWrapper}>
              <Image 
                src="https://i.postimg.cc/8PsRYSMn/Gemini-Generated-Image-je8mgkje8mgkje8m.png" 
                alt={locale === 'en' ? "AI Content Studio - This Simple" : "AI Content Studio - Sesimpel Ini"}
                width={900}
                height={600}
                className={styles.heroImage}
                priority
                quality={75}
              />
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'How It Works' : 'Cara Kerja'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Just' : 'Cuma'} <span className={styles.gradientText}>{locale === 'en' ? '3 Steps' : '3 Langkah'}</span>
            </h2>
            
            <div className={styles.grid3}>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>1</div>
                <h3>{locale === 'en' ? 'Upload Photo' : 'Upload Foto'}</h3>
                <p>{locale === 'en' ? 'Just a product photo from your phone. AI enhances automatically.' : 'Foto produk dari HP aja cukup. AI enhance otomatis.'}</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>2</div>
                <h3>{locale === 'en' ? 'Pick Style' : 'Pilih Style'}</h3>
                <p>{locale === 'en' ? 'Want cinematic? Energetic? Aesthetic? Just click.' : 'Mau cinematic? Energetic? Aesthetic? Tinggal klik.'}</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNum}>3</div>
                <h3>{locale === 'en' ? 'Download' : 'Download'}</h3>
                <p>{locale === 'en' ? 'Video + caption + hashtag ready. Upload immediately.' : 'Video + caption + hashtag ready. Langsung upload.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? "Still Don't Believe?" : 'Masih Gak Percaya?'} <span className={styles.gradientText}>{locale === 'en' ? 'Try It Free' : 'Coba Aja Gratis'}</span>
            </h2>
            <p className={styles.subtitle}>{locale === 'en' ? '3 free credits. No credit card. No commitment.' : '3 kredit gratis. Tanpa kartu kredit. Tanpa commitment.'}</p>
            <TrackedCTA 
              href="https://saas.aitradepulse.com/" 
              className={styles.btnPrimary}
              productName="AI Video Studio - LP2 Footer"
              productId="ai-video-studio-lp2-footer"
            >
              {locale === 'en' ? "😱 OK, I'll Try" : '😱 Oke, Gue Coba'}
            </TrackedCTA>
          </div>
        </section>
      </div>
    </Layout>
  );
}
