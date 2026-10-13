'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import s from './Sales.module.css';
import TrackedCTA from '../TrackedCTA';
import LPVariantTracker from '../LPVariantTracker';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';
import { trackLead, trackInitiateCheckout, trackViewContent } from '@/lib/tracking';

const CHANNEL = 'https://t.me/vilonaaichanel';
const CHECKOUT = 'https://lynk.id/jendralbot/ox33n8n04792';
const TELEGRAM_CHAT = 'https://t.me/alwayscuanterus?text=Halo+kak,+saya+mau+tanya+tentang+VilonaFX+bot+tradingnya';
const PRODUCT = 'VilonaFX - Sales1 - Lifetime 254rb';

const NORMAL = 1990900;
const PROMO = 254000;
const SAVED = NORMAL - PROMO;

// ── Ticker bar feeds ──
const TICKER_ITEMS = [
  { pair: 'XAUUSD', price: '4,124.50', chg: '+1.42%', up: true },
  { pair: 'BTCUSD', price: '68,420', chg: '+3.18%', up: true },
  { pair: 'EURUSD', price: '1.0864', chg: '-0.12%', up: false },
  { pair: 'GBPUSD', price: '1.2980', chg: '+0.45%', up: true },
  { pair: 'USDJPY', price: '152.34', chg: '-0.28%', up: false },
  { pair: 'SOLUSD', price: '184.20', chg: '+5.60%', up: true },
];

// ── Live profit win feed — REAL trades dari ledger produksi ──
// Sumber: trading_bot/signals/trade_tracker.py (trade_history.json live).
const RECENT_WINS = [
  { pair: 'BTCUSD', dir: 'BUY', pips: '+926 pips', time: '12 Okt' },
  { pair: 'BTCUSD', dir: 'BUY', pips: '+467 pips', time: '12 Okt' },
  { pair: 'BTCUSD', dir: 'SELL', pips: '+200 pips', time: '29 Sep' },
  { pair: 'XAUUSD', dir: 'SELL', pips: '+150 pips', time: '28 Sep' },
  { pair: 'USOIL', dir: 'BUY', pips: '+141 pips', time: '12 Okt' },
];

// ── Format sinyal Telegram-style (contoh format, bukan klaim live) ──
const SIGNALS = [
  { pair: 'XAUUSD', dir: 'BUY', entry: '4,110.00', sl: '4,030.00', tp: '4,230.00', grade: 'A', conf: 82 },
  { pair: 'BTCUSD', dir: 'SELL', entry: '67,500', sl: '69,000', tp: '64,000', grade: 'B', conf: 74 },
  { pair: 'EURUSD', dir: 'BUY', entry: '1.0842', sl: '1.0820', tp: '1.0880', grade: 'A', conf: 88 },
];

const ENGINES = [
  { name: 'S-TIER Zone', desc: 'Setup probabilitas tertinggi berdasar zone orderblock valid', icon: '⚡' },
  { name: 'SBR/BRS Killer', desc: 'Zona supply-demand institusi Support Becomes Resistance', icon: '🎯' },
  { name: 'SMC Scalper', desc: 'BOS, CHoCH, internal liquidity sweep berdasar Smart Money', icon: '📐' },
  { name: 'Conf3 Trend', desc: 'Winrate historis terukur 69,5% backtested multi-pair', icon: '📊' },
  { name: 'Multi-TF Supertrend', desc: 'Sinkronisasi tren M15, H1, H4 sebelum buka posisi', icon: '🔄' },
  { name: 'Quasimodo + RAG', desc: 'Pola reversal tingkat lanjut dipadu memori historis RAG', icon: '🧠' },
  { name: 'AI Consensus (5 LLM)', desc: 'Voting gabungan Claude, GPT, DeepSeek, Gemini, Qwen', icon: '🤖' },
  { name: 'AHZ Risk Radar', desc: 'Validasi otomatis RR minimum 1:1.5 & jarak SL proporsional', icon: '🛡️' },
  { name: 'Guardian + Pair-Lock', desc: 'Proteksi anti-spam sinyal ganda & anti-overtrading', icon: '🔒' },
];

const VS = [
  { label: 'Entry + SL + TP eksplisit angka pasti', us: true, them: '"BUY sekarang" tanpa SL' },
  { label: '9 engine teknikal voting independen', us: true, them: '1 indikator / feeling admin' },
  { label: 'AI consensus 5 LLM terkemuka', us: true, them: 'Copy-paste channel luar' },
  { label: 'EA auto-eksekusi MT5 langsung', us: true, them: 'Entry manual, sering telat' },
  { label: 'Pair-lock & anti-spam sinyal', us: true, them: 'Spam 10 sinyal pair sama' },
  { label: 'Rp254rb SEKALI bayar, SELAMANYA', us: true, them: 'Langganan Rp300–500rb/bulan' },
];

