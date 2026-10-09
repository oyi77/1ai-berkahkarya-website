'use client';

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import s from './Sales3.module.css';
import TrackedCTA from '../TrackedCTA';
import LPVariantTracker from '../LPVariantTracker';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';
import { trackLead, trackInitiateCheckout, trackViewContent } from '@/lib/tracking';

const CHANNEL = 'https://t.me/vilonaaichanel';
const CHECKOUT = 'https://lynk.id/jendralbot/ox33n8n04792';
const PRODUCT = 'VilonaFX - Sales3 - Lifetime 254rb';

const NORMAL = 1990900;
const PROMO = 254000;
const SAVED = NORMAL - PROMO;

const ENGINES = [
  { name: 'S-TIER Zone', desc: 'Hanya grade terbaik yang lolos. Standar member, bukan standar publik.', icon: '👑' },
  { name: 'SBR / BRS Killer', desc: 'Entry presisi di zona institusi. Member masuk di harga yang tidak dilihat publik.', icon: '🎯' },
  { name: 'SMC Scalper', desc: 'BOS, CHoCH, liquidity grab, order block — dibaca real-time.', icon: '📐' },
  { name: 'Conf3 Trend', desc: '6 detektor SMC + filter SMA200. WR terukur 69,5% dan naik tiap hari.', icon: '📊' },
  { name: 'Multi-TF Supertrend', desc: 'Semua timeframe sinkron sebelum 1 sinyal dikirim ke member.', icon: '🔄' },
  { name: 'Quasimodo + RAG', desc: 'Pola reversal + memori setup historis. Klub tidak mengulang kesalahan lama.', icon: '🧠' },
  { name: 'AI Consensus', desc: 'Ensemble 5 model LLM voting tiap sinyal sebelum rilis.', icon: '🤖' },
  { name: 'AHZ Radar', desc: 'RR minimum, SL eksplisit. Setup lemah dibuang sebelum sampai ke kamu.', icon: '🛡️' },
  { name: 'Guardian + Validator', desc: 'Anti-spam 2/jam, anti-duplikat, pair-lock sampai trade selesai.', icon: '🔒' },
];

const STRATS = [
  { key: 'S-TIER Zone', wr: 'Grade A', risk: 'rendah', sym: 'XAUUSD · EURUSD', desc: 'Hanya setup probabilitas tertinggi yang lolos. Sisanya ditolak.' },
  { key: 'SBR / BRS Killer', wr: 'Grade A', risk: 'sedang', sym: 'XAUUSD · EURUSD', desc: 'Entry presisi di zona supply-demand institusi.' },
  { key: 'SMC Scalper', wr: '±60%', risk: 'sedang', sym: 'XAUUSD · EURUSD', desc: 'BOS, CHoCH, liquidity grab, order block — scalping struktur.' },
  { key: 'Conf3 Trend', wr: '69,5%', risk: 'rendah', sym: 'Semua pair', desc: '6 detektor SMC + filter SMA200. WR terukur, naik harian.' },
  { key: 'XAU Hedging', wr: '62%', risk: 'sedang', sym: 'XAUUSD', desc: 'Hedging emas sadar sesi — gratis, cocok pemula.' },
  { key: 'FVG Detector', wr: '63%', risk: 'rendah', sym: 'XAUUSD · BTCUSD', desc: 'Entry di Fair Value Gap. Risiko terkecil di katalog.' },
];

const JOURNEY = [
  { tag: 'LANGKAH 1 · GRATIS', t: 'Coba di Channel', d: 'Masuk channel gratis, lihat gaya sinyal dan disiplin SL/TP kami. Tanpa bayar, tanpa komitmen.', cta: 'channel' as const },
  { tag: 'LANGKAH 2 · ELITE', t: 'Naik ke ELITE Bulanan', d: 'Butuh semua engine + EA auto-eksekusi? ELITE membuka full akses — harga yang sama dengan promo ini per bulan.', cta: 'checkout' as const },
  { tag: 'LANGKAH 3 · LIFETIME', t: 'Kunci Status Selamanya', d: 'Satu pembayaran Rp254rb. Tier LIFETIME terkunci: semua update engine, selamanya, tanpa tagihan lagi.', cta: 'checkout' as const },
];

