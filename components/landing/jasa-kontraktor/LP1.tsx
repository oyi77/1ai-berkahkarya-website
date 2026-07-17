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
    image: '/images/jasa-kontraktor/desain-1.jpg',
    name: 'Gambar Kerja (DED)',
    price: 'Rp28.000 /m\u00B2',
    desc: 'Detail Engineering Design lengkap — acuan utama untuk pembangunan & pengurusan IMB. Semua detail teknis tertuang dalam gambar profesional.',
    features: [
      'Denah & Tampak Bangunan',
      'Potongan & Detail Struktur',
      'Sistem ME (Mekanikal Elektrikal)',
      'Spesifikasi Material Lengkap',
    ],
  },
  {
    icon: '\u{1F4CA}',
    image: '/images/jasa-kontraktor/konstruksi-gedung.jpg',
    name: 'Rencana Anggaran Biaya',
    price: 'Rp1,2 Juta /paket',
    desc: 'RAB terperinci per item pekerjaan — Anda tahu persis alokasi dana untuk setiap pos. Tidak ada biaya mendadak, tidak ada pembengkakan.',
    features: [
      'Volume & Analisa Harga Satuan',
      'Rekapitulasi Per Item Pekerjaan',
      'Rekap Per Sub Pekerjaan',
      'Rekomendasi Efisiensi Budget',
    ],
  },
  {
    icon: '\u{1F3A8}',
    image: '/images/jasa-kontraktor/interior-premium.jpg',
    name: 'Visual 3D Realistis',
    price: 'Rp1,2 Juta /paket',
    desc: 'Visualisasi 3D foto-realistis interior & eksterior — lihat hasil akhir rumah Anda sebelum bangun. Revisi sampai puas.',
    features: [
      'Eksterior 360\u00B0 dari Berbagai Sisi',
      'Interior Per Ruangan Detail',
      'Material & Tekstur Realistis',
      'Revisi Sampai Anda Puas',
    ],
  },
  {
    icon: '\u{1F3E0}',
    image: '/images/jasa-kontraktor/kanopi-pagar.jpg',
    name: 'Paket Lengkap (Desain + RAB + 3D)',
    price: 'Mulai Rp2,5 Juta',
    desc: 'Dapatkan gambar kerja, RAB detail, dan visual 3D dalam satu paket hemat. Jika tim kami yang bangun, desain GRATIS!',
    features: [
      'Gambar Kerja Lengkap (DED)',
      'RAB Detail Per Item Pekerjaan',
      'Visual 3D Interior & Eksterior',
      'GRATIS Desain Jika Kami Yang Bangun',
    ],
  },
];

const PROCESS = [
  {
    icon: '\u{1F4AC}',
    title: 'Konsultasi & Survey',
    desc: 'Diskusi gratis via WA/telepon atau survey lokasi. Kami pahami kebutuhan, budget, & lokasi Anda tanpa biaya.',
  },
  {
    icon: '\u{1F3D7}\uFE0F',
    title: 'Desain & RAB Detail',
    desc: 'Tim arsitek buatkan desain lengkap + RAB terperinci. Anda review, revisi sampai puas sebelum eksekusi.',
  },
  {
    icon: '\u{1F3D7}\uFE0F',
    title: 'Eksekusi & Monitoring',
    desc: 'Proyek dikerjakan tim profesional. Progress dilaporkan mingguan via WA — Anda pantau dari mana saja.',
  },
  {
    icon: '\u{1F389}',
    title: 'Serah Terima & Garansi',
    desc: 'Hasil jadi diperiksa bersama, garansi berlaku. Anda tinggal menikmati rumah impian tanpa drama.',
  },
];

const PORTFOLIO = [
  { src: '/images/jasa-kontraktor/tangga-rumah-1.jpg', label: 'Tangga Rumah Tingkat', sub: 'Jakarta' },
  { src: '/images/jasa-kontraktor/pagar-1.jpg', label: 'Pagar Rumah Minimalis', sub: 'Bekasi' },
  { src: '/images/jasa-kontraktor/kanopi-1.jpg', label: 'Kanopi Multifungsi', sub: 'Depok' },
  { src: '/images/jasa-kontraktor/interior-cafe-real-1.jpg', label: 'Interior Cafe & Coffee Shop', sub: 'Bandung' },
  { src: '/images/jasa-kontraktor/interior-kantor-real-1.jpg', label: 'Kantor Eksekutif Modern', sub: 'SCBD, Jakarta' },
  { src: '/images/jasa-kontraktor/desain-rumah.jpg', label: 'Desain Rumah Modern 2 Lantai', sub: 'Jakarta Selatan' },
];

const WHY = [
  {
    icon: '\u{1F4D0}',
    title: 'Gambar Kerja Detail',
    desc: 'Tukang tidak menebak-nebak. Semua ukuran, material, & spesifikasi tertuang dalam gambar kerja lengkap sebagai acuan lapangan.',
  },
  {
    icon: '\u{1F4CA}',
    title: 'RAB Kontrol Biaya',
    desc: 'Setiap pos pekerjaan dianggarkan detail — Anda tahu persis alokasi dana dari awal tanpa biaya mendadak.',
  },
  {
    icon: '\u{1F4F1}',
    title: 'Update Progress Berkala',
    desc: 'Laporan mingguan via WhatsApp berupa foto, video, & persentase progres. Anda pantau dari mana saja, kapan saja.',
  },
  {
    icon: '\u{1F91D}',
    title: 'Satu Tim — Desain ke Pembangunan',
    desc: 'Arsitek, engineer, & pelaksana dalam satu koordinasi. Tidak ada lempar tanggung jawab antar vendor.',
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
                  title: 'Budget Membengkak',
                  desc: 'Estimasi awal tidak detail, biaya material naik di tengah jalan, pekerjaan tambah-tambah tanpa hitungan.',
                },
                {
                  icon: '\u{1F504}',
                  title: 'Desain Berubah Terus',
                  desc: 'Bangun setengah jalan baru sadar tata ruang tidak sesuai, akhirnya bongkar pasang — buang waktu & uang.',
                },
                {
                  icon: '\u{1F9F1}',
                  title: 'Material Tidak Sesuai',
                  desc: 'Tukang pakai material asal-asalan karena tidak ada pengawasan dari ahli — hasil akhir di bawah standar.',
                },
                {
                  icon: '\u23F0',
                  title: 'Waktu Pengerjaan Molor',
                  desc: 'Janji 3 bulan jadi 6 bulan. Tidak ada jadwal kerja jelas, progress tidak terukur, komunikasi terputus.',
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
                Panduan Bangun Rumah Lengkap
              </h3>
              <p className={s.leadDesc}>
                Dapatkan ebook GRATIS berisi checklist bangun rumah, estimasi budget, dan tips
                memilih kontraktor. Download langsung atau dapatkan via WhatsApp + bonus tips
                eksklusif.
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
