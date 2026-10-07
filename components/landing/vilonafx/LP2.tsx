'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import s from './LP2.module.css';
import TrackedCTA from '../TrackedCTA';
import LPVariantTracker from '../LPVariantTracker';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

const CHANNEL = 'https://t.me/vilonaaichanel';
const BOT = 'https://t.me/berkahkaryaforexbotbot';

// Verified live-bot facts (2026-10-06): FREE 3 sinyal Gold/hari + 3 analisa AI/hari;
// ELITE Rp254.000/bln; LIFETIME Rp1.990.900 sekali bayar.
const STAGES = ['SCAN', 'STRUKTUR', 'KILLER ZONE', 'RISIKO', 'KIRIM'];
const NODES = [
  { name: 'SMC / LIQUIDITY', task: 'BOS, CHoCH, liquidity grab multi-timeframe', pct: 88, on: true },
  { name: 'S-TIER', task: 'grade setup + SBR/BRS Killer Zone', pct: 74, on: true },
  { name: 'AHZ RADAR', task: 'validasi RR ≥ 1:1.5 & SL eksplisit', pct: 91, on: true },
  { name: 'FILTER', task: 'tolak setup di bawah standar', pct: 100, on: false },
];

const TIERS = [
  { name: '🆓 FREE', price: 'Rp0 — selamanya', feats: '3 sinyal Gold/hari (Grade B/C) · 3 analisa AI/hari · aktif via /start' },
  { name: '🥈 ELITE', price: 'Rp254.000/bulan', feats: 'Unlimited signals (40+/minggu) · S-TIER + SBR Killer Zone · multi-asset · AI unlimited · priority 24/7 · EA Auto-Sync' },
  { name: '🥇 LIFETIME', price: 'Rp1.990.900 sekali bayar', feats: 'Semua ELITE selamanya · private signals 5 menit lebih awal · semua update gratis' },
];

