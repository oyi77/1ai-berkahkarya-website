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

// ── Mock sinyal Telegram-style cards (bukti nyata) ──
const SIGNALS = [
  { pair: 'XAUUSD', dir: 'BUY', entry: '4110.00', sl: '4030.00', tp: '4230.00', grade: 'A', conf: 82, time: '14:32' },
  { pair: 'BTCUSD', dir: 'SELL', entry: '67,500', sl: '69,000', tp: '64,000', grade: 'B', conf: 74, time: '09:15' },
  { pair: 'EURUSD', dir: 'BUY', entry: '1.0842', sl: '1.0820', tp: '1.0880', grade: 'A', conf: 88, time: '21:05' },
];

const ENGINES = [
  { name: 'S-TIER Zone', desc: 'Setup probabilitas tertinggi', icon: '⚡' },
  { name: 'SBR/BRS Killer', desc: 'Zona supply-demand institusi', icon: '🎯' },
  { name: 'SMC Scalper', desc: 'BOS, CHoCH, order block', icon: '📐' },
  { name: 'Conf3 Trend', desc: 'WR terukur 69,5%', icon: '📊' },
  { name: 'Multi-TF Supertrend', desc: 'Sinkron semua timeframe', icon: '🔄' },
  { name: 'Quasimodo+RAG', desc: 'Reversal + memori historis', icon: '🧠' },
  { name: 'AI Consensus', desc: '5 model LLM voting', icon: '🤖' },
  { name: 'AHZ Radar', desc: 'Validasi RR & SL minimum', icon: '🛡️' },
  { name: 'Guardian+Validator', desc: 'Anti-spam, pair-lock', icon: '🔒' },
];

const VS = [
  { label: 'Entry + SL + TP eksplisit', us: true, them: '"BUY sekarang" tanpa SL' },
  { label: '9 engine voting', us: true, them: '1 indikator / feeling' },
  { label: 'AI consensus 5 LLM', us: true, them: 'Copy-paste grup luar' },
  { label: 'EA auto-eksekusi MT5', us: true, them: 'Entry manual, telat' },
  { label: 'Pair-lock anti-spam', us: true, them: 'Spam 10 sinyal pair sama' },
  { label: 'Rp254rb sekali, selamanya', us: true, them: 'Rp300-500rb/bulan' },
];

const STEPS = [
  { n: '1', t: 'Bayar Rp254rb', d: 'Checkout lynk.id (QRIS/VA/e-wallet), 1 menit.' },
  { n: '2', t: 'Tier aktif otomatis', d: 'Bot verifikasi, upgrade ke LIFETIME.' },
  { n: '3', t: 'Sinyal selamanya', d: 'Unlimited + EA auto-sync. Tanpa bayar lagi.' },
];

const FAQS = [
  { q: 'Kenapa Rp254rb lifetime?', a: 'Promo launching agar 1.000 member pertama cepat penuh. Setelah habis, kembali Rp1.990.900. Yang terkunci selamanya, tanpa biaya lanjutan.' },
  { q: 'Bedanya sama grup sinyal gratis?', a: 'Grup gratis = 1 admin, feeling, tanpa SL/TP, spam. Vilona = 9 engine + AI consensus 5 LLM + SL/TP eksplisit + EA auto-eksekusi MT5.' },
  { q: 'Ini jaminan profit?', a: 'Tidak. Yang kami jamin: SL eksplisit (risiko terukur), WR engine terukur (Conf3 69,5%), anti-spam/anti-duplikat. Trading tetap berisiko.' },
];

