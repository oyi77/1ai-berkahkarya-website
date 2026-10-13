'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import s from './Sales3.module.css';
import TrackedCTA from '../TrackedCTA';
import LPVariantTracker from '../LPVariantTracker';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';
import { trackViewContent } from '@/lib/tracking';

const CHANNEL = 'https://t.me/vilonaaichanel';
const CHECKOUT = 'https://lynk.id/jendralbot/ox33n8n04792';
const TELEGRAM_CHAT = 'https://t.me/alwayscuanterus?text=Halo+kak,+saya+mau+tanya+tentang+VilonaFX+bot+tradingnya';

const NORMAL = 1990900;
const PROMO = 254000;
const SAVED = NORMAL - PROMO;

const STEPS = [
  { icon: '🔌', t: 'Connect EA ke MT5', d: 'Sekali setup, beres. Tinggal ikuti panduan.' },
  { icon: '📡', t: 'Sinyal datang dari 9 engine + AI', d: '5 model LLM voting tiap sinyal.' },
  { icon: '⚡', t: 'Posisi open otomatis', d: 'SL & TP langsung terpasang sendiri.' },
  { icon: '🛡️', t: 'Trailing stop setelah breakeven', d: 'Lock profit, minim intervensi.' },
];

const FEATURES = [
  'Private signals 5 menit lebih awal',
  'EA auto-eksekusi + trailing otomatis',
  '9 engine + AI consensus 5 LLM',
  'SL & TP terpasang otomatis',
  'Anti-spam, pair-lock, anti-duplikat',
  'Akses lifetime — sekali bayar',
];

const FAQS = [
  {
    q: 'Gaptek banget, bisa pakai?',
    a: 'Bisa. Setup EA cukup sekali, ikuti panduan PDF/video. Sinyal open & close sendiri di MT5. Kalau bingung, chat admin via tombol di bawah.',
  },
  {
    q: 'Perlu VPS atau coding?',
    a: 'Tidak. EA jalan di MT5 kamu langsung. Tanpa VPS, tanpa coding, tanpa konfigurasi rumit.',
  },
  {
    q: 'Sinyal datang berapa kali sehari?',
    a: 'Tergantung pasar. Anti-spam filter batas 2 sinyal/jam per pair. Pair-lock mencegah duplikat. Kualitas dulu, bukan kuantitas.',
  },
  {
    q: 'Lifetime itu apa?',
    a: 'Sekali bayar Rp254rb, akses selamanya. Semua update engine, semua strategi baru, tanpa tagihan bulanan lagi.',
  },
];

export default function VilonaFxSales3({ locale = 'id' }: { locale?: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEngagementTracking('VilonaFX - Sales3 - Lifetime 254rb', '254000', 'vilonafx-sales3');
  useEffect(() => {
    trackViewContent('VilonaFX - Sales3 - Lifetime 254rb', 'sales_page');
  }, []);

  return (
    <Layout
      title="Vilona AI — Trading Otomatis, Sinyal Masuk Posisi Open (Lifetime Rp254rb)"
      description="EA auto-eksekusi MT5 + 9 engine AI voting. Sinyal Entry/SL/TP eksplisit, tanpa VPS, tanpa coding. Lifetime Rp254.000 sekali bayar."
    >
      <LPVariantTracker variant={3} service="vilonafx" />
      <div className={s.wrapper}>
        {/* ── HERO ── */}
        <section className={s.hero}>
          <span className={s.badge}>◆ LIFETIME MEMBER — SEKALI BAYAR</span>
          <h1 className={s.h1}>
            Sinyal Masuk. Posisi Open. <span className={s.grad}>Kamu Tidur.</span>
          </h1>
          <p className={s.sub}>
            EA auto-eksekusi langsung di MT5. 9 engine + AI voting tiap sinyal. Tanpa VPS, tanpa coding.
          </p>

          <div className={s.price}>
            <span className={s.priceOld}>Rp{NORMAL.toLocaleString('id-ID')}</span>
            <div className={s.priceNew}>
              <span className={s.rb}>Rp</span>{PROMO.toLocaleString('id-ID')}
            </div>
            <p className={s.priceNote}>Hemat Rp{SAVED.toLocaleString('id-ID')} · Lifetime, bukan bulanan</p>
          </div>

          <div className={s.ctaRow}>
            <TrackedCTA
              href={CHECKOUT}
              productName="VilonaFX - Sales3 - Lifetime 254rb"
              productId="vilonafx-sales3-lifetime"
              value={PROMO}
              className={s.ctaPrimary}
            >
              ◆ Kunci Status Lifetime
            </TrackedCTA>
            <TrackedCTA
              href={CHANNEL}
              productName="VilonaFX - Sales3 - Channel"
              productId="vilonafx-sales3-channel"
              variant="secondary"
              className={s.ctaSecondary}
            >
              ✈️ Intip Dulu
            </TrackedCTA>
          </div>
          <p className={s.trust}>9 engine · AI consensus · SL/TP otomatis</p>
        </section>

        {/* ── CARA KERJA EA ── */}
        <section className={s.section}>
          <h2 className={s.h2}>Cara Kerja EA</h2>
          <p className={s.center}>Dari sinyal ke posisi — semuanya otomatis.</p>
          <div className={s.steps}>
            {STEPS.map((st, i) => (
              <div key={i} className={s.step}>
                <span className={s.stepIcon}>{st.icon}</span>
                <b className={s.stepT}>{st.t}</b>
                <p className={s.stepD}>{st.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── APA YANG KAMU DAPAT ── */}
        <section className={s.section}>
          <h2 className={s.h2}>Apa yang Kamu Dapat</h2>
          <div className={s.featWrap}>
            {FEATURES.map((f, i) => (
              <div key={i} className={s.feat}>
                <span className={s.featCheck}>✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.section}>
          <h2 className={s.h2}>FAQ</h2>
          <div className={s.faqs}>
            {FAQS.map((f, i) => (
              <div key={i} className={s.faqItem}>
                <button
                  className={s.faqQ}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{f.q}</span>
                  <span className={s.faqArrow}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className={s.faqA}>{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className={s.final}>
          <h2 className={s.finalH2}>Sekali Bayar. Selamanya.</h2>
          <p className={s.finalSub}>Rp{NORMAL.toLocaleString('id-ID')} → Rp{PROMO.toLocaleString('id-ID')}</p>
          <TrackedCTA
            href={CHECKOUT}
            productName="VilonaFX - Sales3 - Lifetime 254rb"
            productId="vilonafx-sales3-lifetime"
            value={PROMO}
            className={s.ctaPrimary}
          >
            ◆ Kunci Status Lifetime
          </TrackedCTA>
        </section>

        {/* ── FLOATING TELEGRAM ── */}
        <TrackedCTA
          href={TELEGRAM_CHAT}
          productName="VilonaFX - Sales3 - Telegram Float"
          productId="vilonafx-sales3-tg-float"
          variant="secondary"
          className={s.tgFloat}
        >
          <span className={s.tgIcon}>💬</span>
          <span className={s.tgLabel}>Tanya Dulu</span>
        </TrackedCTA>
      </div>
    </Layout>
  );
}