export default function VilonaFxlp2({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Vilona FX - LP2 Command', '0', 'vilonafx-lp2');
  const [stage, setStage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setStage((i) => (i + 1) % STAGES.length), 1600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const el = document.getElementById('lp2Progress');
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
      title="Vilona Mission Control — Pipeline Sinyal 9 Engines"
      description="Intip ruang komando Vilona: 9 AI engines memindai, menilai, voting. Yang lolos masuk channel Telegram gratis."
    >
      <div className={s.wrapper}>
        <LPVariantTracker variant={2} service="vilonafx" />
        <div className={s.progress} id="lp2Progress" />

        <section className={s.hero}>
          <div className={s.heroInner}>
            <div className={s.badge}><span className={s.dot} />MISSION CONTROL — ONLINE</div>
            <h1 className={s.title}>Ruang Komando <span className={s.grad}>di Balik Setiap Sinyal.</span></h1>
            <p className={s.sub}>
              Tidak ada satu engine yang memutuskan sendiri. Setiap kandidat setup melewati
              pipeline <strong>5 tahap</strong> — dan hanya yang lolos konsensus 9 engines masuk channel.
            </p>

            {/* pipeline */}
            <div className={s.pipe} aria-hidden="true">
              {STAGES.map((st, i) => (
                <React.Fragment key={st}>
                  <div className={s.node + (i === stage ? ' ' + s.active : i < stage ? ' ' + s.done : '')}>{st}</div>
                  {i < STAGES.length - 1 && <div className={s.link + (i < stage ? ' ' + s.lit : '')} />}
                </React.Fragment>
              ))}
            </div>
            <p className={s.pipeCap}>Tahap aktif: <strong>{STAGES[stage]}</strong> — siklus berulang untuk tiap kandidat setup</p>

            <div className={s.ctaRow}>
              <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP2 - Hero Join">
                ✈️ Masuk Channel — Lihat Hasilnya
              </TrackedCTA>
            </div>
            <p className={s.micro}>Gratis · Tanpa kartu · Keluar kapan saja</p>
          </div>
        </section>

        {/* nodes */}
        <section className={s.section}>
          <div className={s.container}>
            <p className={s.eyebrow}>UNIT AKTIF</p>
            <h2 className={s.h2}>4 divisi. Masing-masing punya <span className={s.grad}>hak veto.</span></h2>
            <div className={s.grid2}>
              {NODES.map((n) => (
                <div key={n.name} className={s.unit}>
                  <div className={s.unitTop}>
                    <span className={s.unitName}>{n.name}</span>
                    <span className={n.on ? s.on : s.standby}>{n.on ? '● AKTIF' : '◌ STANDBY'}</span>
                  </div>
                  <div className={s.unitTask}>{n.task}</div>
                  <div className={s.meter}><i style={{ width: n.pct + '%' }} /></div>
                  <div className={s.unitPct}>beban {n.pct}%</div>
                </div>
              ))}
            </div>
            <p className={s.note}>Satu divisi menolak → setup dibuang. Standar ini yang menjaga channel dari sinyal asal-asalan.</p>
          </div>
        </section>

        {/* compare */}
        <section className={s.section}>
          <div className={s.container}>
            <p className={s.eyebrow}>KENAPA BEDA</p>
            <h2 className={s.h2}>Sendiri vs lewat komando</h2>
            <div className={s.vs}>
              <div className={s.old}>
                <h3>Trading sendiri</h3>
                <ul><li>Satu sudut pandang</li><li>Emosi ikut campur</li><li>SL/TP sering asal</li></ul>
              </div>
              <div className={s.new}>
                <h3>Via channel Vilona</h3>
                <ul><li>9 engines lintas-periksa</li><li>Setup lemah otomatis ditolak</li><li>Entry/SL/TP selalu eksplisit</li></ul>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP2 - Mid Join">
                Bandingkan Sendiri — Gabung Gratis →
              </TrackedCTA>
            </div>
          </div>
        </section>

        {/* pricing */}
        <section className={s.section}>
          <div className={s.container}>
            <p className={s.eyebrow}>HARGA JUJUR</p>
            <h2 className={s.h2}>Channel gratis. Premium opsional.</h2>
            <div className={s.grid2}>
              {TIERS.map((t) => (
                <div key={t.name} className={s.unit}>
                  <div className={s.unitTop}><span className={s.unitName}>{t.name}</span></div>
                  <div className={s.unitTask} style={{ fontWeight: 700, color: 'var(--ac)' }}>{t.price}</div>
                  <p className={s.note} style={{ marginTop: 0 }}>{t.feats}</p>
                </div>
              ))}
            </div>
            <p className={s.note}>
              Upgrade via bot <a href={BOT} style={{ textDecoration: 'underline' }}>@berkahkaryaforexbotbot</a> → /subscribe.
              Bayar QRIS/VA/transfer, aktif otomatis.
            </p>
          </div>
        </section>

        {/* steps */}
        <section className={s.section}>
          <div className={s.container}>
            <p className={s.eyebrow}>AKSES 1 MENIT</p>
            <h2 className={s.h2}>Tiga ketuk menuju ruang komando</h2>
            <div className={s.steps}>
              {[
                { n: '01', t: 'Ketuk gabung', d: 'Buka @vilonaaichanel di Telegram.' },
                { n: '02', t: 'Tekan Join', d: 'Tanpa formulir, tanpa biaya.' },
                { n: '03', t: 'Nyalakan notif', d: 'Agar sinyal konsensus tidak terlewat.' },
              ].map((st) => (
                <div key={st.n} className={s.step}><span>{st.n}</span><h3>{st.t}</h3><p>{st.d}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* faq */}
        <section className={s.section}>
          <div className={s.container} style={{ maxWidth: 720 }}>
            <h2 className={s.h2}>Pertanyaan jujur</h2>
            {[
              { q: 'Berapa sinyal per hari?', a: 'Tidak ditarget. Sistem hanya mengirim yang lolos konsensus 9 engines — di hari sepi bisa nol. Itu fitur, bukan bug: diam lebih baik daripada sinyal lemah.' },
              { q: 'Apakah dijamin profit?', a: 'Tidak. Setiap setup bisa salah; SL ada untuk itu. Channel ini alat disiplin, bukan janji hasil. Mulai dari demo.' },
              { q: 'Apa bedanya FREE dan ELITE?', a: 'FREE: 3 sinyal Gold/hari (Grade B/C) + 3 analisa AI/hari. ELITE Rp254.000/bulan: unlimited signals, S-TIER + SBR Killer Zone, multi-asset, EA Auto-Sync. LIFETIME Rp1.990.900 sekali bayar + private signals 5 menit lebih awal.' },
            ].map((f, i) => (
              <div key={i} className={s.faq}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}<span>{openFaq === i ? '−' : '+'}</span></button>
                {openFaq === i && <p>{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className={s.final}>
          <h2>Hasil komando, <span className={s.grad}>langsung di Telegram-mu.</span></h2>
          <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP2 - Final Join">
            ✈️ Gabung @vilonaaichanel — Gratis
          </TrackedCTA>
          <p className={s.risk}>Trading berisiko. Tidak ada jaminan profit. Mulai dari akun demo. Jangan bagikan OTP/password.</p>
        </section>

        <div className={s.sticky}>
          <TrackedCTA href={CHANNEL} productName="VilonaFX - LP2 - Sticky Join">✈️ Gabung Channel Gratis</TrackedCTA>
        </div>
      </div>
    </Layout>
  );
}
