'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import s from './Sales2.module.css';
import TrackedCTA from '../TrackedCTA';
import LPVariantTracker from '../LPVariantTracker';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';
import { trackLead, trackViewContent } from '@/lib/tracking';

const CHANNEL = 'https://t.me/vilonaaichanel';
const CHECKOUT = 'https://lynk.id/jendralbot/ox33n8n04792';
const TELEGRAM_CHAT = 'https://t.me/alwayscuanterus?text=Halo+kak,+saya+mau+tanya+tentang+VilonaFX+bot+tradingnya';
const PRODUCT = 'VilonaFX - Sales2 Burn - Lifetime 254rb';
const NORMAL = 1990900;
const PROMO = 254000;
const SAVED = NORMAL - PROMO;
const SUB_MO = 400000;

const ENGINES = [
  { name: 'S-TIER Zone', desc: 'Hanya grade terbaik yang lolos.', icon: '⚡' },
  { name: 'SBR / BRS Killer', desc: 'Entry di titik institusi masuk.', icon: '🎯' },
  { name: 'SMC Scalper', desc: 'BOS, CHoCH, liquidity grab.', icon: '📐' },
  { name: 'Conf3 Trend', desc: 'WR terukur 69,5%.', icon: '📊' },
  { name: 'Multi-TF Supertrend', desc: 'Sinkronisasi semua timeframe.', icon: '🔄' },
  { name: 'Quasimodo + RAG', desc: 'Tidak mengulang kesalahan lama.', icon: '🧠' },
  { name: 'AI Consensus', desc: '5 model LLM voting tiap sinyal.', icon: '🤖' },
  { name: 'AHZ Radar', desc: 'RR minimum, SL eksplisit.', icon: '🛡️' },
  { name: 'Guardian + Validator', desc: 'Anti-spam 2/jam, pair-lock.', icon: '🔒' },
];

const PAINS = [
  { icon: '💥', title: 'MC tanpa SL', body: '"BUY sekarang!" tanpa stop loss. Sekali salah arah, margin call hapus akun.' },
  { icon: '⏰', title: 'Entry selalu telat', body: 'Sinyal manual dibaca 30 menit kemudian. Harga sudah jalan, RR rusak.' },
  { icon: '🩸', title: 'Langganan abadi', body: 'Bayar tiap bulan, berhenti = sinyal stop. Uang hilang, ilmu tidak nempel.' },
];

const FAQS = [
  { q: 'Kenapa semurah ini? Rp254rb lifetime, apa jebakannya?', a: 'Tidak ada jebakan. Rp254.000 = harga 1 bulan ELITE. Promo launching agar channel cepat penuh 1.000 member pertama — setelah kuota habis, lifetime kembali Rp1.990.900. Yang terkunci harga promo selamanya, tanpa biaya lanjutan.' },
  { q: 'Bedanya dengan grup sinyal gratis?', a: 'Grup gratis = 1 admin, feeling, tanpa SL/TP, spam. Vilona = 9 engine voting + AI consensus 5 model LLM + SL/TP eksplisit tiap sinyal + EA auto-eksekusi MT5.' },
  { q: 'Lifetime beneran selamanya? Termasuk update?', a: 'Ya. Sekali bayar Rp254.000: semua sinyal + semua fitur ELITE + semua update engine selamanya. Tidak ada biaya bulanan, tahunan, atau biaya server.' },
];

