'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import s from './LP2.module.css';
import TrackedCTA from '../TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

const CHANNEL = 'https://t.me/vilonaaichanel';

const STAGES = ['SCAN', 'DEBAT', 'VOTE', 'FILTER', 'KIRIM'];
const NODES = [
  { name: 'DEEPSEEK', task: 'struktur H1–D1', pct: 82, on: true },
  { name: 'GPT-4o', task: 'konteks sesi London', pct: 76, on: true },
  { name: 'CLAUDE', task: 'risiko RR ≥ 1:1.5', pct: 91, on: true },
  { name: 'FILTER', task: 'tolak tanpa 3/3', pct: 100, on: false },
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
      title="Vilona Mission Control — Pipeline Sinyal 3 AI"
      description="Intip ruang komando Vilona: 3 AI memindai, berdebat, voting. Yang lolos masuk channel Telegram gratis."
    >
      <div className={s.wrapper}>
        <div className={s.progress} id="lp2Progress" />

        <section className={s.hero}>
          <div className={s.heroInner}>
            <div className={s.badge}><span className={s.dot} />MISSION CONTROL — ONLINE</div>
            <h1 className={s.title}>Ruang Komando <span className={s.grad}>di Balik Setiap Sinyal.</span></h1>
            <p className={s.sub}>
              Tidak ada satu AI yang memutuskan sendiri. Setiap kandidat setup melewati
              pipeline <strong>5 tahap</strong> — dan hanya yang lolos voting bulat masuk channel.
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
            <h2 className={s.h2}>4 node. Masing-masing punya <span className={s.grad}>hak veto.</span></h2>
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
            <p className={s.note}>Satu saja menolak → setup dibuang. Standar ini yang menjaga channel dari sinyal asal-asalan.</p>
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
                <ul><li>3 AI lintas-periksa</li><li>Setup lemah otomatis ditolak</li><li>Entry/SL/TP selalu eksplisit</li></ul>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <TrackedCTA className={s.btnPrimary} href={CHANNEL} productName="VilonaFX - LP2 - Mid Join">
                Bandingkan Sendiri — Gabung Gratis →
              </TrackedCTA>
            </div>
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
              { q: 'Berapa sinyal per hari?', a: 'Tidak ditarget. Sistem hanya mengirim yang lolos voting 3/3 — di hari sepi bisa nol. Itu fitur, bukan bug: diam lebih baik daripada sinyal lemah.' },
              { q: 'Apakah dijamin profit?', a: 'Tidak. Setiap setup bisa salah; SL ada untuk itu. Channel ini alat disiplin, bukan janji hasil. Mulai dari demo.' },
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
