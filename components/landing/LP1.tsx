'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import b from './_lp-base.module.css'; import s from './LP1.module.css';
import TrackedCTA from './TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function LP1({ locale = 'id' }: { locale?: string }) {
  // Track scroll depth, time on page, and product view
  useEngagementTracking('AI Video Studio - LP1', '0', 'ai-video-studio-lp1');

  return (
    <Layout
      title={locale === 'en' ? "Content That Sells — AI Content Studio | BerkahKarya" : "Konten Ini Bikin Laku — AI Content Studio | BerkahKarya"}
      description={locale === 'en' ? "Create viral content that makes products sell. AI-Powered Content Creation." : "Buat konten viral yang bikin produk laku keras. AI-Powered Content Creation."}
    >
      <div className={b.wrapper}>
        {/* Hero Section */}
        <section className={b.hero}>
          <div className={b.heroInner}>
            <div className={b.badge}>
              <span className={b.badgeDot}></span>
              <span>AI-Powered Content Creation</span>
            </div>
            <h1 className={b.title}>
              {locale === 'en' ? <>Content That<br/></> : <>Konten Ini<br/></>}
              <span className={b.gradientText}>{locale === 'en' ? 'Sells' : 'Bikin Laku'}</span>
            </h1>
            
            <p className={b.subtitle}>
              {locale === 'en'
                ? 'Upload product photo → get viral video + caption + hashtags in minutes. No editing skills needed.'
                : 'Upload foto produk → dapat video viral + caption + hashtag dalam hitungan menit. Tanpa skill editing. Tanpa ribet.'}
            </p>
            
            
            <div className={b.ctaRow}>
              <TrackedCTA 
                href="https://saas.aitradepulse.com/" 
                className={b.btnPrimary}
                productName="AI Video Studio - LP1 Hero"
                productId="ai-video-studio-lp1"
              >
                {locale === 'en' ? '🚀 Try Free Now' : '🚀 Coba Gratis Sekarang'}
              </TrackedCTA>
            </div>
            
            <div className={b.trustStrip}>
              <span>{locale === 'en' ? '✓ 3 free credits' : '✓ Gratis 3 kredit'}</span>
              <span>{locale === 'en' ? '✓ No credit card' : '✓ Tanpa kartu kredit'}</span>
              <span>{locale === 'en' ? '✓ Start instantly' : '✓ Langsung pakai'}</span>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className={b.imageSection}>
          <div className={b.container}>
            <div className={b.heroImageWrapper}>
              <Image 
                src="https://i.postimg.cc/zGJdvMgf/Gemini-Generated-Image-ttxwt9ttxwt9ttxw.png" 
                alt="AI Video Generation - Before and After Comparison"
                width={900}
                height={600}
                className={b.heroImage}
                priority
                quality={75}
              />
              <div className={b.imageOverlayLeft}>BEFORE</div>
              <div className={b.imageOverlayRight}>AFTER</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={b.section}>
          <div className={b.container}>
            <span className={b.eyebrow}>{locale === 'en' ? 'Why It Works' : 'Kenapa Ini Works'}</span>
            <h2 className={b.sectionTitle}>
              {locale === 'en' ? 'Why Content Like This ' : 'Kenapa Konten Ini '}
              <span className={b.gradientText}>{locale === 'en' ? 'Sells?' : 'Bikin Laku?'}</span>
            </h2>
            
            <div className={b.grid3}>
              <div className={b.card}>
                <div className={b.cardIcon}>🎯</div>
                <h3>{locale === 'en' ? 'Hooks That Grab' : 'Hook yang Nangkep'}</h3>
                <p>{locale === 'en' ? 'AI analyzes 10,000+ viral videos to generate hooks that stop the scroll. Proven to increase watch time 3x.' : 'AI analisis 10.000+ video viral untuk generate hook yang bikin scroll berhenti. Terbukti naikkan watch time 3x lipat.'}</p>
              </div>
              <div className={b.card}>
                <div className={b.cardIcon}>🎬</div>
                <h3>{locale === 'en' ? 'Cinematic Video' : 'Video Cinematic'}</h3>
                <p>{locale === 'en' ? 'Boring product photos become professional moving video. Studio quality, coffee shop prices.' : 'Foto produk biasa jadi video bergerak profesional. Kualitas studio, harga warung kopi.'}</p>
              </div>
              <div className={b.card}>
                <div className={b.cardIcon}>📈</div>
                <h3>{locale === 'en' ? 'Optimized for FYP' : 'Optimized untuk FYP'}</h3>
                <p>{locale === 'en' ? 'Captions, hashtags, posting timing — all AI-optimized based on real-time trending data.' : 'Caption, hashtag, timing posting — semua di-optimize AI berdasarkan data real-time trending.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={b.finalCta}>
          <div className={b.container}>
            <h2 className={b.sectionTitle}>
              {locale === 'en' ? 'Ready to Make Content That ' : 'Siap Bikin Konten yang '}
              <span className={b.gradientText}>{locale === 'en' ? 'Sells Big?' : 'Laku Keras?'}</span>
            </h2>
            <p className={b.subtitle}>{locale === 'en' ? 'Join 500+ sellers who have proven the results.' : 'Join 500+ seller yang udah buktiin hasilnya.'}</p>
            <TrackedCTA 
              href="https://saas.aitradepulse.com/" 
              className={b.btnPrimary}
              productName="AI Video Studio - LP1 Footer"
              productId="ai-video-studio-lp1-footer"
            >
              {locale === 'en' ? '🚀 Start Free — 3 Free Credits' : '🚀 Mulai Gratis — 3 Kredit Aktif'}
            </TrackedCTA>
          </div>
        </section>
      </div>
    </Layout>
  );
}
