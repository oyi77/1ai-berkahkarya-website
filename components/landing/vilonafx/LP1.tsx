'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import b from '../_lp-base.module.css';
import s from './LP1.module.css';
import TrackedCTA from '../TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function VilonaFxlp1({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Vilona FX - LP1', '0', 'vilonafx-lp1');

  return (
    <Layout
      title="Vilona Trade FX — AI Trading Assistant & Whitelabel Platform"
      description="Trading dengan data, bukan emosi. AI bantu analisa market 24/7, filter signal berkualitas, dan bisa bikin bot trading sendiri."
    >
      {/* Ticker */}
      <div className={s.ticker}>
        {[
          { pair: 'XAUUSD', price: '3,247.85', chg: '+1.2%', up: true },
          { pair: 'EURUSD', price: '1.0842', chg: '-0.3%', up: false },
          { pair: 'GBPUSD', price: '1.2715', chg: '+0.5%', up: true },
          { pair: 'BTCUSD', price: '108,420', chg: '+2.8%', up: true },
          { pair: 'ETHUSD', price: '2,547', chg: '+1.1%', up: true },
          { pair: 'USDJPY', price: '148.32', chg: '-0.4%', up: false },
        ].map((item) => (
          <div key={item.pair} className={s.tickerItem}>
            <span className={s.tickerPair}>{item.pair}</span>
            <span className={s.tickerPrice}>{item.price}</span>
            <span className={item.up ? s.tickerUp : s.tickerDown}>{item.chg}</span>
          </div>
        ))}
      </div>

      <div className={s.wrapper}>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroInner}>
            <div className={s.badge}>
              <span className={s.badgeDot} />
              AI Trading Assistant — 24/7
            </div>
            <h1 className={s.title}>
              Bukan Belajar Trading,<br />
              <span className={s.gradientText}>Ini Kendaraan Profit Anda</span>
            </h1>
            <p className={s.subtitle}>
              Anda ingin kebebasan finansial, bukan kelelahan menatap layar. Biarkan 3 AI canggih kami yang bekerja 24/7 sebagai mesin pencetak profit Anda, sementara Anda fokus pada keluarga dan pekerjaan utama.
            </p>
            <div className={s.ctaRow}>
              <TrackedCTA
                className={s.btnPrimary}
                href="https://t.me/berkahkaryaforexbotbot"
                productName="VilonaFX - Hero"
              >
                🚀 Ambil Kendali Waktu Anda
              </TrackedCTA>
              <a href="#live-demo" className={s.btnSecondary}>
                Lihat Bagaimana Mesin Bekerja
              </a>
            </div>

            <div className={s.statsRow}>
              <div className={s.stat}>
                <span className={s.statNum}>0</span>
                <span className={s.statLabel}>Win Rate Backtest</span>
              </div>
              <div className={s.stat}>
                <span className={s.statNum}>0</span>
                <span className={s.statLabel}>Profit Factor</span>
              </div>
              <div className={s.stat}>
                <span className={s.statNum}>0</span>
                <span className={s.statLabel}>Signal / Bulan</span>
              </div>
              <div className={s.stat}>
                <span className={s.statNum}>0</span>
                <span className={s.statLabel}>Whitelabel Aktif</span>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo */}
        <section className={s.demoSection} id="live-demo">
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Lihat Bagaimana Mesin Ini Bekerja Untuk Anda</h2>
            <p className={s.sectionSub}>
              Kami mengubah algoritma rumit menjadi panduan instan yang dikirim langsung ke Telegram Anda.
            </p>
            <div className={s.terminal}>
              <div className={s.terminalHeader}>
                <span className={s.terminalDot} style={{ background: '#ef4444' }} />
                <span className={s.terminalDot} style={{ background: '#f59e0b' }} />
                <span className={s.terminalDot} style={{ background: '#22c55e' }} />
                <span style={{ marginLeft: '0.5rem' }}>VILONA EXECUTION CONSOLE v2.0</span>
                <span style={{ marginLeft: 'auto', color: '#6366f1', fontSize: '0.75rem' }}>▌</span>
              </div>
              <div className={s.terminalBody}>
                <div><span className={s.terminalStatus}>●</span> AI sedang menganalisis XAUUSD...</div>
                <div style={{ marginTop: '0.75rem', color: s.signalSell || '#ef4444' }}>
                  🔴 <strong>XAUUSD — SELL SIGNAL</strong> London Open
                </div>
                <div className={s.signalEntry}>Zone Entry: $4,076.50 — $4,080.00</div>
                <div className={s.signalMeta}>Stop Loss: $4,090.00 (30 pips)</div>
                <div className={s.signalMeta}>Take Profit 1: $4,050.00 (30 pips)</div>
                <div className={s.signalMeta}>Take Profit 2: $4,030.00 (50 pips)</div>
                <div className={s.signalMeta}>Rasio RR: 1:1.5</div>
                <div className={s.signalMeta}>Analisa AI: DeepSeek + GPT-4o (2/3 Voters setuju)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className={`${s.section} ${s.painSection}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Apa yang Membuat Anda Frustrasi Selama Ini?</h2>
            <p className={s.sectionSub}>
              Bukan karena Anda kurang pintar, tapi karena Anda melakukan pekerjaan yang seharusnya dikerjakan oleh mesin.
            </p>
            <div className={s.painGrid}>
              {[
                { icon: '⏰', title: 'Waktu Habis Tersita', desc: 'Begadang menatap pergerakan harga hingga mengorbankan waktu tidur, kesehatan, dan keluarga Anda.' },
                { icon: '😰', title: 'Stres & Trauma Mental', desc: 'Jantung berdebar saat floating minus, berujung pada keputusan emosional yang merusak saldo.' },
                { icon: '🔁', title: 'Terjebak Rutinitas', desc: 'Selalu ketinggalan momen emas di market karena Anda sedang sibuk bekerja atau bisnis utama.' },
                { icon: '📚', title: 'Lelah Belajar Teori', desc: 'Pusing dengan ratusan indikator dan strategi yang pada akhirnya tetap membuat Anda rugi.' },
              ].map((p) => (
                <div key={p.title} className={s.painCard}>
                  <div className={s.painIcon}>{p.icon}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Benefits */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>AI Adalah Jembatan, Bukan Tujuan</h2>
            <p className={s.sectionSub}>
              Keahlian coding, algoritma DeepSeek, dan GPT-4o kami hanyalah sarana. Tujuannya satu: Mengembalikan ketenangan dan waktu berharga Anda.
            </p>
            <div className={s.grid3}>
              {[
                { icon: '🔍', title: 'Tidur Lebih Nyenyak', desc: 'Titipkan beban analisa Anda. Biarkan asisten AI kami yang memantau market 24/7 selagi Anda beristirahat.' },
                { icon: '🎯', title: 'Keputusan Tanpa Ragu', desc: 'Peluang diverifikasi oleh tiga otak AI berbeda. Anda hanya menerima sinyal matang tanpa perlu menebak-nebak lagi.' },
                { icon: '⚡', title: 'Bebas Repot', desc: 'Sistem akan menghubungkan keputusan langsung ke akun Anda. Tidak perlu lagi mengetik order manual.' },
              ].map((b) => (
                <div key={b.title} className={s.card}>
                  <div className={s.cardIcon}>{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Mesin Pekerja Anda — DeepSeek · GPT-4o · Claude — Bekerja paralel mengamankan dana
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={`${s.section} ${s.painSection}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Jalan Pintas yang Sangat Sederhana</h2>
            <p className={s.sectionSub}>
              Anda tidak perlu paham bahasa teknis rumit di baliknya. Cukup terima hasilnya dan biarkan sistem bekerja.
            </p>
            <div className={s.steps}>
              {[
                { num: '01', title: 'Koneksikan Akun', desc: 'Tautkan Telegram atau akun MT5 Anda dalam hitungan menit tanpa prosedur yang memusingkan.' },
                { num: '02', title: 'Mesin Bekerja', desc: 'Kecerdasan Buatan kami mengambil alih beban memikirkan pergerakan arah pasar untuk Anda.' },
                { num: '03', title: 'Nikmati Kehidupan', desc: 'Dapatkan laporan keuntungan harian. Habiskan waktu untuk hal yang benar-benar penting bagi Anda.' },
              ].map((step) => (
                <div key={step.num} className={s.stepCard}>
                  <div className={s.stepNum}>{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={s.finalCta}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Pilih Kendaraan Anda</h2>
            <p className={s.sectionSub}>
              Gunakan sarana yang paling sesuai dengan target hidup yang ingin Anda capai hari ini.
            </p>
            <div className={s.pricingCard}>
              <div className={s.popularBadge}>PALING POPULER</div>
              <div className={s.pricingName}>PRO</div>
              <div className={s.pricingDesc}>Untuk Ketenangan Pribadi</div>
              <div className={s.pricingPrice}>Rp 79.900</div>
              <div className={s.pricingPeriod}>/bulan</div>
              <ul className={s.pricingFeatures}>
                <li><span className={s.pricingCheck}>✓</span> Asisten AI Pengirim Sinyal</li>
                <li><span className={s.pricingCheck}>✓</span> Bebas Stres Analisa Manual</li>
                <li><span className={s.pricingCheck}>✓</span> Terproteksi SL/TP Otomatis</li>
                <li><span className={s.pricingCheck}>✓</span> Disiplin Menjaga Modal Anda</li>
              </ul>
              <TrackedCTA
                className={s.btnPrimary}
                href="https://t.me/berkahkaryaforexbotbot?start=pro"
                productName="VilonaFX - Pricing"
                value={79900}
                currency="IDR"
              >
                Ambil Kendali Waktu Anda
              </TrackedCTA>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
