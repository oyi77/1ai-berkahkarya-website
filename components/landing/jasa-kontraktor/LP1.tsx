'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import s from './LP1.module.css';
import TrackedCTA from '../TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

const FAQ_ITEMS = [
  {
    q: 'Berapa biaya untuk bangun rumah?',
    a: 'Biaya tergantung luas bangunan, spesifikasi material, dan lokasi. Tim kami memberikan estimasi awal GRATIS setelah diskusi singkat mengenai kebutuhan Anda. Konsultasi tidak mengikat — tidak ada kewajiban untuk lanjut.',
  },
  {
    q: 'Kenapa harga kami berbeda dengan kontraktor lain?',
    a: 'Kami transparan dari awal — RAB detail per item pekerjaan. Tidak ada biaya tersembunyi. Jika ada kontraktor yang lebih murah, pastikan scope pekerjaannya sama persis. Kami utamakan kualitas & kepuasan jangka panjang, bukan harga murah yang berujung pembengkakan.',
  },
  {
    q: 'Kenapa harus gambar kerja dulu sebelum bangun?',
    a: 'Gambar kerja adalah acuan tukang di lapangan. Tanpa gambar kerja, ukuran & spesifikasi hanya perkiraan — risiko kesalahan & pembengkakan biaya sangat tinggi. Dengan gambar kerja, Anda bisa yakin hasil akhir sesuai rencana & tidak ada biaya mendadak.',
  },
  {
    q: 'Apakah konsultasi bisa online?',
    a: 'Tentu! Konsultasi awal bisa via WhatsApp atau video call. Kami diskusikan kebutuhan, lokasi, dan budget Anda. Setelah itu kami siapkan estimasi & rekomendasi konsep — semua dari rumah Anda tanpa perlu datang ke kantor.',
  },
  {
    q: 'Apakah ada revisi desain?',
    a: 'Tentu ada. Sebelum pembangunan dimulai, kami memberikan 3D render & gambar kerja untuk Anda review. Revisi bisa dilakukan sampai Anda benar-benar puas. Setelah semua fix, baru kami eksekusi di lapangan — tidak ada biaya revisi membengkak di tengah jalan.',
  },
  {
    q: 'Berapa lama proses bangun rumah?',
    a: 'Waktu pengerjaan tergantung luas & kompleksitas. Rumah 1 lantai 3-4 bulan, 2 lantai 4-6 bulan, renovasi 1-3 bulan. Tim kami selalu memberikan timeline detail di awal dan update progress mingguan — Anda tahu persis kapan selesai.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Budi Santoso', role: 'Pemilik Rumah, Jakarta Selatan',
    initials: 'BS',
    text: 'Rumah 2 lantai 250m² selesai sesuai timeline walau sempat ragu karena pengalaman pertama. RAB-nya detail — tidak ada biaya mendadak. Hasilnya sesuai render 3D.',
  },
  {
    name: 'Siti Rahmawati', role: 'Owner Kafe, Bandung',
    initials: 'SR',
    text: 'Desain interior kafe dibuat sangat detail. Suasananya jadi jauh lebih nyaman, pengunjung betah berlama-lama, omzet naik 30% dalam 3 bulan pertama.',
  },
  {
    name: 'Andi Pratama', role: 'Direktur PT. Maju Jaya',
    initials: 'AP',
    text: 'Kantor baru 3 lantai selesai dalam 4 bulan. Kualitas pengerjaan rapi, tim sangat komunikatif, dan progress selalu dilaporkan mingguan. Profesional banget.',
  },
  {
    name: 'Dewi Lestari', role: 'Ibu Rumah Tangga, Surabaya',
    initials: 'DL',
    text: 'Terima kasih BerkahKarya! Awalnya takut renovasi molor & berantakan, tapi ternyata selesai 2 minggu lebih cepat. Desainnya persis seperti yang saya bayangkan.',
  },
  {
    name: 'Rudi Hermawan', role: 'Pengusaha, Semarang',
    initials: 'RH',
    text: 'Pagar & kanopi rumah kokoh & elegan. Yang paling saya suka, mereka kasih saran material sesuai budget tanpa maksa pake yang mahal. Harga bersahabat.',
  },
  {
    name: 'Mega Putri', role: 'Arsitek Mitra, Yogyakarta',
    initials: 'MP',
    text: 'Kolaborasi dengan tim BerkahKarya sangat menyenangkan. Detail-oriented, tepat janji, dan selalu prioritasin kualitas. Recommended untuk kolega.',
  },
];
const PACKAGES = [
  {
    icon: '\u{1F4D0}',
    image: '/images/jasa-kontraktor/desain-1.webp',
    name: 'Gambar Kerja (DED)',
    price: 'Rp28.000 /m\u00B2',
    desc: 'Detail Engineering Design lengkap — acuan utama untuk pembangunan & pengurusan IMB. 22+ lembar gambar teknis mencakup semua detail dari pondasi hingga atap, berdasarkan standar proyek sesungguhnya.',
    features: [
      '22+ Lembar Gambar Kerja DED Lengkap',
      'Denah & Tampak Bangunan',
      'Potongan, Detail Struktur & Tulangan',
      'Sistem ME (Mekanikal Elektrikal) & Plumbing',
    ],
  },
  {
    icon: '\u{1F4CA}',
    image: '/images/jasa-kontraktor/konstruksi-gedung.webp',
    name: 'Rencana Anggaran Biaya (RAB)',
    price: 'Rp1,2 Juta /paket',
    desc: 'RAB terperinci per item pekerjaan dengan 10 kategori & 24 sub-pekerjaan — seperti proyek riil kami. Anda tahu persis alokasi dana untuk setiap pos. Tidak ada biaya mendadak.',
    features: [
      'Volume & Analisa Harga Satuan',
      'Rekapitulasi Per Item Pekerjaan',
      'Rekap Per Kategori Pekerjaan (10 Grup)',
      'Rekomendasi Efisiensi Budget',
    ],
  },
  {
    icon: '\u{1F3A8}',
    image: '/images/jasa-kontraktor/interior-premium.webp',
    name: 'Visual 3D Realistis',
    price: 'Rp1,2 Juta /paket',
    desc: 'Visualisasi 3D foto-realistis interior & eksterior — lihat hasil akhir rumah Anda sebelum bangun. Revisi sampai puas. Material & tekstur sesuai spesifikasi asli proyek.',
    features: [
      'Eksterior 360\u00B0 dari Berbagai Sisi',
      'Interior Per Ruangan Detail',
      'Material & Tekstur Realistis',
      'Revisi Sampai Anda Puas',
    ],
  },
  {
    icon: '\u{1F3E0}',
    image: '/images/jasa-kontraktor/kanopi-pagar.webp',
    name: 'Paket Lengkap (Desain + RAB + 3D)',
    price: 'Mulai Rp2,5 Juta',
    desc: 'Dapatkan gambar kerja (22+ lembar), RAB detail (10 kategori), dan visual 3D dalam satu paket hemat. Jika tim kami yang bangun, desain GRATIS!',
    features: [
      '22+ Lembar Gambar Kerja DED Lengkap',
      'RAB Detail 10 Kategori Pekerjaan',
      'Visual 3D Interior & Eksterior',
      'GRATIS Desain Jika Kami Yang Bangun',
    ],
  },
];

