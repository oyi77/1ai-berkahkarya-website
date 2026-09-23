'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import b from '../_lp-base.module.css';
import s from './LP1.module.css';
import TrackedCTA from '../TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function VilonaFxlp1({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Vilona FX - LP1', '0', 'vilonafx-lp1');

  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const el = document.getElementById('scrollProgress');
    if (!el) return;
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      el.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleFaqToggle = (i: number) => (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    setOpenFaqs((prev) => ({ ...prev, [i]: (e.target as HTMLDetailsElement).open }));
  };


  const faqs = [
    {
      q: 'Saya tidak paham trading teknikal sama sekali, apakah ini cocok?',
      a: 'Cocok. Setiap sinyal berisi entry, SL, dan TP yang eksplisit — Anda mengeksekusi tanpa perlu paham indikator di baliknya.',
    },
    {
      q: 'Apakah ada jaminan uang saya pasti bertambah terus menerus?',
      a: 'Tidak ada. Setiap setup mencantumkan RR dan confidence agar Anda bisa menolak setup yang tidak sesuai toleransi risiko Anda. Riwayat masa lalu bukan janji hasil masa depan.',
    },
    {
      q: 'Mengapa saya harus memilih AI dibanding belajar manual?',
      a: 'Karena satu analis manusia tidak bisa memantau 6+ pair 24/7 tanpa bias. Tiga engine memvalidasi setiap setup; yang tidak mencapai konsensus tidak dikirim.',
    },
  ];

  return (
    <Layout
      title="Vilona Trade FX — AI Trading Assistant & Whitelabel Platform"
      description="Trading dengan data, bukan emosi. AI bantu analisa market 24/7, filter signal berkualitas, dan bisa bikin bot trading sendiri."
    >
      {/* Ticker removed 2026-09-23: static prices rot within hours; pro traders verify live */}

      <div className={s.wrapper}>
        {/* Scroll Progress */}
        <div className={s.scrollProgress} id="scrollProgress" />

        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroInner}>
            <div className={s.badge}>
              <span className={s.badgeDot} />
              AI Trading Assistant — 24/7
            </div>
            <h1 className={s.title}>
              Sinyal XAUUSD Berbasis Konsensus AI,<br />
              <span className={s.gradientText}>Entry, SL & TP Selalu Jelas</span>
            </h1>
            <p className={s.subtitle}>
              Tiga engine independen (DeepSeek · GPT · Claude) memvalidasi setiap setup sebelum
              dikirim ke Telegram Anda — lengkap dengan zona entry, stop-loss, dan take-profit.
              Bukan jaminan profit; ini disiplin berbasis data.
            </p>
            <div className={s.ctaRow}>
              <TrackedCTA
                className={s.btnPrimary}
                href="https://t.me/berkahkaryaforexbotbot"
                productName="VilonaFX - Hero"
              >
                Lihat Contoh Sinyal di Telegram
              </TrackedCTA>
              <a href="#live-demo" className={s.btnSecondary}>
                Cara Kerja Engine
              </a>
            </div>

            <div className={s.statsRow}>
              <div className={s.stat}>
                <span className={s.statNum}>3</span>
                <span className={s.statLabel}>Engine AI Independen</span>
              </div>
              <div className={s.stat}>
                <span className={s.statNum}>40+</span>
                <span className={s.statLabel}>Sinyal / Minggu</span>
              </div>
              <div className={s.stat}>
                <span className={s.statNum}>24/7</span>
                <span className={s.statLabel}>Monitoring Market</span>
              </div>
              <div className={s.stat}>
                <span className={s.statNum}>1:1.5</span>
                <span className={s.statLabel}>RR Minimum per Setup</span>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo */}
        <section className={s.demoSection} id="live-demo">
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Format Sinyal yang Anda Terima</h2>
            <p className={s.sectionSub}>
              Contoh nyata struktur setup: zona, SL/TP, RR, dan voters AI yang menyetujuinya.
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
                <div>
                  <span className={s.terminalStatus}>●</span> AI sedang menganalisis XAUUSD...
                </div>
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
            <h2 className={s.sectionTitle}>Masalah yang Diselesaikan Engine Ini</h2>
            <p className={s.sectionSub}>
              Empat kegagalan paling umum pada trader manual — dan bagaimana setiap sinyal mencegahnya.
            </p>
            <div className={s.painGrid}>
              {[
                {
                  icon: '⏰',
                  title: 'Waktu Habis Tersita',
                  desc: 'Begadang menatap pergerakan harga hingga mengorbankan waktu tidur, kesehatan, dan keluarga Anda.',
                },
                {
                  icon: '😰',
                  title: 'Stres & Trauma Mental',
                  desc: 'Jantung berdebar saat floating minus, berujung pada keputusan emosional yang merusak saldo.',
                },
                {
                  icon: '🔁',
                  title: 'Terjebak Rutinitas',
                  desc: 'Selalu ketinggalan momen emas di market karena Anda sedang sibuk bekerja atau bisnis utama.',
                },
                {
                  icon: '📚',
                  title: 'Lelah Belajar Teori',
                  desc: 'Pusing dengan ratusan indikator dan strategi yang pada akhirnya tetap membuat Anda rugi.',
                },
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
            <h2 className={s.sectionTitle}>Tiga Lapisan Validasi per Setup</h2>
            <p className={s.sectionSub}>
              Setiap setup lolos konsensus multi-engine sebelum sampai ke Anda. Tanpa konsensus, tanpa sinyal.
            </p>
            <div className={s.grid3}>
              {[
                {
                  icon: '🔍',
                  title: 'Tidur Lebih Nyenyak',
                  desc: 'Titipkan beban analisa Anda. Biarkan asisten AI kami yang memantau market 24/7 selagi Anda beristirahat.',
                },
                {
                  icon: '🎯',
                  title: 'Keputusan Tanpa Ragu',
                  desc: 'Peluang diverifikasi oleh tiga otak AI berbeda. Anda hanya menerima sinyal matang tanpa perlu menebak-nebak lagi.',
                },
                {
                  icon: '⚡',
                  title: 'Bebas Repot',
                  desc: 'Sistem akan menghubungkan keputusan langsung ke akun Anda. Tidak perlu lagi mengetik order manual.',
                },
              ].map((b) => (
                <div key={b.title} className={s.card}>
                  <div className={s.cardIcon}>{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
            <div
              style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
              }}
            >
              Mesin Pekerja Anda — DeepSeek · GPT-4o · Claude — Bekerja paralel mengamankan dana
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={`${s.section} ${s.painSection}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Mulai dalam Tiga Langkah</h2>
            <p className={s.sectionSub}>
              Tanpa instalasi indikator. Tanpa template MT5. Cukup Telegram.
            </p>
            <div className={s.steps}>
              {[
                {
                  num: '01',
                  title: 'Koneksikan Akun',
                  desc: 'Tautkan Telegram atau akun MT5 Anda dalam hitungan menit tanpa prosedur yang memusingkan.',
                },
                {
                  num: '02',
                  title: 'Mesin Bekerja',
                  desc: 'Kecerdasan Buatan kami mengambil alih beban memikirkan pergerakan arah pasar untuk Anda.',
                },
                {
                  num: '03',
                  title: 'Nikmati Kehidupan',
                  desc: 'Dapatkan laporan keuntungan harian. Habiskan waktu untuk hal yang benar-benar penting bagi Anda.',
                },
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

        {/* Comparison */}
        <section className={`${s.section} ${s.painSection}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Manual vs Konsensus AI</h2>
            <p className={s.sectionSub}>
              Perbandingan langsung: grup sinyal manual vs pipeline Vilona.
            </p>
            <div className={s.compareGrid}>
              <div className={s.compareOld}>
                <div className={s.compareHeader}>
                  <h3>❌ Grup Sinyal Biasa</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>Bergantung mood &amp; waktu luang admin</li>
                  <li>Keputusan berdasarkan emosi &amp; FOMO</li>
                  <li>Sering tahan floating tanpa batas</li>
                  <li>Wajib stand-by HP setiap saat</li>
                </ul>
              </div>
              <div className={s.compareNew}>
                <div className={s.compareHeader}>
                  <h3>✅ Pipeline Vilona</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>Bekerja 24/7 tanpa kenal lelah</li>
                  <li>Dihitung objektif oleh 3 model AI</li>
                  <li>RR minimum 1:1.5, SL selalu terdefinisi</li>
                  <li>Auto-eksekusi opsional via MT5 bridge</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Spesifikasi Engine */}
        <section className={`${s.section} ${s.testiSection}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              Apa yang Anda <span style={{ color: 'var(--accent)' }}>Dapat</span> di Setiap{' '}
              <span style={{ color: 'var(--gold)' }}>Sinyal</span>
            </h2>
            <p className={s.sectionSub}>
              Format tetap. Setiap setup mencakup seluruh field di bawah — tanpa pengecualian.
            </p>
            <div className={s.testiGrid}>
              {[
                { h: 'Zona Entry', d: 'Rentang harga masuk yang dihitung dari struktur H1 + bias D1.' },
                { h: 'Stop-Loss', d: 'Batas risiko eksplisit per setup. Tidak ada setup tanpa SL.' },
                { h: 'Take-Profit 1 & 2', d: 'Dua target bertingkat dengan rasio RR minimum 1:1.5.' },
                { h: 'Skor Confidence', d: 'Persentase keyakinan engine + alasan teknikal singkat.' },
                { h: 'Konteks Sesi', d: 'Label sesi (Asia/London/NY) dan status spread saat sinyal dibuat.' },
                { h: 'Mode Sensor', d: 'User gratis menerima arah + confidence; level angka terbuka setelah upgrade.' },
              ].map((f, i) => (
                <div key={i} className={s.testiCard}>
                  <div style={{ padding: '1.25rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.35rem', color: '#fff' }}>
                      {f.h}
                    </strong>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {f.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Whitelabel */}
        <section className={`${s.section} ${s.whitelabelSection}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle} style={{ color: 'var(--gold)' }}>
              Whitelabel: Bot Sinyal atas Brand Anda
            </h2>
            <p className={s.sectionSub}>
              Infrastruktur sinyal yang sama, atas nama brand Anda. Tanpa coding, tanpa server.
            </p>
            <div className={s.whitelabelGrid}>
              <div className={s.card}>
                <div className={s.cardIcon}>🏷️</div>
                <h3>Otoritas Penuh</h3>
                <p>Pelanggan Anda hanya tahu bahwa ini adalah bot canggih milik bisnis Anda sendiri.</p>
              </div>
              <div className={s.card}>
                <div className={s.cardIcon}>🔌</div>
                <h3>Bebas Beban Teknis</h3>
                <p>Lupakan urusan server error. Kami yang menjaga mesin agar tetap menyala sempurna.</p>
              </div>
              <div className={s.card}>
                <div className={s.cardIcon}>💰</div>
                <h3>Keran Penghasilan Baru</h3>
                <p>Ubah keahlian marketing Anda menjadi passive income rutin yang stabil setiap bulan.</p>
              </div>
            </div>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                marginTop: '2rem',
                fontFamily: 'var(--mono, monospace)',
                textAlign: 'center',
                maxWidth: '36rem',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <span style={{ color: 'var(--gold)' }}>GAMBARAN POTENSI BISNIS:</span>
              <br />
              Hanya dengan 100 Pelanggan berlangganan di brand Anda × Rp 254.000/bulan ={' '}
              <span
                style={{
                  color: 'var(--accent)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                }}
              >
                Rp 25.400.000 / Bulan
              </span>{' '}
              passive income nyata tanpa pusing mikir modal operasional.
            </div>
          </div>
        </section>

        {/* Broker Partners */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Infrastruktur Terbaik untuk Dana Anda</h2>
            <p className={s.sectionSub}>
              Kami hanya menghubungkan kendaraan AI ini ke jalan tol paling aman: broker-broker
              berlisensi global dengan eksekusi milidetik.
            </p>
            <div className={s.brokerGrid}>
              {/* Exness */}
              <div className={s.brokerCard}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏆</div>
                <h3>Exness</h3>
                <div className={s.brokerTagline}>Broker Forex &amp; CFD — Global</div>
                <div className={s.brokerBadge}>
                  🔥 Bebas Rasa Khawatir • Deposit mulai $10 • Penarikan Instan
                </div>
                <p className={s.brokerDesc}>
                  Pilihan paling masuk akal bagi trader yang mencari ketenangan. Tarik dana kapan
                  saja, bebas komisi tersembunyi, dan diawasi oleh badan regulasi tingkat dunia.
                </p>
                <ul className={s.brokerFeatures}>
                  <li>Penarikan instan ke bank lokal Anda kapan saja</li>
                  <li>Akun Cent mulai $1 untuk memulai tanpa tekanan</li>
                  <li>Eksekusi super cepat agar profit tidak terlewat</li>
                  <li>Support MT4 &amp; MT5 untuk koneksi AI lancar</li>
                </ul>
                <a
                  href="https://one.exnessonelink.com/a/l9jwml125i"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: '#000',
                  }}
                >
                  Amankan Dana di Exness Gratis →
                </a>
              </div>

              {/* IC Markets */}
              <div className={s.brokerCard}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
                <h3>IC Markets</h3>
                <div className={s.brokerTagline}>ECN Broker — Institutional Grade</div>
                <div className={s.brokerBadge}>
                  🔥 Likuiditas Kelas Atas • Spread 0.0 pip • Tanpa Requote
                </div>
                <p className={s.brokerDesc}>
                  Bagi Anda yang menginginkan standar institusi. Terhubung langsung ke bank-bank
                  besar global untuk memastikan order Anda dieksekusi tanpa gangguan sama sekali.
                </p>
                <ul className={s.brokerFeatures}>
                  <li>Akses langsung tanpa manipulasi broker (ECN)</li>
                  <li>Lebih dari 110+ instrumen keuangan tersedia</li>
                  <li>Regulasi ketat dari ASIC &amp; CySEC</li>
                  <li>Cocok untuk eksekusi bot kecepatan tinggi</li>
                </ul>
                <a
                  href="https://icmarkets-vnt.com/?camp=93258"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                    color: '#fff',
                  }}
                >
                  Buka Akun IC Markets Gratis →
                </a>
              </div>
            </div>

            <div className={s.trustStrip}>
              <span>🔒 Keamanan Dana Terjamin</span>
              <span>💰 Akses Mudah Diakses</span>
              <span>⚡ Tanpa Hambatan Teknisi</span>
              <span>🏦 Didukung Bank Lokal</span>
            </div>
          </div>
        </section>

        {/* Pricing / CTA */}
        <section className={s.finalCta}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Pilih Akses Anda</h2>
            <p className={s.sectionSub}>
              Dua paket. Tanpa tier tersembunyi. Upgrade dan kelola via bot Telegram.
            </p>
            <div className={s.specTable} role="table" aria-label="Perbandingan paket">
              <div className={s.specRow + ' ' + s.specHead} role="row">
                <span role="columnheader">Spesifikasi</span>
                <span role="columnheader">ELITE</span>
                <span role="columnheader">LIFETIME</span>
              </div>
              <div className={s.specRow} role="row">
                <span>Harga</span>
                <strong>Rp 254.000/bln</strong>
                <strong>Rp 1.990.900 sekali</strong>
              </div>
              <div className={s.specRow} role="row">
                <span>Sinyal AI</span>
                <span>Unlimited · 40+/minggu</span>
                <span>Unlimited · 40+/minggu</span>
              </div>
              <div className={s.specRow} role="row">
                <span>Entry / SL / TP</span>
                <span className={s.specYes}>✓ Selalu tercantum</span>
                <span className={s.specYes}>✓ Selalu tercantum</span>
              </div>
              <div className={s.specRow} role="row">
                <span>Validasi engine</span>
                <span>Konsensus 3 AI</span>
                <span>Konsensus 3 AI</span>
              </div>
              <div className={s.specRow} role="row">
                <span>RR minimum</span>
                <span>1:1.5</span>
                <span>1:1.5</span>
              </div>
              <div className={s.specRow} role="row">
                <span>Auto-eksekusi MT5</span>
                <span className={s.specYes}>✓ Bridge + EA</span>
                <span className={s.specYes}>✓ Bridge + EA</span>
              </div>
              <div className={s.specRow} role="row">
                <span>Whitelabel bot</span>
                <span>1 lisensi</span>
                <span>3 lisensi</span>
              </div>
              <div className={s.specRow} role="row">
                <span>Support</span>
                <span>Prioritas 24/7</span>
                <span>VIP + konsultasi</span>
              </div>
              <div className={s.specRow} role="row">
                <span>Masa aktif</span>
                <span>30 hari, perpanjang</span>
                <span>Permanen</span>
              </div>
              <div className={s.specRow + ' ' + s.specCta} role="row">
                <span />
                <TrackedCTA
                  className={s.btnPrimary}
                  href="https://t.me/berkahkaryaforexbotbot?start=elite"
                  productName="VilonaFX - Pricing"
                  value={254000}
                  currency="IDR"
                >
                  Aktifkan ELITE
                </TrackedCTA>
                <TrackedCTA
                  className={s.btnPrimary}
                  href="https://t.me/berkahkaryaforexbotbot?start=lifetime"
                  productName="VilonaFX - Pricing"
                  value={1990900}
                  currency="IDR"
                >
                  Aktifkan LIFETIME
                </TrackedCTA>
              </div>
              <div className={s.specRow + ' ' + s.specFoot} role="row">
                <span>🎁 PROMO IB — diskon 50% ELITE/LIFETIME. Deposit min $100 di bawah IB kami, klaim via <a href="https://t.me/alwayscuanterus">@alwayscuanterus</a> atau <a href="https://t.me/codergaboets">@codergaboets</a>.</span>
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Jawaban Untuk Keraguan Anda</h2>
            <p className={s.sectionSub}>
              Mengerti batasan kendaraan ini agar Anda tiba di tujuan finansial dengan selamat.
            </p>
            <div className={s.faqWrap}>
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className={s.faqItem}
                  onToggle={handleFaqToggle(i)}
                >
                  <summary className={s.faqSummary}>
                    {faq.q}
                    <span
                      className={s.faqArrow}
                      style={{
                        transform: openFaqs[i] ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <div className={s.faqContent}>{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