const OUTCOMES = [
  { icon: '⚡', t: 'Tidak ada entry yang terlewat', d: 'Sinyal private masuk 5 menit lebih awal + EA eksekusi otomatis ke MT5. Kamu tidak perlu menatap chart.' },
  { icon: '📊', t: 'Keputusan berbasis angka', d: 'Setiap engine punya WR terukur — Conf3 69,5% dan naik harian. Bukan feeling, bukan tebakan.' },
  { icon: '🛡️', t: 'Risiko selalu terukur', d: 'SL eksplisit di setiap sinyal, RR minimum ditegakkan. Setup lemah dibuang sebelum sampai ke kamu.' },
  { icon: '🔒', t: 'Akun tenang, sinyal bersih', d: 'Anti-spam 2/jam, anti-duplikat, pair-lock: 1 pair = 1 sinyal aktif sampai trade selesai.' },
  { icon: '🤖', t: 'Otomatisasi penuh', d: 'EA auto-eksekusi + trailing otomatis. Sinyal datang, posisi open dalam detik — di HP/PC biasa, tanpa VPS.' },
  { icon: '♾️', t: 'Status yang tidak kedaluwarsa', d: 'Sekali bayar. Semua update engine selamanya. Tidak ada tagihan bulanan, tahunan, atau "biaya server".' },
];