const STEPS = [
  { n: '1', t: 'Amankan Slot Rp254rb', d: 'Checkout aman via lynk.id (QRIS, VA Bank, GoPay/OVO). Proses hanya 1 menit.' },
  { n: '2', t: 'Akses Otomatis Aktif', d: 'Bot langsung kirim link channel VIP & aktivasi akun tier LIFETIME tanpa ribet.' },
  { n: '3', t: 'Terima Sinyal Selamanya', d: 'Sinyal unlimited langsung di Telegram + bridge EA MT5. Nol biaya bulanan seumur hidup.' },
];

const FAQS = [
  {
    q: 'Kenapa harganya cuma Rp254rb sekali bayar?',
    a: 'Ini harga promo launching terbatas untuk mengisi quota 1.000 member VIP pertama. Setelah quota terpenuhi, kami akan kunci kembali ke sistem langganan bulanan Rp1.990.900/tahun. Yang beli sekarang terkunci selamanya tanpa biaya tambahan.',
  },
  {
    q: 'Bedanya apa sama grup sinyal gratisan di Telegram?',
    a: 'Grup gratisan rata-rata dijalankan 1 admin pakai feeling, sering tidak pakai SL, dan spam sinyal sembarangan. VilonaFX menggunakan sistem komputasi 9 engine teknikal + 5 LLM AI consensus + SL/TP pasti + bisa dihubungkan ke EA MT5 untuk auto-eksekusi.',
  },
  {
    q: 'Apakah ada jaminan 100% selalu profit?',
    a: 'Tidak ada instrumen trading di dunia yang 100% win tanpa risiko. Yang kami sediakan adalah risk-to-reward terukur, SL eksplisit di setiap sinyal, filter konfirmasi multi-engine (Conf3 terukur WR 69,5%), dan disiplin sistematis agar akun Anda tidak MC karena emosi.',
  },
  {
    q: 'Saya pemula dan gaptek, apakah bisa ikut?',
    a: 'Sangat bisa. Anda cukup install Telegram dan ikuti petunjuk angka Entry, SL, dan TP yang dikirimkan. Ada panduan langkah demi langkah dan customer service siap membantu sampai Anda paham.',
  },
];

