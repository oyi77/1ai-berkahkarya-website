'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import s from './Sales2.module.css';
import TrackedCTA from '../TrackedCTA';
import LPVariantTracker from '../LPVariantTracker';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';
import { trackLead, trackInitiateCheckout, trackViewContent } from '@/lib/tracking';

const CHANNEL = 'https://t.me/vilonaaichanel';
const CHECKOUT = 'https://lynk.id/jendralbot/ox33n8n04792';
const PRODUCT = 'VilonaFX - Sales2 Fear - Lifetime 254rb';

const NORMAL = 1990900;
const PROMO = 254000;
const SAVED = NORMAL - PROMO;

// Same engine facts as Sales.tsx — compact wall, no new claims.
const ENGINES = [
  { name: 'S-TIER Zone', desc: 'Hanya grade terbaik yang lolos.', icon: '⚡' },
  { name: 'SBR / BRS Killer', desc: 'Entry di titik institusi masuk.', icon: '🎯' },
  { name: 'SMC Scalper', desc: 'BOS, CHoCH, liquidity grab, order block.', icon: '📐' },
  { name: 'Conf3 Trend', desc: 'WR terukur 69,5% dan naik tiap hari.', icon: '📊' },
  { name: 'Multi-TF Supertrend', desc: 'Sinkronisasi semua timeframe.', icon: '🔄' },
  { name: 'Quasimodo + RAG', desc: 'Tidak mengulang kesalahan lama.', icon: '🧠' },
  { name: 'AI Consensus', desc: 'Ensemble 5 model LLM voting tiap sinyal.', icon: '🤖' },
  { name: 'AHZ Radar', desc: 'RR minimum, SL eksplisit.', icon: '🛡️' },
  { name: 'Guardian + Validator', desc: 'Anti-spam 2/jam, pair-lock.', icon: '🔒' },
];

function msToMidnight(): number {
  const now = new Date();
  const mid = new Date(now);
  mid.setHours(24, 0, 0, 0);
  return Math.max(0, mid.getTime() - now.getTime());
}