// ── Bukti nyata: withdrawal asli (paling relevan untuk loss-aversion) ──
const PROOF_WITHDRAWALS = [
  { img: '/assets/vilonafx/proof/withdraw-3.webp', label: 'WD $137.46 — Internet Banking' },
  { img: '/assets/vilonafx/proof/withdraw-1.webp', label: 'WD $39.99 & $21.31' },
  { img: '/assets/vilonafx/proof/withdraw-2.webp', label: '4x WD September' },
  { img: '/assets/vilonafx/proof/withdraw-4.webp', label: 'Riwayat WD terverifikasi' },
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
  useEngagementTracking('Vilona FX - Sales2 Burn Lifetime 254rb', '0', 'vilonafx-sales2');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [left, setLeft] = useState(msToMidnight());
  const [months, setMonths] = useState(6);

  useEffect(() => {
    trackViewContent('VilonaFX - Sales2 - Lifetime 254rb', 'sales_page');
  }, []);

  useEffect(() => {
    const t = setInterval(() => setLeft(msToMidnight()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let fired = false;
    window.history.pushState({ sales2: true }, '', window.location.href);
    const onPop = () => {
      if (fired) return;
      fired = true;
      trackLead({
        content_name: `${PRODUCT} - Back Redirect`,
        content_id: 'vilonafx-sales2-back',
        destination: 'telegram_channel',
        destination_url: CHANNEL,
      });
      window.location.href = CHANNEL;
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

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

  const subBurn = months * SUB_MO;
  const diff = subBurn - PROMO;

  return (
    <Layout
      title="Vilona AI — Berhenti Bakar Uang (Lifetime Rp254rb)"
      description="Setiap hari tanpa SL = uang terbakar. MC hapus profit, entry telat rusak RR, langganan bulanan menguras dompet. Vilona: 9 engine + AI consensus, SL eksplisit, EA auto MT5. Lifetime Rp254.000."
      ogImage="/assets/vilonafx/og-sales2.png"
    >
      <div className={s.wrapper}>
        <LPVariantTracker variant={92} service="vilonafx" />
        <div className={s.progress} id="sales2Progress" />

        {/* ── HERO — editorial left-aligned ── */}
        <section className={s.hero}>
          <div className={s.urgentBadge}>🔥 HARGA NAIK DALAM <span className={s.tick}>{fmtCountdown(left)}</span></div>
          <h1>Setiap Hari Tanpa SL = <span className={s.burn}>Uang Terbakar.</span></h1>
          <p className={s.sub}>
            MC tanpa SL hapus <b>bulanan profit</b>. Entry telat rusak RR. Langganan bulanan menguras dompet.
          </p>

          {/* ── RECEIPT: kalkulator kerugian ── */}
          <div className={s.receipt}>
            <div className={s.receiptHead}>
              <span>LAPORAN PEMBAKARAN UANG</span>
              <span className={s.receiptStamp}>BUKTI KERUGIAN</span>
            </div>
            <label className={s.calcLabel}>
              Sudah berapa bulan kamu trading tanpa sistem?
              <input type="range" min={1} max={12} step={1} value={months} onChange={(e) => setMonths(Number(e.target.value))} className={s.slider} />
              <b>{months} bulan</b>
            </label>
            <div className={s.calcOut}>
              <div className={s.calcRow}><span>Uang langganan terbakar ({months} bln × Rp400rb)</span><b className={s.red}>Rp{subBurn.toLocaleString('id-ID')}</b></div>
              <div className={s.calcRow}><span>Vilona lifetime (sekali bayar)</span><b className={s.grn}>Rp{PROMO.toLocaleString('id-ID')}</b></div>
              <div className={s.calcRow}><span>Selisih yang kamu buang</span><b className={s.red}>+Rp{diff.toLocaleString('id-ID')}</b></div>
            </div>
            <div className={s.burnDiff}>
              💸 Rp{diff.toLocaleString('id-ID')} bisa jadi modal trading, bukan uang langganan yang hilang.
            </div>
          </div>

          <div className={s.price}>
            <div className={s.priceOld}>Normal Rp{NORMAL.toLocaleString('id-ID')}</div>
            <div className={s.priceNew}>Rp254<span className={s.rb}>rb</span></div>
            <div className={s.priceNote}>sekali bayar · selamanya · hemat Rp{SAVED.toLocaleString('id-ID')}</div>
          </div>

          <div className={s.ctaRow}>
            <TrackedCTA href={CHECKOUT} className={s.ctaPrimary} productName={`${PRODUCT} - Hero Checkout`} productId="vilonafx-sales2-checkout" service="vilonafx" lpVariant={92} value={PROMO} variant="primary">
              🛑 Hentikan Kerugian — Rp254rb
            </TrackedCTA>
            <TrackedCTA href={CHANNEL} className={s.ctaSecondary} productName={`${PRODUCT} - Hero Join`} productId="vilonafx-sales2" service="vilonafx" lpVariant={92} variant="secondary">
              ✈️ Lihat Dulu
            </TrackedCTA>
          </div>
          <p className={s.trust}>
            <span>✅ Tanpa kartu kredit</span>
            <span>✅ Garansi tier aktif</span>
            <span>✅ Update selamanya</span>
          </p>
        </section>

        {/* ── BUKTI: orang lain sudah tarik uang ── */}
        <section className={s.section}>
          <h2>Orang Lain Sudah Tarik Profit.<br />Kamu Masih Bakar Uang.</h2>
          <p className={s.center}>
            Ini bukti withdrawal asli member Vilona. Bukan simulasi — uangnya benar-benar sampai ke rekening mereka.
          </p>
          <div className={s.proofStrip}>
            {PROOF_WITHDRAWALS.map((w) => (
              <figure className={s.proofCard} key={w.img}>
                <img src={w.img} alt={w.label} loading="lazy" />
                <figcaption>{w.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className={s.disclaimer}>
            ⚠️ Trading tetap berisiko. Hasil di atas adalah performa historis member — bukan jaminan profit untuk Anda.
          </p>
        </section>

        {/* ── 3 PAIN CARDS ── */}
        <section className={s.section}>
          <h2>3 Cara Trader Kehilangan Uang</h2>
          <div className={s.cards3}>
            {PAINS.map((p) => (
              <div className={s.card} key={p.title}>
                <span className={s.cicon}>{p.icon}</span>
                <b>{p.title}</b>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 9 ENGINES ── */}
        <section className={s.section}>
          <h2>9 Engine Melindungi Kamu</h2>
          <p className={s.center}>Tanpa voting mayoritas = tanpa sinyal. SL eksplisit + RR minimum + anti-spam 2/jam.</p>
          <div className={s.engines}>
            {ENGINES.map((e) => (
              <div className={s.engine} key={e.name}>
                <span className={s.eicon}>{e.icon}</span>
                <b>{e.name}</b>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
          <div className={s.ctaRow}>
            <TrackedCTA href={CHECKOUT} className={s.ctaPrimary} productName={`${PRODUCT} - Engine Checkout`} productId="vilonafx-sales2-checkout" service="vilonafx" lpVariant={92} value={PROMO} variant="primary">
              🛑 Amankan Pelindung — Rp254rb
            </TrackedCTA>
            <TrackedCTA href={CHANNEL} className={s.ctaSecondary} productName={`${PRODUCT} - Engine Join`} productId="vilonafx-sales2" service="vilonafx" lpVariant={92} variant="secondary">
              ✈️ Lihat Sinyal Gratis
            </TrackedCTA>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.section}>
          <h2>Pertanyaan Jujur</h2>
          {FAQS.map((f, i) => (
            <div className={s.faq} key={i}>
              <button className={s.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q} <span>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p className={s.faqA}>{f.a}</p>}
            </div>
          ))}
        </section>

        {/* ── FLOATING TELEGRAM ── */}
        <TrackedCTA href={TELEGRAM_CHAT} className={s.tgFloat} productName="VilonaFX - Sales2 - Telegram Float" productId="vilonafx-sales2-tg-float" service="vilonafx" lpVariant={92}>
          💬 Tanya Dulu
        </TrackedCTA>
      </div>
    </Layout>
  );
}
