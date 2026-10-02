'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import s from './LP3.module.css';
import TrackedCTA from '../TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

const CHANNEL = 'https://t.me/vilonaaichanel';

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
      title="Vilona AI — Sinyal Trading 3 AI di Telegram"
      description="Gabung channel Telegram Vilona gratis: contoh sinyal Entry/SL/TP, edukasi market, tanpa kartu kredit."
    >
      <div className={s.wrapper}>
        <div className={s.progress} id="lp3Progress" />

        <section className={s.hero}>
          <div className={s.heroInner}>
            <div className={s.badge}>✈️ CHANNEL TELEGRAM — GRATIS</div>
            <h1 className={s.title}>Sinyal Trading Dicek <span className={s.grad}>3 AI</span>, Dikirim ke Telegram.</h1>
            <p className={s.sub}>
              Setiap setup dinilai DeepSeek, GPT-4o, dan Claude.
              Lolos ketiganya → masuk channel. Tidak lolos → dibuang.
              Kamu lihat hasilnya, gratis.
            </p>
            <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP3 - Hero Join">
              ✈️ Gabung @vilonaaichanel — Gratis
            </TrackedCTA>
            <p className={s.micro}>Tanpa kartu kredit · Keluar kapan saja · 1 menit gabung</p>

            <div className={s.proof}>
              {[
                { k: '3', v: 'AI lintas-periksa tiap setup' },
                { k: '3/3', v: 'syarat voting sebelum kirim' },
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
                { t: '📩 Format sinyal jelas', d: 'Contoh: arah, zona entry, SL, TP1/TP2, RR, confidence, dan daftar AI yang setuju.' },
                { t: '🛡️ Setup lemah dibuang', d: 'Tanpa voting bulat 3 AI, tidak ada sinyal. Hari sepi = diam, bukan asal kirim.' },
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
                Entry: 4.076,50 – 4.080,00<br />
                SL: 4.090,00 · TP1: 4.050,00 · TP2: 4.030,00<br />
                RR 1:1,5 · Confidence 78%<br />
                <span>Voters: DeepSeek + GPT-4o + Claude (3/3)</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP3 - Mid Join">
                Lihat Yang Asli di Channel →
              </TrackedCTA>
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container} style={{ maxWidth: 720 }}>
            <h2 className={s.h2}>Jujur sebelum gabung</h2>
            {[
              { q: 'Apakah dijamin profit?', a: 'Tidak. Trading berisiko dan setup mana pun bisa salah. Ini alat bantu disiplin, bukan janji hasil. Mulai dari akun demo.' },
              { q: 'Kenapa gratis?', a: 'Channel adalah pintu masuk: kamu menilai kualitas format sinyal dulu. Upgrade berbayar hanya relevan setelah kamu cocok — tidak ada paksaan.' },
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