function fmtCountdown(ms: number): string {
  const t = Math.floor(ms / 1000);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const sec = t % 60;
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(h)}:${p(m)}:${p(sec)}`;
}

export default function VilonaFxSales2({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Vilona FX - Sales2 Fear Lifetime 254rb', '0', 'vilonafx-sales2');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [left, setLeft] = useState(msToMidnight());
  const [lot, setLot] = useState(0.5);
  const [months, setMonths] = useState(6);

  useEffect(() => {
    trackViewContent('VilonaFX - Sales2 - Lifetime 254rb', 'sales_page');
  }, []);

  // Countdown to local midnight.
  useEffect(() => {
    const t = setInterval(() => setLeft(msToMidnight()), 1000);
    return () => clearInterval(t);
  }, []);

  // Back redirect → channel.
  useEffect(() => {
    let fired = false;
    window.history.pushState({ sales2: true }, '', window.location.href);
    const onPop = () => {
      if (fired) return;
      fired = true;
      trackLead({
        content_name: `${PRODUCT} - Back Redirect Join`,
        content_id: 'vilonafx-sales2-back',
        destination: 'telegram_channel',
        destination_url: CHANNEL,
      });
      window.location.href = CHANNEL;
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Scroll progress.
  useEffect(() => {
    const el = document.getElementById('sales2Progress');
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
      content_id: 'vilonafx-lifetime-254k',
      value: PROMO,
      currency: 'IDR',
      num_items: 1,
    });
  };

  // Channel joins ride TrackedCTA internal trackLead (no onClick prop exists).

  // Loss calculator — pure client math, assumptions labelled.
  // Asumsi tengah Rp400rb/bln (rentang pasar Rp300–500rb/bln).
  const subBurn = months * 400000;
  const diff = subBurn - PROMO;
  // Ilustrasi: ~5 setup/minggu × 4 minggu — asumsi, bukan janji profit.
  const missedSetups = months * 20;

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
      title="Vilona AI — Berhenti Rugi Sendirian (Lifetime Rp254rb)"
      description="Setiap bulan tanpa SL jelas dan entry telat = uang terbakar. Vilona: 9 engine + AI consensus, sinyal Entry/SL/TP, EA auto-eksekusi MT5. Lifetime Rp254.000 sekali bayar."
    >
      <div className={s.wrapper}>
        <LPVariantTracker variant={92} service="vilonafx" />
        <div className={s.progress} id="sales2Progress" />

        {/* ── HERO ── */}
        <section className={s.hero}>
          <div className={s.badge}>⏳ HARGA NAIK DALAM <span className={s.tick}>{fmtCountdown(left)}</span></div>
          <h1>Berapa Lama Lagi Kamu Mau <span className={s.red}>Bakar Uang</span> Sendirian?</h1>
          <p className={s.sub}>
            Satu MC tanpa SL menghapus <b>berbulan-bulan profit</b>. Satu entry telat 30 menit
            merusak RR. Grup premium Rp300–500rb/bulan menguras dompet — <b>berhenti bayar = sinyal stop</b>.
            Vilona menghentikan ketiganya: SL eksplisit tiap sinyal, EA eksekusi dalam detik, sekali bayar selamanya.
          </p>
          <div className={s.price}>
            <div className={s.priceOld}>Rp{NORMAL.toLocaleString('id-ID')}</div>
            <div className={s.priceNew}>Rp254<span className={s.rb}>rb</span></div>
            <div className={s.priceNote}>sekali bayar · selamanya · hemat Rp{SAVED.toLocaleString('id-ID')}</div>
          </div>
          <div className={s.ctaRow}>
            <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
              🛑 Hentikan Kerugian — Klaim Rp254rb
            </a>
            <TrackedCTA href={CHANNEL} productName={`${PRODUCT} - Hero Join`} productId="vilonafx-sales2" service="vilonafx" variant="secondary">
              ✈️ Lihat Dulu di Channel
            </TrackedCTA>
          </div>
          <div className={s.trust}>✅ Tanpa kartu kredit · ✅ Garansi tier aktif · ✅ Update selamanya</div>
        </section>

        {/* ── LOSS CALCULATOR ── */}
        <section className={s.section}>
          <h2>Hitung Berapa yang Sudah Terbakar</h2>
          <p className={s.center}>Geser lot dan isi berapa bulan kamu trading tanpa sistem. Angka langganan pakai asumsi tengah Rp400rb/bln (rentang pasar Rp300–500rb/bln).</p>
          <div className={s.calc}>
            <label className={s.calcLabel}>
              Ukuran lot per trade: <b>{lot.toFixed(2)} lot</b>
              <input type="range" min={0.01} max={5} step={0.01} value={lot} onChange={(e) => setLot(Number(e.target.value))} className={s.slider} />
            </label>
            <label className={s.calcLabel}>
              Bulan trading tanpa sistem:
              <input type="number" min={1} max={60} value={months} onChange={(e) => setMonths(Math.max(1, Number(e.target.value) || 1))} className={s.numInput} />
            </label>
            <div className={s.calcOut}>
              <div className={s.calcRow}><span>Uang langganan terbakar ({months} bln × Rp400rb)</span><b className={s.red}>Rp{subBurn.toLocaleString('id-ID')}</b></div>
              <div className={s.calcRow}><span>Vilona lifetime (sekali bayar)</span><b>Rp{PROMO.toLocaleString('id-ID')}</b></div>
              <div className={s.calcRow}><span>Selisih</span><b className={diff >= 0 ? s.red : s.green}>{diff >= 0 ? `+Rp${diff.toLocaleString('id-ID')} (lebih mahal langganan)` : `Rp${Math.abs(diff).toLocaleString('id-ID')} (Vilona lebih hemat)`}</b></div>
              <div className={s.calcRow}><span>Setup tervalidasi terlewat (ilustrasi ±20/bln)</span><b>±{missedSetups} setup</b></div>
            </div>
            <p className={s.calcNote}>Ilustrasi biaya langganan, bukan janji profit. Trading tetap berisiko — SL eksplisit membatasi tiap trade, bukan menghapus risiko.</p>
            <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
              🛑 Stop Bayar Bulanan — Rp254rb Sekali
            </a>
          </div>
        </section>

        {/* ── PAIN ── */}
        <section className={s.section}>
          <h2>Tiga Cara Trader Kehilangan Uang Tiap Minggu</h2>
          <div className={s.cards3}>
            <div className={s.card}><b>💥 MC tanpa SL</b><p>"BUY XAUUSD sekarang!" — tanpa stop loss. Sekali salah arah, floating membengkak sampai margin call menghapus akun.</p></div>
            <div className={s.card}><b>⏰ Entry selalu telat</b><p>Sinyal manual dibaca 30 menit kemudian = harga sudah jalan. Entry basi, RR rusak, SL makin lebar.</p></div>
            <div className={s.card}><b>🩸 Langganan abadi</b><p>Rp300–500rb/bulan = Rp3,6–6 juta setahun. Berhenti bayar = sinyal stop. Uangnya hilang, ilmunya tidak nempel.</p></div>
          </div>
        </section>

        {/* ── ENGINE WALL ── */}
        <section className={s.section}>
          <h2>9 Engine Menjaga Kamu dari 3 Hal Itu</h2>
          <p className={s.center}>Tanpa voting mayoritas = tanpa sinyal. SL eksplisit + RR minimum + anti-spam 2/jam + pair-lock di setiap pengiriman.</p>
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

        {/* ── GUARANTEE ── */}
        <section className={s.section}>
          <h2>Garansi Tanpa Drama</h2>
          <div className={s.guarantee}>
            <div className={s.guarIcon}>🛡️</div>
            <div>
              <b>Tier tidak aktif = uang kembali.</b>
              <p>Bayar via lynk.id (QRIS/VA/e-wallet, link 24 jam). Bot verifikasi otomatis dan tier LIFETIME aktif. Kalau tidak aktif, admin @codergaboets refund. Bukan garansi profit — garansi sistem jalan.</p>
            </div>
          </div>
          <div className={s.ctaRow}>
            <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
              🛑 Amankan Slot — Rp254rb
            </a>
            <TrackedCTA href={CHANNEL} productName={`${PRODUCT} - Mid Join`} productId="vilonafx-sales2" service="vilonafx" variant="secondary">
              ✈️ Gabung Channel Dulu
            </TrackedCTA>
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
          <h2>Jam Terus Jalan. Harga Ikut Naik.</h2>
          <p>Sisa waktu harga promo hari ini: <b className={s.tick}>{fmtCountdown(left)}</b> — setelah itu kembali Rp{NORMAL.toLocaleString('id-ID')}.</p>
          <div className={s.ctaRow}>
            <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
              🛑 Klaim Sekarang — Rp254rb
            </a>
            <TrackedCTA href={CHANNEL} productName={`${PRODUCT} - Final Join`} productId="vilonafx-sales2" service="vilonafx" variant="secondary">
              ✈️ Channel Gratis
            </TrackedCTA>
          </div>
        </section>

        <div className={s.sticky}>
          <a href={CHECKOUT} onClick={onCheckout} className={s.stickyCta}>
            🛑 Lifetime Rp254rb <s>Rp{NORMAL.toLocaleString('id-ID')}</s> · {fmtCountdown(left)}
          </a>
        </div>
      </div>
    </Layout>
  );
}
