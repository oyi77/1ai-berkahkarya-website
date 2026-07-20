import { GetStaticPaths, GetStaticProps } from 'next';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';
import { trackWhatsAppClick, trackViewContent } from '@/lib/tracking';

/* ─── Types ─── */

type Locale = 'id' | 'en';

interface Course {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  topics: string[];
  audience: string[];
  outcomes: string[];
  price: string;
  waText: string;
  color: string;
  colorBg: string;
  iconBg: string;
  duration: string;
  badge: string;
}

interface ValueProp {
  icon: string;
  title: string;
  desc: string;
  color: string;
  colorBg: string;
}

/* ─── CSS Variables ─── */

const COLORS = {
  primary: '#1B1B3A',
  'primary-light': '#3B3B6A',
  accent: '#F5A623',
  'accent-hover': '#E09500',
  'accent-light': '#FFF8E1',
  surface: '#FFFFFF',
  'bg-alt': '#F7F7FC',
  'bg-warm': '#FFFAF0',
  'text-primary': '#1B1B3A',
  'text-secondary': '#555577',
  'text-muted': '#8888AA',
  border: '#E8E8F0',
  'border-light': '#F0F0F5',
  shadow: 'rgba(27,27,58,0.08)',
  'shadow-lg': 'rgba(27,27,58,0.12)',
  success: '#10B981',
  'card-radius': '20px',
  'btn-radius': '50px',
  'section-spacing': '100px',
} as const;

/* ─── Data ─── */

