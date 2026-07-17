'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import b from './_lp-base.module.css'; import s from './LP2.module.css';
import TrackedCTA from './TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function LP2({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('AI Video Studio - LP2', '0', 'ai-video-studio-lp2');
  return (
    <Layout 
      title={locale === 'en' ? "For Real, This Simple? — AI Content Studio | BerkahKarya" : "Serius, Sesimpel Ini? — AI Content Studio | BerkahKarya"}
      description={locale === 'en' ? "Create viral content as simple as uploading a photo. BerkahKarya AI Content Studio." : "Bikin konten viral sesimpel upload foto. AI Content Studio BerkahKarya."}
    >
      <div className={b.wrapper}>
        {/* Hero Section */}
        <section className={b.hero}>
          <div className={b.heroInner}>
            <div className={b.badge}>
              <span className={b.badgeDot}></span>
              <span>{locale === 'en' ? '3 Steps. Done.' : '3 Langkah. Selesai.'}</span>
            </div>
            
            <h1 className={b.title}>
              {locale === 'en' ? 'For Real,' : 'Serius,'}<br/>
              <span className={b.gradientText}>{locale === 'en' ? 'This Simple?' : 'Sesimpel Ini?'}</span>
            </h1>
            
            <p className={b.subtitle}>
              {locale === 'en' ? 'Upload photo → pick style → viral video ready. No skills. No expensive software. No wasting hours.' : 'Upload foto → pilih style → video viral siap download. Gak perlu skill. Gak perlu software mahal. Gak perlu waktu berjam-jam.'}
            </p>
            
            <div className={b.ctaRow}>
              <TrackedCTA 
                href="https://saas.aitradepulse.com/" 
                className={b.btnPrimary}
                productName="AI Video Studio - LP2 Hero"
                productId="ai-video-studio-lp2"
              >
                {locale === 'en' ? '😱 See For Yourself' : '😱 Buktiin Sendiri'}
              </TrackedCTA>
            </div>
            
            <div className={b.trustStrip}>
              <span>{locale === 'en' ? '✓ Literally 3 steps' : '✓ Literally 3 langkah'}</span>
              <span>{locale === 'en' ? '✓ 5 minutes done' : '✓ 5 menit selesai'}</span>
              <span>{locale === 'en' ? '✓ Free trial' : '✓ Gratis coba'}</span>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className={b.imageSection}>
          <div className={b.container}>
            <div className={b.heroImageWrapper}>
              <Image 
                src="https://i.postimg.cc/8PsRYSMn/Gemini-Generated-Image-je8mgkje8mgkje8m.png" 
                alt={locale === 'en' ? "AI Content Studio - This Simple" : "AI Content Studio - Sesimpel Ini"}
                width={900}
                height={600}
                className={b.heroImage}
                priority
                quality={75}
              />
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className={b.section}>
          <div className={b.container}>
            <span className={b.eyebrow}>{locale === 'en' ? 'How It Works' : 'Cara Kerja'}</span>
            <h2 className={b.sectionTitle}>
              {locale === 'en' ? 'Just' : 'Cuma'} <span className={b.gradientText}>{locale === 'en' ? '3 Steps' : '3 Langkah'}</span>
            </h2>
            
            <div className={b.grid3}>
              <div className={b.stepCard}>
                <div className={b.stepNum}>1</div>
                <h3>{locale === 'en' ? 'Upload Photo' : 'Upload Foto'}</h3>
                <p>{locale === 'en' ? 'Just a product photo from your phone. AI enhances automatically.' : 'Foto produk dari HP aja cukup. AI enhance otomatis.'}</p>
              </div>
              <div className={b.stepCard}>
                <div className={b.stepNum}>2</div>
                <h3>{locale === 'en' ? 'Pick Style' : 'Pilih Style'}</h3>
                <p>{locale === 'en' ? 'Want cinematic? Energetic? Aesthetic? Just click.' : 'Mau cinematic? Energetic? Aesthetic? Tinggal klik.'}</p>
              </div>
              <div className={b.stepCard}>
                <div className={b.stepNum}>3</div>
                <h3>{locale === 'en' ? 'Download' : 'Download'}</h3>
                <p>{locale === 'en' ? 'Video + caption + hashtag ready. Upload immediately.' : 'Video + caption + hashtag ready. Langsung upload.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={b.finalCta}>
          <div className={b.container}>
            <h2 className={b.sectionTitle}>
              {locale === 'en' ? "Still Don't Believe?" : 'Masih Gak Percaya?'} <span className={b.gradientText}>{locale === 'en' ? 'Try It Free' : 'Coba Aja Gratis'}</span>
            </h2>
            <p className={b.subtitle}>{locale === 'en' ? '3 free credits. No credit card. No commitment.' : '3 kredit gratis. Tanpa kartu kredit. Tanpa commitment.'}</p>
            <TrackedCTA 
              href="https://saas.aitradepulse.com/" 
              className={b.btnPrimary}
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
