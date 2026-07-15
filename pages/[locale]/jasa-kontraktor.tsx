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
  { icon: '✓', title: '10+ Tahun Pengalaman', desc: 'Ribuan proyek sukses dari rumah tinggal hingga bangunan komersial berskala besar.' },
  { icon: '✓', title: 'Tepat Waktu & Anggaran', desc: 'Komitmen terhadap deadline dan transparansi biaya tanpa biaya tersembunyi.' },
  { icon: '✓', title: 'Tim Profesional', desc: 'Arsitek, insinyur, & pekerja berpengalaman yang tersertifikasi di bidangnya.' },
  { icon: '✓', title: 'Garansi Kepuasan', desc: 'Kualitas terjamin dengan garansi purna jual & layanan konsultasi gratis seumur hidup.' },
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
  { name: 'Budi Santoso', role: 'Pemilik Rumah, Jakarta', initials: 'BS', text: 'Hasil renovasi rumah saya luar biasa! Tepat waktu, sesuai budget, dan kualitasnya premium. Sangat merekomendasikan!' },
  { name: 'Siti Rahmawati', role: 'Owner Kafe, Bandung', initials: 'SR', text: 'Desain interior kafe saya dibuat sangat detail. Suasananya jadi jauh lebih nyaman dan pengunjung betah berlama-lama.' },
  { name: 'Andi Pratama', role: 'Direktur PT. Maju Jaya', initials: 'AP', text: 'Kantor baru kami selesai dalam 3 bulan. Kualitas pengerjaan sangat rapi dan profesional. Tim sangat komunikatif.' },
  { name: 'Dewi Lestari', role: 'Ibu Rumah Tangga, Surabaya', initials: 'DL', text: 'Terima kasih BerkahKarya! Rumah impian saya jadi kenyataan. Desainnya persis seperti yang saya bayangkan.' },
  { name: 'Rudi Hermawan', role: 'Pengusaha, Semarang', initials: 'RH', text: 'Pagar dan kanopi rumah saya sangat kokoh dan elegan. Harga bersahabat dengan kualitas yang tidak main-main.' },
  { name: 'Mega Putri', role: 'Arsitek, Yogyakarta', initials: 'MP', text: 'Kolaborasi dengan tim BerkahKarya sangat menyenangkan. Mereka sangat detail dan profesional dalam setiap proyek.' },
];

const PORTFOLIO_IMAGES = [
  { src: '/images/jasa-kontraktor/work1.jpeg', label: 'Desain Rumah Modern', sub: 'Jakarta Selatan' },
  { src: '/images/jasa-kontraktor/work2.jpeg', label: 'Interior Kantor', sub: 'SCBD, Jakarta' },
  { src: '/images/jasa-kontraktor/work3.jpeg', label: 'Desain Hotel', sub: 'Bandung' },
  { src: '/images/jasa-kontraktor/work4.jpeg', label: 'Fasad Bangunan', sub: 'Kawasan Bisnis' },
  { src: '/images/jasa-kontraktor/work5.jpeg', label: 'Taman & Lansekap', sub: 'Residence, BSD' },
  { src: '/images/jasa-kontraktor/work6.jpeg', label: 'Desain Interior Premium', sub: 'Apartemen, Jakarta' },
  { src: '/images/jasa-kontraktor/work7.jpeg', label: 'Konstruksi Gedung', sub: 'Kuningan, Jakarta' },
  { src: '/images/jasa-kontraktor/work8.jpeg', label: 'Kanopi & Pagar Minimalis', sub: 'Depok' },
];


const trackWhatsApp = (label: string) => {
  if (typeof window !== 'undefined') {
    try {
      // Enhanced Meta Pixel tracking
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
};

export default function JasaKontraktor({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);

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
      badge: isIndonesian ? '🔥 KONTRAKTOR PROFESIONAL INDONESIA' : '🔥 PROFESSIONAL CONTRACTOR INDONESIA',
      title: isIndonesian
        ? 'Bangun & Renovasi' : 'Build & Renovate',
      titleBold: isIndonesian ? 'Impian Anda' : 'Your Dreams',
      subtitle: isIndonesian
        ? 'Konsultan & kontraktor terpercaya untuk desain rumah, kantor, hotel, mall, interior, kanopi, pagar & RAB. Lebih dari 500+ proyek sukses di seluruh Indonesia.'
        : 'Trusted consultant & contractor for house, office, hotel, mall, interior, canopy, fence & RAB design. Over 500+ successful projects across Indonesia.',
      cta: isIndonesian ? 'Konsultasi Gratis via WhatsApp' : 'Free Consultation via WhatsApp',
      stats: [
        { num: '500+', label: isIndonesian ? 'Proyek Selesai' : 'Projects Done' },
        { num: '10+', label: isIndonesian ? 'Tahun Pengalaman' : 'Years Experience' },
        { num: '98%', label: isIndonesian ? 'Kepuasan Klien' : 'Client Satisfaction' },
        { num: '50+', label: isIndonesian ? 'Kota Tersebar' : 'Cities Served' },
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
        <meta property="og:image" content="https://berkahkarya.org/images/jasa-kontraktor/work1.jpeg" />
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
              image: 'https://berkahkarya.org/images/jasa-kontraktor/work1.jpeg',
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
            <img src="/images/jasa-kontraktor/work4.jpeg" alt="Hero Background" />
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
                  className={`${styles.portfolioItem} ${i === 0 ? styles.portfolioItemLarge : ''}`}
                >
                  <img src={img.src} alt={img.label} loading={i < 3 ? 'eager' : 'lazy'} />
                  <div className={styles.portfolioOverlay}>
                    <span className={styles.portfolioLabel}>{img.label}</span>
                    <span className={styles.portfolioSub}>{img.sub}</span>
                  </div>
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