const COURSES: Course[] = [
  {
    id: 'ai-produktivitas',
    emoji: '\u{1F916}',
    title: 'AI Produktivitas',
    tagline: 'AI untuk Orang Awam, Langsung Bisa Dipakai',
    description: 'Kelas ini dirancang khusus untuk pemula yang belum pernah pakai AI sama sekali. Kamu akan belajar menggunakan tools AI populer untuk bantu kerja sehari-hari — bikin tulisan, bikin gambar, bantu presentasi, sampai riset sederhana. Semua diajarkan dengan bahasa yang gampang dipahami, tanpa istilah teknis yang ribet.',
    topics: [
      'Mengenal AI: apa itu, cara pakai, dan tools populer (ChatGPT, Gemini, Canva AI)',
      'Bikin konten tulisan: caption medsos, artikel, email dengan AI',
      'Bikin gambar dan desain dengan AI (Canva AI, Leonardo AI)',
      'Bantu pekerjaan kantor: presentasi, laporan, rangkuman otomatis',
      'Riset dan belajar pakai AI — cocok untuk tugas sekolah/kuliah',
      'Tips & trik biar hasil AI maksimal (prompt sederhana untuk pemula)',
    ],
    audience: ['Karyawan', 'Ibu Rumah Tangga', 'Mahasiswa', 'Pelaku UMKM'],
    outcomes: [
      'Mampu menggunakan AI untuk membantu pekerjaan sehari-hari',
      'Bisa bikin konten, gambar, dan desain pakai AI dalam hitungan menit',
      'Punya skill digital yang bikin kamu lebih produktif dan percaya diri',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya tertarik konsultasi Kelas AI Produktivitas. Apakah cocok untuk pemula tanpa background teknis?',
    color: '#4ECDC4',
    colorBg: '#E8FAF8',
    iconBg: '#D4F5F0',
    duration: '2x Pertemuan Intensif',
    badge: 'Popular',
  },
  {
    id: 'meta-ads',
    emoji: '\u{1F4E3}',
    title: 'Meta Ads',
    tagline: 'Iklankan Produk Sendiri di FB & IG — Pakai Landing Page atau CTWA',
    description: 'Kelas ini fokus ke cara praktis beriklan di Facebook & Instagram untuk mempromosikan produk kamu sendiri. Mulai dari bikin landing page sederhana, setup iklan pakai Click to WhatsApp (CTWA), sampai optimasi biaya iklan. Cocok banget buat pemilik usaha yang mau jualan online tanpa ribet.',
    topics: [
      'Dasar-dasar Meta Ads & Business Suite untuk pemula',
      'Strategi iklan berdasarkan produk — bukan cuma teori',
      'Membuat landing page sederhana untuk iklan produk',
      'Click to WhatsApp Ads (CTWA) — langsung ke chat penjualan',
      'Riset target audiens yang cocok dengan produk kamu',
      'Optimasi budget: biaya iklan efisien, hasil maksimal',
    ],
    audience: ['Owner Bisnis', 'Pelaku UMKM', 'Marketer', 'Freelancer'],
    outcomes: [
      'Mampu membuat dan menjalankan iklan untuk produk sendiri',
      'Bisa menggunakan landing page dan CTWA untuk promosi',
      'Punya strategi iklan yang terukur dan budget-friendly',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya mau konsultasi Kelas Meta Ads. Saya ingin jualan online — apakah program ini cocok?',
    color: '#FF6B6B',
    colorBg: '#FFF0F0',
    iconBg: '#FFE4E4',
    duration: '2x Pertemuan Intensif',
    badge: 'Best Seller',
  },
  {
    id: 'affiliate-marketing',
    emoji: '\u{1F4B0}',
    title: 'Affiliate Marketing',
    tagline: 'Affiliate Shopee + Video AI, Tembak 4 Platform Sekaligus',
    description: 'Kelas ini fokus ke affiliate marketing Shopee — program afiliasi terbesar di Indonesia. Kamu akan belajar cara milih produk laris, bikin video promosi pakai AI, lalu crossposting otomatis ke TikTok, YouTube, Instagram, dan Facebook. Cocok buat yang mau cari penghasilan tambahan tanpa modal besar.',
    topics: [
      'Daftar dan mulai affiliate Shopee — lengkap dari nol',
      'Cara memilih produk Shopee yang laris dan komisi besar',
      'Bikin video produk pakai AI — tanpa skill editing',
      'Crossposting konten ke TikTok, YouTube, IG, dan FB',
      'Tips biar video affiliate viral dan banyak klik',
      'Tracking komisi dan optimasi penghasilan bulanan',
    ],
    audience: ['Pemula', 'Ibu Rumah Tangga', 'Mahasiswa', 'Content Creator'],
    outcomes: [
      'Bisa langsung praktik affiliate Shopee dari HP sendiri',
      'Mampu bikin video promosi produk dengan AI',
      'Punya strategi crossposting ke 4 platform sekaligus',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya tertarik konsultasi Kelas Affiliate Marketing. Gimana cara mulai tanpa modal besar?',
    color: '#45B7D1',
    colorBg: '#EEF9FC',
    iconBg: '#DCF4FA',
    duration: '2x Pertemuan Intensif',
    badge: 'New',
  },
  {
    id: 'ai-coding',
    emoji: '\u{1F4BB}',
    title: 'AI Coding',
    tagline: 'Bikin Aplikasi Tanpa Harus Hafal Kode',
    description: 'Kelas ini mengajarkan cara membuat aplikasi web dan mobile dengan bantuan AI coding assistant. Kamu tidak perlu hafal sintaks atau menjadi programmer senior — cukup pahami logika dasarnya, AI akan membantu menulis kodenya.',
    topics: [
      'Dasar logika pemrograman tanpa harus coding manual',
      'Menggunakan AI coding assistant (Cursor, Copilot, Claude)',
      'Membuat landing page dan website sederhana',
      'Membangun aplikasi web dengan data dinamis',
      'Integrasi API dan database',
      'Deploy dan publikasi aplikasi ke internet',
    ],
    audience: ['Pemula', 'Owner Bisnis', 'Product Manager', 'Designer'],
    outcomes: [
      'Mampu membuat dan deploy aplikasi web sendiri',
      'Bisa menggunakan AI coding assistant secara efektif',
      'Punya portofolio 3 proyek nyata',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya mau konsultasi Kelas AI Coding. Apakah cocok untuk yang nol programming?',
    color: '#9B59B6',
    colorBg: '#F3ECF9',
    iconBg: '#EAD5F5',
    duration: '2x Pertemuan Intensif',
    badge: 'Trending',
  },
];

const VALUE_PROPS: ValueProp[] = [
  {
    icon: '\u{1F4B5}',
    title: 'Harga Terjangkau',
    desc: 'Hanya Rp 500.000 per kelas. Investasi sekali, skill bertahan seumur hidup.',
    color: '#10B981',
    colorBg: '#E7F9F1',
  },
  {
    icon: '\u{1F558}',
    title: 'Jadwal Weekend',
    desc: '2x pertemuan intensif tiap Hari Minggu. Nggak ganggu kerja atau kuliah.',
    color: '#6366F1',
    colorBg: '#EEEDFD',
  },
  {
    icon: '\u{1F30D}',
    title: 'Online + Offline',
    desc: 'Bisa ikut dari mana aja via Zoom, atau tatap muka langsung di Jombang.',
    color: '#F59E0B',
    colorBg: '#FEF3C7',
  },
  {
    icon: '\u{1F528}',
    title: 'Praktik Langsung',
    desc: 'Wajib PR dan final project. Bukan teori doang — beneran praktik.',
    color: '#EF4444',
    colorBg: '#FEE2E2',
  },
  {
    icon: '\u{1F468}\u200D\u{1F3EB}',
    title: 'Pendampingan',
    desc: '1 bulan support setelah kelas selesai. Konsultasi bebas tanya kapan aja.',
    color: '#8B5CF6',
    colorBg: '#EDE9FE',
  },
  {
    icon: '\u{1F4AC}',
    title: 'Komunitas Eksklusif',
    desc: 'Akses grup Telegram khusus. Saling sharing sesama peserta + mentor.',
    color: '#06B6D4',
    colorBg: '#CFFAFE',
  },
];

const WA_PHONE = '6285280000449';

const PARTNER_NAMES = [
  'YPSMA Jombang',
  'Vilona AI',
  'BerkahKarya Digital',
  'Nirwana Residence',
  'Ma\'arif NU',
];

const TESTIMONIALS = [
  {
    name: 'Ahmad Fauzi',
    role: 'Karyawan Swasta',
    before: 'Baru kenal AI, bingung mulai dari mana',
    after: 'Sekarang tugas kantor beres 3x lebih cepat',
    company: 'Karyawan',
    quote: 'Dulu mikir AI itu susah dan cuma buat orang IT. Ternyata gampang banget. Sekarang bikin laporan, presentasi, email — semua selesai dalam hitungan menit.',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Ibu Rumah Tangga',
    before: 'Nggak punya penghasilan sendiri',
    after: 'Komisi affiliate Rp 2-3 juta/bulan',
    company: 'Affiliate Marketer',
    quote: 'Modal HP doang, sekarang bisa dapat penghasilan sendiri dari affiliate marketing.',
  },
  {
    name: 'Rudi Hartono',
    role: 'Owner UMKM',
    before: 'Buang budget iklan tapi hasil nihil',
    after: 'ROAS 5x dalam 2 minggu pertama',
    company: 'Pengusaha',
    quote: 'Meta Ads bener-bener ngubah cara saya pasarkan produk. Sekarang tiap rupiah budget iklan terukur.',
  },
];

/* ─── Utility Styles ─── */

const sectionBase: React.CSSProperties = {
  padding: '100px 0',
};

const innerBase: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
};

const headingStyle: React.CSSProperties = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  fontWeight: '800',
  color: COLORS['text-primary'],
  lineHeight: 1.2,
};

/* ─── Navbar ─── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#fff',
        borderBottom: scrolled ? `1px solid ${COLORS.border}` : '1px solid transparent',
        boxShadow: scrolled ? `0 4px 20px ${COLORS.shadow}` : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span style={{ fontSize: '24px', lineHeight: 1 }}>{'\u{1F393}'}</span>
          <span style={{ fontSize: '18px', fontWeight: '800', color: COLORS.primary, letterSpacing: '-0.5px' }}>
            Berkah<span style={{ color: COLORS.accent }}>Karya</span> Academy
          </span>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: 'none', gap: '32px', alignItems: 'center', '@media (min-width: 768px)': { display: 'flex' } } as React.CSSProperties}
          className="desktop-nav">
          {[
            { label: 'Program', target: 'programs' },
            { label: 'Kenapa Kami', target: 'why-us' },
            { label: 'Testimoni', target: 'testimonials' },
          ].map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '15px',
                fontWeight: '600',
                color: COLORS['text-secondary'],
                cursor: 'pointer',
                padding: '8px 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.primary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS['text-secondary'])}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Halo, saya tertarik dengan kelas di Berkah Karya Academy. Mohon info lebih lanjut.')}`}
          onClick={() =>
            trackWhatsAppClick({
              intent: 'Academy Enrollment',
              phone_number: WA_PHONE,
              message: 'Halo, saya tertarik dengan kelas di Berkah Karya Academy. Mohon info lebih lanjut.',
              product_value: 500000,
            })
          }
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            borderRadius: COLORS['btn-radius'],
            background: COLORS.accent,
            color: '#fff',
            fontWeight: '700',
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'all 0.2s',
            boxShadow: `0 4px 14px ${COLORS.accent}44`,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = COLORS['accent-hover'];
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = `0 6px 20px ${COLORS.accent}66`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = COLORS.accent;
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = `0 4px 14px ${COLORS.accent}44`;
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Konsultasi Gratis
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero Section ─── */

function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
        background: 'linear-gradient(135deg, #FFFAF0 0%, #FFFFFF 50%, #F7F7FC 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(78,205,196,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={innerBase}>
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Trust badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '50px',
              background: COLORS['accent-light'],
              color: COLORS.accent,
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '28px',
            }}
          >
            <span style={{ fontSize: '18px' }}>{'\u{1F393}'}</span>
            <span>Belajar Skill Digital — 2x Pertemuan Intensif, Langsung Praktik</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              ...headingStyle,
              fontSize: 'clamp(36px, 6vw, 64px)',
              letterSpacing: '-1.5px',
              marginBottom: '20px',
            }}
          >
            Siap Praktek dalam{' '}
            <span style={{ color: COLORS.accent, display: 'inline-block' }}>
              2x Pertemuan Intensif
            </span>
            {' '}— Dijamin Bisa!
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: 1.7,
              color: COLORS['text-secondary'],
              maxWidth: '640px',
              margin: '0 auto 36px',
              fontWeight: '400',
            }}
          >
            Belajar skill digital dari praktisi aktif lewat 2x pertemuan intensif. Kurikulum padat, langsung praktek, beneran bisa dipakai. Karyawan, IRT, pemilik usaha — semua cocok.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <a
              href="#programs"
              onClick={(e) => { e.preventDefault(); document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                borderRadius: COLORS['btn-radius'],
                background: COLORS.accent,
                color: '#fff',
                fontWeight: '700',
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                boxShadow: `0 6px 20px ${COLORS.accent}44`,
                cursor: 'pointer',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS['accent-hover'];
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 8px 28px ${COLORS.accent}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = COLORS.accent;
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 6px 20px ${COLORS.accent}44`;
              }}
            >
              Lihat Program Kami {'\u2192'}
            </a>
            <a
              href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Halo, saya mau konsultasi dulu tentang kelas di Berkah Karya Academy.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  intent: 'Academy Consultation',
                  phone_number: WA_PHONE,
                  message: 'Halo, saya mau konsultasi dulu tentang kelas di Berkah Karya Academy.',
                  product_value: 500000,
                })
              }
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 36px',
                borderRadius: COLORS['btn-radius'],
                background: 'transparent',
                color: COLORS.primary,
                fontWeight: '700',
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                border: `2px solid ${COLORS.border}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = COLORS.accent;
                e.currentTarget.style.background = COLORS['accent-light'];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = COLORS.border;
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {'\u{1F4AC}'} Konsultasi Dulu
            </a>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              padding: '20px 32px',
              background: '#fff',
              borderRadius: '16px',
              boxShadow: `0 4px 20px ${COLORS.shadow}`,
              border: `1px solid ${COLORS['border-light']}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', lineHeight: 1 }}>{'\u{2B50}'}</span>
              <span style={{ fontSize: '14px', fontWeight: '700', color: COLORS.primary }}>4.9</span>
              <span style={{ fontSize: '13px', color: COLORS['text-muted'] }}>Rating Peserta</span>
            </div>
            <div style={{ width: '1px', height: '24px', background: COLORS.border }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', lineHeight: 1 }}>{'\u{1F465}'}</span>
              <span style={{ fontSize: '14px', fontWeight: '700', color: COLORS.primary }}>100+</span>
              <span style={{ fontSize: '13px', color: COLORS['text-muted'] }}>Alumni</span>
            </div>
            <div style={{ width: '1px', height: '24px', background: COLORS.border }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', lineHeight: 1 }}>{'\u{1F4DA}'}</span>
              <span style={{ fontSize: '14px', fontWeight: '700', color: COLORS.primary }}>4</span>
              <span style={{ fontSize: '13px', color: COLORS['text-muted'] }}>Program Kelas</span>
            </div>
            <div style={{ width: '1px', height: '24px', background: COLORS.border }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', lineHeight: 1 }}>{'\u{1F4B5}'}</span>
              <span style={{ fontSize: '14px', fontWeight: '700', color: COLORS.primary }}>Rp 500K</span>
              <span style={{ fontSize: '13px', color: COLORS['text-muted'] }}>Mulai dari</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Bar / Partner Logos ─── */

function TrustBar() {
  return (
    <section style={{ padding: '48px 0', background: '#fff', borderBottom: `1px solid ${COLORS['border-light']}` }}>
      <div style={innerBase}>
        <p style={{ textAlign: 'center', fontSize: '13px', fontWeight: '600', color: COLORS['text-muted'], textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '28px' }}>
          Mitra & Partner Kami
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            opacity: 0.6,
          }}
        >
          {PARTNER_NAMES.map((name, i) => (
            <div
              key={i}
              style={{
                fontSize: '16px',
                fontWeight: '700',
                color: COLORS['text-secondary'],
                letterSpacing: '-0.3px',
                padding: '8px 16px',
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Program Cards ─── */

function ProgramCard({ course, onDetail }: { course: Course; onDetail: (c: Course) => void }) {
  const [hovered, setHovered] = useState(false);

  const cardHover: React.CSSProperties = hovered
    ? { transform: 'translateY(-6px)', boxShadow: `0 20px 40px ${COLORS['shadow-lg']}` }
    : { transform: 'translateY(0)', boxShadow: `0 4px 16px ${COLORS.shadow}` };

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: COLORS['card-radius'],
        border: `1px solid ${COLORS['border-light']}`,
        padding: '32px',
        transition: 'all 0.3s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        ...cardHover,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {course.badge && (
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            padding: '4px 12px',
            borderRadius: '50px',
            background: course.colorBg,
            color: course.color,
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0.3px',
          }}
        >
          {course.badge}
        </div>
      )}

      {/* Icon */}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          background: course.iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          marginBottom: '20px',
        }}
      >
        {course.emoji}
      </div>

      {/* Duration badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '4px 10px',
          borderRadius: '6px',
          background: COLORS['bg-alt'],
          fontSize: '12px',
          fontWeight: '600',
          color: COLORS['text-secondary'],
          marginBottom: '12px',
        }}
      >
        {'\u{1F552}'} {course.duration}
      </div>

      {/* Title & Tagline */}
      <h3 style={{ ...headingStyle, fontSize: '20px', marginBottom: '4px' }}>{course.title}</h3>
      <p style={{ fontSize: '14px', fontWeight: '600', color: course.color, marginBottom: '12px' }}>
        {course.tagline}
      </p>

      {/* Description */}
      <p style={{ fontSize: '14px', lineHeight: 1.7, color: COLORS['text-secondary'], marginBottom: '16px' }}>
        {course.description.length > 120 ? course.description.slice(0, 120) + '...' : course.description}
      </p>

      {/* Audience tags */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {course.audience.slice(0, 3).map((a) => (
          <span
            key={a}
            style={{
              padding: '3px 10px',
              borderRadius: '6px',
              background: COLORS['bg-alt'],
              fontSize: '12px',
              fontWeight: '500',
              color: COLORS['text-secondary'],
            }}
          >
            {a}
          </span>
        ))}
        {course.audience.length > 3 && (
          <span style={{ padding: '3px 10px', borderRadius: '6px', background: COLORS['bg-alt'], fontSize: '12px', fontWeight: '500', color: COLORS['text-muted'] }}>
            +{course.audience.length - 3}
          </span>
        )}
      </div>

      {/* Price & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: `1px solid ${COLORS['border-light']}` }}>
        <span style={{ ...headingStyle, fontSize: '22px', color: course.color }}>{course.price}</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => {
              onDetail(course);
              trackViewContent(course.title, 'course_detail');
            }}
            style={{
              padding: '8px 18px',
              borderRadius: '12px',
              background: COLORS['bg-alt'],
              color: COLORS.primary,
              fontWeight: '600',
              fontSize: '13px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS['accent-light'];
              e.currentTarget.style.color = COLORS.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS['bg-alt'];
              e.currentTarget.style.color = COLORS.primary;
            }}
          >
            Detail Materi
          </button>
          <a
            href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(course.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                intent: 'Academy Enrollment',
                phone_number: WA_PHONE,
                message: course.waText,
                product_name: course.title,
                product_value: 500000,
              })
            }
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '8px 18px',
              borderRadius: '12px',
              background: course.color,
              color: '#fff',
              fontWeight: '600',
              fontSize: '13px',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            {'\u{1F4AC}'} Konsultasi
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── How It Works ─── */

const STEPS = [
  {
    num: '1',
    title: 'Pilih Kelas',
    desc: 'Tentukan program yang sesuai dengan kebutuhan dan tujuanmu.',
    color: '#4ECDC4',
  },
  {
    num: '2',
    title: 'Konsultasi Gratis',
    desc: 'Konsultasi dulu via WhatsApp — gratis, nggak ada kewajiban apa pun.',
    color: COLORS.accent,
  },
  {
    num: '3',
    title: 'Mulai Belajar',
    desc: 'Ikuti 2x pertemuan intensif, kerjakan final project, dan kuasai skill barumu!',
    color: '#6366F1',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ ...sectionBase, background: '#fff' }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            Cara Belajar
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Mulai Belajar dalam 3 Langkah Mudah
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '480px', margin: '0 auto' }}>
            Dari konsultasi sampai mahir, kami dampingi kamu di setiap langkah.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {STEPS.map((step, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 280px',
                maxWidth: '320px',
                textAlign: 'center',
                padding: '40px 28px',
                borderRadius: COLORS['card-radius'],
                background: COLORS['bg-alt'],
                border: `1px solid ${COLORS['border-light']}`,
                position: 'relative',
              }}
            >
              {/* Step number */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '28px',
                  background: step.color,
                  color: '#fff',
                  fontSize: '22px',
                  fontWeight: '800',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                {step.num}
              </div>

              {/* Connector line between steps */}
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    display: 'none',
                    position: 'absolute',
                    top: '68px',
                    right: '-40px',
                    width: '48px',
                    height: '2px',
                    background: COLORS.border,
                    '@media (min-width: 1024px)': { display: 'block' },
                  } as React.CSSProperties}
                  className="step-line"
                />
              )}

              <h3 style={{ ...headingStyle, fontSize: '18px', marginBottom: '8px' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: COLORS['text-secondary'] }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Value Props ─── */

function ValuePropsSection() {
  return (
    <section id="why-us" style={{ ...sectionBase, background: COLORS['bg-alt'] }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            Kenapa Kami?
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Kenapa Belajar di Berkah Karya Academy?
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '520px', margin: '0 auto' }}>
            Kami bikin belajar semudah dan seenyaman mungkin buat kamu.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {VALUE_PROPS.map((vp, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 300px',
                maxWidth: '360px',
                background: '#fff',
                borderRadius: '16px',
                padding: '28px',
                border: `1px solid ${COLORS['border-light']}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 28px ${COLORS.shadow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: vp.colorBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '16px',
                }}
              >
                {vp.icon}
              </div>
              <h3 style={{ ...headingStyle, fontSize: '16px', marginBottom: '8px' }}>{vp.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: COLORS['text-secondary'] }}>{vp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Course Detail Modal ─── */

function CourseModal({ course, onClose }: { course: Course; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlay = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlay}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(27,27,58,0.6)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '24px',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
          animation: 'slideUp 0.3s ease',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: COLORS['bg-alt'],
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: COLORS['text-muted'],
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.border; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = COLORS['bg-alt']; }}
          aria-label="Tutup"
        >
          {'\u2715'}
        </button>

        {/* Icon + Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: course.iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              flexShrink: 0,
            }}
          >
            {course.emoji}
          </div>
          <div>
            <h3 style={{ ...headingStyle, fontSize: '22px', marginBottom: '2px' }}>{course.title}</h3>
            <p style={{ fontSize: '14px', fontWeight: '600', color: course.color }}>{course.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p style={{ fontSize: '14px', lineHeight: 1.7, color: COLORS['text-secondary'], marginBottom: '24px' }}>
          {course.description}
        </p>

        {/* Topics */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ ...headingStyle, fontSize: '14px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', color: COLORS['text-muted'] }}>
            {'\u{1F4DD}'} Yang Akan Dipelajari
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {course.topics.map((topic) => (
              <div key={topic} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: COLORS['text-secondary'], lineHeight: 1.5 }}>
                <span style={{ color: COLORS.accent, fontWeight: '700', flexShrink: 0 }}>{'\u2713'}</span>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ ...headingStyle, fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: COLORS['text-muted'] }}>
            {'\u{1F465}'} Cocok Untuk
          </h4>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {course.audience.map((a) => (
              <span key={a} style={{ padding: '4px 12px', borderRadius: '8px', background: course.colorBg, color: course.color, fontSize: '13px', fontWeight: '600' }}>
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ ...headingStyle, fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: COLORS['text-muted'] }}>
            {'\u{1F3C6}'} Hasil Akhir
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {course.outcomes.map((o) => (
              <div key={o} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: COLORS['text-secondary'] }}>
                <span style={{ color: COLORS.success, fontWeight: '700', flexShrink: 0 }}>{'\u{2713}'}</span>
                <span>{o}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: `1px solid ${COLORS['border-light']}` }}>
          <div>
            <span style={{ fontSize: '13px', color: COLORS['text-muted'], fontWeight: '500' }}>Investasi</span>
            <p style={{ ...headingStyle, fontSize: '28px', color: course.color, margin: 0 }}>{course.price}</p>
          </div>
          <a
            href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(course.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                intent: 'Academy Enrollment',
                phone_number: WA_PHONE,
                message: course.waText,
                product_name: course.title,
                product_value: 500000,
              })
            }
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: COLORS['btn-radius'],
              background: COLORS.accent,
              color: '#fff',
              fontWeight: '700',
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: `0 4px 14px ${COLORS.accent}44`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS['accent-hover'];
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS.accent;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {'\u{1F4AC}'} Konsultasi Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Programs Section ─── */