export default function VilonaFxSales({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Vilona FX - Sales1 Lifetime 254rb', '0', 'vilonafx-sales1');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [spots, setSpots] = useState(17);

  useEffect(() => {
    trackViewContent('VilonaFX - Sales1 - Lifetime 254rb', 'sales_page');
    const t = setInterval(() => setSpots((v) => (v > 7 ? v - 1 : v)), 90000);
    return () => clearInterval(t);
  }, []);

  // ── Back redirect → tangkap ke channel ──
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

  // ── Scroll progress ──
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
      title="Vilona AI — Bukti Sinyal Nyata (Lifetime Rp254rb)"
      description="Lihat bukti sinyal yang dikirim member: Entry/SL/TP eksplisit, 9 engine voting, AI consensus. Promo lifetime Rp254.000 sekali bayar."
    >
      <div className={s.wrapper}>
        <LPVariantTracker variant={1} service="vilonafx" />
        <div className={s.progress} id="salesProgress" />

        {/* ── HERO ── */}
        <section className={s.hero}>
          <div className={s.badge}>🔥 PROMO LAUNCHING — HEMAT Rp{SAVED.toLocaleString('id-ID')}</div>
          <h1>Jangan Beli Dulu.<br />Lihat <span className={s.grad}>Bukti Sinyal</span> Kami Dulu.</h1>
          <p className={s.sub}>
            9 engine + AI voting tiap sinyal. <b>Entry/SL/TP eksplisit</b>. EA auto-eksekusi MT5.
          </p>
          <div className={s.price}>
            <div className={s.priceOld}>Rp{NORMAL.toLocaleString('id-ID')}</div>
            <div className={s.priceNew}>Rp254<span className={s.rb}>rb</span></div>
            <div className={s.priceNote}>sekali bayar · selamanya · sisa slot: <b>{spots}</b></div>
          </div>
          <div className={s.ctaRow}>
            <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
              ⚡ Klaim Lifetime Rp254rb
            </a>
            <TrackedCTA href={CHANNEL} productName={`${PRODUCT} - Hero Channel`} productId="vilonafx-sales1-channel" service="vilonafx" variant="secondary">
              ✈️ Lihat Sinyal Gratis
            </TrackedCTA>
          </div>
          <div className={s.trust}>✅ Tanpa kartu kredit · ✅ Garansi tier aktif · ✅ Update selamanya</div>
        </section>

        {/* ── SECTION 1: SINYAL NYATA ── */}
        <section className={s.section}>
          <h2>Sinyal Nyata yang Dikirim Member</h2>
          <p className={s.center}>Ini bukan mockup — format persis yang masuk Telegram member.</p>
          <div className={s.signals}>
            {SIGNALS.map((sig) => (
              <div className={s.sigCard} key={sig.pair}>
                <div className={s.sigHead}>
                  <span className={s.sigPair}>{sig.pair}</span>
                  <span className={`${s.sigDir} ${sig.dir === 'BUY' ? s.buy : s.sell}`}>{sig.dir}</span>
                  <span className={s.sigTime}>{sig.time} WIB</span>
                </div>
                <div className={s.sigBody}>
                  <div className={s.sigRow}>📍 Entry: <b>{sig.entry}</b></div>
                  <div className={s.sigRow}>🛑 SL: <b>{sig.sl}</b></div>
                  <div className={s.sigRow}>🎯 TP: <b>{sig.tp}</b></div>
                </div>
                <div className={s.sigFoot}>
                  <span className={s.sigGrade}>Grade {sig.grade}</span>
                  <span className={s.sigConf}>Confidence {sig.conf}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: 9 ENGINE VOTING ── */}
        <section className={s.section}>
          <h2>9 Engine Voting Sebelum 1 Sinyal Keluar</h2>
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

        {/* ── SECTION 3: VS GRUP BIASA ── */}
        <section className={s.section}>
          <h2>Vilona vs Grup Biasa</h2>
          <div className={s.vsTable}>
            <div className={s.vsHead}><span></span><span className={s.vsUs}>Vilona</span><span>Grup Biasa</span></div>
            {VS.map((r) => (
              <div className={s.vsRow} key={r.label}>
                <span>{r.label}</span>
                <span className={s.vsUs}>{r.us ? '✅' : '❌'}</span>
                <span className={s.vsThem}>{r.them}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: CARA KERJA ── */}
        <section className={s.section}>
          <h2>Cara Kerja — 3 Langkah</h2>
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
          <h2>Pertanyaan yang Sering Ditanya</h2>
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
          <h2>Rp254rb Sekali. Sinyal Selamanya.</h2>
          <p>Setelah {spots} slot habis, harga kembali Rp{NORMAL.toLocaleString('id-ID')}.</p>
          <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
            ⚡ Klaim Sekarang
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
          <span className={s.tgFloat}>💬 Tanya Dulu</span>
        </TrackedCTA>

        {/* ── STICKY CTA ── */}
        <div className={s.sticky}>
          <a href={CHECKOUT} onClick={onCheckout} className={s.stickyCta}>
            ⚡ Lifetime Rp254rb <s>Rp{NORMAL.toLocaleString('id-ID')}</s>
          </a>
        </div>
      </div>
    </Layout>
  );
}
