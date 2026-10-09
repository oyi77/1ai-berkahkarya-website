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
const PRODUCT = 'VilonaFX - Sales - Lifetime 254rb';

// Anchor promo: harga 1 bulan ELITE (Rp254.000) untuk LIFETIME selamanya.
// Harga normal lifetime Rp1.990.900 — hemat Rp1.736.900.
const NORMAL = 1990900;
const PROMO = 254000;
const SAVED = NORMAL - PROMO;

const ENGINES = [
  { name: 'S-TIER Zone', desc: 'Setup probabilitas tertinggi — hanya grade terbaik yang lolos, sisanya ditolak.', icon: '⚡' },
  { name: 'SBR / BRS Killer', desc: 'Zona supply-demand pembunuh: entry presisi di titik institusi masuk.', icon: '🎯' },
  { name: 'SMC Scalper', desc: 'Struktur market real-time: BOS, CHoCH, liquidity grab, order block.', icon: '📐' },
  { name: 'Conf3 Trend', desc: '6 detektor SMC + filter SMA200. WR terukur 69,5% dan naik tiap hari.', icon: '📊' },
  { name: 'Multi-TF Supertrend', desc: 'Sinkronisasi semua timeframe sebelum sinyal dikirim.', icon: '🔄' },
  { name: 'Quasimodo + RAG', desc: 'Pola reversal + memori setup historis. Tidak mengulang kesalahan lama.', icon: '🧠' },
  { name: 'AI Consensus', desc: 'Ensemble 5 model LLM (OpenAI, DeepSeek, Gemini, 9router) voting tiap sinyal.', icon: '🤖' },
  { name: 'AHZ Radar', desc: 'Validasi risiko: RR minimum, SL eksplisit. Setup lemah langsung dibuang.', icon: '🛡️' },
  { name: 'Guardian + Validator', desc: 'Anti-spam 2/jam, anti-duplikat, pair-lock sampai trade selesai.', icon: '🔒' },
];

const VS = [
  { label: 'Sinyal Entry + SL + TP eksplisit', us: true, them: 'Sinyal "BUY sekarang" tanpa SL/TP' },
  { label: '9 engine voting sebelum kirim', us: true, them: '1 indikator / feeling admin' },
  { label: 'AI consensus 5 model LLM', us: true, them: 'Copy-paste sinyal grup luar' },
  { label: 'EA auto-eksekusi ke MT5', us: true, them: 'Entry manual, ketinggalan harga' },
  { label: 'Pair-lock: 1 pair = 1 sinyal aktif', us: true, them: 'Spam 10 sinyal pair yang sama' },
  { label: 'Harga: Rp254rb SEKALI, selamanya', us: true, them: 'Rp300–500rb PER BULAN' },
];

const PIPE = [
  { icon: '📡', t: 'Harga live', d: 'Tick MT5 + DXY + sesi/killzone dibaca tiap detik.' },
  { icon: '⚙️', t: '7 engine paralel', d: 'S-TIER · SBR/BRS · Conf3 · Multi-TF · SMC · RAG · AI Consensus — pemenang prioritas maju.' },
  { icon: '🛡️', t: 'Filter pengaman', d: 'RR minimum, SL eksplisit, anti-spam 2/jam, pair-lock, duplicate-window.' },
  { icon: '📲', t: 'Kirim ke Telegram', d: 'Entry + SL + TP + confidence + grade. Premium DM + channel.' },
  { icon: '🤖', t: 'EA eksekusi', d: 'Bridge POST ke EA kamu — entry otomatis dalam detik.' },
];

