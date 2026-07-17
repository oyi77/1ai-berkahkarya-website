'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import b from '../_lp-base.module.css';
import s from './LP1.module.css';
import TrackedCTA from '../TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function JasaKontraktorLP1({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Jasa Kontraktor - LP1', '0', 'jasa-kontraktor-lp1');

  const services = [
    { icon: '🏠', label: 'Bangun Rumah' },
    { icon: '🏢', label: 'Bangun Kantor' },
    { icon: '🛠', label: 'Renovasi' },
    { icon: '📐', label: 'Desain Rumah' },
    { icon: '🛋', label: 'Interior' },
    { icon: '🚗', label: 'Kanopi' },
    { icon: '🚪', label: 'Pagar & Railing' },
    { icon: '📊', label: 'RAB Bangunan' },
  ];

  return (
    <Layout
      title="Jasa Kontraktor Profesional — Desain Rumah, Kantor, Gedung | BerkahKarya"
      description="Jasa kontraktor & desain bangunan profesional: rumah, kantor, hotel, mall, interior, kanopi, pagar, RAB. Gratis konsultasi!"
    >
      <div className={s.wrapper}>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.container}>
            <div className={s.badge}>
              <span className={s.badgeDot} />
              KONTRAKTOR & DESAIN TERPERCAYA — 200+ PROYEK SELESAI
            </div>
            <h1 className={s.title}>
              Bangun Rumah, Renovasi & Interior<br />
              <span className={s.gradientText}>Tanpa Ribet — Satu Tim Profesional</span>
            </h1>
            <p className={s.subtitle}>
              Dari gambar kerja, RAB, visual 3D hingga pembangunan — semua kebutuhan proyek Anda ditangani tim arsitek & engineer dalam satu tempat. Proses lebih terarah, biaya transparan, hasil maksimal.
            </p>

            <div className={s.serviceGrid}>
              {services.map((svc) => (
                <span key={svc.label} className={s.serviceTag}>
                  {svc.icon} {svc.label}
                </span>
              ))}
            </div>

            <div className={s.ctaRow}>
              <TrackedCTA
                href="https://wa.me/6285732740006"
                className={s.btnPrimary}
                productName="Jasa Kontraktor - Hero"
              >
                💬 Konsultasi Gratis Sekarang
              </TrackedCTA>
              <a href="#portfolio" className={s.btnSecondary}>
                👁 Lihat Portfolio
              </a>
            </div>

            <div className={s.statsRow}>
              {[
                { num: '4.9', label: 'Rating Google ★' },
                { num: '200+', label: 'Proyek Selesai' },
                { num: '10+', label: 'Tahun Pengalaman' },
                { num: '500+', label: 'Klien Puas' },
              ].map((stat) => (
                <div key={stat.label} className={s.stat}>
                  <span className={s.statNum}>{stat.num}</span>
                  <span className={s.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className={`${s.section} ${s.painSection}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Sering Terjadi Saat Bangun Rumah Pertama Kali?</h2>
            <div className={s.painGrid}>
              {[
                { icon: '💰', title: 'Budget Membengkak', desc: 'Estimasi awal tidak detail, biaya material naik di tengah jalan, pekerjaan tambah-tambah tanpa hitungan.' },
                { icon: '🔄', title: 'Desain Berubah Terus', desc: 'Bangun setengah jalan baru sadar tata ruang tidak sesuai kebutuhan, akhirnya bongkar pasang — buang waktu & uang.' },
                { icon: '🧱', title: 'Material Tidak Sesuai', desc: 'Tukang pakai material asal-asalan atau tidak sesuai spek karena tidak ada pengawasan dari ahlinya.' },
                { icon: '⏰', title: 'Waktu Pengerjaan Molor', desc: 'Janji 3 bulan jadi 6 bulan. Tidak ada jadwal kerja yang jelas, progress tidak terukur.' },
              ].map((p) => (
                <div key={p.title} className={s.painCard}>
                  <div className={s.painIcon}>{p.icon}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
            <div className={s.solutionBox}>
              {[
                'Konsep desain matang sebelum bangun — semua detail sudah diputuskan sejak awal',
                'RAB detail per item pekerjaan — Anda tahu persis alokasi dana dari awal',
                'Gambar kerja lengkap untuk acuan tukang di lapangan',
                'Pendampingan & monitoring proyek secara berkala',
              ].map((item) => (
                <div key={item} className={s.solutionItem}>
                  <span className={s.solutionCheck}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Biaya Jasa Desain Arsitektur</h2>
            <p className={s.sectionSub}>Harga bersahabat dengan kualitas terbaik. Jika tim kami yang bangun, desain GRATIS.</p>
            <div className={s.pricingGrid}>
              {[
                {
                  name: 'Gambar Kerja (DED)',
                  price: 'Rp28.000',
                  unit: '/m²',
                  desc: 'Gambar arsitektur, struktur, ME lengkap untuk acuan pembangunan & IMB.',
                  features: ['Denah & Tampak', 'Potongan & Detail', 'Sistem Struktur & ME', 'Spesifikasi Material'],
                  popular: false,
                },
                {
                  name: 'RAB Bangunan',
                  price: 'Rp1,2 Juta',
                  unit: '/paket',
                  desc: 'RAB terperinci per item pekerjaan — Anda tahu persis alokasi dana.',
                  features: ['Volume & Analisa Harga', 'Rekapitulasi Per Item', 'Rekap Per Sub Pekerjaan', 'Rekomendasi Efisiensi'],
                  popular: false,
                },
                {
                  name: 'Visual 3D Realistis',
                  price: 'Rp1,2 Juta',
                  unit: '/paket',
                  desc: 'Visualisasi 3D foto-realistis interior & eksterior — lihat hasil akhir sebelum bangun.',
                  features: ['Eksterior 360°', 'Interior Per Ruangan', 'Material & Tekstur Realistis', 'Revisi Sampai Puas'],
                  popular: true,
                },
                {
                  name: 'Konsultasi Awal',
                  price: 'GRATIS',
                  unit: '',
                  desc: 'Diskusi kebutuhan, lokasi, & budget tanpa biaya. Jika kami yang kerjakan, desain GRATIS.',
                  features: ['Diskusi Via WA/Telepon', 'Estimasi Budget Awal', 'Rekomendasi Konsep', 'Survey Lokasi'],
                  popular: false,
                },
              ].map((pkg) => (
                <div key={pkg.name} className={`${s.pricingCard} ${pkg.popular ? s.popularBadge ? '' : '' : ''}`} style={pkg.popular ? { borderColor: 'var(--orange)' } : {}}>
                  {pkg.popular && <div className={s.popularBadge}>PALING LARIS</div>}
                  <div className={s.pricingName}>{pkg.name}</div>
                  <div className={s.pricingDesc}>{pkg.desc}</div>
                  <div className={s.pricingPrice}>{pkg.price}</div>
                  {pkg.unit && <div className={s.pricingUnit}>{pkg.unit}</div>}
                  <ul className={s.pricingFeatures}>
                    {pkg.features.map((f) => (
                      <li key={f}><span className={s.pricingCheck}>✓</span> {f}</li>
                    ))}
                  </ul>
                  <TrackedCTA
                    href="https://wa.me/6285732740006"
                    className={s.btnPrimary}
                    productName={`Jasa Kontraktor - ${pkg.name}`}
                  >
                    Konsultasi Sekarang
                  </TrackedCTA>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`${s.section} ${s.painSection}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Aman & Transparan Bangun Rumah Bersama Kami</h2>
            <div className={s.whyGrid}>
              {[
                { icon: '📐', title: 'Gambar Kerja Detail', desc: 'Tukang tidak menebak-nebak. Semua ukuran, material, & spesifikasi tertuang dalam gambar kerja lengkap.' },
                { icon: '📊', title: 'RAB Kontrol Biaya', desc: 'Setiap pos pekerjaan dianggarkan detail — Anda tahu persis alokasi dana dari awal tanpa biaya mendadak.' },
                { icon: '📱', title: 'Update Progress Berkala', desc: 'Laporan mingguan via WhatsApp berupa foto, video, & persentase progres. Anda pantau dari mana saja.' },
                { icon: '🤝', title: 'Satu Tim — Desain ke Pembangunan', desc: 'Arsitek, engineer, & pelaksana dalam satu koordinasi. Tidak ada lempar tanggung jawab antar vendor.' },
              ].map((w) => (
                <div key={w.title} className={s.whyCard}>
                  <div className={s.whyIcon}>{w.icon}</div>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Solusi Bangunan & Desain Lengkap</h2>
            <p className={s.sectionSub}>Dari konsep hingga pembangunan — kami hadir sebagai mitra terpercaya untuk setiap proyek konstruksi & desain Anda.</p>
            <div className={s.grid3}>
              {[
                { icon: '📐', title: 'Jasa Desain Arsitektur', tagline: 'Mulai Rp28.000/m²', features: ['Gambar Kerja Lengkap (DED)', 'Visualisasi 3D Realistis', 'RAB Detail & Transparan', 'Revisi Desain Fleksibel'] },
                { icon: '🏗️', title: 'Konstruksi & Renovasi', tagline: 'Mulai Rp2.7 Juta/m²', features: ['Bangun Rumah Baru & Renovasi', 'Pembuatan Tangga & Struktur', 'Pondasi, Atap, & Dinding', 'Tim Profesional, Tepat Waktu'] },
                { icon: '🛋', title: 'Interior & Furniture', tagline: 'Harga menyesuaikan', features: ['Desain Interior 3D Realistis', 'Interior Rumah, Kantor, Cafe', 'Furniture Custom', 'Konsultasi Konsep & Gaya'] },
              ].map((svc) => (
                <div key={svc.title} className={s.card}>
                  <div className={s.cardIcon}>{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p style={{ color: 'var(--orange)', fontWeight: 600, marginBottom: '0.75rem' }}>{svc.tagline}</p>
                  <ul className={s.pricingFeatures}>
                    {svc.features.map((f) => (
                      <li key={f}><span className={s.pricingCheck}>✓</span> {f}</li>
                    ))}
                  </ul>
                  <TrackedCTA
                    href="https://wa.me/6285732740006"
                    className={s.btnPrimary}
                    productName={`Jasa Kontraktor - ${svc.title}`}
                  >
                    Konsultasi Sekarang
                  </TrackedCTA>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={s.finalCta}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Siap Bangun Rumah Impian?</h2>
            <p className={s.sectionSub}>
              Konsultasi awal GRATIS tanpa syarat. Diskusikan kebutuhan, lokasi, dan budget Anda dengan tim kami.
            </p>
            <div className={s.ctaRow}>
              <TrackedCTA
                href="https://wa.me/6285732740006"
                className={s.btnPrimary}
                productName="Jasa Kontraktor - Final CTA"
              >
                💬 Konsultasi Gratis Sekarang
              </TrackedCTA>
            </div>
            <div className={s.trustStrip}>
              <span>⭐ 4.9/5 dari 200+ ulasan Google</span>
              <span>🏆 200+ Proyek Selesai</span>
              <span>🤝 500+ Klien Puas</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