export default function VilonaFxSales3({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Vilona FX - Sales3 Aspiration Club', '0', 'vilonafx-sales3');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [strat, setStrat] = useState(0);

  useEffect(() => {
    trackViewContent('VilonaFX - Sales3 - Lifetime 254rb', 'sales_page');
  }, []);

  useEffect(() => {
    let fired = false;
    window.history.pushState({ sales3: true }, '', window.location.href);
    const onPop = () => {
      if (fired) return;
      fired = true;
      trackLead({
        content_name: `${PRODUCT} - Back Redirect Join`,
        content_id: 'vilonafx-sales3-back',
        destination: 'telegram_channel',
        destination_url: CHANNEL,
      });
      window.location.href = CHANNEL;
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const el = document.getElementById('sales3Progress');
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

  const onJoin = (label: string) => {
    trackLead({
      content_name: `${PRODUCT} - ${label}`,
      content_id: 'vilonafx-sales3-join',
      destination: 'telegram_channel',
      destination_url: CHANNEL,
    });
  };

  const faqs = [
    { q: 'Apa yang saya dapatkan sebagai lifetime member?', a: 'Semua sinyal unlimited, semua 9 engine, EA auto-eksekusi MT5, private signals 5 menit lebih awal, dan semua update engine selamanya — satu pembayaran Rp254.000, tanpa biaya lanjutan.' },
    { q: 'Bedanya member dengan pengikut channel gratis?', a: 'Pengikut gratis melihat sinyal publik yang terlambat. Member menerima private signals 5 menit lebih awal, semua engine, dan EA yang eksekusi otomatis — plus status lifetime yang terkunci selamanya.' },
    { q: 'Apakah ini jaminan profit?', a: 'Tidak — dan waspada pada yang berani menjamin. Yang kami jamin: setiap sinyal punya SL eksplisit, win-rate engine terukur (Conf3 69,5% dan naik), anti-spam 2/jam dan pair-lock. Trading tetap berisiko; kelola lot sesuai modal.' },
    { q: 'Bagaimana pembayaran dan aktivasinya?', a: 'Checkout via lynk.id (QRIS, virtual account semua bank, e-wallet). Setelah bayar, bot verifikasi otomatis dan tier LIFETIME aktif. Garansi: tidak aktif = uang kembali via admin.' },
    { q: 'Saya gaptek. Bisa ikut?', a: 'Bisa. Sinyal masuk Telegram — tinggal baca Entry/SL/TP. Mau otomatis? EA jalan di MT5 HP/PC biasa, tanpa VPS. Setup 5 menit, ada panduan + admin bantu.' },
    { q: 'Lifetime beneran selamanya?', a: 'Ya. Sekali bayar Rp254.000: semua sinyal + semua fitur ELITE + semua update selamanya. Tidak ada biaya bulanan, tahunan, atau "biaya server".' },
  ];

  return (
    <Layout
      title="Vilona AI — Private Club Lifetime Rp254rb (Normal Rp1.990.900)"
      description="Klub private trading Vilona: private signals 5 menit lebih awal, 9 engine + AI consensus 5 model LLM, EA auto-eksekusi MT5. Status lifetime Rp254.000 sekali bayar."
    >
      <div className={s.wrapper}>
        <LPVariantTracker variant={93} service="vilonafx" />
        <div className={s.progress} id="sales3Progress" />

        {/* ── HERO: prestige ── */}
        <section className={s.hero}>
          <div className={s.badge}>◆ PRIVATE CLUB — LIFETIME MEMBER ◆</div>
          <h1>Trader Biasa Mengejar Sinyal.<br /><span className={s.grad}>Member Masuk 5 Menit Lebih Awal.</span></h1>
          <p className={s.sub}>
            Vilona adalah klub private di Telegram: <b>private signals 5 menit lebih awal</b>,
            divoting <b>9 engine + 5 model AI</b> sebelum rilis — lengkap dengan
            Entry + SL + TP, dan EA yang <b>eksekusi otomatis ke MT5</b> kamu.
          </p>
          <div className={s.price}>
            <div className={s.priceOld}>Rp{NORMAL.toLocaleString('id-ID')}</div>
            <div className={s.priceNew}>Rp254<span className={s.rb}>rb</span></div>
            <div className={s.priceNote}>sekali bayar · status lifetime · hemat Rp{SAVED.toLocaleString('id-ID')}</div>
          </div>
          <div className={s.ctaRow}>
            <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
              ◆ Kunci Status Lifetime
            </a>
            <TrackedCTA href={CHANNEL} productName={`${PRODUCT} - Hero Join`} productId="vilonafx-sales3" service="vilonafx" variant="secondary">
              ✈️ Intip Dulu di Channel
            </TrackedCTA>
          </div>
          <div className={s.trust}>◆ Tanpa kartu kredit · ◆ Garansi tier aktif · ◆ Update selamanya</div>
        </section>

        {/* ── MEMBER JOURNEY ── */}
        <section className={s.section}>
          <h2>Jalur Menuju Status Lifetime</h2>
          <p className={s.center}>Tiga langkah. Mulai gratis, naik saat siap, kunci selamanya.</p>
          <div className={s.journey}>
            {JOURNEY.map((j, i) => (
              <div className={s.jstep} key={j.t}>
                <div className={s.jtag}>{j.tag}</div>
                <div className={s.jnum}>{i + 1}</div>
                <b>{j.t}</b>
                <p>{j.d}</p>
                {j.cta === 'channel' ? (
                  <TrackedCTA href={CHANNEL} productName={`${PRODUCT} - Journey Join`} productId="vilonafx-sales3" service="vilonafx" variant="secondary">
                    Masuk Channel Gratis
                  </TrackedCTA>
                ) : (
                  <a href={CHECKOUT} onClick={onCheckout} className={s.jcta}>
                    {i === 2 ? '◆ Kunci Lifetime Rp254rb' : 'Lihat Akses ELITE'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── OUTCOMES ── */}
        <section className={s.section}>
          <h2>Apa yang Berubah Setelah Jadi Member</h2>
          <div className={s.outcomes}>
            {OUTCOMES.map((o) => (
              <div className={s.outcome} key={o.t}>
                <span className={s.oicon}>{o.icon}</span>
                <b>{o.t}</b>
                <p>{o.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ENGINE SHOWCASE ── */}
        <section className={s.section}>
          <h2>Dewan Engine di Balik Setiap Sinyal</h2>
          <p className={s.center}>Satu sinyal harus lolos voting mayoritas 9 engine + AI consensus 5 model LLM. Tanpa konsensus = tanpa sinyal.</p>
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

        {/* ── STRATEGY SIMULATOR ── */}
        <section className={s.section}>
          <h2>Pilih Gaya Trading Kamu</h2>
          <p className={s.center}>Satu klik /strategy di bot, aktif langsung — tanpa coding, tanpa VPS.</p>
          <div className={s.sim}>
            <div className={s.simTabs}>
              {STRATS.map((st, i) => (
                <button
                  key={st.key}
                  className={`${s.simTab} ${i === strat ? s.simTabOn : ''}`}
                  onClick={() => setStrat(i)}
                >
                  {st.key}
                </button>
              ))}
            </div>
            <div className={s.simBody}>
              <div className={s.simLeft}>
                <div className={s.simWin}>WR <b>{STRATS[strat].wr}</b></div>
                <div className={s.simRisk} data-r={STRATS[strat].risk}>Risiko: {STRATS[strat].risk}</div>
                <div className={s.simSym}>{STRATS[strat].sym}</div>
                <p className={s.simDesc}>{STRATS[strat].desc}</p>
                <div className={s.simCmd}>/strategy {STRATS[strat].key.toLowerCase().replace(/[^a-z0-9]+/g, '_')}</div>
              </div>
              <div className={s.simRight}>
                <div className={s.simMsgHead}>◆ Sinyal preview member</div>
                <div className={s.simMsg}>
                  <div className={s.simMsgTitle}>{STRATS[strat].key} → XAUUSD BUY</div>
                  <div>📌 Entry: 4110.00</div>
                  <div>🛡️ SL: 4030.00</div>
                  <div>🏆 TP1: 4230.00 (RR 1:2)</div>
                  <div className={s.simMsgFoot}>Grade: A · Confidence: 82% · auto-exec: ON</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHANNEL FUNNEL ── */}
        <section className={s.section}>
          <h2>Belum Yakin? Mulai dari Channel Gratis</h2>
          <p className={s.center}>Lihat disiplin kami dulu — sinyal publik, gaya analisa, cara kami pasang SL/TP. Saat siap, kunci status lifetime.</p>
          <div className={s.funnel}>
            <div className={s.funnelCard}>
              <b>1. Masuk channel gratis</b>
              <p>Nilai sendiri kualitas sinyal publik kami selama seminggu.</p>
              <TrackedCTA href={CHANNEL} productName={`${PRODUCT} - Funnel Join`} productId="vilonafx-sales3" service="vilonafx" variant="secondary">
                ✈️ Join Channel Gratis
              </TrackedCTA>
            </div>
            <div className={s.funnelArrow}>→</div>
            <div className={s.funnelCard}>
              <b>2. Rasakan selisihnya</b>
              <p>Member dapat private signals 5 menit lebih awal + EA auto-eksekusi. Publik tidak.</p>
            </div>
            <div className={s.funnelArrow}>→</div>
            <div className={s.funnelCard}>
              <b>3. Kunci lifetime Rp254rb</b>
              <p>Sekali bayar. Status selamanya. Semua update gratis.</p>
              <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
                ◆ Kunci Lifetime
              </a>
            </div>
          </div>
        </section>

        {/* ── HARGA ── */}
        <section className={s.section} id="harga">
          <h2>Satu Harga. Status Selamanya.</h2>
          <div className={s.priceBox}>
            <div className={s.priceOld}>Rp{NORMAL.toLocaleString('id-ID')}</div>
            <div className={s.priceNew}>Rp254<span className={s.rb}>rb</span></div>
            <ul className={s.feats}>
              <li>◆ Private signals 5 menit lebih awal</li>
              <li>◆ Unlimited signals, semua pair</li>
              <li>◆ S-TIER + SBR Killer Zone + semua engine</li>
              <li>◆ EA auto-eksekusi MT5 + trailing otomatis</li>
              <li>◆ AI analysis unlimited + prioritas 24/7</li>
              <li>◆ Semua update selamanya — tanpa bayar lagi</li>
            </ul>
            <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
              ◆ Bayar Rp254rb — Member Selamanya
            </a>
            <div className={s.trust}>QRIS · VA semua bank · E-wallet · Link 24 jam · Garansi aktif</div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.section}>
          <h2>Pertanyaan Calon Member</h2>
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
          <h2>Klub Ini Punya Pintu. Kuncinya Rp254rb.</h2>
          <p>Sekali bayar. Status lifetime. Semua update selamanya.</p>
          <div className={s.ctaRow}>
            <a href={CHECKOUT} onClick={onCheckout} className={s.ctaPrimary}>
              ◆ Kunci Sekarang
            </a>
            <TrackedCTA href={CHANNEL} productName={`${PRODUCT} - Final Join`} productId="vilonafx-sales3" service="vilonafx" variant="secondary">
              ✈️ Intip Channel Dulu
            </TrackedCTA>
          </div>
        </section>

        <div className={s.sticky}>
          <a href={CHECKOUT} onClick={onCheckout} className={s.stickyCta}>
            ◆ Lifetime Rp254rb <s>Rp{NORMAL.toLocaleString('id-ID')}</s>
          </a>
        </div>
      </div>
    </Layout>
  );
}