const STRATS = [
  { key: 'S-TIER Zone', wr: 'Grade A', risk: 'rendah', sym: 'XAUUSD · EURUSD', desc: 'Hanya setup probabilitas tertinggi yang lolos. Sisanya ditolak.' },
  { key: 'SBR / BRS Killer', wr: 'Grade A', risk: 'sedang', sym: 'XAUUSD · EURUSD', desc: 'Entry presisi di zona supply-demand institusi.' },
  { key: 'SMC Scalper', wr: '±60%', risk: 'sedang', sym: 'XAUUSD · EURUSD', desc: 'BOS, CHoCH, liquidity grab, order block — scalping struktur.' },
  { key: 'Conf3 Trend', wr: '69,5%', risk: 'rendah', sym: 'Semua pair', desc: '6 detektor SMC + filter SMA200. WR terukur, naik harian.' },
  { key: 'XAU Hedging', wr: '62%', risk: 'sedang', sym: 'XAUUSD', desc: 'Hedging emas sadar sesi — gratis, cocok pemula.' },
  { key: 'FVG Detector', wr: '63%', risk: 'rendah', sym: 'XAUUSD · BTCUSD', desc: 'Entry di Fair Value Gap. Risiko terkecil di katalog.' },
  { key: 'Grid Trading', wr: '58%', risk: 'tinggi', sym: 'XAUUSD · EURUSD · GBPUSD', desc: 'Mean-reversion grid untuk market sideways.' },
  { key: 'HFT Scalper', wr: '65%', risk: 'tinggi', sym: 'XAUUSD · BTCUSD', desc: 'Order-book frekuensi tinggi. Khusus ELITE.' },
];

const STEPS = [
  { n: '1', t: 'Klik tombol & bayar', d: 'Checkout lynk.id (QRIS/VA/e-wallet), 1 menit. Link aktif 24 jam.' },
  { n: '2', t: 'Tier aktif otomatis', d: 'Bot verifikasi pembayaran lalu upgrade tier kamu ke LIFETIME.' },
  { n: '3', t: 'Terima sinyal selamanya', d: 'Unlimited signals + EA auto-sync + semua update gratis. Tanpa bayar lagi.' },
];

