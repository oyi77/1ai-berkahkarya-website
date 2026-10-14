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
  { icon: '🔌', t: 'Connect EA ke MT5', d: 'Sekali setup, beres. Ikuti panduan 5 menit.' },
  { icon: '📡', t: 'Sinyal dari 9 engine + AI', d: '5 model LLM voting tiap sinyal.' },
  { icon: '⚡', t: 'Posisi open otomatis', d: 'SL & TP langsung terpasang sendiri.' },
  { icon: '🛡️', t: 'Trailing stop otomatis', d: 'Lock profit, minim intervensi.' },
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
  { q: 'Saya gaptek, apakah bisa pakai EA?', a: 'Bisa. Panduan setup tersedia langkah demi langkah, dan CS @alwayscuanterus siap bantu sampai EA kamu jalan. Rata-rata setup pertama hanya 5–10 menit.' },
  { q: 'Apakah butuh VPS atau komputer mahal?', a: 'Tidak. EA jalan di MT5 HP atau PC kamu sendiri. Tidak ada software pihak ketiga, tidak ada biaya VPS.' },
  { q: 'Lifetime benar-benar selamanya?', a: 'Ya. Sekali bayar Rp254.000, semua sinyal + EA + update engine selamanya. Tanpa biaya bulanan.' },
  { q: 'Apakah dijamin profit?', a: 'Tidak ada yang bisa menjamin profit di trading. Yang kami jamin: SL eksplisit, RR minimum, dan disiplin sistem — bukan emosi.' },
];

// ── Screenshot fitur bot (phone-frame gallery) ──
const SCREENSHOTS = [
  { img: '/assets/vilonafx/proof/analisa-gbpusd.webp', label: 'Analisa lengkap Entry/SL/TP' },
  { img: '/assets/vilonafx/proof/smc-pullback.webp', label: 'SMC Pullback — WR 57%' },
  { img: '/assets/vilonafx/proof/pusat-perintah.webp', label: 'Pusat perintah premium' },
  { img: '/assets/vilonafx/proof/pair-kripto.webp', label: '12 pair crypto 24/7' },
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
      ogImage="/assets/vilonafx/og-sales3-v2.png"
    >
      <LPVariantTracker variant={3} service="vilonafx" />
      <div className={s.wrapper}>
        {/* ── HERO — app-store centered minimal ── */}
        <section className={s.hero}>
          <span className={s.badge}>◆ EA AUTO-EXECUTE · LIFETIME</span>
          <div className={s.bridgeStatus}>
            <span className={s.bridgeDot} />
            MT5 Cloud Bridge Active · Latency 14ms · 9 Engines Standby
          </div>
          <h1 className={s.h1}>
            Sinyal Masuk. Posisi Open. <span className={s.grad}>Kamu Tidur.</span>
          </h1>
          <p className={s.sub}>
            EA auto-eksekusi langsung di MT5. <b>9 engine + AI voting</b> tiap sinyal. Tanpa VPS, tanpa coding, tanpa begadang.
          </p>

          {/* ── PHONE FRAME gallery ── */}
          <div className={s.phoneRow}>
            {SCREENSHOTS.slice(0, 2).map((sc) => (
              <figure className={s.phone} key={sc.img}>
                <img src={sc.img} alt={sc.label} loading="lazy" />
              </figure>
            ))}
          </div>

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
          <p className={s.trust}>
            <span>🔌 Tanpa VPS</span>
            <span>⚡ SL/TP otomatis</span>
            <span>👑 Akses selamanya</span>
          </p>
        </section>

        {/* ── CARA KERJA EA ── */}
        <section className={s.section}>
          <h2 className={s.h2}>Cara Kerja EA — Semuanya Otomatis</h2>
          <p className={s.center}>Dari sinyal ke posisi terbuka tanpa kamu sentuh satu tombol pun.</p>
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

        {/* ── SCREENSHOT GALLERY ── */}
        <section className={s.section}>
          <h2 className={s.h2}>Di Dalam Bot-nya</h2>
          <p className={s.center}>Lihat sendiri tampilan asli fitur-fitur bot Vilona AI.</p>
          <div className={s.gallery}>
            {SCREENSHOTS.map((sc) => (
              <figure className={s.galleryCard} key={sc.img}>
                <img src={sc.img} alt={sc.label} loading="lazy" />
                <figcaption>{sc.label}</figcaption>
              </figure>
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
          <span>
            <span className={s.tgIcon}>💬</span>
            <span className={s.tgLabel}>Tanya Dulu</span>
            <span className={s.tgHint}>Gaptek? CS bantu setup gratis</span>
          </span>
        </TrackedCTA>
      </div>
    </Layout>
  );
}
