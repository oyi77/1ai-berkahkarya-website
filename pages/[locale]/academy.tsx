import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import Layout from '@/components/Layout';

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
}

/* ─── Data ─── */

const COURSES: Course[] = [
  {
    id: 'ai-produktivitas',
    emoji: '\u{1F916}', // 🤖
    title: 'AI Produktivitas',
    tagline: 'Kerja 10x Lebih Cepat dengan AI',
    description: 'Kelas ini dirancang untuk membantu kamu mengoptimalkan pekerjaan sehari-hari dengan bantuan AI. Mulai dari menulis email, membuat konten, menganalisis data, hingga menyusun presentasi — semuanya bisa diselesaikan dalam hitungan menit. Cocok untuk profesional, content creator, dan siapa pun yang ingin bekerja lebih efisien.',
    topics: [
      'Prompt engineering dasar hingga mahir',
      'Membuat konten tulisan, gambar, dan video dengan AI',
      'Automasi tugas repetitive dengan AI',
      'Analisis data cepat pakai AI',
      'Integrasi AI ke workflow harian (Google Workspace, Notion, dll)',
      'Studi kasus: 10 skenario kerja nyata',
    ],
    audience: ['Karyawan', 'Freelancer', 'Content Creator', 'Owner Bisnis'],
    outcomes: [
      'Mampu membuat konten 10x lebih cepat pakai AI',
      'Bisa mengotomatiskan tugas-tugas repetitive',
      'Memiliki sistem prompt library siap pakai',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya tertarik dengan kelas AI Produktivitas. Mohon info pendaftarannya.',
  },
  {
    id: 'meta-ads',
    emoji: '\u{1F4E3}', // 📣
    title: 'Meta Ads',
    tagline: 'Jago Iklan Facebook & Instagram dalam 4 Pekan',
    description: 'Kelas ini membekali kamu dengan kemampuan merancang, menjalankan, dan mengoptimalkan iklan Meta (Facebook & Instagram) dari nol hingga mahir. Mulai dari riset audiens, pembuatan creative brief, sampai analisis performa iklan. Cocok untuk pemilik bisnis, marketer, dan siapa pun yang ingin memaksimalkan budget iklan.',
    topics: [
      'Pengenalan Meta Ads Manager & Business Suite',
      'Riset audiens dan pembuatan buyer persona',
      'Strategi creative: gambar, video, dan copy yang konversi',
      'Setup pixel dan konversi (CAPI)',
      'A/B testing dan optimasi campaign',
      'Analisis metrics: ROAS, CPA, CTR, dan lainnya',
      'Retargeting dan lookalike audience',
    ],
    audience: ['Owner Bisnis', 'Marketer', 'Agency', 'Freelancer'],
    outcomes: [
      'Mampu membuat dan mengelola campaign Meta Ads secara mandiri',
      'Bisa membaca dan mengoptimalkan data iklan',
      'Punya strategi iklan yang terbukti (bukan coba-coba)',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya tertarik dengan kelas Meta Ads. Mohon info pendaftarannya.',
  },
  {
    id: 'affiliate-marketing',
    emoji: '\u{1F4B0}', // 💰
    title: 'Affiliate Marketing',
    tagline: 'Hasilkan Komisi Tanpa Modal Besar',
    description: 'Kelas ini mengajarkan strategi affiliate marketing yang sudah teruji untuk menghasilkan komisi secara konsisten. Dari memilih produk, membuat konten promosi, sampai mengoptimalkan konversi. Cocok untuk pemula yang ingin memulai bisnis online tanpa stok barang.',
    topics: [
      'Fundamental affiliate marketing dan cara kerjanya',
      'Cara memilih produk dan program affiliate yang menguntungkan',
      'Membangun platform promosi (blog, sosial media, YouTube)',
      'Teknik copywriting untuk konversi affiliate',
      'SEO untuk konten affiliate',
      'Email marketing untuk affiliate',
      'Analisis performa dan scaling income',
    ],
    audience: ['Pemula', 'Content Creator', 'Ibu Rumah Tangga', 'Mahasiswa'],
    outcomes: [
      'Memiliki sistem affiliate marketing yang bisa menghasilkan pasif income',
      'Bisa memilih produk affiliate dengan potensi komisi tinggi',
      'Punya strategi promosi yang terbukti efektif',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya tertarik dengan kelas Affiliate Marketing. Mohon info pendaftarannya.',
  },
  {
    id: 'ai-coding',
    emoji: '\u{1F4BB}', // 💻
    title: 'AI Coding',
    tagline: 'Bikin Aplikasi Tanpa Harus Hafal Kode',
    description: 'Kelas ini mengajarkan cara membuat aplikasi web dan mobile dengan bantuan AI coding assistant. Kamu tidak perlu hafal sintaks atau menjadi programmer senior — cukup pahami logika dasarnya, AI akan membantu menulis kodenya. Cocok untuk pemula yang ingin belajar coding dengan cara modern.',
    topics: [
      'Dasar logika pemrograman tanpa harus coding manual',
      'Menggunakan AI coding assistant (Cursor, Copilot, Claude)',
      'Membuat landing page dan website sederhana',
      'Membangun aplikasi web dengan data dinamis',
      'Integrasi API dan database',
      'Deploy dan publikasi aplikasi ke internet',
      'Studi kasus: 3 proyek nyata dari awal sampai deploy',
    ],
    audience: ['Pemula', 'Owner Bisnis', 'Product Manager', 'Designer'],
    outcomes: [
      'Mampu membuat dan deploy aplikasi web sendiri',
      'Bisa menggunakan AI coding assistant secara efektif',
      'Punya portofolio 3 proyek nyata',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya tertarik dengan kelas AI Coding. Mohon info pendaftarannya.',
  },
];

const VALUE_PROPS = [
  {
    emoji: '\u{1F4B5}', // 💵
    title: 'Harga Terjangkau',
    desc: 'Hanya Rp 500.000 per kelas. Investasi sekali, skill bertahan seumur hidup.',
  },
  {
    emoji: '\u{1F558}', // 🕘
    title: 'Jadwal Weekend',
    desc: '4x pertemuan tiap Hari Minggu. Nggak ganggu kerja atau kuliah.',
  },
  {
    emoji: '\u{1F30D}', // 🌍
    title: 'Online + Offline',
    desc: 'Bisa ikut dari mana aja via Zoom, atau tatap muka langsung.',
  },
  {
    emoji: '\u{1F528}', // 🔨
    title: 'Praktik Langsung',
    desc: 'Wajib PR dan final project. Bukan teori doang — beneran praktik.',
  },
  {
    emoji: '\u{1F468}\u200D\u{1F3EB}', // 👨‍🏫
    title: 'Pendampingan',
    desc: '1 bulan support setelah kelas selesai. Konsultasi bebas tanya kapan aja.',
  },
  {
    emoji: '\u{1F4AC}', // 💬
    title: 'Komunitas Eksklusif',
    desc: 'Akses grup Telegram khusus. Saling sharing sesama peserta + mentor.',
  },
];

const WA_PHONE = '6285280000449';

/* ─── Inline Style Helpers ─── */

const sectionStyle: React.CSSProperties = {
  padding: '5rem 1.5rem',
  background: '#0a0a1a',
};

const innerStyle: React.CSSProperties = {
  maxWidth: 1100,
  margin: '0 auto',
};

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: '0',
  zIndex: 9999,
  background: 'rgba(0,0,0,0.75)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
};

const modalStyle: React.CSSProperties = {
  background: '#1a1a2e',
  borderRadius: '1.25rem',
  padding: '2rem',
  maxWidth: '600px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  border: '1px solid rgba(99,102,241,0.2)',
};

const closeBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: 'rgba(255,255,255,0.6)',
  fontSize: '1.5rem',
  cursor: 'pointer',
  padding: '0.25rem',
};

const btnPrimary: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.85rem 2rem',
  borderRadius: '999px',
  border: 'none',
  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  color: '#fff',
  fontWeight: 700,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
};

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  borderRadius: '1rem',
  border: '1px solid rgba(255,255,255,0.06)',
  padding: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const tagStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  background: 'rgba(99,102,241,0.15)',
  color: '#a5b4fc',
  padding: '0.2rem 0.6rem',
  borderRadius: '999px',
  whiteSpace: 'nowrap',
};