const RAB_CATEGORIES = [
  { label: 'Pekerjaan Dinding', pct: 28.1, color: 'dinding', amount: 'Rp 115.905.264' },
  { label: 'Pekerjaan Pondasi', pct: 11.9, color: 'pondasi', amount: 'Rp 49.106.391' },
  { label: 'Pekerjaan Lantai', pct: 8.5, color: 'lantai', amount: 'Rp 35.254.265' },
  { label: 'Pekerjaan Atap', pct: 8.3, color: 'atap', amount: 'Rp 34.363.277' },
  { label: 'Pekerjaan Finishing', pct: 7.6, color: 'finishing', amount: 'Rp 31.304.626' },
  { label: 'Persiapan', pct: 3.0, color: 'persiapan', amount: 'Rp 12.363.180' },
  { label: 'Pekerjaan Plafond', pct: 1.7, color: 'plafond', amount: 'Rp 7.199.900' },
  { label: 'Pekerjaan Beton', pct: 1.0, color: 'beton', amount: 'Rp 4.298.590' },
  { label: 'Pekerjaan Instalasi', pct: 0.9, color: 'instalasi', amount: 'Rp 3.902.630' },
  { label: 'Pekerjaan Eksterior', pct: 2.1, color: 'eksterior', amount: 'Rp 8.526.500' },
  { label: 'Overhead & Profit', pct: 13.3, color: 'overhead', amount: 'Rp 54.856.230' },
  { label: 'Pajak (PPN)', pct: 9.9, color: 'ppn', amount: 'Rp 40.968.942' },
  { label: 'Contingency', pct: 7.0, color: 'cont', amount: 'Rp 28.871.700' },
  { label: 'Alat', pct: 0.1, color: 'alat', amount: 'Rp 451.145' },
];

