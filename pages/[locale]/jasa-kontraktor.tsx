import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import styles from '@/styles/JasaKontraktor.module.css';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

const WA_NUMBER = '6285800620035'; // 085800620035
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo%20BerkahKarya%20Kontraktor%2C%20saya%20tertarik%20dengan%20jasa%20konstruksi%20Anda.`;

const SERVICES = [
  { icon: '🏛️', title: 'Desain Rumah', desc: 'Desain rumah tinggal modern, minimalis, klasik & kontemporer sesuai impian Anda.' },
  { icon: '🏢', title: 'Desain Kantor', desc: 'Ruang kerja produktif dengan desain ergonomis & profesional untuk bisnis Anda.' },
  { icon: '🛍️', title: 'Desain Mall & Ruko', desc: 'Konsep komersial yang menarik pengunjung & mengoptimalkan ruang usaha.' },
  { icon: '🏨', title: 'Desain Hotel', desc: 'Pengalaman menginap premium dengan desain yang memadukan estetika & fungsi.' },
  { icon: '📐', title: 'Pembuatan RAB', desc: 'Rencana Anggaran Biaya detail, akurat, & transparan untuk setiap proyek.' },
  { icon: '🎨', title: 'Render Desain 3D', desc: 'Visualisasi fotorealistik sebelum bangun — lihat hasilnya terlebih dahulu.' },
  { icon: '🔨', title: 'Jasa Kontraktor', desc: 'Bangun & renovasi profesional untuk rumah, kantor, gedung, & kawasan komersial.' },
  { icon: '☀️', title: 'Kanopi & Pagar', desc: 'Kanopi baja ringan, pagar besi tempa, pagar minimalis — kuat & elegan.' },
  { icon: '🪑', title: 'Desain Interior', desc: 'Interior hunian & komersial: ruang tamu, kamar, dapur, kantor, lobby.' },
  { icon: '🚪', title: 'Pagar & Gerbang', desc: 'Pagar rumah, kantor, instansi, & gerbang otomatis dengan desain eksklusif.' },
  { icon: '🔄', title: 'Tangga Rumah', desc: 'Tangga beton, besi, kayu, & kombinasi — kokoh, aman, & memukau.' },
  { icon: '📋', title: 'Konsultasi Proyek', desc: 'Konsultasi gratis untuk rencana bangun & renovasi Anda.' },
];

const WHY_US = [
  { icon: '🏛️', title: 'Arsitek + Engineer Dalam 1 Tim', desc: 'Tidak perlu repot koordinasi antar vendor. Satu tim menangani desain, struktur, RAB, hingga pengawasan pembangunan.' },
  { icon: '📊', title: 'RAB Detail & Transparan', desc: 'Setiap biaya dipecah per item pekerjaan. Tidak ada biaya tersembunyi. Anda tahu persis dana yang dibutuhkan dari awal.' },
  { icon: '📅', title: 'Timeline Proyek Terstruktur', desc: 'Setiap proyek memiliki jadwal kerja mingguan yang terukur. Progress dilaporkan secara berkala via WhatsApp & foto.' },
  { icon: '🛡️', title: 'Garansi Pengerjaan', desc: 'Garansi untuk setiap pekerjaan yang kami lakukan. Jika ada kendala setelah serah terima, tim kami siap turun tangan tanpa biaya.' },
];
const PRICING = [
  {
    name: 'Desain & RAB',
    price: 'Rp 20rb',
    unit: '/meter persegi',
    featured: false,
    features: ['Desain rumah/kantor', 'Gambar 2D & 3D', 'RAB detail & akurat', 'Revisi 2x gratis', 'Konsultasi gratis'],
  },
  {
    name: 'Interior Premium',
    price: 'Rp 2,8jt',
    unit: '/proyek mulai dari',
    featured: true,
    features: ['Desain interior ruangan', '3D render fotorealistik', 'Pemilihan material', 'Revisi hingga puas', 'Pengawasan pengerjaan'],
  },
  {
    name: 'Pagar & Kanopi',
    price: 'Rp 350rb',
    unit: '/meter mulai dari',
    featured: false,
    features: ['Kanopi baja ringan', 'Pagar besi/minimalis', 'Pemasangan profesional', 'Material berkualitas', 'Garansi pengerjaan'],
  },
];

const PROCESS = [
  { title: 'Konsultasi', desc: 'Diskusi kebutuhan, lokasi, & budget secara gratis via WhatsApp atau tatap muka.' },
  { title: 'Desain & RAB', desc: 'Tim kami buatkan desain lengkap dengan RAB terperinci tanpa biaya tambahan.' },
  { title: 'Eksekusi', desc: 'Proyek dikerjakan oleh tim profesional dengan pengawasan ketat & quality control.' },
  { title: 'Serah Terima', desc: 'Hasil jadi diperiksa bersama, garansi berlaku, & Anda tinggal menikmati.' },
];

const TESTIMONIALS = [
  { name: 'Budi Santoso', role: 'Pemilik Rumah, Jakarta Selatan | 2025', initials: 'BS', text: '"Rumah 2 lantai 250m² selesai sesuai timeline walau sempat ragu karena pengalaman pertama bangun rumah. RAB-nya detail — tidak ada biaya mendadak. Hasilnya sesuai render 3D. Makasih tim BerkahKarya!"' },
  { name: 'Siti Rahmawati', role: 'Owner Kafe, Bandung | 2024', initials: 'SR', text: '"Desain interior kafe saya dibuat sangat detail. Suasananya jadi jauh lebih nyaman, pengunjung betah berlama-lama, omzet naik 30% dalam 3 bulan pertama."' },
  { name: 'Andi Pratama', role: 'Direktur PT. Maju Jaya | 2024', initials: 'AP', text: '"Kantor baru 3 lantai selesai dalam 4 bulan. Kualitas pengerjaan rapi, tim sangat komunikatif, dan progress selalu dilaporkan mingguan. Profesional banget."' },
  { name: 'Dewi Lestari', role: 'Ibu Rumah Tangga, Surabaya | 2025', initials: 'DL', text: '"Terima kasih BerkahKarya! Awalnya takut renovasi molor & berantakan, tapi ternyata selesai 2 minggu lebih cepat. Desainnya persis seperti yang saya bayangkan."' },
  { name: 'Rudi Hermawan', role: 'Pengusaha, Semarang | 2024', initials: 'RH', text: '"Pagar & kanopi rumah kokoh & elegan. Yang paling saya suka, mereka kasih saran material sesuai budget tanpa maksa pake yang mahal. Harga bersahabat."' },
  { name: 'Mega Putri', role: 'Arsitek Mitra, Yogyakarta | 2025', initials: 'MP', text: '"Kolaborasi dengan tim BerkahKarya sangat menyenangkan. Detail-oriented, tepat janji, dan selalu prioritasin kualitas. Recommended untuk kolega."' },
];

const PORTFOLIO_IMAGES = [
  { src: '/images/jasa-kontraktor/desain-rumah.jpg', label: 'Desain Rumah Modern 2 Lantai', sub: 'Jakarta Selatan', challenge: 'Lahan terbatas 120m² tapi butuh 4 kamar + ruang keluarga luas', solution: 'Konsep open space dengan pencahayaan maksimal & vertical zoning', result: 'Rumah terasa lega, semua ruangan dapat cahaya alami' },
  { src: '/images/jasa-kontraktor/interior-kantor.jpg', label: 'Interior Kantor Eksekutif', sub: 'SCBD, Jakarta', challenge: 'Ruang sempit 80m² untuk 20 staf, harus tetap nyaman', solution: 'Layout open plan + partisi kaca untuk kesan luas & modern', result: 'Produktivitas staf meningkat, ruangan terlihat 2x lebih luas' },
  { src: '/images/jasa-kontraktor/desain-hotel.jpg', label: 'Renovasi Hotel Boutique', sub: 'Bandung', challenge: 'Bangunan lama 1970-an, perlu tampilan modern tanpa rubah struktur', solution: 'Fasad baru + interior redesign dengan gaya industrial-modern', result: 'Occupancy rate naik 40% setelah renovasi' },
  { src: '/images/jasa-kontraktor/fasad-bangunan.jpg', label: 'Fasad & Tampak Bangunan', sub: 'Kawasan Bisnis', challenge: 'Bangunan kumuh perlu citra profesional untuk tarik tenant', solution: 'Desain fasad modern dengan kombinasi batu alam & kaca', result: 'Nilai properti naik 25%, tenant baru dalam 2 bulan' },
  { src: '/images/jasa-kontraktor/taman-lansekap.jpg', label: 'Taman & Lansekap Residence', sub: 'BSD City', challenge: 'Lahan 200m² tandus, pemilik ingin taman tropis low-maintenance', solution: 'Tanaman lokal + sistem irigasi otomatis + area duduk batu alam', result: 'Taman hijau sepanjang tahun, perawatan minimal' },
  { src: '/images/jasa-kontraktor/interior-premium.jpg', label: 'Desain Interior Premium', sub: 'Apartemen, Jakarta', challenge: 'Unit apartment 45m² ingin terasa seperti suite hotel bintang 5', solution: 'Desain multifungsi dengan material premium & pencahayaan layered', result: 'Nilai jual apartment naik 35% setelah renovasi' },
  { src: '/images/jasa-kontraktor/konstruksi-gedung.jpg', label: 'Konstruksi Gedung 5 Lantai', sub: 'Kuningan, Jakarta', challenge: 'Proyek padat modal, deadline ketat untuk H-7 hari raya', solution: 'Manajemen proyek harian + 3 shift pekerja + material ready stock', result: 'Selesai H-14, tepat waktu & sesuai RAB' },
  { src: '/images/jasa-kontraktor/kanopi-pagar.jpg', label: 'Kanopi & Pagar Minimalis', sub: 'Depok', challenge: 'Rumah sudut perlu kanopi luas + pagar tanpa mengurangi estetika', solution: 'Kanopi baja ringan bentang lebar + pagar kombinasi besi & kayu', result: 'Teras teduh, halaman aman, tampak rumah lebih modern' },
];
const trackWhatsApp = (label: string) => {
  try {
      if (window.fbq) {
        window.fbq('track', 'Contact', {
          content_name: label,
          content_category: 'whatsapp_cta',
          value: 1,
          currency: 'IDR',
        });
      }

      // GA4 event
      if (window.gtag) {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: label,
          value: 1,
        });
      }

      // TikTok pixel
      if (window.ttq) {
        window.ttq.track('Contact', {
          content_name: label,
        });
      }
    } catch (e) {
      // Silently handle
    }
  }
;

export default function JasaKontraktor({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [portfolioExpanded, setPortfolioExpanded] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track page view on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Meta Pixel ViewContent
        if (window.fbq) {
          window.fbq('track', 'ViewContent', {
            content_name: 'jasa-kontraktor-landing',
            content_category: 'landing_page',
            value: 1,
            currency: 'IDR',
          });
        }
        // GA4 event
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: 'Jasa Kontraktor Profesional',
            page_location: window.location.href,
          });
        }
        // TikTok pixel
        if (window.ttq) {
          window.ttq.track('ViewContent', {
            content_name: 'jasa-kontraktor-landing',
          });
        }
      } catch (e) {
        // silently handle
      }
    }
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleWa = useCallback((label: string) => {
    trackWhatsApp(label);
    window.open(WA_LINK, '_blank');
  }, []);

  const isIndonesian = locale === 'id';

  const meta = {
    title: isIndonesian
      ? 'Jasa Kontraktor Profesional — Desain Rumah, Kantor, Gedung | BerkahKarya'
      : 'Professional Contractor Services — House, Office, Building Design | BerkahKarya',
    description: isIndonesian
      ? 'Jasa kontraktor & desain bangunan profesional: rumah, kantor, hotel, mall, interior, kanopi, pagar, RAB. Gratis konsultasi! Hubungi WhatsApp 085800620035.'
      : 'Professional contractor & building design services: house, office, hotel, mall, interior, canopy, fence, RAB. Free consultation!',
  };

  const content = {
    hero: {
      badge: isIndonesian ? '🏗️ KONSULTAN BANGUNAN TERPERCAYA' : '🏗️ TRUSTED BUILDING CONSULTANT',
      title: isIndonesian
        ? 'Bangun Rumah Impian' : 'Build Your Dream Home',
      titleBold: isIndonesian ? 'Tanpa Khawatir Biaya Membengkak' : 'Without Budget Surprises',
      subtitle: isIndonesian
        ? 'Dari desain, RAB, hingga pembangunan — tim kami bantu rencanakan rumah Anda dengan lebih terarah & transparan. GRATIS konsultasi & estimasi awal.'
        : 'From design & RAB to construction — our team helps you plan your home with clarity & transparency. FREE initial consultation & estimate.',
      cta: isIndonesian ? '🎁 Konsultasi + Estimasi Gratis' : '🎁 Free Consultation & Estimate',
      stats: [
        { num: '500+', label: isIndonesian ? 'Proyek Sukses' : 'Projects Done' },
        { num: '10+', label: isIndonesian ? 'Tahun Pengalaman' : 'Years Experience' },
        { num: '98%', label: isIndonesian ? 'Kepuasan Klien' : 'Client Satisfaction' },
        { num: '50+', label: isIndonesian ? 'Kota di Indonesia' : 'Cities Served' },
      ],
    },
    services: {
      tag: isIndonesian ? 'LAYANAN KAMI' : 'OUR SERVICES',
      title: isIndonesian ? 'Solusi Bangunan & Desain' : 'Building & Design Solutions',
      titleHighlight: isIndonesian ? 'Lengkap' : 'Complete',
      desc: isIndonesian
        ? 'Dari konsep hingga pembangunan — kami hadir sebagai mitra terpercaya untuk setiap proyek konstruksi & desain Anda.'
        : 'From concept to construction — we are your trusted partner for every construction & design project.',
    },
    portfolio: {
      tag: isIndonesian ? 'PORTOFOLIO' : 'PORTFOLIO',
      title: isIndonesian ? 'Karya Terbaik Kami' : 'Our Best Works',
      desc: isIndonesian
        ? 'Setiap proyek adalah bukti komitmen kami terhadap kualitas, ketepatan, & kepuasan klien.'
        : 'Every project is proof of our commitment to quality, precision & client satisfaction.',
    },
    why: {
      tag: isIndonesian ? 'MENGAPA KAMI' : 'WHY US',
      title: isIndonesian ? 'Mengapa Memilih' : 'Why Choose',
      titleHighlight: isIndonesian ? 'BerkahKarya Kontraktor?' : 'BerkahKarya Contractor?',
      desc: isIndonesian
        ? 'Kami tidak hanya membangun struktur — kami membangun kepercayaan & hubungan jangka panjang dengan setiap klien.'
        : 'We don\'t just build structures — we build trust & long-term relationships with every client.',
    },
    pricing: {
      tag: isIndonesian ? 'HARGA TERJANGKAU' : 'AFFORDABLE PRICING',
      title: isIndonesian ? 'Harga Bersahabat,' : 'Friendly Prices,',
      titleHighlight: isIndonesian ? 'Kualitas Premium' : 'Premium Quality',
      desc: isIndonesian
        ? 'Transparan tanpa biaya tersembunyi. Dapatkan estimasi GRATIS untuk proyek Anda.'
        : 'Transparent with no hidden fees. Get a FREE estimate for your project.',
    },
    process: {
      tag: isIndonesian ? 'CARA KERJA' : 'HOW IT WORKS',
      title: isIndonesian ? 'Mudah & Transparan' : 'Easy & Transparent',
      desc: isIndonesian
        ? 'Proses sederhana dari konsultasi hingga proyek selesai tepat waktu sesuai kesepakatan.'
        : 'Simple process from consultation to project completion on time as agreed.',
    },
    testimonial: {
      tag: isIndonesian ? 'TESTIMONIAL' : 'TESTIMONIALS',
      title: isIndonesian ? 'Apa Kata Klien Kami' : 'What Our Clients Say',
    },
    problems: {
      tag: isIndonesian ? 'SEBELUM BANGUN RUMAH' : 'BEFORE BUILDING',
      title: isIndonesian ? 'Sering Terjadi Saat' : 'Common Issues When',
      titleHighlight: isIndonesian ? 'Bangun Rumah Pertama Kali?' : 'Building Your First Home?',
      problems: [
        { icon: '💰', title: isIndonesian ? 'Budget Membengkak' : 'Budget Overruns', desc: isIndonesian ? 'Estimasi awal tidak detail, biaya material naik di tengah jalan, pekerjaan tambah-tambah tanpa hitung-hitungan.' : 'Initial estimates are vague, material costs rise midway, extra work piles up without calculation.' },
        { icon: '🔄', title: isIndonesian ? 'Desain Berubah Terus' : 'Constant Design Changes', desc: isIndonesian ? 'Bangun setengah jalan baru sadar tata ruang tidak sesuai kebutuhan, akhirnya bongkar pasang — buang waktu & uang.' : 'Halfway through you realize the layout doesn\'t fit, leading to costly rework & wasted time.' },
        { icon: '🧱', title: isIndonesian ? 'Material Tidak Sesuai' : 'Wrong Materials', desc: isIndonesian ? 'Tukang pakai material asal-asalan atau tidak sesuai spek karena tidak ada pengawasan dari ahlinya.' : 'Workers use subpar materials with no proper supervision from a qualified engineer.' },
        { icon: '⏰', title: isIndonesian ? 'Waktu Pengerjaan Molor' : 'Delayed Completion', desc: isIndonesian ? 'Janji 3 bulan jadi 6 bulan. Tidak ada jadwal kerja yang jelas, progress tidak terukur, komunikasi terputus.' : 'Promised 3 months becomes 6. No clear work schedule, unmeasured progress, communication breakdown.' },
      ],
      solutions: [
        isIndonesian ? '✅ Konsep desain matang sebelum bangun — jadi semua detail sudah diputuskan sejak awal' : '✅ Finalized design concept before construction — all decisions made upfront',
        isIndonesian ? '✅ RAB detail per item pekerjaan — Anda tahu persis alokasi dana dari awal' : '✅ Detailed RAB per work item — you know exactly where every rupiah goes',
        isIndonesian ? '✅ Gambar kerja lengkap untuk acuan tukang di lapangan' : '✅ Complete working drawings as a field reference for workers',
        isIndonesian ? '✅ Pendampingan & monitoring proyek secara berkala' : '✅ Regular project monitoring & progress reporting',
      ],
    },
    faq: {
      tag: isIndonesian ? 'FAQ' : 'FAQ',
      title: isIndonesian ? 'Pertanyaan Umum' : 'Frequently Asked Questions',
      items: [
        { q: isIndonesian ? 'Berapa biaya untuk bangun rumah?' : 'How much does it cost to build a house?', a: isIndonesian ? 'Biaya sangat tergantung luas bangunan, spesifikasi material, dan lokasi. Tim kami bisa memberikan estimasi awal secara GRATIS setelah diskusi singkat mengenai kebutuhan Anda. Konsultasi tidak mengikat.' : 'Costs depend on building size, material specs, and location. Our team can provide a FREE initial estimate after a brief discussion about your needs. No obligation.' },
        { q: isIndonesian ? 'Berapa lama proses bangun rumah?' : 'How long does construction take?', a: isIndonesian ? 'Rumah tinggal 1-2 lantai biasanya selesai dalam 3-6 bulan tergantung luas & kompleksitas. Kami memberikan timeline proyek yang detail di awal dan melaporkan progress secara berkala.' : 'A 1-2 story home typically completes in 3-6 months depending on size & complexity. We provide a detailed timeline upfront with regular progress reports.' },
        { q: isIndonesian ? 'Apakah hasil akhir sesuai dengan desain?' : 'Will the result match the design?', a: isIndonesian ? 'Kami memberikan 3D render fotorealistik SEBELUM pembangunan dimulai. Anda bisa lihat & revisi sampai puas. Di lapangan, kami menggunakan gambar kerja detail sebagai acuan agar hasilnya presisi.' : 'We provide photorealistic 3D renders BEFORE construction begins. You can review & revise until satisfied. In the field, detailed working drawings ensure precision.' },
        { q: isIndonesian ? 'Bagaimana cara memulai?' : 'How do I get started?', a: isIndonesian ? 'Cukup klik tombol "Konsultasi + Estimasi Gratis" di atas. Diskusi awal via WhatsApp, tim kami akan membantu memahami kebutuhan Anda, dan memberikan gambaran biaya — tanpa biaya & tanpa kewajiban.' : 'Simply click the "Free Consultation & Estimate" button above. Initial discussion via WhatsApp, our team will understand your needs, and provide a cost overview — free & no obligation.' },
      ],
    },
    cta: {
      subtitle: isIndonesian ? 'SIAP MEWUJUDKAN IMPIAN ANDA?' : 'READY TO MAKE YOUR DREAMS COME TRUE?',
      title: isIndonesian ? 'Konsultasi Gratis' : 'Free Consultation',
      titleBold: isIndonesian ? 'Sekarang Juga!' : 'Now!',
      desc: isIndonesian
        ? 'Tim kami siap membantu dari konsep hingga realisasi. Tidak ada kewajiban — dapatkan estimasi gratis untuk proyek Anda.'
        : 'Our team is ready to help from concept to realization. No obligation — get a free estimate for your project.',
      cta: isIndonesian ? 'Chat WhatsApp Sekarang' : 'Chat WhatsApp Now',
      cta2: isIndonesian ? 'Telepon Langsung' : 'Call Directly',
    },
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content="jasa kontraktor, desain rumah, jasa bangun rumah, jasa renovasi, kontraktor jakarta, desain interior, jasa kanopi, jasa pagar, jasa RAB, jasa desain bangunan, BerkahKarya" />
        <link rel="canonical" href={`https://berkahkarya.org/${locale}/jasa-kontraktor`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://berkahkarya.org/${locale}/jasa-kontraktor`} />
        <meta property="og:image" content="https://berkahkarya.org/images/jasa-kontraktor/desain-rumah.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'BerkahKarya Kontraktor',
              image: 'https://berkahkarya.org/images/jasa-kontraktor/desain-rumah.jpg',
              description: 'Jasa kontraktor & desain bangunan profesional di Indonesia.',
              telephone: '+6285800620035',
              url: `https://berkahkarya.org/${locale}/jasa-kontraktor`,
              address: { '@type': 'PostalAddress', addressCountry: 'ID' },
              priceRange: 'Rp20rb - Rp2,8jt',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '200',
                bestRating: '5',
              },
            }),
          }}
        />
      </Head>

      <div className={styles.page}>
        {/* ─── NAVBAR ─── */}
        <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
          <div className={styles.navLogo}>
            <span className={styles.navLogoIcon}>BK</span>
            BerkahKarya Kontraktor
          </div>
          <div className={styles.navLinks}>
            <button className={styles.navLink} onClick={() => scrollTo('services')}>Layanan</button>
            <button className={styles.navLink} onClick={() => scrollTo('portfolio')}>Portfolio</button>
            <button className={styles.navLink} onClick={() => scrollTo('pricing')}>Harga</button>
            <button className={styles.navLink} onClick={() => scrollTo('testimonials')}>Testimoni</button>
          </div>
          <div className={styles.navCta}>
            <button className={`${styles.btn} ${styles.btnGold} ${styles.btnSm}`} onClick={() => handleWa('navbar')}>
              💬 Konsultasi
            </button>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <img src="/images/jasa-kontraktor/fasad-bangunan.jpg" alt="Hero Background" />
          </div>
          <div className={styles.heroOverlay} />
          <div className={styles.heroOverlay2} />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroPulse} />
              {content.hero.badge}
            </div>
            <h1 className={styles.heroTitle}>
              {content.hero.title}{' '}
              <span className={styles.heroGradient}>{content.hero.titleBold}</span>
            </h1>
            <p className={styles.heroSub}>{content.hero.subtitle}</p>
            <div className={styles.heroActions}>
              <button
                className={`${styles.btn} ${styles.btnGold} ${styles.btnLg}`}
                onClick={() => handleWa('hero_main')}
              >
                💬 {content.hero.cta}
              </button>
              <button
                className={`${styles.btn} ${styles.btnOutline} ${styles.btnLg}`}
                onClick={() => scrollTo('portfolio')}
              >
                Lihat Portfolio
              </button>
            </div>
            <div className={styles.heroStats}>
              {content.hero.stats.map((stat, i) => (
                <div key={i} className={styles.heroStat}>
                  <div className={styles.heroStatNum}>{stat.num}</div>
                  <div className={styles.heroStatLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section id="services" className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.container}>
            <div className={`${styles.center}`}>
              <span className={styles.sectionTag}>{content.services.tag}</span>
              <h2 className={styles.sectionTitle}>
                {content.services.title}{' '}
                <span className={styles.gold}>{content.services.titleHighlight}</span>
              </h2>
              <p className={styles.sectionDesc}>{content.services.desc}</p>
            </div>
            <div className={styles.servicesGrid}>
              {SERVICES.map((svc, i) => (
                <div key={i} className={styles.serviceCard}>
                  <span className={styles.serviceIcon}>{svc.icon}</span>
                  <h3 className={styles.serviceTitle}>{svc.title}</h3>
                  <p className={styles.serviceDesc}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SEBELUM BANGUN (PROBLEM-AGITATE-SOLUTION) ─── */}
        <section className={styles.problemSection}>
          <div className={styles.container}>
            <div className={`${styles.center}`}>
              <span className={styles.sectionTag}>{content.problems.tag}</span>
              <h2 className={styles.sectionTitle}>
                {content.problems.title}{' '}
                <span className={styles.gold}>{content.problems.titleHighlight}</span>
              </h2>
            </div>

            <div className={styles.problemGrid}>
              {content.problems.problems.map((p, i) => (
                <div key={i} className={styles.problemCard}>
                  <span className={styles.problemIcon}>{p.icon}</span>
                  <h3 className={styles.problemTitle}>{p.title}</h3>
                  <p className={styles.problemDesc}>{p.desc}</p>
                </div>
              ))}
            </div>

            <div className={`${styles.center}`}>
              <div className={styles.solutionBox}>
                <h3 className={styles.solutionTitle}>
                  {isIndonesian ? 'Solusi Kami:' : 'Our Solution:'}
                </h3>
                <ul className={styles.solutionList}>
                  {content.problems.solutions.map((s, i) => (
                    <li key={i} className={styles.solutionItem}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`${styles.center}`}>
              <button
                className={`${styles.btn} ${styles.btnGold} ${styles.btnLg}`}
                onClick={() => handleWa('pas_section')}
              >
                🎁 {isIndonesian ? 'Konsultasi + Estimasi Gratis' : 'Free Consultation & Estimate'}
              </button>
            </div>
          </div>
        </section>

        {/* ─── PORTFOLIO ─── */}
        <section id="portfolio" className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.center}`}>
              <span className={styles.sectionTag}>{content.portfolio.tag}</span>
              <h2 className={styles.sectionTitle}>{content.portfolio.title}</h2>
              <p className={styles.sectionDesc}>{content.portfolio.desc}</p>
            </div>
            <div className={styles.portfolioGrid}>
              {PORTFOLIO_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className={`${styles.portfolioItem} ${i === 0 ? styles.portfolioItemLarge : ''} ${portfolioExpanded === i ? styles.portfolioItemActive : ''}`}
                  onClick={() => setPortfolioExpanded(portfolioExpanded === i ? null : i)}
                >
                  <img src={img.src} alt={img.label} loading={i < 3 ? 'eager' : 'lazy'} />
                  <div className={styles.portfolioOverlay}>
                    <span className={styles.portfolioLabel}>{img.label}</span>
                    <span className={styles.portfolioSub}>{img.sub}</span>
                  </div>
                  {portfolioExpanded === i && (
                    <div className={styles.caseStudy}>
                      <div className={styles.caseStudyContent}>
                        <h4 className={styles.caseStudyLabel}>
                          {isIndonesian ? 'Tantangan' : 'Challenge'}
                        </h4>
                        <p className={styles.caseStudyText}>{img.challenge}</p>
                      </div>
                      <div className={styles.caseStudyContent}>
                        <h4 className={styles.caseStudyLabel}>
                          {isIndonesian ? 'Solusi' : 'Solution'}
                        </h4>
                        <p className={styles.caseStudyText}>{img.solution}</p>
                      </div>
                      <div className={styles.caseStudyContent}>
                        <h4 className={styles.caseStudyLabel}>
                          {isIndonesian ? 'Hasil' : 'Result'}
                        </h4>
                        <p className={styles.caseStudyText}>{img.result}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY US ─── */}
        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.container}>
            <div className={`${styles.center}`}>
              <span className={styles.sectionTag}>{content.why.tag}</span>
              <h2 className={styles.sectionTitle}>
                {content.why.title}{' '}
                <span className={styles.gold}>{content.why.titleHighlight}</span>
              </h2>
              <p className={styles.sectionDesc}>{content.why.desc}</p>
            </div>
            <div className={styles.whyGrid}>
              {WHY_US.map((item, i) => (
                <div key={i} className={styles.whyCard}>
                  <div className={styles.whyIcon}>{item.icon}</div>
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="pricing" className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.center}`}>
              <span className={styles.sectionTag}>{content.pricing.tag}</span>
              <h2 className={styles.sectionTitle}>
                {content.pricing.title}{' '}
                <span className={styles.gold}>{content.pricing.titleHighlight}</span>
              </h2>
              <p className={styles.sectionDesc}>{content.pricing.desc}</p>
            </div>
            <div className={styles.pricingGrid}>
              {PRICING.map((pkg, i) => (
                <div
                  key={i}
                  className={`${styles.pricingCard} ${pkg.featured ? styles.pricingFeatured : ''}`}
                >
                  {pkg.featured && <span className={styles.pricingBadge}>TERLARIS</span>}
                  <h3 className={styles.pricingName}>{pkg.name}</h3>
                  <div className={styles.pricingPrice}>{pkg.price}</div>
                  <div className={styles.pricingUnit}>{pkg.unit}</div>
                  <ul className={styles.pricingFeatures}>
                    {pkg.features.map((f, j) => (
                      <li key={j} className={styles.pricingFeature}>
                        <span className={styles.pricingCheck}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`${styles.btn} ${pkg.featured ? styles.btnGold : styles.btnOutline} ${styles.btnFull}`}
                    onClick={() => handleWa(`pricing_${pkg.name.toLowerCase().replace(/\s+/g, '_')}`)}
                  >
                    💬 Konsultasi Sekarang
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS ─── */}
        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.container}>
            <div className={`${styles.center}`}>
              <span className={styles.sectionTag}>{content.process.tag}</span>
              <h2 className={styles.sectionTitle}>{content.process.title}</h2>
              <p className={styles.sectionDesc}>{content.process.desc}</p>
            </div>
            <div className={styles.processGrid}>
              {PROCESS.map((step, i) => (
                <div key={i} className={styles.processStep}>
                  <div className={styles.processNum}>{i + 1}</div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section id="testimonials" className={styles.section}>
          <div className={styles.container}>
            <div className={`${styles.center}`}>
              <span className={styles.sectionTag}>{content.testimonial.tag}</span>
              <h2 className={styles.sectionTitle}>{content.testimonial.title}</h2>
            </div>
            <div className={styles.testiGrid}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className={styles.testiCard}>
                  <div className={styles.testiStars}>{'★'.repeat(5)}</div>
                  <p className={styles.testiText}>"{t.text}"</p>
                  <div className={styles.testiAuthor}>
                    <div className={styles.testiAvatar}>{t.initials}</div>
                    <div>
                      <div className={styles.testiName}>{t.name}</div>
                      <div className={styles.testiRole}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.container}>
            <div className={`${styles.center}`}>
              <span className={styles.sectionTag}>{content.faq.tag}</span>
              <h2 className={styles.sectionTitle}>{content.faq.title}</h2>
            </div>
            <div className={styles.faqList}>
              {content.faq.items.map((item, i) => (
                <div
                  key={i}
                  className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <div className={styles.faqQuestion}>
                    <span>{item.q}</span>
                    <span className={styles.faqArrow}>{openFaq === i ? '−' : '+'}</span>
                  </div>
                  <div className={styles.faqAnswer}>
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <span className={styles.sectionTag}>{content.cta.subtitle}</span>
            <h2 className={styles.finalCtaTitle}>
              {content.cta.title}{' '}
              <span className={styles.gold}>{content.cta.titleBold}</span>
            </h2>
            <p className={styles.finalCtaDesc}>{content.cta.desc}</p>
            <div className={styles.finalCtaActions}>
              <button
                className={`${styles.btn} ${styles.btnGold} ${styles.btnLg}`}
                onClick={() => handleWa('final_cta')}
              >
                💬 {content.cta.cta}
              </button>
              <button
                className={`${styles.btn} ${styles.btnOutline} ${styles.btnLg}`}
                onClick={() => handleWa('call_direct')}
              >
                📞 {content.cta.cta2}
              </button>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className={styles.footer}>
          <div className={`${styles.container} ${styles.footerInner}`}>
            <div className={styles.footerBrand}>BerkahKarya Kontraktor</div>
            <div className={styles.footerLinks}>
              <button className={styles.footerLink} onClick={() => scrollTo('services')}>Layanan</button>
              <button className={styles.footerLink} onClick={() => scrollTo('portfolio')}>Portfolio</button>
              <button className={styles.footerLink} onClick={() => scrollTo('pricing')}>Harga</button>
              <button className={styles.footerLink} onClick={() => handleWa('footer')}>WhatsApp</button>
            </div>
            <div className={styles.footerCopy}>
              © {new Date().getFullYear()} BerkahKarya Kontraktor. All rights reserved.
            </div>
          </div>
        </footer>

        {/* ─── FLOATING WA ─── */}
        <button
          className={styles.floatWa}
          onClick={() => handleWa('floating')}
          aria-label="Chat WhatsApp"
          title="Chat WhatsApp"
        >
          💬
        </button>
      </div>
    </>
  );
}
