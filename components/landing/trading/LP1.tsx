'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from '../LandingPage.module.css';
import TrackedCTA from '../TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function TradingLP1({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Algorithmic Trading - LP1', '0', 'algorithmic-trading-lp1');

  return (
    <Layout
      title={locale === 'en' ? 'Algorithmic Trading Bot — AI Signals | BerkahKarya' : 'Algorithmic Trading Bot — Sinyal AI Trading | BerkahKarya'}
      description={locale === 'en' ? 'AI-powered entry/exit signals for XAUUSD, Forex & Crypto. 7-Candle Breakout strategy. Stop trading on feelings, start using a system.' : 'Sinyal entry/exit otomatis AI untuk XAUUSD, Forex & Crypto. Strategi 7-Candle Breakout. Stop trading pakai feeling, mulai pakai sistem.'}
    >
      <div className={styles.wrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>ALGORITHMIC TRADING</span>
            </div>

            <h1 className={styles.title}>
              {locale === 'en' ? (
                <>Stop Trading<br /><span className={styles.gradientTextGold}>On Feelings.</span><br />Start Using Data.</>
              ) : (
                <>Stop Trading<br /><span className={styles.gradientTextGold}>Pakai Feeling.</span><br />Mulai Pakai Sistem.</>
              )}
            </h1>

            <p className={styles.subtitle}>
              {locale === 'en'
                ? 'AI-powered automated entry/exit signals for XAUUSD, Forex, and Crypto. 7-Candle Breakout strategy validated, disciplined execution — no emotion, no all-nighters.'
                : 'Sinyal entry/exit otomatis berbasis AI untuk XAUUSD, Forex, dan Crypto. Strategi 7-Candle Breakout tervalidasi, eksekusi disiplin — tanpa emosi, tanpa begadang.'}
            </p>

            <div className={styles.ctaRow}>
              <TrackedCTA
                href="https://wa.me/6285732740006?text=Halo%20BerkahKarya%2C%20saya%20tertarik%20dengan%20Algorithmic%20Trading"
                className={styles.btnPrimary}
                productName="Algorithmic Trading - LP1 Hero"
                productId="algorithmic-trading-lp1"
              >
                {locale === 'en' ? '💬 Consult Now' : '💬 Konsultasi Sekarang'}
              </TrackedCTA>
            </div>

            <div className={styles.trustStrip}>
              <span>{locale === 'en' ? 'XAUUSD Active' : 'XAUUSD Aktif'}</span>
              <span>58-65% Win Rate</span>
              <span>1:2+ Risk:Reward</span>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'Sound Familiar?' : 'Kedengarannya Familiar?'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Why Most Traders ' : 'Kenapa Trader '}
              <span className={styles.gradientTextGold}>{locale === 'en' ? 'Lose Money' : 'Gagal'}.</span>
            </h2>

            <div className={styles.grid3}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>😤</div>
                <h3>{locale === 'en' ? 'Emotion Ruins Strategy' : 'Emosi Merusak Strategi'}</h3>
                <p>
                  {locale === 'en'
                    ? 'Panic, FOMO, over-trading. Your emotions will always beat logic. Fear makes you exit too early, greed makes you hold too long.'
                    : 'Panik, FOMO, over-trade. Emosi selalu menang lawan logika. Takut bikin exit kepagian, serakah bikin hold kelamaan.'}
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>😴</div>
                <h3>{locale === 'en' ? 'Staring at Charts All Night' : 'Begadang Monitor Chart'}</h3>
                <p>
                  {locale === 'en'
                    ? 'Exhausted from staring at charts for hours. Your screen becomes your prison. Sleep schedule ruined, social life destroyed.'
                    : 'Capek staring di chart berjam-jam. Hidup jadi budak chart. Jam tidur berantakan, social life hancur.'}
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🎲</div>
                <h3>{locale === 'en' ? 'Unvalidated Strategies' : 'Strategi Belum Tervalidasi'}</h3>
                <p>
                  {locale === 'en'
                    ? 'Copying strategies from YouTube or Telegram groups without proper backtesting is gambling, not trading. You don\'t know if it actually works.'
                    : 'Coba strategi dari YouTube/grup tanpa backtest proper = judi, bukan trading. Elu gak tau apakah strateginya beneran works.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'The Solution' : 'Solusinya'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Trade with a ' : 'Trading Pakai '}
              <span className={styles.gradientTextGold}>{locale === 'en' ? 'System' : 'Sistem'}.</span>
              {locale === 'en' ? ' Not Feelings.' : ' Bukan Feeling.'}
            </h2>

            <div className={styles.grid3}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>📡</div>
                <h3>{locale === 'en' ? 'Real-time Signals' : 'Signal Real-time'}</h3>
                <p>
                  {locale === 'en'
                    ? 'Automated entry/exit signals sent directly to Telegram. Just execute. No chart staring, no analysis paralysis, no second-guessing.'
                    : 'Sinyal entry/exit otomatis dikirim ke Telegram. Tinggal eksekusi. Gak perlu staring chart, gak perlu analisis, gak perlu ragu-ragu.'}
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>✅</div>
                <h3>{locale === 'en' ? 'Backtested Strategy' : 'Backtested Strategy'}</h3>
                <p>
                  {locale === 'en'
                    ? 'Every strategy is validated with historical data before going live. 7-Candle Breakout proven across multiple market conditions. No guesswork.'
                    : 'Setiap strategi sudah divalidasi dengan data historis sebelum live. 7-Candle Breakout terbukti di berbagai kondisi market. No guesswork.'}
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🛡️</div>
                <h3>{locale === 'en' ? 'Risk Management' : 'Risk Management'}</h3>
                <p>
                  {locale === 'en'
                    ? 'Every signal comes with built-in Stop Loss, Take Profit, and clear risk:reward ratio. Your capital protected, your profits optimized.'
                    : 'Setiap sinyal lengkap dengan SL, TP, dan risk:reward ratio. Modal terlindungi, profit optimal.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <p className={styles.subtitle}>
              ⚠️ {locale === 'en' ? 'Trading involves risk. Past performance does not guarantee future results.' : 'Trading mengandung risiko. Hasil masa lalu tidak menjamin keuntungan di masa depan.'}
            </p>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Ready to Trade with ' : 'Siap Trading dengan '}
              <span className={styles.gradientTextGold}>{locale === 'en' ? 'Data' : 'Data'}</span>
              {locale === 'en' ? ', Not FOMO?' : ', Bukan FOMO?'}
            </h2>
            <TrackedCTA
              href="https://wa.me/6285732740006?text=Halo%20BerkahKarya%2C%20saya%20tertarik%20trading%20pakai%20sistem%20Algorithmic%20Trading"
              className={styles.btnPrimary}
              productName="Algorithmic Trading - LP1 Footer"
              productId="algorithmic-trading-lp1-footer"
            >
              {locale === 'en' ? '🚀 Start Now' : '🚀 Mulai Sekarang'}
            </TrackedCTA>
          </div>
        </section>
      </div>
    </Layout>
  );
}