function ProgramsSection({ courses, onDetail }: { courses: Course[]; onDetail: (c: Course) => void }) {
  return (
    <section id="programs" style={{ ...sectionBase, background: '#fff' }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            Program Kelas
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Pilih Kelas yang Sesuai dengan Kebutuhanmu
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '520px', margin: '0 auto' }}>
            Semua kelas Rp 500.000 — investasi sekali, skill seumur hidup.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {courses.map((course) => (
            <div key={course.id} style={{ flex: '1 1 320px', maxWidth: '380px' }}>
              <ProgramCard course={course} onDetail={onDetail} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Credibility / Partnership Section ─── */

function CredibilitySection() {
  return (
    <section style={{ ...sectionBase, background: COLORS['bg-alt'] }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            {'\u{1F3C6}'} Sertifikasi & Mitra
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Didukung oleh Mitra & Lembaga Terpercaya
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '540px', margin: '0 auto' }}>
            Setiap kelas dilengkapi dengan e-sertifikat dan didukung oleh ekosistem digital terpercaya.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { name: 'YPSMA Jombang', desc: 'Yayasan Pendidikan dan Sosial Ma\'arif', color: '#6366F1', bg: '#EEEDFD' },
            { name: 'Vilona AI', desc: 'AI Agent Ecosystem untuk Bisnis', color: '#4ECDC4', bg: '#E8FAF8' },
            { name: 'BerkahKarya Digital', desc: 'Digital Agency & AI Solutions', color: COLORS.accent, bg: COLORS['accent-light'] },
          ].map((partner, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 280px',
                maxWidth: '340px',
                background: '#fff',
                borderRadius: '20px',
                padding: '32px',
                border: `1px solid ${COLORS['border-light']}`,
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 28px ${COLORS.shadow}`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: partner.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '28px',
                }}
              >
                {'\u{1F3EB}'}
              </div>
              <h3 style={{ ...headingStyle, fontSize: '16px', marginBottom: '6px' }}>{partner.name}</h3>
              <p style={{ fontSize: '13px', color: COLORS['text-secondary'], lineHeight: 1.5 }}>{partner.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" style={{ ...sectionBase, background: '#fff' }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            {'\u{1F91D}'} Testimoni
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Apa Kata Alumni Kami?
          </h2>
        </div>

        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            background: COLORS['bg-alt'],
            borderRadius: '24px',
            padding: '40px',
            border: `1px solid ${COLORS['border-light']}`,
            position: 'relative',
          }}
        >
          {/* Quote */}
          <div style={{ fontSize: '48px', lineHeight: 1, color: COLORS.accent, marginBottom: '8px', opacity: 0.4 }}>{'\u201C'}</div>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: COLORS['text-secondary'], fontStyle: 'italic', marginBottom: '24px' }}>
            {t.quote}
          </p>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: COLORS.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '700',
                fontSize: '18px',
                flexShrink: 0,
              }}
            >
              {t.name.charAt(0)}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: '700', fontSize: '15px', color: COLORS.primary, margin: 0 }}>{t.name}</p>
              <p style={{ fontSize: '13px', color: COLORS['text-muted'], margin: 0 }}>{t.company}</p>
            </div>
          </div>

          {/* Before / After */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            <div style={{ flex: 1, padding: '12px', borderRadius: '12px', background: '#FFEBEE', textAlign: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Sebelum</span>
              <p style={{ fontSize: '13px', fontWeight: '600', color: '#C62828', margin: '4px 0 0' }}>{t.before}</p>
            </div>
            <div style={{ flex: 1, padding: '12px', borderRadius: '12px', background: '#E8F5E9', textAlign: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#2E7D32', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Sesudah</span>
              <p style={{ fontSize: '13px', fontWeight: '600', color: '#1B5E20', margin: '4px 0 0' }}>{t.after}</p>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
            <button
              onClick={() => {
                prev();
                trackViewContent('testimonial_prev', 'testimonial_nav');
              }}
              style={{ width: '40px', height: '40px', borderRadius: '50%', border: `1px solid ${COLORS.border}`, background: '#fff', cursor: 'pointer', fontSize: '16px', color: COLORS['text-secondary'], transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS['text-secondary']; }}
              aria-label="Sebelumnya">{'\u2190'}</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    background: i === active ? COLORS.accent : COLORS.border,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={`Testimoni ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => {
                next();
                trackViewContent('testimonial_next', 'testimonial_nav');
              }}
              style={{ width: '40px', height: '40px', borderRadius: '50%', border: `1px solid ${COLORS.border}`, background: '#fff', cursor: 'pointer', fontSize: '16px', color: COLORS['text-secondary'], transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.color = COLORS.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS['text-secondary']; }}
              aria-label="Selanjutnya">{'\u2192'}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Class Recordings Section ─── */

const VIDEOS = [
  { src: '/videos/academy/kelas-5835.mp4', poster: '/videos/academy/kelas-5835-poster.jpg', label: 'Praktik Sesi 1' },
  { src: '/videos/academy/kelas-5848.mp4', poster: '/videos/academy/kelas-5848-poster.jpg', label: 'Praktik Sesi 2' },
  { src: '/videos/academy/kelas-5869.mp4', poster: '/videos/academy/kelas-5869-poster.jpg', label: 'Praktik Sesi 3' },
  { src: '/videos/academy/kelas-5870.mp4', poster: '/videos/academy/kelas-5870-poster.jpg', label: 'Praktik Sesi 4' },
  { src: '/videos/academy/kelas-5877.mp4', poster: '/videos/academy/kelas-5877-poster.jpg', label: 'Praktik Sesi 5' },
  { src: '/videos/academy/kelas-5879.mp4', poster: '/videos/academy/kelas-5879-poster.jpg', label: 'Praktik Sesi 6' },
];

function ClassRecordingsSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlay = (id: string, label: string) => {
    setPlayingId(id);
    trackViewContent('video_play', `class_recording_${label}`);
  };

  return (
    <section id="class-recordings" style={{ ...sectionBase, background: COLORS['bg-alt'] }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '50px',
              background: COLORS['accent-light'],
              color: COLORS.accent,
              fontSize: '13px',
              fontWeight: '700',
              marginBottom: '12px',
            }}
          >
            {'\u{1F3AC}'} Rekaman Kelas
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Lihat Suasana Kelas Kami
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '540px', margin: '0 auto' }}>
            Cuplikan langsung dari sesi kelas Affiliate Shopee — lihat bagaimana peserta belajar dan praktik bersama mentor.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {VIDEOS.map((v) => {
            const isPlaying = playingId === v.src;
            return (
              <div
                key={v.src}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: '#fff',
                  boxShadow: '0 4px 20px rgba(27,27,58,0.08)',
                  border: `1px solid ${COLORS['border-light']}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(27,27,58,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16 / 9', background: '#000' }}>
                  {isPlaying ? (
                    <video
                      src={v.src}
                      controls
                      autoPlay
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onPause={() => setPlayingId(null)}
                      onEnded={() => setPlayingId(null)}
                    />
                  ) : (
                    <>
                      {/* Poster image with lazy loading */}
                      <img
                        src={v.poster}
                        alt={v.label}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                      {/* Play button overlay */}
                      <button
                        onClick={() => handlePlay(v.src, v.label)}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          background: 'rgba(27,27,58,0.25)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background 0.3s ease',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(27,27,58,0.4)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(27,27,58,0.25)'; }}
                        aria-label={`Putar ${v.label}`}
                      >
                        <div
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: COLORS.accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '24px',
                            boxShadow: '0 4px 16px rgba(245,166,35,0.4)',
                            transition: 'transform 0.2s ease',
                          }}
                          className="play-btn-icon"
                        >
                          {'\u25B6'}
                        </div>
                      </button>
                    </>
                  )}
                </div>
                <div style={{ padding: '14px 20px 20px' }}>
                  <p style={{ fontWeight: '700', fontSize: '15px', color: COLORS.primary, margin: 0 }}>
                    {v.label}
                  </p>
                  <p style={{ fontSize: '13px', color: COLORS['text-muted'], margin: '4px 0 0' }}>
                    Kelas Affiliate Shopee
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Community Section ─── */

function CommunitySection() {
  const benefits = [
    { icon: '\u{1F4AC}', title: 'Grup Telegram Eksklusif', desc: 'Tanya jawab langsung dengan mentor dan sesama peserta. 24/7 aktif.' },
    { icon: '\u{1F504}', title: 'Akses Revisi Materi', desc: 'Tidak puas dengan kelas? Bisa ulang di batch berikutnya GRATIS.' },
    { icon: '\u{1F4BB}', title: 'Belajar Online & Offline', desc: 'Hadir langsung atau via Zoom — fleksibel sesuai kondisimu.' },
    { icon: '\u{1F393}', title: 'E-Sertifikat', desc: 'Setiap lulus dapat e-sertifikat sebagai bukti kompetensimu.' },
  ];

  return (
    <section style={{ ...sectionBase, background: '#fff' }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            {'\u{1F465}'} Komunitas & Benefit
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 36px)', marginBottom: '12px' }}>
            Lebih dari Sekadar Kelas
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '480px', margin: '0 auto' }}>
            Kamu dapat akses penuh ke ekosistem belajar Berkah Karya Academy.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 220px',
                maxWidth: '260px',
                padding: '28px 20px',
                borderRadius: '16px',
                background: COLORS['bg-alt'],
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 28px ${COLORS.shadow}`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px', lineHeight: 1 }}>{b.icon}</div>
              <h3 style={{ ...headingStyle, fontSize: '15px', marginBottom: '6px' }}>{b.title}</h3>
              <p style={{ fontSize: '13px', color: COLORS['text-secondary'], lineHeight: 1.6 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Penutup ─── */

function ClosingCTA() {
  return (
    <section
      style={{
        padding: '100px 0',
        background: COLORS.primary,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,166,35,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(78,205,196,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ ...innerBase, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            ...headingStyle,
            fontSize: 'clamp(28px, 4vw, 42px)',
            color: '#fff',
            marginBottom: '16px',
          }}
        >
          Siap Mulai{' '}
          <span style={{ color: COLORS.accent }}>Perjalanan Belajar</span>?
        </h2>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '500px',
            margin: '0 auto 36px',
          }}
        >
          Konsultasi dulu via WhatsApp. Tanya apa aja, nggak ada kewajiban daftar. Kami bantu pilihkan kelas yang paling cocok buat kamu.
        </p>

        <a
          href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Halo, saya mau konsultasi kelas di Berkah Karya Academy. Apakah ada yang cocok untuk saya?')}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackWhatsAppClick({
              intent: 'Academy Enrollment',
              phone_number: WA_PHONE,
              message: 'Halo, saya mau konsultasi kelas di Berkah Karya Academy. Apakah ada yang cocok untuk saya?',
              product_value: 500000,
            })
          }
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 40px',
            borderRadius: COLORS['btn-radius'],
            background: COLORS.accent,
            color: '#fff',
            fontWeight: '700',
            fontSize: '17px',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            boxShadow: `0 6px 24px ${COLORS.accent}55`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = COLORS['accent-hover'];
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = `0 10px 32px ${COLORS.accent}77`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = COLORS.accent;
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = `0 6px 24px ${COLORS.accent}55`;
          }}
        >
          {'\u{1F4AC}'} Konsultasi Gratis Sekarang
        </a>

        {/* Checklist */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            marginTop: '36px',
          }}
        >
          {[
            'Tanpa Biaya Konsultasi',
            'Garansi Bisa Ulang',
            'Mentor Berpengalaman',
            'E-Sertifikat',
          ].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: '500' }}>
              <span style={{ color: COLORS.accent, fontWeight: '700' }}>{'\u2713'}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

function AcademyFooter() {
  return (
    <footer
      style={{
        background: '#111128',
        color: 'rgba(255,255,255,0.7)',
        padding: '60px 0 0',
      }}
    >
      <div style={innerBase}>
        <div
          style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Brand */}
          <div style={{ flex: '1 1 260px', maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '24px' }}>{'\u{1F393}'}</span>
              <span style={{ fontSize: '18px', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px' }}>
                Berkah<span style={{ color: COLORS.accent }}>Karya</span>
              </span>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
              AI Ecosystem untuk bisnis Indonesia. Tools, automation, dan sistem AI yang langsung menghasilkan.
            </p>
          </div>

          {/* Program */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Program</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {COURSES.map((c) => (
                <a
                  key={c.id}
                  href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(c.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      intent: 'Academy Enrollment',
                      phone_number: WA_PHONE,
                      message: c.waText,
                      product_name: c.title,
                      product_value: 500000,
                    })
                  }
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  {c.title}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Informasi</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Tentang Kami', 'Hubungi Kami', 'FAQ', 'Kebijakan Privasi'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Kontak</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={`https://wa.me/${WA_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    intent: 'Academy Contact',
                    phone_number: WA_PHONE,
                    product_value: 500000,
                  })
                }
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              >
                {'\u{1F4F1}'} {WA_PHONE}
              </a>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginTop: '8px' }}>
                Perumahan Nirwana Regency<br />
                Blok C12, Jombang<br />
                Jawa Timur
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            padding: '24px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
            {'\u00A9'} 2026 BerkahKarya · Berkah Karya Digital Agency
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
            Mitra Pendidikan: <a href="https://ypsma.org" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.accent, textDecoration: 'none' }}>YPSMA Jombang</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── ScrollReveal Component ─── */

function ScrollReveal({ children, delay = '0s' }: { children: React.ReactNode; delay?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Wrap sections with scroll-reveal ─── */

function RevealedSection({ children, delay = '0s' }: { children: React.ReactNode; delay?: string }) {
  return (
    <ScrollReveal delay={delay}>
      {children}
    </ScrollReveal>
  );
}

/* ─── Global Styles ─── */

function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        background: #ffffff;
        color: #1B1B3A;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #aaa;
      }

      @media (min-width: 768px) {
        .desktop-nav {
          display: flex !important;
        }
      }

      @media (min-width: 1024px) {
        .step-line {
          display: block !important;
        }
      }

      @media (max-width: 640px) {
        .mobile-section {
          padding: 60px 0 !important;
        }
      }
    `}</style>
  );
}

/* ─── Siapa Yang Cocok ─── */

const PERSONAS = [
  { icon: '\u{1F454}', title: 'Karyawan', desc: 'Upgrade skill digital tanpa ganggu jam kerja' },
  { icon: '\u{1F3E0}', title: 'Ibu Rumah Tangga', desc: 'Cari penghasilan tambahan dari rumah' },
  { icon: '\u{1F393}', title: 'Mahasiswa', desc: 'Persiapan masuk dunia kerja dengan skill siap pakai' },
  { icon: '\u{1F3EA}', title: 'Pelaku UMKM', desc: 'Tingkatkan omzet lewat pemasaran digital' },
  { icon: '\u{1F468}\u200D\u{1F4BC}', title: 'Pemilik Bisnis', desc: 'Efektifkan budget marketing tim Anda' },
  { icon: '\u{1F4F1}', title: 'Content Creator', desc: 'Bikin konten yang benar-benar menghasilkan' },
];

const cardBase: React.CSSProperties = {
  background: '#fff',
  borderRadius: 16,
  padding: '24px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  boxShadow: '0 2px 12px rgba(0,0,0,.06)',
  transition: 'transform .2s, box-shadow .2s',
};

function SiapaCocokSection() {
  return (
    <section id="siapa-cocok" style={{ ...sectionBase, background: '#fff' }}>
      <div style={innerBase}>
        <h2 style={headingStyle}>Siapa yang Cocok?</h2>
        <p style={{
          textAlign: 'center' as const,
          fontSize: 18,
          color: '#555',
          maxWidth: 640,
          margin: '0 auto 48px',
          lineHeight: 1.6,
        }}>
          Program ini dirancang untuk siapa pun yang ingin langsung praktek —
          tanpa perlu latar belakang teknis atau pengalaman sebelumnya.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 14,
          maxWidth: 860,
          margin: '0 auto',
        }}>
          {PERSONAS.map(p => (
            <div key={p.title} style={cardBase}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <span style={{ fontSize: 28 }}>{p.icon}</span>
              <div>
                <strong style={{ fontSize: 16, display: 'block' }}>{p.title}</strong>
                <span style={{ fontSize: 14, color: '#666' }}>{p.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Yang Kamu Dapatkan ─── */

const BENEFITS = [
  { icon: '\u{1F393}', title: 'Sertifikat Kelulusan', desc: 'Bukti resmi penyelesaian program yang bisa dipajang di LinkedIn & CV' },
  { icon: '\u{1F4DA}', title: 'Akses Materi Selamanya', desc: 'Review rekaman kelas kapan aja, di mana aja — tanpa batas waktu' },
  { icon: '\u{1F4AC}', title: 'Konsultasi 1 Bulan', desc: 'Tanya langsung ke mentor lewat grup eksklusif setelah kelas selesai' },
  { icon: '\u{1F91D}', title: 'Grup Komunitas', desc: 'Networking dengan sesama peserta dan alumni' },
  { icon: '\u{1F3C6}', title: 'Final Project & Portofolio', desc: 'Hasil nyata yang bisa langsung dipamerkan ke klien atau atasan' },
  { icon: '\u{1F504}', title: 'Garansi Bisa Ulang', desc: 'Gratis ikut lagi di batch berikutnya kalau belum puas' },
];

const benefitCard: React.CSSProperties = {
  background: COLORS['bg-alt'],
  borderRadius: 16,
  padding: '28px 24px',
  textAlign: 'center' as const,
  transition: 'transform .2s',
};

function YangKamuDapatkanSection() {
  return (
    <section id="dapatkan" style={{ ...sectionBase, background: COLORS['bg-alt'] }}>
      <div style={innerBase}>
        <h2 style={headingStyle}>Yang Kamu Dapatkan</h2>
        <p style={{
          textAlign: 'center' as const,
          fontSize: 18,
          color: '#555',
          maxWidth: 600,
          margin: '0 auto 48px',
          lineHeight: 1.6,
        }}>
          Investasi sekali, manfaat jangka panjang.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 20,
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {BENEFITS.map(b => (
            <div key={b.title} style={benefitCard}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>{b.icon}</div>
              <h3 style={{ fontSize: 17, margin: '0 0 8px', color: COLORS['text-dark'] }}>{b.title}</h3>
              <p style={{ fontSize: 14, color: '#555', margin: 0, lineHeight: 1.5 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ─── Main Page ─── */

export default function AcademyLPPage({ locale }: { locale: Locale }) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  useEngagementTracking('BerkahKarya Academy', '500000', 'academy');

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <RevealedSection>
          <HeroSection />
        </RevealedSection>

        <RevealedSection delay="0.1s">
          <TrustBar />
        </RevealedSection>

        <RevealedSection delay="0.15s">
          <ProgramsSection courses={COURSES} onDetail={setSelectedCourse} />
        </RevealedSection>

        <RevealedSection delay="0.1s">
          <SiapaCocokSection />
        </RevealedSection>

        <RevealedSection delay="0.1s">
          <HowItWorks />
        </RevealedSection>

        <RevealedSection delay="0.15s">
          <YangKamuDapatkanSection />
        </RevealedSection>

        <RevealedSection delay="0.15s">
          <ValuePropsSection />
        </RevealedSection>
        <RevealedSection delay="0.1s">
          <CredibilitySection />
        </RevealedSection>

        <RevealedSection delay="0.15s">
          <TestimonialsSection />
        </RevealedSection>

        <RevealedSection delay="0.1s">
          <ClassRecordingsSection />
        </RevealedSection>

        <RevealedSection delay="0.1s">
          <CommunitySection />
        </RevealedSection>

        <RevealedSection delay="0.15s">
          <ClosingCTA />
        </RevealedSection>
      </main>
      <AcademyFooter />

      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </>
  );
}

/* ─── Static Props / Paths ─── */

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});