/* ─── Modal Component ─── */

function CourseModal({
  course,
  onClose,
}: {
  course: Course;
  onClose: () => void;
}) {
  return (
    <div
      style={overlayStyle}
      onClick={(e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div style={modalStyle}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1.5rem',
          }}
        >
          <div>
            <span style={{ fontSize: '2rem' }}>{course.emoji}</span>
            <h3
              style={{
                margin: '0.5rem 0 0',
                color: '#fff',
                fontSize: '1.35rem',
              }}
            >
              {course.title}
            </h3>
            <p
              style={{
                margin: '0.25rem 0 0',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.85rem',
              }}
            >
              {course.tagline}
            </p>
          </div>
          <button onClick={onClose} style={closeBtnStyle}>
            ✕
          </button>
        </div>

        {/* Description */}
        <p
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
          }}
        >
          {course.description}
        </p>

        {/* Yang Akan Dipelajari */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4
            style={{
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            📚 Yang Akan Dipelajari
          </h4>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.25rem',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.85rem',
              lineHeight: 2,
            }}
          >
            {course.topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        {/* Cocok Untuk */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4
            style={{
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            🎯 Cocok Untuk
          </h4>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {course.audience.map((a) => (
              <span key={a} style={tagStyle}>
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Hasil Akhir */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4
            style={{
              color: '#fff',
              fontSize: '0.95rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            ✅ Hasil Akhir
          </h4>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.25rem',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.85rem',
              lineHeight: 2,
            }}
          >
            {course.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>

        {/* Price & CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.8rem',
              }}
            >
              Harga
            </p>
            <p
              style={{
                margin: '0.15rem 0 0',
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 700,
              }}
            >
              {course.price}
            </p>
          </div>
          <a
            href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(course.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={btnPrimary}
          >
            💬 Daftar Kelas {course.title} Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero Section ─── */

function HeroSection({ scrollToCourses }: { scrollToCourses: () => void }) {
  return (
    <section
      style={{
        padding: '6rem 1.5rem 5rem',
        background: 'linear-gradient(135deg, #0a0a1a 0%, #14142b 50%, #0a0a1a 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ ...innerStyle, position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#a5b4fc',
            background: 'rgba(99,102,241,0.15)',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase' as const,
          }}
        >
          🎓 Berkah Karya Academy
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.2,
            margin: '0 auto 1rem',
            maxWidth: '800px',
          }}
        >
          Kuasai Skill Digital Paling Dibutuhkan{' '}
          <span style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Saat Ini
          </span>
          , Langsung dari Praktisi.
        </h1>

        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            lineHeight: 1.7,
            maxWidth: '650px',
            margin: '0 auto 2rem',
          }}
        >
          Belajar langsung dari praktisi yang sudah bertahun-tahun berkecimpung di industri. 
          Kurikulum praktis, bukan teori mulu. Langsung bisa dipakai kerja.
        </p>

        <button onClick={scrollToCourses} style={{ ...btnPrimary, fontSize: '1.05rem', padding: '0.9rem 2.25rem' }}>
          Lihat Daftar Kursus ↓
        </button>
      </div>
    </section>
  );
}

/* ─── Value Propositions Section ─── */

function ValuePropsSection() {
  return (
    <section style={{ ...sectionStyle, padding: '4rem 1.5rem' }}>
      <div style={innerStyle}>
        <h2
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
          }}
        >
          Kenapa Belajar di Berkah Karya Academy?
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.9rem',
            marginBottom: '2.5rem',
          }}
        >
          Kami bikin belajar semudah dan seenyaman mungkin buat kamu
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {VALUE_PROPS.map((vp) => (
            <div
              key={vp.title}
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>
                {vp.emoji}
              </span>
              <h3
                style={{
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 700,
                  margin: '0 0 0.35rem',
                }}
              >
                {vp.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                }}
              >
                {vp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Course Card ─── */

function CourseCard({
  course,
  onDetail,
}: {
  course: Course;
  onDetail: () => void;
}) {
  return (
    <div style={cardStyle}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '0.25rem',
        }}
      >
        <span
          style={{
            fontSize: '2rem',
            width: '3.25rem',
            height: '3.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(99,102,241,0.1)',
            borderRadius: '0.75rem',
          }}
        >
          {course.emoji}
        </span>
        <div>
          <h3 style={{ margin: 0, color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>
            {course.title}
          </h3>
          <p style={{ margin: '0.15rem 0 0', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
            {course.tagline}
          </p>
        </div>
      </div>

      <p
        style={{
          margin: 0,
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.85rem',
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {course.description.slice(0, 160)}...
      </p>

      <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
        {course.audience.slice(0, 3).map((a) => (
          <span key={a} style={tagStyle}>
            {a}
          </span>
        ))}
        {course.audience.length > 3 && (
          <span
            style={{
              ...tagStyle,
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            +{course.audience.length - 3}
          </span>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
          {course.price}
        </span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={onDetail}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'transparent',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Lihat Detail Materi
          </button>
          <a
            href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(course.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...btnPrimary,
              padding: '0.5rem 1rem',
              fontSize: '0.75rem',
            }}
          >
            💬 Daftar
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Course Catalog Section ─── */

function CourseCatalogSection({
  courses,
  onDetail,
}: {
  courses: Course[];
  onDetail: (course: Course) => void;
}) {
  return (
    <section
      id="courses"
      style={{ ...sectionStyle, padding: '4rem 1.5rem 5rem' }}
    >
      <div style={innerStyle}>
        <h2
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
          }}
        >
          Pilih Kelas yang Sesuai dengan Kebutuhanmu
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.9rem',
            marginBottom: '2.5rem',
          }}
        >
          Semua kelas Rp 500.000 —{' '}
          <span style={{ color: '#a5b4fc' }}>investasi sekali, skill seumur hidup</span>
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onDetail={() => onDetail(course)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer CTA ─── */

function FooterCTA({ courses }: { courses: Course[] }) {
  return (
    <section
      style={{
        padding: '4rem 1.5rem',
        background: 'linear-gradient(135deg, #14142b, #1a1a3e)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>
          🚀
        </span>
        <h2
          style={{
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 700,
            margin: '0 0 0.75rem',
          }}
        >
          Siap Mulai Perjalanan Belajarmu?
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.9rem',
            marginBottom: '1.5rem',
            lineHeight: 1.6,
          }}
        >
          Konsultasi dulu via WhatsApp. Tanya apa aja, nggak ada kewajiban daftar.
          Kami bantu pilihkan kelas yang paling cocok buat kamu.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            alignItems: 'center',
          }}
        >
          {courses.map((course) => (
            <a
              key={course.id}
              href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(course.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...btnPrimary,
                width: '100%',
                maxWidth: '400px',
                justifyContent: 'center',
                fontSize: '0.9rem',
                padding: '0.75rem 1.5rem',
              }}
            >
              {course.emoji} Tanya Kelas {course.title}
            </a>
          ))}
        </div>

        <p
          style={{
            marginTop: '1.5rem',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '0.75rem',
          }}
        >
          Atau hubungi langsung via{' '}
          <a
            href={`https://wa.me/${WA_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#a5b4fc', textDecoration: 'none' }}
          >
            WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */

export default function AcademyPage({ locale }: { locale: Locale }) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const scrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout
      title="Berkah Karya Academy — Kuasai Skill Digital dari Praktisi"
      description="Kursus online AI, Meta Ads, Affiliate Marketing, dan AI Coding. Belajar langsung dari praktisi. Hanya Rp 500.000 per kelas."
      keywords="kursus AI, belajar AI, meta ads course, affiliate marketing, AI coding, kursus online Indonesia"
    >
      <HeroSection scrollToCourses={scrollToCourses} />
      <ValuePropsSection />
      <CourseCatalogSection courses={COURSES} onDetail={setSelectedCourse} />

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
        }}
      />

      <FooterCTA courses={COURSES} />

      {/* Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </Layout>
  );
}

/* ─── Static Props / Paths ─── */

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: params?.locale ?? 'id' },
});
