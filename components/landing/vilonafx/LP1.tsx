'use client';

import React, { useEffect, useRef, useState } from 'react';
import Layout from '@/components/Layout';
import s from './LP1.module.css';
import TrackedCTA from '../TrackedCTA';
import LPVariantTracker from '../LPVariantTracker';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

const CHANNEL = 'https://t.me/vilonaaichanel';
const BOT = 'https://t.me/berkahkaryaforexbotbot';

// ── Verified live-bot facts (2026-10-06 via Telethon):
// FREE: 3 sinyal Gold/hari (Grade B/C) + 3 analisa AI/hari
// ELITE Rp254.000/bln: unlimited signals (40+/minggu), S-TIER + SBR Killer Zone,
//   multi-asset, AI unlimited, priority 24/7, EA Auto-Sync
// LIFETIME Rp1.990.900 sekali bayar: semua ELITE selamanya + private signals 5 mnt lebih awal
const FEED = [
  { who: 'SMC Engine', color: '#22d3ee', text: 'XAUUSD H1: BOS bearish, liquidity di bawah…' },
  { who: 'S-TIER', color: '#f59e0b', text: 'Konfirmasi: struktur + momentum selaras. Grade A.' },
  { who: 'AHZ Radar', color: '#a78bfa', text: 'Risiko: RR 1:2.9 valid. SL eksplisit. Layak kirim.' },
  { who: 'Konsensus', color: '#34d399', text: '✓ 9 engines setuju → sinyal diteruskan.' },
  { who: 'SBR Killer', color: '#f472b6', text: 'EURUSD M15: pola bertentangan — butuh konfirmasi H1.' },
  { who: 'Filter', color: '#94a3b8', text: 'Tahan dulu. Tanpa konsensus, tanpa sinyal. ❌' },
];

const AGENTS = [
  { name: 'Struktur', role: 'SMC / LIQUIDITY', color: '#22d3ee', desc: 'Membaca BOS, CHoCH, liquidity grab, dan zona harga kunci multi-timeframe.' },
  { name: 'Killer Zone', role: 'S-TIER · SBR/BRS · AHZ', color: '#a78bfa', desc: 'Menilai S-TIER setup, SBR/BRS Killer Zone, dan radar AHZ sebelum lolos.' },
  { name: 'Eksekusi', role: 'FILTER & KIRIM', color: '#34d399', desc: 'Memastikan RR minimum, SL eksplisit, dan menolak setup lemah Grade di bawah standar.' },
];

const TIERS = [
  { name: '🆓 FREE', price: 'Rp0 — selamanya', feats: '3 sinyal Gold/hari (Grade B/C) · 3 analisa AI/hari · langsung aktif via /start' },
  { name: '🥈 ELITE', price: 'Rp254.000/bulan', feats: 'Unlimited signals (40+/minggu) · S-TIER + SBR Killer Zone · multi-asset · AI unlimited · priority 24/7 · EA Auto-Sync' },
  { name: '🥇 LIFETIME', price: 'Rp1.990.900 sekali bayar', feats: 'Semua ELITE selamanya · private signals 5 menit lebih awal · semua update gratis · slot terbatas' },
];