const TOP5 = [
  { rank: 1, name: 'Pasang Dinding Bata Ringan AAC 10cm', price: 'Rp 79.191.087' },
  { rank: 2, name: 'Pasang Pondasi Batu Kali 1:3:10', price: 'Rp 49.106.391' },
  { rank: 3, name: 'Plesteran Dinding 1PC:3KP t=15mm', price: 'Rp 47.864.880' },
  { rank: 4, name: 'Pasang Keramik Lantai Granit Tile 60x60', price: 'Rp 28.787.394' },
  { rank: 5, name: 'Penutup Atap Genteng Beton Flat', price: 'Rp 26.364.000' },
];

const MATERIALS = [
  { icon: '\u{1F3F7}\uFE0F', name: 'Bata Ringan AAC', spec: '60x20x10cm — 8-9 bh/m\u00B2, mortar instan, cepat & rapi' },
  { icon: '\u{1F3AA}', name: 'Granit Tile', spec: '60x60 & 60x120 cm — Travertine finish, kesan mewah' },
  { icon: '\u{26A1}', name: 'Rangka Atap Baja Ringan', spec: 'KK Baja Ringan, reng, genteng beton flat — kokoh & ringan' },
  { icon: '\u{1F6A7}', name: 'Pondasi Batu Kali', spec: '1PC:3KP:10PS — footplate & pondasi menerus, kedalaman 1.5m' },
  { icon: '\u{1F4CB}', name: 'Kusen Aluminium 4"', spec: 'Powder coating finish, kaca bening 5mm, sliding & swing' },
  { icon: '\u{1F3E0}', name: 'Plafond Gypsum', spec: '9mm gypsum board, rangka hollow galvanis 20x40' },
  { icon: '\u{1F6B0}', name: 'Plumbing', spec: 'Pipa PVC Ø\u00BE" — 3", air bersih & kotor, septik tank + resapan' },
  { icon: '\u{1F4A1}', name: 'Instalasi Listrik', spec: 'Titik lampu downlight, saklar, stop kontak, panel MCB 2.200 VA' },
];

const WORK_10 = [
  { phase: 'I', cat: 'Persiapan', items: 'Pembersihan, Bouwplank, Galian, Urugan', cost: 'Rp 12,4 Juta' },
  { phase: 'II', cat: 'Struktur Pondasi', items: 'Pondasi Batu Kali, Sloof 15x20', cost: 'Rp 44,6 Juta' },
  { phase: 'III', cat: 'Struktur Beton', items: 'Kolom K1/KP 12x12, Ring Balok 15x20', cost: 'Rp 4,3 Juta' },
  { phase: 'IV', cat: 'Dinding', items: 'Bata Ringan AAC 10cm, Plester, Acian', cost: 'Rp 115,9 Juta' },
  { phase: 'V', cat: 'Atap', items: 'Rangka Baja Ringan, Genteng Beton Flat', cost: 'Rp 36,7 Juta' },
  { phase: 'VI', cat: 'Lantai', items: 'Granit Tile 60x60, Keramik Kasar, Batu Alam', cost: 'Rp 23,9 Juta' },
  { phase: 'VII', cat: 'Plafond', items: 'Rangka Hollow, Gypsum 9mm', cost: 'Rp 7,2 Juta' },
  { phase: 'VIII', cat: 'Finishing', items: 'Cat, Kusen Aluminium, Pintu Jati, Closet', cost: 'Rp 31,3 Juta' },
  { phase: 'IX', cat: 'Instalasi', items: 'Titik Lampu, Pipa Air Bersih', cost: 'Rp 3,9 Juta' },
  { phase: 'X', cat: 'Eksterior', items: 'Septik Tank & Resapan', cost: 'Rp 8,5 Juta' },
];