export default function VilonaFxSales({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Vilona FX - Sales Lifetime 254rb', '0', 'vilonafx-sales');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [spots, setSpots] = useState(17);
  const [step, setStep] = useState(0);        // pipeline autoplay
  const [strat, setStrat] = useState(0);      // strategy simulator

  useEffect(() => {
    trackViewContent('VilonaFX - Sales - Lifetime 254rb', 'sales_page');
    // Light scarcity decay (client-side only, floor 7 — honesty guard)
    const t = setInterval(() => setSpots((v) => (v > 7 ? v - 1 : v)), 90000);
    return () => clearInterval(t);
  }, []);

  // ── Back redirect: tombol back browser → tangkap ke channel dulu ──
  useEffect(() => {
    let fired = false;
    window.history.pushState({ sales: true }, '', window.location.href);
    const onPop = () => {
      if (fired) return;
      fired = true;
      trackLead({
        content_name: `${PRODUCT} - Back Redirect Join`,
        content_id: 'vilonafx-sales-back',
        destination: 'telegram_channel',
        destination_url: CHANNEL,
      });
      window.location.href = CHANNEL;
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  // scroll progress
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



  // ── Pipeline autoplay: tiap langkah maju otomatis, looping ──
  useEffect(() => {
    const t = setInterval(() => setStep((v) => (v + 1) % PIPE.length), 2200);
    return () => clearInterval(t);
  }, []);

  const onCheckout = () => {
    trackInitiateCheckout({
      content_name: PRODUCT,
      content_id: 'vilonafx-lifetime-254k',
      value: PROMO,
      currency: 'IDR',
      num_items: 1,
    });
  };

  const onJoin = () => {
    trackLead({
      content_name: `${PRODUCT} - Sticky Join`,
      content_id: 'vilonafx-sales-join',
      destination: 'telegram_channel',
      destination_url: CHANNEL,
    });
  };

  const faqs = [
    { q: 'Kenapa semurah ini? Rp254rb lifetime, apa jebakannya?', a: 'Tidak ada jebakan. Rp254.000 = harga 1 bulan ELITE. Ini promo launching agar channel cepat penuh 1.000 member pertama — setelah kuota habis, lifetime kembali Rp1.990.900. Yang terkunci harga promo selamanya, tanpa biaya lanjutan.' },
    { q: 'Bedanya dengan grup sinyal gratis di Telegram?', a: 'Grup gratis = 1 admin, feeling, tanpa SL/TP, spam. Vilona = 9 engine voting + AI consensus 5 model LLM + SL/TP eksplisit tiap sinyal + EA yang eksekusi otomatis ke MT5 kamu. Free tier kami saja (3 sinyal/hari) sudah lebih ketat dari kebanyakan grup berbayar.' },
    { q: 'Saya gaptek / tidak punya VPS. Bisa ikut?', a: 'Bisa. Sinyal masuk Telegram — tinggal baca Entry/SL/TP. Mau otomatis? EA kami jalan di MT5 HP/PC biasa, tanpa VPS. Setup 5 menit, ada panduan + admin bantu.' },
    { q: 'Bagaimana pembayarannya? Aman?', a: 'Checkout via lynk.id (QRIS, virtual account semua bank, e-wallet). Link berlaku 24 jam. Setelah bayar, bot verifikasi otomatis dan tier LIFETIME aktif — garansi: tidak aktif = uang kembali via admin @codergaboets.' },
    { q: 'Apakah ini jaminan profit?', a: 'Tidak — dan waspada pada yang berani menjamin. Yang kami jamin: setiap sinyal punya SL eksplisit (risiko terukur), win-rate engine terukur (Conf3 69,5% dan naik), anti-spam/anti-duplikat. Trading tetap berisiko; kelola lot sesuai modal.' },
    { q: 'Lifetime beneran selamanya? Termasuk update?', a: 'Ya. Sekali bayar Rp254.000: semua sinyal + semua fitur ELITE + semua update engine selamanya. Tidak ada biaya bulanan, tahunan, atau "biaya server".' },
  ];

  return (
    <Layout
      title="Vilona AI — Lifetime Rp254rb (Promo, Normal Rp1.990.900)"
      description="Asisten AI Telegram untuk trading: 9 engine + AI consensus, sinyal Entry/SL/TP, EA auto-eksekusi MT5. Promo lifetime Rp254.000 sekali bayar."
    >
      <div className={s.wrapper}>
        <LPVariantTracker variant={9} service="vilonafx" />
        <div className={s.progress} id="salesProgress" />

        {/* ── HERO ── */}
        <section className={s.hero}>
          <div className={s.badge}>🔥 PROMO LAUNCHING — HEMAT Rp{SAVED.toLocaleString('id-ID')}</div>
          <h1>Berhenti Tebak-tebakan.<br />Biarkan <span className={s.grad}>9 Engine + AI</span> yang Analisa.</h1>
          <p className={s.sub}>
            Vilona adalah asisten AI di Telegram yang mengirim sinyal trading lengkap
            (<b>Entry + SL + TP</b>) — divoting 9 engine dan 5 model AI sebelum sampai ke kamu.
            Plus EA yang <b>eksekusi otomatis ke MT5</b>.
          </p>
          <div className={s.price}>
            <div className={s.priceOld}>Rp{NORMAL.toLocaleString('id-ID')}</div>
            <div className={s.priceNew}>Rp254<span className={s.rb}>rb</span></div>
            <div className={s.priceNote}>sekali bayar · selamanya · sisa slot promo: <b>{spots}</b></div>
          </div>
          <div className={s.ctaRow}>
            <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
              ⚡ Klaim Lifetime Rp254rb
            </a>
            <TrackedCTA href={CHANNEL} productName={`${PRODUCT} - Hero Join`} productId="vilonafx-sales" service="vilonafx" variant="secondary">
              ✈️ Lihat Dulu di Channel
            </TrackedCTA>
          </div>
          <div className={s.trust}>✅ Tanpa kartu kredit · ✅ Garansi tier aktif · ✅ Update selamanya</div>
        </section>

        {/* ── MASALAH ── */}
        <section className={s.section}>
          <h2>Kenapa 90% Trader Ritel Gagal?</h2>
          <div className={s.cards3}>
            <div className={s.card}><b>📉 Sinyal tanpa SL</b><p>Grup gratis kirim "BUY XAUUSD sekarang!" — tanpa stop loss. Sekali salah arah, margin call.</p></div>
            <div className={s.card}><b>😵 Ketinggalan entry</b><p>Lihat sinyal 30 menit telat = entry basi. Harga sudah jalan, RR rusak.</p></div>
            <div className={s.card}><b>💸 Langganan mahal</b><p>Grup premium Rp300–500rb/bulan. Setahun = Rp3,6–6 juta. Berhenti bayar = sinyal stop.</p></div>
          </div>
        </section>

        {/* ── 9 ENGINE ── */}
        <section className={s.section}>
          <h2>9 Engine Bekerja Sebelum 1 Sinyal Sampai ke Kamu</h2>
          <p className={s.center}>Setiap sinyal harus lolos voting mayoritas. Tanpa konsensus = tanpa sinyal. Itu sebabnya kami jarang kirim — tapi yang dikirim berkualitas.</p>
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

        {/* ── VS KOMPETITOR ── */}
        <section className={s.section}>
          <h2>Vilona vs Grup Sinyal Lain</h2>
          <div className={s.vsTable}>
            <div className={s.vsHead}><span></span><span className={s.vsUs}>Vilona AI</span><span>Grup Biasa</span></div>
            {VS.map((r) => (
              <div className={s.vsRow} key={r.label}>
                <span>{r.label}</span>
                <span className={s.vsUs}>{r.us ? '✅' : '❌'}</span>
                <span className={s.vsThem}>{r.them}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CARA KERJA ── */}
        <section className={s.section}>
          <h2>Dari Klik ke Sinyal: 3 Langkah</h2>
          <div className={s.cards3}>
            {STEPS.map((st) => (
              <div className={s.card} key={st.n}><div className={s.stepN}>{st.n}</div><b>{st.t}</b><p>{st.d}</p></div>
            ))}
          </div>
        </section>

        {/* ── AI PIPELINE (animasi) ── */}
        <section className={s.section}>
          <h2>Bagaimana AI Bekerja di Balik Layar</h2>
          <p className={s.center}>Lihat alur nyata: dari tick harga sampai EA kamu open posisi. Tiap 2 detik langkah berikutnya menyala.</p>
          <div className={s.pipeline}>
            {PIPE.map((p, i) => (
              <div key={p.t} className={`${s.pipeStep} ${i <= step ? s.pipeOn : ''} ${i === step ? s.pipeNow : ''}`}>
                <div className={s.pipeIcon}>{p.icon}</div>
                <div className={s.pipeT}>{p.t}</div>
                <div className={s.pipeD}>{p.d}</div>
                {i < PIPE.length - 1 && <span className={s.pipeArrow}>&#8594;</span>}
              </div>
            ))}
          </div>
        </section>

        {/* ── SIMULATOR STRATEGI ── */}
        <section className={s.section}>
          <h2>Bikin Sinyal Sendiri dari 8+ Strategi</h2>
          <p className={s.center}>Pilih strategi yang cocok gaya trading kamu. Satu klik /strategy di bot, aktif langsung — tanpa coding, tanpa VPS.</p>
          <div className={s.sim}>
            <div className={s.simTabs}>
              {STRATS.map((st, i) => (
                <button
                  key={st.key}
                  className={`${s.simTab} ${i === strat ? s.simTabOn : ''}`}
                  onClick={() => setStrat(i)}
                >
                  {st.key}
                </button>
              ))}
            </div>
            <div className={s.simBody}>
              <div className={s.simLeft}>
                <div className={s.simWin}>WR <b>{STRATS[strat].wr}</b></div>
                <div className={s.simRisk} data-r={STRATS[strat].risk}>Risiko: {STRATS[strat].risk}</div>
                <div className={s.simSym}>{STRATS[strat].sym}</div>
                <p className={s.simDesc}>{STRATS[strat].desc}</p>
                <div className={s.simCmd}>/strategy {STRATS[strat].key.toLowerCase().replace(/[^a-z0-9]+/g, '_')}</div>
              </div>
              <div className={s.simRight}>
                <div className={s.simMsgHead}>&#128202; Sinyal preview</div>
                <div className={s.simMsg}>
                  <div className={s.simMsgTitle}>{STRATS[strat].key} &#8594; XAUUSD BUY</div>
                  <div>&#128204; Entry: 4110.00</div>
                  <div>&#128683; SL: 4030.00</div>
                  <div>&#127942; TP1: 4230.00 (RR 1:2)</div>
                  <div className={s.simMsgFoot}>Grade: A &#183; Confidence: 82% &#183; auto-exec: ON</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EA AUTO-EXEC ── */}
        <section className={s.section}>
          <h2>EA Eksekusi Sendiri. Kamu Duduk Manis.</h2>
          <div className={s.eaSteps}>
            <div className={s.eaStep}><span>&#9989;</span><b>1. Hubungkan</b><p>/connect &amp; masukkan license key EA ke MT5. Sekali setel, selamanya nyambung.</p></div>
            <div className={s.eaStep}><span>&#9889;</span><b>2. Sinyal datang</b><p>Bridge push sinyal ke EA via WebSocket/HTTP. Entry dalam hitungan detik — bukan "ingat lagi".</p></div>
            <div className={s.eaStep}><span>&#128176;</span><b>3. Posisi open otomatis</b><p>SL &amp; TP terpasang dari sinyal. Trailing stop auto ikut setelah breakeven.</p></div>
            <div className={s.eaStep}><span>&#128737;</span><b>4. Kamu pegang kendali</b><p>Kapan pun: /autoexecute off (stop entry), /trailing on|off, mini-app PAUSE &amp; PANIC (tutup semua posisi).</p></div>
          </div>
          <div className={s.eaNote}>&#128161; Tidak ada software pihak ketiga, tidak ada VPS wajib. EA jalan di MT5 HP/PC kamu sendiri.</div>
        </section>

        {/* ── HARGA ── */}
        <section className={s.section} id="harga">
          <h2>Satu Harga. Selamanya.</h2>
          <div className={s.priceBox}>
            <div className={s.priceOld}>Rp{NORMAL.toLocaleString('id-ID')}</div>
            <div className={s.priceNew}>Rp254<span className={s.rb}>rb</span></div>
            <ul className={s.feats}>
              <li>✅ Unlimited signals (40+/minggu), semua pair</li>
              <li>✅ S-TIER + SBR Killer Zone + semua engine</li>
              <li>✅ EA auto-eksekusi MT5 + trailing otomatis</li>
              <li>✅ AI analysis unlimited + prioritas 24/7</li>
              <li>✅ Private signals 5 menit lebih awal</li>
              <li>✅ Semua update selamanya — tanpa bayar lagi</li>
            </ul>
            <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
              ⚡ Bayar Rp254rb — Aktif Selamanya
            </a>
            <div className={s.trust}>QRIS · VA semua bank · E-wallet · Link 24 jam · Garansi aktif</div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.section}>
          <h2>Pertanyaan Jujur, Jawaban Jujur</h2>
          {faqs.map((f, i) => (
            <div className={s.faq} key={i}>
              <button className={s.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q} <span>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p className={s.faqA}>{f.a}</p>}
            </div>
          ))}
        </section>

        {/* ── FINAL ── */}
        <section className={s.final}>
          <h2>Rp254rb Sekali. Sinyal Selamanya.</h2>
          <p>Setelah {spots} slot habis, harga kembali Rp{NORMAL.toLocaleString('id-ID')}.</p>
          <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
            ⚡ Klaim Sekarang
          </a>
        </section>

        <div className={s.sticky}>
          <a href={CHECKOUT} onClick={onCheckout} className={s.stickyCta}>
            ⚡ Lifetime Rp254rb <s>Rp{NORMAL.toLocaleString('id-ID')}</s>
          </a>
        </div>
      </div>
    </Layout>
  );
}