export default function VilonaFxlp1({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Vilona FX - LP1 Swarm', '0', 'vilonafx-lp1');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [feedIdx, setFeedIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // scroll progress
  useEffect(() => {
    const el = document.getElementById('lp1Progress');
    if (!el) return;
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      el.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // rotating engine feed
  useEffect(() => {
    const t = setInterval(() => setFeedIdx((i) => (i + 1) % FEED.length), 2400);
    return () => clearInterval(t);
  }, []);

  // swarm canvas: 3 hubs + particle links
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);
    const parts = Array.from({ length: 42 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0016, vy: (Math.random() - 0.5) * 0.0016,
      r: 0.8 + Math.random() * 1.8,
    }));
    const hubs = [
      { x: 0.5, y: 0.30, c: '#22d3ee' },
      { x: 0.28, y: 0.68, c: '#a78bfa' },
      { x: 0.72, y: 0.68, c: '#34d399' },
    ];
    let t = 0;
    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);
      const hp = hubs.map((hb, i) => ({
        ...hb,
        x: (hb.x + Math.sin(t + i * 2.1) * 0.02) * w,
        y: (hb.y + Math.cos(t * 1.2 + i * 1.7) * 0.02) * h,
      }));
      // hub links
      ctx.lineWidth = 1;
      for (let i = 0; i < hp.length; i++) {
        for (let j = i + 1; j < hp.length; j++) {
          const g = ctx.createLinearGradient(hp[i].x, hp[i].y, hp[j].x, hp[j].y);
          g.addColorStop(0, hp[i].c + '55'); g.addColorStop(1, hp[j].c + '55');
          ctx.strokeStyle = g;
          ctx.beginPath(); ctx.moveTo(hp[i].x, hp[i].y); ctx.lineTo(hp[j].x, hp[j].y); ctx.stroke();
        }
      }
      // particles drift + link to nearest hub
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        const px = p.x * w; const py = p.y * h;
        let best = hp[0]; let bd = 1e9;
        for (const hb of hp) {
          const d = (hb.x - px) ** 2 + (hb.y - py) ** 2;
          if (d < bd) { bd = d; best = hb; }
        }
        if (bd < 130 * 130) {
          ctx.strokeStyle = best.c + '22';
          ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(best.x, best.y); ctx.stroke();
        }
        ctx.fillStyle = 'rgba(148,163,184,0.5)';
        ctx.beginPath(); ctx.arc(px, py, p.r, 0, Math.PI * 2); ctx.fill();
      }
      // hubs glow
      for (const hb of hp) {
        const g = ctx.createRadialGradient(hb.x, hb.y, 0, hb.x, hb.y, 34);
        g.addColorStop(0, hb.c); g.addColorStop(1, hb.c + '00');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(hb.x, hb.y, 34, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(hb.x, hb.y, 5, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  const faqs = [
    { q: 'Apa yang saya dapat di channel?', a: 'Format sinyal asli bot: zona entry, SL, TP1/TP2, RR, plus edukasi struktur market. Gratis — tanpa kartu, keluar kapan saja.' },
    { q: 'Apakah ini jaminan profit?', a: 'Tidak. Trading berisiko dan setiap setup bisa salah. Channel ini alat bantu disiplin berbasis data, bukan janji hasil. Mulai dari demo.' },
    { q: 'Bagaimana cara upgrade ke ELITE/LIFETIME?', a: 'Gabung channel dulu, lalu buka @berkahkaryaforexbotbot dan ketik /subscribe. ELITE Rp254.000/bulan, LIFETIME Rp1.990.900 sekali bayar. Bayar via QRIS/VA/transfer, aktif otomatis.' },
    { q: 'Saya pemula, cocok?', a: 'Cocok untuk observasi. Setiap sinyal mencantumkan entry/SL/TP eksplisit plus alasan teknikal singkat, jadi Anda belajar sambil melihat formatnya.' },
  ];

  return (
    <Layout
      title="Vilona AI Swarm — 9 Engines Bekerja, Sinyal Masuk Channel"
      description="Lihat 9 AI engines berdebat sebelum satu sinyal dikirim ke Telegram. Gabung channel Vilona gratis."
    >
      <div className={s.wrapper}>
        <LPVariantTracker variant={1} service="vilonafx" />
        <div className={s.progress} id="lp1Progress" />

        {/* HERO */}
        <section className={s.hero}>
          <canvas ref={canvasRef} className={s.swarm} aria-hidden="true" />
          <div className={s.heroInner}>
            <div className={s.badge}><span className={s.dot} />VILONA AI — 9 ENGINES LIVE</div>
            <h1 className={s.title}>
              9 AI Bekerja Sama.<br /><span className={s.grad}>Kamu Dapat Sinyal Terbaiknya.</span>
            </h1>
            <p className={s.sub}>
              SMC membaca struktur. S-TIER menilai setup. AHZ menjaga risiko.
              Hanya sinyal yang lolos <strong>konsensus 9 engines</strong> yang diteruskan ke channel Telegram.
            </p>
            <div className={s.ctaRow}>
              <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP1 - Hero Join">
                ✈️ Gabung Channel Gratis
              </TrackedCTA>
              <a href="#cara" className={s.btnGhost}>Lihat cara kerja ↓</a>
            </div>
            <p className={s.micro}>Gratis · Tanpa kartu kredit · Keluar kapan saja</p>
            {/* live feed */}
            <div className={s.feed} aria-live="polite">
              <span className={s.feedLive}>● LIVE</span>
              <span className={s.feedWho} style={{ color: FEED[feedIdx].color }}>{FEED[feedIdx].who}</span>
              <span className={s.feedText}>{FEED[feedIdx].text}</span>
            </div>
          </div>
        </section>

        {/* ENGINES */}
        <section className={s.section} id="cara">
          <div className={s.container}>
            <p className={s.eyebrow}>CARA KERJA SWARM</p>
            <h2 className={s.h2}>Tiga divisi. Satu standar: <span className={s.grad}>tanpa konsensus, tanpa sinyal.</span></h2>
            <div className={s.grid3}>
              {AGENTS.map((a) => (
                <div key={a.name} className={s.agentCard} style={{ ['--ac' as string]: a.color }}>
                  <div className={s.agentHead}><span className={s.agentOrb} />{a.name}</div>
                  <div className={s.agentRole}>{a.role}</div>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
            <div className={s.consensus}>
              <span>KONSENSUS</span>
              <div className={s.bar}><i style={{ width: '100%' }} /></div>
              <span>9 ENGINES → KIRIM</span>
            </div>
          </div>
        </section>

        {/* SIGNAL FORMAT — real bot output shape */}
        <section className={s.section}>
          <div className={s.container}>
            <p className={s.eyebrow}>ISI CHANNEL</p>
            <h2 className={s.h2}>Format sinyal yang kamu terima</h2>
            <p className={s.sectionSub}>Contoh struktur asli dari bot — bukan rekomendasi, bukan janji hasil.</p>
            <div className={s.phone}>
              <div className={s.phoneHead}>✈️ Vilona AI Channel</div>
              <div className={s.msg}>
                <strong>🔴 XAUUSD — SELL (contoh)</strong><br />
                Zona masuk: 4.131,53 – 4.133,15<br />
                SL: 4.137,73 · TP1: 4.116,17 · TP2: 4.104,02<br />
                RR 1:3.0 · Fibonacci levels<br />
                <span className={s.voters}>Lolos konsensus 9 engines ✓</span>
              </div>
              <div className={s.msgDim}>❌ EURUSD — DITAHAN (tanpa konsensus, tidak dikirim)</div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP1 - Mid Join">
                Lihat Sinyal Asli di Channel →
              </TrackedCTA>
            </div>
          </div>
        </section>

        {/* PRICING — verified from live /subscribe */}
        <section className={s.section}>
          <div className={s.container}>
            <p className={s.eyebrow}>HARGA JUJUR</p>
            <h2 className={s.h2}>Mulai gratis. Upgrade kalau cocok.</h2>
            <div className={s.grid3}>
              {TIERS.map((t) => (
                <div key={t.name} className={s.agentCard}>
                  <div className={s.agentHead}>{t.name}</div>
                  <div className={s.agentRole}>{t.price}</div>
                  <p>{t.feats}</p>
                </div>
              ))}
            </div>
            <p className={s.sectionSub} style={{ marginTop: '1rem' }}>
              Upgrade via bot <a href={BOT} style={{ textDecoration: 'underline' }}>@berkahkaryaforexbotbot</a> → /subscribe.
              Bayar QRIS/VA/transfer, aktif otomatis. Ada juga Promo IB diskon 50% (deposit min $100).
            </p>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP1 - Pricing Join">
                Masuk Channel Dulu — Gratis →
              </TrackedCTA>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className={s.section}>
          <div className={s.container}>
            <p className={s.eyebrow}>MULAI 1 MENIT</p>
            <h2 className={s.h2}>Gabung dalam 3 ketuk</h2>
            <div className={s.steps}>
              {[
                { n: '01', t: 'Ketuk tombol gabung', d: 'Buka channel @vilonaaichanel di Telegram.' },
                { n: '02', t: 'Tekan Join', d: 'Satu ketuk. Tidak ada formulir, tidak ada biaya.' },
                { n: '03', t: 'Amati formatnya', d: 'Lihat sinyal + edukasi. Upgrade hanya jika cocok.' },
              ].map((st) => (
                <div key={st.n} className={s.step}><span>{st.n}</span><h3>{st.t}</h3><p>{st.d}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={s.section}>
          <div className={s.container} style={{ maxWidth: 720 }}>
            <h2 className={s.h2}>Masih ragu? Wajar.</h2>
            <div>
              {faqs.map((f, i) => (
                <div key={i} className={s.faq}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}<span>{openFaq === i ? '−' : '+'}</span></button>
                  {openFaq === i && <p>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className={s.final}>
          <h2>Masuk ke channel.<br /><span className={s.grad}>Lihat 9 engines bekerja.</span></h2>
          <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP1 - Final Join">
            ✈️ Gabung @vilonaaichanel — Gratis
          </TrackedCTA>
          <p className={s.risk}>Trading berisiko. Tidak ada jaminan profit. Mulai dari akun demo. Jangan bagikan OTP/password.</p>
        </section>

        <div className={s.sticky}>
          <TrackedCTA href={CHANNEL} productName="VilonaFX - LP1 - Sticky Join">✈️ Gabung Channel Gratis</TrackedCTA>
        </div>
      </div>
    </Layout>
  );
}