const PROCESS = [
  { icon: '\u{1F9F1}', title: 'Konsultasi & Brief', desc: 'Diskusi kebutuhan, gaya arsitektur, luas & anggaran awal. Gratis, tanpa komitmen.' },
  { icon: '\u{1F4D0}', title: 'Survei Lokasi', desc: 'Tim engineer & surveyor ukur lahan, cek kondisi tanah & akses bangunan.' },
  { icon: '\u{1F3A8}', title: 'Desain & Gambar Kerja', desc: '22+ lembar DED — denah, potongan, detail struktur, ME, plumbing. Siap IMB.' },
  { icon: '\u{1F4CA}', title: 'RAB & Rencana Anggaran', desc: 'Perhitungan volume & biaya per 10 kategori pekerjaan, analisa harga satuan.' },
  { icon: '\u{1F3AA}', title: 'Visual 3D Realistis', desc: 'Preview eksterior & interior — lihat hasil akhir rumah Anda sebelum bangun.' },
  { icon: '\u{1F4DF}', title: 'Kontrak & Perizinan', desc: 'MoU, timeline, pembayaran bertahap. Bantuan pengurusan IMB jika diperlukan.' },
  { icon: '\u{1F3D7}\uFE0F', title: 'Pelaksanaan & Progress', desc: 'Tahap I (Persiapan) s.d. X (Eksterior). Laporan progress mingguan via WA.' },
  { icon: '\u{270F}\uFE0F', title: 'Quality Control', desc: 'Pengawasan ketat di tiap tahap — material sesuai spek, pengerjaan rapi.' },
  { icon: '\u{1F3E0}', title: 'Finishing & Serah Terima', desc: 'Pembersihan, pengecekan seluruh fungsi, serah terima kunci & dokumen.' },
  { icon: '\u{1F389}', title: 'Garansi & Aftercare', desc: 'Garansi 6 bulan untuk finishing, 1 tahun untuk struktur. Konsultasi gratis seumur hidup.' },
];

const PORTFOLIO = [
  { src: '/images/jasa-kontraktor/rumah-modern-1.webp', label: 'Rumah Modern Minimalis', sub: 'Jakarta Selatan — 2 Lantai, 250 m\u00B2' },
  { src: '/images/jasa-kontraktor/interior-cafe-1.webp', label: 'Interior Kafe Industrial', sub: 'Bandung — 60 m\u00B2, Konsep Industrial' },
  { src: '/images/jasa-kontraktor/kantor-3lt-1.webp', label: 'Kantor 3 Lantai', sub: 'Jakarta Timur — 600 m\u00B2, Gedung Perkantoran' },
  { src: '/images/jasa-kontraktor/rumah-renovasi-1.webp', label: 'Renovasi Rumah Tua', sub: 'Surabaya — 150 m\u00B2, Renovasi Total' },
  { src: '/images/jasa-kontraktor/rumah-tropis-1.webp', label: 'Rumah Tropis Modern', sub: 'Jombang — 1 Lantai, 167 m\u00B2' },
  { src: '/images/jasa-kontraktor/toko-1.webp', label: 'Interior Toko Modern', sub: 'Surabaya — 30 m\u00B2, Retail Minimalis' },
  { src: '/images/jasa-kontraktor/hotel-1.webp', label: 'Interior Hotel Butik', sub: 'Malang — 8 Kamar, Klasik Modern' },
  { src: '/images/jasa-kontraktor/mall-1.webp', label: 'Interior Pusat Perbelanjaan', sub: 'Jakarta — 200 m\u00B2, Area Tenant' },
  { src: '/images/jasa-kontraktor/kantor-interior.webp', label: 'Desain Interior Kantor', sub: 'Bandung — 150 m\u00B2, Open Space' },
  { src: '/images/jasa-kontraktor/rumah-interior-1.webp', label: 'Interior Rumah Tinggal', sub: 'Surabaya — 200 m\u00B2, Keluarga' },
  { src: '/images/jasa-kontraktor/tangga-1.webp', label: 'Tangga Minimalis Modern', sub: 'Jakarta — Beton Ekspos, Railing Kaca' },
  { src: '/images/jasa-kontraktor/cafe-interior.webp', label: 'Interior Cafe & Resto', sub: 'Bandung — 80 m\u00B2, Konsep Rustic' },
];

const WHY = [
  {
    icon: '\u{1F468}\u200D\u{1F3EB}',
    title: 'Tim Profesional & Berpengalaman',
    desc: 'Arsitek, engineer sipil, & pelaksana dalam satu tim — lebih dari 200 proyek telah kami selesaikan dengan hasil memuaskan.',
  },
  {
    icon: '\u{1F4B0}',
    title: 'Biaya Transparan — Tidak Ada Biaya Mendadak',
    desc: 'RAB detail per item pekerjaan dengan volume & harga satuan. Anda tahu persis alokasi dana dari awal hingga akhir.',
  },
  {
    icon: '\u{1F4CB}',
    title: 'Gambar Kerja Lengkap (22+ Lembar)',
    desc: 'DED profesional siap IMB — denah, potongan, detail struktur, ME, plumbing. Tidak ada tebak-tebakan di lapangan.',
  },
  {
    icon: '\u{1F3D7}\uFE0F',
    title: 'Progress Terpantau — Laporan Mingguan',
    desc: 'Update progress via WhatsApp setiap minggu, dokumentasi foto tiap tahap. Anda bisa pantau dari mana saja.',
  },
  {
    icon: '\u{1F4B8}',
    title: 'Harga Bersaing, Bisa Bertahap',
    desc: 'Sistem pembayaran termin disesuaikan progress proyek. Tidak perlu bayar lunas di awal — lebih nyaman di kantong.',
  },
  {
    icon: '\u{1F6E1}\uFE0F',
    title: 'Garansi & Aftercare',
    desc: 'Garansi 6 bulan finishing, 1 tahun struktur. Konsultasi gratis seumur hidup — kami tetap ada meski proyek selesai.',
  },
  {
    icon: '\u{1F3C6}',
    title: '100% Sesuai Gambar — Tidak Ada Perubahan Sepihak',
    desc: 'Semua perubahan dikomunikasikan & disetujui dulu. Hasil akhir sesuai dengan apa yang sudah Anda setujui di awal.',
  },
  {
    icon: '\u{1F30D}',
    title: 'Melayani Berbagai Skala Proyek',
    desc: 'Dari renovasi rumah, kafe, kantor, hingga bangun rumah baru & gedung komersial. Semua dikerjakan dengan standar yang sama.',
  },
];

