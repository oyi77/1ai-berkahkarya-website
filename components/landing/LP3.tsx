'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import b from './_lp-base.module.css'; import s from './LP3.module.css';
import TrackedCTA from './TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function LP3({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('AI Video Studio - LP3', '0', 'ai-video-studio-lp3');
  return (
    <Layout 
      title={locale === 'en' ? 'Still Editing Manually? — AI Content Studio | BerkahKarya' : 'Masih Edit Manual? — AI Content Studio | BerkahKarya'}
      description={locale === 'en' ? 'Stop manual editing. AI creates viral videos automatically. BerkahKarya AI Content Studio.' : 'Stop edit manual. AI bikin video viral otomatis. BerkahKarya AI Content Studio.'}
    >
      <div className={b.wrapper}>
        {/* Hero Section */}
        <section className={b.hero}>
          <div className={b.heroInner}>
            <div className={b.badge}>
              <span className={b.badgeDot}></span>
              <span>{locale === 'en' ? 'A Faster Way' : 'Ada Cara Lebih Cepat'}</span>
            </div>
            
            <h1 className={b.title}>
              {locale === 'en' ? 'Still' : 'Masih'}<br/>
              <span className={b.gradientText}>{locale === 'en' ? 'Editing Manually?' : 'Edit Manual?'}</span>
            </h1>
            
            <p className={b.subtitle}>
              {locale === 'en' 
                ? 'While you spend 3 hours editing 1 video, your competitors upload 10 videos using AI. Time = money. Stop wasting time.'
                : 'Sementara kamu habis 3 jam edit 1 video, kompetitor upload 10 video pakai AI. Waktu = uang. Stop buang waktu.'}
            </p>
            
            <div className={b.ctaRow}>
              <TrackedCTA 
                href="https://saas.aitradepulse.com/" 
                className={b.btnPrimary}
                productName="AI Video Studio - LP3 Hero"
                productId="ai-video-studio-lp3"
              >
                {locale === 'en' ? '😫 Stop Grinding' : '😫 Stop Kerja Rodi'}
              </TrackedCTA>
            </div>
            
            <div className={b.trustStrip}>
              <span>{locale === 'en' ? '✓ Save 3 hours/video' : '✓ Hemat 3 jam/video'}</span>
              <span>{locale === 'en' ? '✓ 10x more output' : '✓ Output 10x lebih banyak'}</span>
              <span>{locale === 'en' ? '✓ Pro quality maintained' : '✓ Kualitas tetap pro'}</span>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className={b.imageSection}>
          <div className={b.container}>
            <div className={b.heroImageWrapper}>
              <Image 
                src="https://i.postimg.cc/5tW8jQGG/Gemini-Generated-Image-d1nxoed1nxoed1nx.png" 
                alt={locale === 'en' ? 'AI Content Studio - Stop Manual Editing' : 'AI Content Studio - Stop Edit Manual'}
                width={900}
                height={600}
                className={b.heroImage}
                priority
                quality={75}
              />
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className={b.section}>
          <div className={b.container}>
            <span className={b.eyebrow}>{locale === 'en' ? 'Comparison' : 'Perbandingan'}</span>
            <h2 className={b.sectionTitle}>
              {locale === 'en' ? 'Manual Editing vs ' : 'Edit Manual vs '}<span className={b.gradientText}>{locale === 'en' ? 'AI Studio' : 'AI Studio'}</span>
            </h2>
            
            <div className={b.compareGrid}>
              <div className={b.compareOld}>
                <h3>{locale === 'en' ? '❌ Manual Editing' : '❌ Edit Manual'}</h3>
                <ul>
                  <li><span className={b.xMark}>✗</span> {locale === 'en' ? '3-4 hours for 1 x 30s video' : '3-4 jam untuk 1 video 30 detik'}</li>
                  <li><span className={b.xMark}>✗</span> {locale === 'en' ? 'Need CapCut/Premiere skills' : 'Perlu skill CapCut/Premiere'}</li>
                  <li><span className={b.xMark}>✗</span> {locale === 'en' ? 'Pay editor $20-50/video' : 'Bayar editor Rp 300K-700K/video'}</li>
                  <li><span className={b.xMark}>✗</span> {locale === 'en' ? 'Back-and-forth revisions exhausting' : 'Revisi bolak-balik capek'}</li>
                  <li><span className={b.xMark}>✗</span> {locale === 'en' ? 'Max upload 3x/week' : 'Max upload 3x seminggu'}</li>
                </ul>
              </div>
              <div className={b.compareNew}>
                <h3>🚀 AI Studio</h3>
                <ul>
                  <li><span className={b.checkMark}>✓</span> {locale === 'en' ? '5 minutes for 1 video' : '5 menit untuk 1 video'}</li>
                  <li><span className={b.checkMark}>✓</span> {locale === 'en' ? 'Zero skill — just upload' : 'Zero skill — upload aja'}</li>
                  <li><span className={b.checkMark}>✓</span> {locale === 'en' ? '$0.50/video' : 'Rp 8.000/video'}</li>
                  <li><span className={b.checkMark}>✓</span> {locale === 'en' ? 'Instant result, no revisions' : 'Instant result, no revisi'}</li>
                  <li><span className={b.checkMark}>✓</span> {locale === 'en' ? 'Upload 3x/day easily' : 'Upload 3x sehari santai'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={b.finalCta}>
          <div className={b.container}>
            <h2 className={b.sectionTitle}>
              {locale === 'en' ? 'Stop ' : 'Udahan '}<span className={b.gradientText}>{locale === 'en' ? 'Grinding' : 'Kerja Rodinya'}</span>
            </h2>
            <p className={b.subtitle}>{locale === 'en' ? 'Let AI do the work. You focus on scaling your business.' : 'Biar AI yang kerja. Kamu fokus scaling bisnis.'}</p>
            <TrackedCTA 
              href="https://saas.aitradepulse.com/" 
              className={b.btnPrimary}
              productName="AI Video Studio - LP3 Footer"
              productId="ai-video-studio-lp3-footer"
            >
              {locale === 'en' ? '😫 I Want to Upgrade' : '😫 Gue Mau Upgrade'}
            </TrackedCTA>
          </div>
        </section>
      </div>
    </Layout>
  );
}