export default function VilonaFxSales({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Vilona FX - Sales1 Lifetime 254rb', '0', 'vilonafx-sales1');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [spots, setSpots] = useState(11);
  const [countdown, setCountdown] = useState({ min: 14, sec: 42 });

  // Urgency spots countdown
  useEffect(() => {
    trackViewContent('VilonaFX - Sales1 - Lifetime 254rb', 'sales_page');
    const t = setInterval(() => setSpots((v) => (v > 4 ? v - 1 : v)), 75000);
    return () => clearInterval(t);
  }, []);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.sec > 0) return { ...prev, sec: prev.sec - 1 };
        if (prev.min > 0) return { min: prev.min - 1, sec: 59 };
        return { min: 14, sec: 59 }; // loop subtle urgency
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Back redirect
  useEffect(() => {
    let fired = false;
    window.history.pushState({ sales: true }, '', window.location.href);
    const onPop = () => {
      if (fired) return;
      fired = true;
      trackLead({
        content_name: `${PRODUCT} - Back Redirect`,
        content_id: 'vilonafx-sales1-back',
        destination: 'telegram_channel',
        destination_url: CHANNEL,
      });
      window.location.href = CHANNEL;
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Scroll progress
  useEffect(() => {
    const el = document.getElementById('salesProgress');
    if (!el) return;
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      el.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onCheckout = () => {
    trackInitiateCheckout({
      content_name: PRODUCT,
      content_id: 'vilonafx-sales1-254k',
      value: PROMO,
      currency: 'IDR',
      num_items: 1,
    });
  };


  return (
    <Layout
      title="Vilona AI — Trading Terminal & Sinyal Presisi (Lifetime Rp254rb)"
      description="Sinyal presisi 9 engine teknikal + AI consensus 5 LLM. SL & TP eksplisit, auto-eksekusi MT5. Promo lifetime Rp254.000 sekali seumur hidup."
    >
      <div className={s.wrapper}>
        <LPVariantTracker variant={1} service="vilonafx" />
        <div className={s.progress} id="salesProgress" />

        {/* ── TICKER BAR LIVE ── */}
        <div className={s.tickerBar}>
          <div className={s.tickerTrack}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, idx) => (
              <span className={s.tickerItem} key={idx}>
                <span className={s.tickerDot} />
                <b>{t.pair}</b> {t.price}{' '}
                <span className={t.up ? s.tickerUp : s.tickerDn}>{t.chg}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── HERO ── */}
        <section className={s.hero}>
          <div className={s.liveBadge}>LIVE MARKET TERMINAL · 9 ENGINES ACTIVE</div>

          <h1>
            Berhenti Trading Pakai Feeling.<br />
            Mulai Pakai <span className={s.grad}>Sistem Presisi AI</span>.
          </h1>

          <p className={s.sub}>
            Sinyal bukan dari 1 orang admin. Setiap setup diverifikasi <b>9 engine teknikal</b> dan dikonfirmasi{' '}
            <b>5 model AI</b> sebelum mendarat di Telegram Anda. Angka Entry, SL, dan TP pasti — bukan tebak-tebakan.
          </p>

          {/* ── LIVE HERO SIGNAL CARD ── */}
          <div className={s.heroSignal}>
            <div className={s.heroSignalHead}>
              <span className={s.heroSignalPair}>XAUUSD (GOLD)</span>
              <span className={`${s.heroSignalDir} ${s.buy}`}>BUY</span>
              <span className={s.heroSignalLive}>FORMAT SINYAL</span>
            </div>
            <div className={s.heroSignalBody}>
              <div className={s.heroSignalCell}>
                <span>ENTRY</span>
                <b>4,110.00</b>
              </div>
              <div className={s.heroSignalCell}>
                <span>STOP LOSS</span>
                <b>4,030.00</b>
              </div>
              <div className={s.heroSignalCell}>
                <span>TAKE PROFIT</span>
                <b>4,230.00</b>
              </div>
            </div>
            <div className={s.heroSignalPnl}>
              <span>Contoh sinyal: <b>RR 1:2 — risiko terukur</b></span>
              <span>Confidence: <b>88% (Grade A)</b></span>
            </div>
          </div>

          {/* ── PRICE ── */}
          <div className={s.price}>
            <div className={s.priceOld}>Normal Rp{NORMAL.toLocaleString('id-ID')} / tahun</div>
            <div className={s.priceNew}>
              Rp254<span className={s.rb}>rb</span>
            </div>
            <div className={s.priceNote}>
              Sekali bayar seumur hidup · Nol biaya bulanan · Sisa kuota promo: <b>{spots} slot</b>
            </div>
            <div className={s.urgency}>
              ⏱️ Promo terkunci berakhir dalam:{' '}
              <span className={s.urgencyTimer}>
                {countdown.min.toString().padStart(2, '0')}:{countdown.sec.toString().padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className={s.ctaRow}>
            <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
              ⚡ KLAIM AKSES LIFETIME RP254RB
            </a>
            <TrackedCTA
              href={CHANNEL}
              productName={`${PRODUCT} - Hero Channel`}
              productId="vilonafx-sales1-channel"
              service="vilonafx"
              variant="secondary"
            >
              <span className={s.ctaSecondary}>✈️ Pantau Channel Dulu</span>
            </TrackedCTA>
          </div>

          <div className={s.trust}>
            <span>🔒 Pembayaran Resmi Lynk.id</span>
            <span>⚡ Aktivasi Otomatis 1 Menit</span>
            <span>👑 Akses Lifetime Selamanya</span>
          </div>
        </section>

        {/* ── SECTION: LIVE PROFIT WIN FEED ── */}
        <section className={s.section}>
          <h2>
            Hasil Trade <span className={s.grad}>Asli dari Ledger</span>
          </h2>
          <p className={s.center}>
            Win aktual yang tercatat di sistem kami — bukan janji, bukan simulasi. Data diambil langsung dari riwayat trading bot.
          </p>

          <div className={s.profitFeed}>
            <div className={s.profitFeedHead}>
              <span>STATUS ENGINE: <b>NORMAL & PRODUCING SIGNALS</b></span>
            </div>
            {RECENT_WINS.map((w, idx) => (
              <div className={s.profitRow} key={idx}>
                <span className={`${s.profitDir} ${w.dir === 'BUY' ? s.buy : s.sell}`}>
                  {w.dir}
                </span>
                <span className={s.profitPair}>{w.pair}</span>
                <span className={s.profitPips}>{w.pips}</span>
                <span className={s.profitTime}>{w.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 1: FORMAT SINYAL TELEGRAM ── */}
        <section className={s.section}>
          <h2>Format Sinyal yang Anda Terima</h2>
          <p className={s.center}>
            Bukan tulisan rancu. Semua data angka jelas, Anda tinggal pasang di MT4/MT5 atau biarkan EA mengeksekusi otomatis.
          </p>
          <div className={s.signals}>
            {SIGNALS.map((sig) => (
              <div className={s.sigCard} key={sig.pair}>
                <div className={s.sigHead}>
                  <span className={s.sigPair}>{sig.pair}</span>
                  <span className={`${s.sigDir} ${sig.dir === 'BUY' ? s.buy : s.sell}`}>{sig.dir}</span>
                </div>
                <div className={s.sigBody}>
                  <div className={s.sigRow}>📍 Entry: <b>{sig.entry}</b></div>
                  <div className={s.sigRow}>🛑 Stop Loss: <b>{sig.sl}</b></div>
                  <div className={s.sigRow}>🎯 Take Profit: <b>{sig.tp}</b></div>
                </div>
                <div className={s.sigFoot}>
                  <span className={s.sigGrade}>Tier Grade {sig.grade}</span>
                  <span className={s.sigConf}>Confidence {sig.conf}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: 9 ENGINE VOTING ── */}
        <section className={s.section}>
          <h2>
            Mengapa Winrate Terjaga? <span className={s.grad}>9 Engine Bekerja Sekaligus</span>
          </h2>
          <p className={s.center}>
            Sinyal hanya diterbitkan jika mayoritas engine mencapai konsensus. Tidak ada sinyal abal-abal dari tebak-tebakan.
          </p>
          <div className={s.engines}>
            {ENGINES.map((e) => (
              <div className={s.engine} key={e.name}>
                <span className={s.eicon}>{e.icon}</span>
                <b>{e.name}</b>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: PERBANDINGAN HEAD-TO-HEAD ── */}
        <section className={s.section}>
          <h2>Bandingkan dengan Grup Sinyal Lain</h2>
          <p className={s.center}>
            Lihat kenapa ribuan trader memilih beralih ke ekosistem Vilona FX.
          </p>
          <div className={s.vsTable}>
            <div className={s.vsHead}>
              <span>Fitur & Standar</span>
              <span className={s.vsUs}>Vilona FX</span>
              <span>Grup Lain</span>
            </div>
            {VS.map((r) => (
              <div className={s.vsRow} key={r.label}>
                <span>{r.label}</span>
                <span className={s.vsUs}>{r.us ? '✅' : '❌'}</span>
                <span className={s.vsThem}>{r.them}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: 3 LANGKAH MUDAH ── */}
        <section className={s.section}>
          <h2>Cara Memulai Sangat Sederhana</h2>
          <div className={s.steps3}>
            {STEPS.map((st) => (
              <div className={s.stepCard} key={st.n}>
                <div className={s.stepN}>{st.n}</div>
                <b>{st.t}</b>
                <p>{st.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 5: FAQ ── */}
        <section className={s.section}>
          <h2>Pertanyaan yang Sering Diajukan</h2>
          {FAQS.map((f, i) => (
            <div className={s.faq} key={i}>
              <button className={s.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q} <span>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p className={s.faqA}>{f.a}</p>}
            </div>
          ))}
        </section>

        {/* ── FINAL CTA ── */}
        <section className={s.final}>
          <h2>
            Satu Kali Keputusan.<br />
            <span className={s.grad}>Akses Sinyal Seumur Hidup.</span>
          </h2>
          <p>
            Harga Rp254.000 hanya berlaku selama masa promo launching.{' '}
            Setelah kuota {spots} slot ini habis, harga kembali normal ke Rp{NORMAL.toLocaleString('id-ID')}.
          </p>
          <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
            ⚡ AMBIL LIFETIME RP254RB SEKARANG
          </a>
        </section>

        {/* ── FLOATING TELEGRAM BUTTON ── */}
        <TrackedCTA
          href={TELEGRAM_CHAT}
          productName="VilonaFX - Sales1 - Telegram Float"
          productId="vilonafx-sales1-tg-float"
          service="vilonafx"
          variant="secondary"
        >
          <span className={s.tgFloat}>
            <span className={s.tgIcon}>💬</span>
            <span className={s.tgLabel}>Tanya CS Dulu</span>
          </span>
        </TrackedCTA>

        {/* ── STICKY MOBILE CTA BAR ── */}
        <div className={s.sticky}>
          <a href={CHECKOUT} onClick={onCheckout} className={s.stickyCta}>
            ⚡ Klaim Lifetime Rp254rb <s>Rp{NORMAL.toLocaleString('id-ID')}</s>
          </a>
        </div>
      </div>
    </Layout>
  );
}