export default function JasaKontraktorLP1({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Jasa Kontraktor - LP1 (Redesign)', '0', 'jasa-kontraktor-lp1');
  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const services = [
    { icon: '\u{1F3E0}', label: 'Bangun Rumah' },
    { icon: '\u{1F3E2}', label: 'Bangun Kantor' },
    { icon: '\u{1F6E0}\uFE0F', label: 'Renovasi' },
    { icon: '\u{1F4D0}', label: 'Desain Rumah' },
    { icon: '\u{1F6CF}\uFE0F', label: 'Interior' },
    { icon: '\u{26FA}', label: 'Kanopi' },
    { icon: '\u{1F6A8}', label: 'Pagar & Railing' },
    { icon: '\u{1F4CA}', label: 'RAB Bangunan' },
  ];

  return (
    <Layout
      title="Jasa Kontraktor Profesional — Desain Rumah, Kantor, Gedung | BerkahKarya"
      description="Jasa kontraktor & desain bangunan profesional: rumah, kantor, hotel, mall, interior, kanopi, pagar, RAB. Gratis konsultasi! Hubungi WhatsApp."
    >
      <div className={s.wrapper}>
        {/* ═══ HERO ═══ */}
        <section className={s.hero}>
          <div className={s.container}>
            <div className={s.badge}>
              <span className={s.badgeDot} />
              KONTRAKTOR & DESAIN TERPERCAYA — 200+ PROYEK SELESAI
            </div>
            <h1 className={s.title}>
              Bangun Rumah, Renovasi & Interior{' '}
              <span className={s.solidAccent}>Tanpa Ribet</span>
              <br />
              <span className={s.gradientAccent}>Satu Tim Profesional</span>
            </h1>
            <p className={s.subtitle}>
              Dari gambar kerja, RAB, visual 3D hingga pembangunan — semua kebutuhan proyek Anda
              ditangani tim arsitek & engineer dalam satu tempat. Proses lebih terarah, biaya
              transparan, hasil maksimal.
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
                {'\u{1F4AC}'} Konsultasi Gratis Sekarang
              </TrackedCTA>
              <a href="#package-design" className={s.btnSecondary}>
                {'\u{1F440}'} Lihat Contoh Paket Desain
              </a>
            </div>

            <div className={s.statsRow}>
              <div className={s.stat}>
                <span className={s.statNum}>4.9</span>
                <span className={s.statLabel}>Rating Google {'\u2605'}</span>
              </div>
              <div className={s.stat}>
                <span className={s.statNum}>200+</span>
                <span className={s.statLabel}>Proyek Selesai</span>
              </div>
              <div className={s.stat}>
                <span className={s.statNum}>10+</span>
                <span className={s.statLabel}>Tahun Pengalaman</span>
              </div>
              <div className={s.stat}>
                <span className={s.statNum}>500+</span>
                <span className={s.statLabel}>Klien Puas</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PAIN POINTS ═══ */}
        <section className={`${s.section} ${s.painSection}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              Sering Terjadi Saat{' '}
              <span className={s.solidAccent}>Bangun Rumah Pertama Kali?</span>
            </h2>
            <p className={s.sectionSub}>
              Tanpa perencanaan matang, biaya mudah membengkak & waktu molor. Kenali risikonya
              sebelum Anda mulai.
            </p>
            <div className={s.painGrid}>
              {[
                {
                  icon: '\u{1F4B0}',
                  desc: 'Estimasi awal tidak detail, biaya material naik di tengah jalan. Contoh nyata: dinding bata ringan AAC + plester + acian untuk rumah 1 lantai bisa mencapai Rp 127+ JUTA — tanpa RAB detail, Anda baru tahu saat tagihan datang.',
                },
                {
                  icon: '\u{1F504}',
                  title: 'Desain Berubah Terus',
                  desc: 'Bangun setengah jalan baru sadar tata ruang tidak sesuai, akhirnya bongkar pasang — buang waktu & uang.',
                },
                {
                  icon: '\u{1F9F1}',
                  desc: 'Tukang pakai material asal-asalan tanpa pengawasan ahli. Bata ringan AAC, granit tile 60×60, baja ringan, kusen aluminium 4" powder coating — semua ada standar spesifikasinya yang harus diikut.',
                },
                {
                  icon: '\u23F0',
                  title: 'Waktu Pengerjaan Molor',
                  desc: 'Janji 3 bulan jadi 6 bulan. Tidak ada jadwal kerja jelas. Proyek rumah 1 lantai ideal 3–4 bulan, 2 lantai 4–6 bulan — tanpa timeline & milestone pasti, risiko molor sangat tinggi.',
                },
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
                'Konsep desain matang sebelum bangun — semua detail diputuskan sejak awal',
                'RAB detail per item pekerjaan — Anda tahu persis alokasi dana',
                'Gambar kerja lengkap untuk acuan tukang di lapangan',
                'Pendampingan & monitoring proyek secara berkala',
              ].map((item) => (
                <div key={item} className={s.solutionItem}>
                  <span className={s.solutionCheck}>{'\u2713'}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PACKAGE DESIGN SHOWCASE ═══ */}
        <section id="package-design" className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              Contoh Paket Desain{' '}
              <span className={s.gradientAccent}>Bangunan Profesional</span>
            </h2>
            <p className={s.sectionSub}>
              Pilih paket sesuai kebutuhan Anda. Semua dirancang untuk memastikan proyek Anda
              berjalan lancar, biaya terkontrol, hasil maksimal — tanpa over-budget.
            </p>
            <div className={s.packageGrid}>
              {PACKAGES.map((pkg) => (
                <div key={pkg.name} className={s.packageCard}>
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className={s.packageImage}
                    loading="lazy"
                  />
                  <div className={s.packageContent}>
                    <div className={s.packageIcon}>{pkg.icon}</div>
                    <div className={s.packageName}>{pkg.name}</div>
                    <div className={s.packagePrice}>{pkg.price}</div>
                    <p className={s.packageDesc}>{pkg.desc}</p>
                    <ul className={s.packageFeatures}>
                      {pkg.features.map((f) => (
                        <li key={f}>
                          <span className={s.packageCheck}>{'\u2713'}</span> {f}
                        </li>
                      ))}
                    </ul>
                    <TrackedCTA
                      href="https://wa.me/6285732740006"
                      className={s.btnPrimary}
                      productName={`Jasa Kontraktor - ${pkg.name}`}
                    >
                      {'\u{1F4AC}'} Konsultasi Sekarang
                    </TrackedCTA>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PROCESS ═══ */}
        <section className={`${s.section} ${s.sectionDark}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              Panduan Bangun Rumah{' '}
              <span className={s.solidAccent}>Langkah demi Langkah</span>
            </h2>
            <p className={s.sectionSub}>
              Kami memandu Anda dari nol hingga rumah impian selesai. Proses transparan, biaya
              terkontrol, hasil sesuai harapan.
            </p>
            <div className={s.processGrid}>
              {PROCESS.map((step, i) => (
                <div key={step.title} className={s.processCard}>
                  <div className={s.processNum}>{i + 1}</div>
                  <div className={s.processIcon}>{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PORTFOLIO ═══ */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              Karya Terbaik{' '}
              <span className={s.gradientAccent}>Kami</span>
            </h2>
            <p className={s.sectionSub}>
              Setiap proyek adalah bukti komitmen kami terhadap kualitas, ketepatan, & kepuasan
              klien.
            </p>
            <div className={s.portfolioGrid}>
              {PORTFOLIO.map((item) => (
                <div key={item.label} className={s.portfolioItem}>
                  <img
                    src={item.src}
                    alt={item.label}
                    loading="lazy"
                  />
                  <div className={s.portfolioOverlay}>
                    <span className={s.portfolioLabel}>{item.label}</span>
                    <span className={s.portfolioSub}>{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHY CHOOSE US ═══ */}
        <section className={`${s.section} ${s.sectionDark}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              Kenapa Harus{' '}
              <span className={s.solidAccent}>BerkahKarya Kontraktor?</span>
            </h2>
            <p className={s.sectionSub}>
              Kami tidak hanya membangun — kami memastikan Anda paham & nyaman di setiap tahap.
            </p>
            <div className={s.whyGrid}>
              {WHY.map((item) => (
                <div key={item.title} className={s.whyCard}>
                  <div className={s.whyIcon}>{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══ RAB BREAKDOWN ═══ */}
        <section className={`${s.section} ${s.sectionDark}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              RAB Realistis{' '}
              <span className={s.solidAccent}>Rp 413 Juta</span>
            </h2>
            <p className={s.sectionSub}>
              Ini bukan perkiraan asal — ini data proyek riil kami, Rumah Tinggal 1 Lantai
              (167 m&sup2;) di Pagerwojo, Jombang. 10 kategori pekerjaan, 24 sub-pekerjaan,
              transparan penuh agar Anda tidak over-budget.
            </p>

            <div className={s.rabTotal}>
              <div className={s.rabTotalValue}>
                Rp 413.415.366
                <span>Total Anggaran Biaya (RAB)</span>
              </div>
              <div className={s.rabTotalSub}>
                Rumah Tinggal 1 Lantai — Luas 167 m&sup2; — 10 Kategori Pekerjaan
              </div>
            </div>

            <div className={s.rabGrid}>
              <div className={s.rabBreakdownGroup}>
                <h3>Rincian Biaya</h3>
                {RAB_CATEGORIES.map((cat) => (
                  <div key={cat.label} className={s.rabRow}>
                    <div className={s.rabRowLabel}>
                      <span>{cat.label}</span>
                      <span>{cat.amount} ({cat.pct}%)</span>
                    </div>
                    <div className={s.rabRowBar}>
                      <div
                        className={`${s.rabRowFill} ${s[cat.color]}`}
                        style={{ width: `${cat.pct * 2.5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className={s.rabParetoGroup}>
                <h3>5 Item Pekerjaan Termahal</h3>
                <div className={s.rabParetoList}>
                  {TOP5.map((item) => (
                    <div key={item.rank} className={s.rabParetoItem}>
                      <div className={s.rabParetoRank}>#{item.rank}</div>
                      <div className={s.rabParetoInfo}>
                        <div className={s.rabParetoName}>{item.name}</div>
                        <div className={s.rabParetoPrice}>{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={s.rabNote}>
                  * Harga material, upah, & overhead disesuaikan dengan kondisi pasar
                  daerah setempat. Dapat berubah sesuai lokasi & spesifikasi.
                  <strong> Dapatkan RAB detail untuk proyek Anda!</strong>
                </div>
              </div>
            </div>

            <div className={s.ctaRow}>
              <TrackedCTA
                href="https://wa.me/6285732740006?text=Halo%20BerkahKarya%20Kontraktor%20-%20saya%20minta%20contoh%20RAB%20lengkap%20seperti%20proyek%20Rp%20413%20juta.%20Terima%20kasih."
                className={s.btnPrimary}
                productName="Jasa Kontraktor - RAB Contoh"
              >
                {'\u{1F4AC}'} Minta Contoh RAB Lengkap
              </TrackedCTA>
            </div>
          </div>
        </section>
        {/* ═══ MATERIAL SPECS ═══ */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              Spesifikasi Material{' '}
              <span className={s.gradientAccent}>Standar Proyek</span>
            </h2>
            <p className={s.sectionSub}>
              Setiap material kami pilih berdasarkan standar SNI, ketahanan jangka panjang, & hasil
              akhir yang memuaskan. Ini spesifikasi yang kami gunakan di proyek riil kami.
            </p>
            <div className={s.matGrid}>
              {MATERIALS.map((m) => (
                <div key={m.name} className={s.matCard}>
                  <div className={s.matIcon}>{m.icon}</div>
                  <div className={s.matName}>{m.name}</div>
                  <div className={s.matSpec}>{m.spec}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WORK TIMELINE ═══ */}
        <section className={`${s.section} ${s.sectionDark}`}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              10 Kategori{' '}
              <span className={s.solidAccent}>Pekerjaan</span>
            </h2>
            <p className={s.sectionSub}>
              Dari Persiapan hingga Eksterior — setiap tahap dikerjakan dengan standar kualitas
              tinggi & pengawasan ketat. Anda tahu apa yang dikerjakan & berapa biayanya.
            </p>
            <div className={s.timeline}>
              <div className={s.timelineGrid}>
                {WORK_10.map((w) => (
                  <div key={w.phase} className={s.timelineItem}>
                    <div className={s.timelinePhase}>Tahap {w.phase}</div>
                    <div className={s.timelineCat}>{w.cat}</div>
                    <div className={s.timelineItems}>{w.items}</div>
                    <div className={s.timelineCost}>{w.cost}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={s.timelineCTA}>
              <p>
                Ingin lihat RAB & timeline detail untuk proyek Anda?
              </p>
              <TrackedCTA
                href="https://wa.me/6285732740006"
                className={s.btnPrimary}
                productName="Jasa Kontraktor - Timeline Detail"
              >
                {'\u{1F4AC}'} Minta RAB & Timeline Detail
              </TrackedCTA>
            </div>
          </div>
        </section>
        {/* ═══ TESTIMONIALS ═══ */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              Testimonial{' '}
              <span className={s.gradientAccent}>Klien Kami</span>
            </h2>
            <p className={s.sectionSub}>
              Apa kata mereka yang sudah mempercayakan proyeknya kepada BerkahKarya.
            </p>
            <div className={s.testiGrid}>
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className={s.testiCard}>
                  <div className={s.testiStars}>{'\u2605\u2605\u2605\u2605\u2605'}</div>
                  <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                  <div className={s.testiAuthor}>
                    <div className={s.testiAvatar}>{t.initials}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ LEAD MAGNET ═══ */}
        <section className={`${s.section} ${s.sectionDark}`}>
          <div className={s.container}>
            <div className={s.leadMagnet}>
              <div className={s.leadBadge}>GRATIS</div>
              <h3 className={s.leadTitle}>
                Gratis: Panduan + Contoh RAB
              </h3>
              <p className={s.leadDesc}>
                Dapatkan 2 referensi GRATIS: (1) Ebook &ldquo;Panduan Bangun Rumah Lengkap&rdquo;
                berisi 7 bab dari persiapan hingga finishing, dan (2) Contoh RAB proyek riil
                Rp 413 juta lengkap dengan 10 kategori pekerjaan & spesifikasi material.
                Download langsung atau minta via WhatsApp + bonus tips eksklusif.
              </p>
              <div className={s.ctaRow}>
                <TrackedCTA
                  href="/ebook/panduan-bangun-rumah-lengkap.pdf"
                  className={s.btnPrimary}
                  productName="Jasa Kontraktor - Ebook Download"
                >
                  {'\u{1F4E5}'} Download Langsung
                </TrackedCTA>
                <TrackedCTA
                  href="https://wa.me/6285732740006?text=Halo%20BerkahKarya%20Kontraktor%20-%20saya%20minta%20ebook%20Panduan%20Bangun%20Rumah%20Lengkap%20gratis.%20Terima%20kasih."
                  className={s.btnSecondary}
                  productName="Jasa Kontraktor - Ebook WA"
                >
                  {'\u{1F4AC}'} Dapatkan via WhatsApp + Bonus
                </TrackedCTA>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                Atau dapatkan via WhatsApp — tim kami kirimkan PDF + tips eksklusif langsung ke HP
                Anda
              </p>
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>
              Pertanyaan{' '}
              <span className={s.gradientAccent}>Umum</span>
            </h2>
            <p className={s.sectionSub}>
              Jawaban untuk pertanyaan yang paling sering ditanyakan klien kami.
            </p>
            <div className={s.faqList}>
              {FAQ_ITEMS.map((faq, i) => (
                <div key={i} className={s.faqItem}>
                  <button
                    className={s.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`${s.faqArrow} ${openFaq === i ? s.faqArrowOpen : ''}`}
                    >
                      {'\u25BC'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className={s.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className={s.finalCta}>
          <div className={s.container}>
            <h2 className={s.finalCtaTitle}>
              Siap Bangun Rumah Impian?
            </h2>
            <p className={s.finalCtaSub}>
              Konsultasi awal GRATIS tanpa syarat. Diskusikan kebutuhan, lokasi, dan budget Anda
              dengan tim kami. Jika kami yang kerjakan, desain GRATIS!
            </p>
            <div className={s.ctaRow}>
              <TrackedCTA
                href="https://wa.me/6285732740006"
                className={s.btnPrimary}
                productName="Jasa Kontraktor - Final CTA"
              >
                {'\u{1F4AC}'} Konsultasi Gratis Sekarang
              </TrackedCTA>
            </div>
            <div className={s.trustStrip}>
              <span>{'\u2B50'} 4.9/5 dari 200+ ulasan Google</span>
              <span>{'\u{1F3C6}'} 200+ Proyek Selesai</span>
              <span>{'\u{1F91D}'} 500+ Klien Puas</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
