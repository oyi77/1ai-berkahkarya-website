'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import s from './LP3.module.css';
import TrackedCTA from '../TrackedCTA';
import LPVariantTracker from '../LPVariantTracker';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

const CHANNEL = 'https://t.me/vilonaaichanel';
const BOT = 'https://t.me/berkahkaryaforexbotbot';

// Verified live-bot facts (2026-10-06): FREE 3 sinyal Gold/hari + 3 analisa AI/hari;
// ELITE Rp254.000/bln; LIFETIME Rp1.990.900 sekali bayar.
const TIERS = [
  { name: '🆓 FREE', price: 'Rp0 — selamanya', feats: '3 sinyal Gold/hari (Grade B/C) · 3 analisa AI/hari · langsung aktif via /start' },
  { name: '🥈 ELITE', price: 'Rp254.000/bulan', feats: 'Unlimited signals (40+/minggu) · S-TIER + SBR Killer Zone · multi-asset · AI unlimited · priority 24/7 · EA Auto-Sync' },
  { name: '🥇 LIFETIME', price: 'Rp1.990.900 sekali bayar', feats: 'Semua ELITE selamanya · private signals 5 menit lebih awal · semua update gratis' },
];

export default function VilonaFxlp3({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Vilona FX - LP3 Direct', '0', 'vilonafx-lp3');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const el = document.getElementById('lp3Progress');
    if (!el) return;
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      el.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Layout
      title="Vilona AI — Sinyal Trading 9 Engines di Telegram"
      description="Gabung channel Telegram Vilona gratis: contoh sinyal Entry/SL/TP dari bot, edukasi market, tanpa kartu kredit."
    >
      <div className={s.wrapper}>
        <LPVariantTracker variant={3} service="vilonafx" />
        <div className={s.progress} id="lp3Progress" />

        <section className={s.hero}>
          <div className={s.heroInner}>
            <div className={s.badge}>✈️ CHANNEL TELEGRAM — GRATIS</div>
            <h1 className={s.title}>Sinyal Trading Dicek <span className={s.grad}>9 AI Engines</span>, Dikirim ke Telegram.</h1>
            <p className={s.sub}>
              Setiap setup dinilai engine SMC, S-TIER, SBR/BRS Killer Zone, dan AHZ Radar.
              Lolos konsensus → masuk channel. Tidak lolos → dibuang.
              Kamu lihat hasilnya, gratis.
            </p>
            <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP3 - Hero Join">
              ✈️ Gabung @vilonaaichanel — Gratis
            </TrackedCTA>
            <p className={s.micro}>Tanpa kartu kredit · Keluar kapan saja · 1 menit gabung</p>

            <div className={s.proof}>
              {[
                { k: '9', v: 'AI engines lintas-periksa tiap setup' },
                { k: '3/3', v: 'syarat konsensus sebelum kirim' },
                { k: '0', v: 'rupiah untuk gabung channel' },
              ].map((p) => (
                <div key={p.v} className={s.proofItem}><strong>{p.k}</strong><span>{p.v}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.h2}>Yang kamu dapat di channel</h2>
            <div className={s.grid3}>
              {[
                { t: '📩 Format sinyal jelas', d: 'Contoh: arah, zona entry, SL, TP1/TP2, RR, Fibonacci levels — persis format bot.' },
                { t: '🛡️ Setup lemah dibuang', d: 'Tanpa konsensus engines, tidak ada sinyal. Hari sepi = diam, bukan asal kirim.' },
                { t: '📚 Edukasi singkat', d: 'Alasan teknikal ringkas di tiap sinyal — belajar sambil mengamati.' },
              ].map((c) => (
                <div key={c.t} className={s.card}><h3>{c.t}</h3><p>{c.d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container} style={{ maxWidth: 640 }}>
            <div className={s.phone}>
              <div className={s.phoneHead}>✈️ Vilona AI Channel <span>contoh</span></div>
              <div className={s.msg}>
                <strong>🔴 XAUUSD — SELL (contoh)</strong><br />
                Zona masuk: 4.131,53 – 4.133,15<br />
                SL: 4.137,73 · TP1: 4.116,17 · TP2: 4.104,02<br />
                RR 1:3.0 · Fibonacci levels<br />
                <span>Lolos konsensus 9 engines ✓</span>
              </div>
              <div style={{ margin: '0 1rem 1.2rem', fontSize: '.85rem', color: 'var(--mut)' }}>❌ EURUSD — DITAHAN (tanpa konsensus)</div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP3 - Mid Join">
                Lihat Yang Asli di Channel →
              </TrackedCTA>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.h2}>Harga jujur</h2>
            <div className={s.grid3}>
              {TIERS.map((t) => (
                <div key={t.name} className={s.card}>
                  <h3>{t.name}</h3>
                  <p style={{ color: 'var(--ac)', fontWeight: 700, marginBottom: '.4rem' }}>{t.price}</p>
                  <p>{t.feats}</p>
                </div>
              ))}
            </div>
            <p className={s.micro} style={{ textAlign: 'center', marginTop: '1.2rem' }}>
              Upgrade via bot <a href={BOT} style={{ textDecoration: 'underline' }}>@berkahkaryaforexbotbot</a> → /subscribe.
              Bayar QRIS/VA/transfer, aktif otomatis.
            </p>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container} style={{ maxWidth: 720 }}>
            <h2 className={s.h2}>Jujur sebelum gabung</h2>
            {[
              { q: 'Apakah dijamin profit?', a: 'Tidak. Trading berisiko dan setup mana pun bisa salah. Ini alat bantu disiplin, bukan janji hasil. Mulai dari akun demo.' },
              { q: 'Kenapa gratis?', a: 'Channel adalah pintu masuk: kamu menilai kualitas format sinyal dulu. Upgrade berbayar hanya relevan setelah kamu cocok — tidak ada paksaan.' },
              { q: 'Apa bedanya FREE dan ELITE?', a: 'FREE: 3 sinyal Gold/hari (Grade B/C) + 3 analisa AI/hari. ELITE Rp254.000/bulan: unlimited + S-TIER + SBR Killer Zone + EA Auto-Sync. LIFETIME Rp1.990.900 sekali bayar + private signals 5 menit lebih awal.' },
              { q: 'Saya pemula, bisa ikut?', a: 'Bisa untuk observasi dan belajar format. Setiap sinyal mencantumkan entry/SL/TP eksplisit plus alasan singkat.' },
            ].map((f, i) => (
              <div key={i} className={s.faq}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}<span>{openFaq === i ? '−' : '+'}</span></button>
                {openFaq === i && <p>{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className={s.final}>
          <h2>Satu ketuk. <span className={s.grad}>Langsung di Telegram-mu.</span></h2>
          <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP3 - Final Join">
            ✈️ Gabung Sekarang — Gratis
          </TrackedCTA>
          <p className={s.risk}>Trading berisiko. Tidak ada jaminan profit. Mulai dari akun demo. Jangan bagikan OTP/password.</p>
        </section>

        <div className={s.sticky}>
          <TrackedCTA href={CHANNEL} productName="VilonaFX - LP3 - Sticky Join">✈️ Gabung Channel Gratis</TrackedCTA>
        </div>
      </div>
    </Layout>
  );
}
