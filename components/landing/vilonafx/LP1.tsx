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

  const testimonials = [
    {
      img: '/vilonafx/user-using-1.webp',
      badge: 'USER AKTIF',
      name: 'Trader Mobile',
      desc: 'Monitoring posisi dari mana saja — cukup lewat smartphone.',
      stat: '212%',
      label: 'roi bulanan',
    },
    {
      img: '/vilonafx/user-using-2.webp',
      badge: 'USER AKTIF',
      name: 'Dashboard Desktop',
      desc: 'Tampilan lengkap untuk analisis mendalam dan manajemen posisi multi-pair.',
      stat: '189%',
      label: 'roi bulanan',
    },
    {
      img: '/vilonafx/user-using-3.webp',
      badge: 'USER AKTIF',
      name: 'Interface Bersih',
      desc: 'Navigasi intuitif — semua fitur terpenting terlihat dalam satu layar.',
      stat: '164%',
      label: 'roi bulanan',
    },
    {
      img: '/vilonafx/trade-result-1.webp',
      badge: 'BUKTI PROFIT',
      name: 'Profit Konsisten',
      desc: 'Rekam jejak performa yang terbukti menghasilkan di berbagai kondisi pasar.',
      stat: '312%',
      label: 'total return',
    },
    {
      img: '/vilonafx/trade-result-2.webp',
      badge: 'BUKTI PROFIT',
      name: 'Equity Growth',
      desc: 'Pertumbuhan modal yang stabil — target tercapai tanpa drawdown berlebihan.',
      stat: '245%',
      label: 'total return',
    },
    {
      img: '/vilonafx/trade-result-3.webp',
      badge: 'BUKTI PROFIT',
      name: 'Track Record',
      desc: 'Data transparan — setiap entry dan exit tercatat untuk evaluasi Anda.',
      stat: '198%',
      label: 'total return',
    },
  ];

  const faqs = [
    {
      q: 'Saya tidak paham trading teknikal sama sekali, apakah ini cocok?',
      a: 'Sangat cocok. Anda tidak perlu paham mesin untuk bisa menyetir mobil. Sinyal yang diberikan asisten AI sudah berupa petunjuk jadi (Entry, Profit, Stop Loss) yang menjaga Anda agar tidak menabrak batas risiko.',
    },
    {
      q: 'Apakah ada jaminan uang saya pasti bertambah terus menerus?',
      a: 'Tidak ada jaminan ajaib. Mesin ini menyajikan probabilitas terbaik dengan penjagaan risiko yang sangat ketat agar modal Anda tidak habis dalam semalam. Pada akhirnya, ini adalah alat pengaman, keputusan eksekusi tetap ada di tangan Anda.',
    },
    {
      q: 'Mengapa saya harus memilih AI dibanding belajar manual?',
      a: 'Karena hidup terlalu singkat jika hanya dihabiskan untuk menatap layar. Biarkan mesin AI yang memproses kelelahan mental dari meneliti chart berjam-jam, agar Anda bisa punya waktu lebih untuk kehidupan pribadi yang sebenarnya.',
    },
  ];

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
              Bukan Belajar Trading,<br />
              <span className={s.gradientText}>Ini Kendaraan Profit Anda</span>
            </h1>
            <p className={s.subtitle}>
              Anda ingin kebebasan finansial, bukan kelelahan menatap layar. Biarkan 3 AI canggih
              kami yang bekerja 24/7 sebagai mesin pencetak profit Anda, sementara Anda fokus pada
              keluarga dan pekerjaan utama.
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
              Kami mengubah algoritma rumit menjadi panduan instan yang dikirim langsung ke Telegram
              Anda.
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
            <h2 className={s.sectionTitle}>Apa yang Membuat Anda Frustrasi Selama Ini?</h2>
            <p className={s.sectionSub}>
              Bukan karena Anda kurang pintar, tapi karena Anda melakukan pekerjaan yang seharusnya
              dikerjakan oleh mesin.
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
            <h2 className={s.sectionTitle}>AI Adalah Jembatan, Bukan Tujuan</h2>
            <p className={s.sectionSub}>
              Keahlian coding, algoritma DeepSeek, dan GPT-4o kami hanyalah sarana. Tujuannya satu:
              Mengembalikan ketenangan dan waktu berharga Anda.
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
            <h2 className={s.sectionTitle}>Jalan Pintas yang Sangat Sederhana</h2>
            <p className={s.sectionSub}>
              Anda tidak perlu paham bahasa teknis rumit di baliknya. Cukup terima hasilnya dan
              biarkan sistem bekerja.
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
            <h2 className={s.sectionTitle}>Berhenti Mengandalkan Tebakan Manusia</h2>
            <p className={s.sectionSub}>
              Inilah alasan mengapa beralih ke asisten berbasis data jauh lebih menenangkan.
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
                  <h3>✅ Kendaraan Vilona AI</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>Bekerja 24/7 tanpa kenal lelah</li>
                  <li>Dihitung objektif oleh 3 model AI</li>
                  <li>Disiplin ketat dengan rasio RR 1:1.5</li>
                  <li>Auto-eksekusi — bebas lepas tangan</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className={`${s.section} ${s.testiSection}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              Pengguna <span style={{ color: 'var(--accent)' }}>Nyata</span>, Hasil{' '}
              <span style={{ color: 'var(--gold)' }}>Nyata</span>
            </h2>
            <p className={s.sectionSub}>
              Rasakan sendiri bagaimana Vilona AI mengubah cara mereka bertransaksi setiap hari.
            </p>
            <div className={s.testiGrid}>
              {testimonials.map((t, i) => (
                <div key={i} className={s.testiCard}>
                  <div className={s.testiStats}>
                    <span className={s.testiLabel}>{t.badge}</span>
                  </div>
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    width={420}
                    height={912}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '1.25rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.35rem', color: '#fff' }}>
                      {t.name}
                    </strong>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {t.desc}
                    </p>
                    <div className={s.testiAuthor}>
                      <span>
                        ▲ {t.stat} <span style={{ color: 'var(--text-secondary)' }}>{t.label}</span>
                      </span>
                    </div>
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
              🏢 Wujudkan Mimpi Punya Bisnis Sinyal Sendiri
            </h2>
            <p className={s.sectionSub}>
              Banyak yang ingin punya bisnis digital pasif tapi terhalang skill IT. Jadikan
              infrastruktur AI kami sebagai &quot;karyawan&quot; Anda. Pasang nama brand Anda,
              dapatkan komisi, tanpa perlu pusing coding atau sewa server mahal.
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
              Hanya dengan 100 Pelanggan berlangganan di brand Anda × Rp 79.900/bulan ={' '}
              <span
                style={{
                  color: 'var(--accent)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                }}
              >
                Rp 7.990.000 / Bulan
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
            <h2 className={s.sectionTitle}>Pilih Kendaraan Anda</h2>
            <p className={s.sectionSub}>
              Gunakan sarana yang paling sesuai dengan target hidup yang ingin Anda capai hari ini.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '2rem',
              }}
            >
              {/* PRO */}
              <div className={s.pricingCard} style={{ maxWidth: '320px', margin: 0, flex: '1 1 280px' }}>
                <div className={s.pricingName}>PRO</div>
                <div className={s.pricingDesc}>Untuk Ketenangan Pribadi</div>
                <div className={s.pricingPrice}>Rp 79.900</div>
                <div className={s.pricingPeriod}>/bulan</div>
                <ul className={s.pricingFeatures}>
                  <li>
                    <span className={s.pricingCheck}>✓</span> Asisten AI Pengirim Sinyal
                  </li>
                  <li>
                    <span className={s.pricingCheck}>✓</span> Bebas Stres Analisa Manual
                  </li>
                  <li>
                    <span className={s.pricingCheck}>✓</span> Terproteksi SL/TP Otomatis
                  </li>
                  <li>
                    <span className={s.pricingCheck}>✓</span> Disiplin Menjaga Modal Anda
                  </li>
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

              {/* ELITE — Featured */}
              <div
                className={`${s.pricingCard} ${s.pricingPopular}`}
                style={{ maxWidth: '320px', margin: 0, flex: '1 1 280px' }}
              >
                <div className={s.popularBadge}>PALING MASUK AKAL</div>
                <div className={s.pricingName}>ELITE</div>
                <div className={s.pricingDesc}>Otomatisasi &amp; Passive Income</div>
                <div className={s.pricingPrice}>Rp 149.900</div>
                <div className={s.pricingPeriod}>/bulan</div>
                <ul className={s.pricingFeatures}>
                  <li>
                    <span className={s.pricingCheck}>✓</span> Semua Akses Ketenangan PRO
                  </li>
                  <li>
                    <span className={s.pricingCheck}>✓</span> 1 Hak Akses Whitelabel Bot
                  </li>
                  <li>
                    <span className={s.pricingCheck}>✓</span> Jalan Pintas Bisnis Sinyal
                  </li>
                  <li>
                    <span className={s.pricingCheck}>✓</span> Otomatisasi Eksekusi ke MT5
                  </li>
                </ul>
                <TrackedCTA
                  className={s.btnPrimary}
                  href="https://t.me/berkahkaryaforexbotbot?start=elite"
                  productName="VilonaFX - Pricing"
                  value={149900}
                  currency="IDR"
                >
                  Mulai Ekosistem Anda
                </TrackedCTA>
              </div>

              {/* LIFETIME */}
              <div className={s.pricingCard} style={{ maxWidth: '320px', margin: 0, flex: '1 1 280px' }}>
                <div className={s.pricingName}>LIFETIME</div>
                <div className={s.pricingDesc}>Kebebasan Tanpa Beban Tagihan</div>
                <div className={s.pricingPrice}>Rp 1.990.900</div>
                <div className={s.pricingPeriod}>sekali bayar</div>
                <ul className={s.pricingFeatures}>
                  <li>
                    <span className={s.pricingCheck}>✓</span> Semua Fitur Mesin ELITE
                  </li>
                  <li>
                    <span className={s.pricingCheck}>✓</span> Akses Berlaku Selamanya
                  </li>
                  <li>
                    <span className={s.pricingCheck}>✓</span> 3 Hak Cabang Bot Whitelabel
                  </li>
                  <li>
                    <span className={s.pricingCheck}>✓</span> Jalur Konsultasi Prioritas VIP
                  </li>
                </ul>
                <TrackedCTA
                  className={s.btnPrimary}
                  href="https://t.me/berkahkaryaforexbotbot?start=lifetime"
                  productName="VilonaFX - Pricing"
                  value={1990900}
                  currency="IDR"
                >
                  Bebaskan Dirimu Selamanya
                </TrackedCTA>
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
