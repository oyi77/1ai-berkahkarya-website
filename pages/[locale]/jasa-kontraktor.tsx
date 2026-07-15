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

const WA_NUMBER = '6285800620035';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo%20BerkahKarya%20Kontraktor%20-%20saya%20ingin%20konsultasi%20rencana%20bangun%20rumah.%20Mohon%20info%20estimasi%20biaya%20dan%20konsultasi%20gratis.%20Terima%20kasih.`;

const SERVICES = [
  {
    icon: '📐',
    image: '/images/jasa-kontraktor/desain-1.jpg',
    title: 'Jasa Gambar Kerja',
    price: 'Rp28.000',
    unit: '/m²',
    features: [
      'Gambar Kerja Lengkap',
      'Siap Digunakan Untuk Pembangunan',
      'Mengurangi Risiko Kesalahan Tukang',
      'Mempermudah Penyusunan RAB',
      'Revisi Sesuai Ketentuan Proyek',
    ],
  },
  {
    icon: '💰',
    image: '/images/jasa-kontraktor/desain-2.jpg',
    title: 'Jasa RAB',
    price: 'Rp1.200.000',
    unit: '/proyek',
    features: [
      'Estimasi Biaya Detail',
      'Kontrol Anggaran Proyek',
      'Menghindari Pembengkakan Biaya',
      'Prioritas Pekerjaan Jelas',
      'Transparan & Mudah Dipahami',
    ],
  },
  {
    icon: '🏡',
    image: '/images/jasa-kontraktor/desain-3.jpg',
    title: 'Visualisasi 3D',
    price: 'Rp1.200.000',
    unit: '/proyek',
    features: [
      'Visual Realistis Sebelum Bangun',
      'Memudahkan Pengambilan Keputusan',
      'Revisi Desain Sebelum Eksekusi',
      'Meminimalkan Perubahan di Lapangan',
      'File Siap Presentasi',
    ],
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
  { src: '/images/jasa-kontraktor/interior-cafe-1.jpg', label: 'Interior Cafe Minimalis', sub: 'Bandung', challenge: 'Cafe kecil 60m² ingin tampil instagramable dengan budget terbatas', solution: 'Kombinasi exposed brick, furniture custom, dan pencahayaan hangat', result: 'Pengunjung meningkat 3x lipat, viral di TikTok & Instagram' },
  { src: '/images/jasa-kontraktor/interior-hotel-1.jpg', label: 'Hotel Butik 20 Kamar', sub: 'Yogyakarta', challenge: 'Bangunan heritage perlu renovasi tanpa mengubah fasad asli', solution: 'Interior modern-minimalis dengan aksen budaya Jawa', result: 'Rating 4.8 di Booking.com, occupancy 85% sejak bulan pertama' },
  { src: '/images/jasa-kontraktor/interior-kantor-2.jpg', label: 'Co-Working Space Modern', sub: 'BSD City', challenge: 'Ruang 200m² harus fleksibel untuk 40 tenant berbeda', solution: 'Layout modular + movable partition + zona silent & collaborative', result: 'Terjual habis 100% seat dalam 2 minggu pertama' },
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


  // Scroll depth tracking
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const thresholds = [25, 50, 75, 100];
    let fired = new Set<number>();
    const handler = () => {
      const scrollPct = Math.round(
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
      );
      thresholds.forEach(t => {
        if (scrollPct >= t && !fired.has(t)) {
          fired.add(t);
          try {
            if (window.gtag) window.gtag('event', 'scroll_depth', { event_category: 'engagement', event_label: `${t}%` });
            if (window.fbq) window.fbq('track', 'ScrollDepth', { value: t, currency: 'IDR' });
            if (window.ttq) window.ttq.track('ScrollDepth', { content_name: `${t}%` });
          } catch (_) {}
        }
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
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
      badge: isIndonesian ? '🔨 SIAP BANTU ANDA MEMBANGUN' : '🔨 READY TO HELP YOU BUILD',
      title: isIndonesian
        ? 'Bangun Rumah Impian' : 'Build Your Dream Home',
      titleBold: isIndonesian ? 'Tanpa Takut Biaya Membengkak' : 'No More Budget Surprises',
      subtitle: isIndonesian
        ? 'Dapatkan gambar kerja, RAB detail, dan 3D visualisasi rumah impian Anda. Tim Arsitek & Engineer kami siap membantu — GRATIS konsultasi, analisa kebutuhan, dan estimasi awal biaya.'
        : 'Get working drawings, detailed RAB, and 3D visualization of your dream home. Our Architects & Engineers are ready — FREE consultation, needs analysis, and initial cost estimate.',
      cta: isIndonesian ? 'Saya Mau Konsultasi Rumah' : "I'd Like a Home Consultation",
      stats: [
        { num: '500+', label: isIndonesian ? 'Proyek Sukses' : 'Projects Done' },
        { num: '10+', label: isIndonesian ? 'Tahun Pengalaman' : 'Years Experience' },
        { num: '98%', label: isIndonesian ? 'Kepuasan Klien' : 'Client Satisfaction' },
        { num: '4.9★', label: isIndonesian ? 'Rating Google' : 'Google Rating' },
      ],
      offerItems: [
        { icon: '📋', title: isIndonesian ? 'Analisa Kebutuhan Rumah' : 'Home Needs Analysis' },
        { icon: '🎨', title: isIndonesian ? 'Rekomendasi Konsep Desain' : 'Design Concept Recommendation' },
        { icon: '📐', title: isIndonesian ? 'Gambaran Kebutuhan Ruang' : 'Space Requirement Overview' },
        { icon: '🗓️', title: isIndonesian ? 'Arahan Tahap Pembangunan' : 'Construction Stage Guidance' },
        { icon: '💰', title: isIndonesian ? 'Estimasi Awal Budget' : 'Initial Budget Estimate' },
      ],
    },
    leadMagnet: {
      tag: isIndonesian ? 'GRATIS' : 'FREE',
      title: isIndonesian ? 'Panduan Bangun Rumah' : 'Home Building Guide',
      titleHighlight: isIndonesian ? 'Lengkap' : 'Complete Guide',
      desc: isIndonesian
        ? 'Dapatkan ebook GRATIS berisi checklist bangun rumah, estimasi budget, dan tips memilih kontraktor.'
        : 'Get our FREE ebook: home building checklist, budget estimation guide, and contractor selection tips.',
      cta: isIndonesian ? '📥 Download Gratis Sekarang' : '📥 Download Free Now',
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
      tag: isIndonesian ? 'KENAPA KAMI BERBEDA' : 'WHY WE\'RE DIFFERENT',
      title: isIndonesian ? 'Aman & Transparan' : 'Safe & Transparent',
      titleHighlight: isIndonesian ? 'Bangun Rumah Bersama Kami' : 'Building With Us',
      desc: isIndonesian
        ? 'Kami tidak hanya membangun — kami memastikan Anda paham & nyaman di setiap tahap.'
        : 'We don\'t just build — we make sure you understand & feel comfortable at every stage.',
      reasons: [
        {
          icon: '📐',
          title: isIndonesian ? 'Gambar Kerja Detail' : 'Detailed Working Drawings',
          desc: isIndonesian ? 'Tukang tidak menebak-nebak. Semua ukuran, material, & spesifikasi tertuang dalam gambar kerja lengkap sebagai acuan lapangan.' : 'No guesswork for workers. All measurements, materials & specifications in complete working drawings for field reference.'
        },
        {
          icon: '📊',
          title: isIndonesian ? 'RAB Kontrol Biaya' : 'Cost Control RAB',
          desc: isIndonesian ? 'Setiap pos pekerjaan dianggarkan detail — Anda tahu persis alokasi dana dari awal tanpa biaya mendadak.' : 'Every work item is budgeted in detail — you know exactly where every rupiah goes with no surprise costs.'
        },
        {
          icon: '📱',
          title: isIndonesian ? 'Update Progress Berkala' : 'Regular Progress Updates',
          desc: isIndonesian ? 'Laporan mingguan via WhatsApp berupa foto, video, & persentase progres. Anda pantau dari mana saja.' : 'Weekly reports via WhatsApp with photos, videos & progress percentage. Monitor from anywhere.'
        },
        {
          icon: '🤝',
          title: isIndonesian ? 'Satu Tim — Desain ke Pembangunan' : 'One Team — Design to Build',
          desc: isIndonesian ? 'Arsitek, engineer, & pelaksana dalam satu koordinasi. Tidak ada lempar tanggung jawab antar vendor.' : 'Architects, engineers & executors in one coordinated team. No finger-pointing between vendors.'
        },
      ],
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
        { q: isIndonesian ? 'Berapa biaya untuk bangun rumah?' : 'How much does it cost to build a house?', a: isIndonesian ? 'Biaya tergantung luas bangunan, spesifikasi material, dan lokasi. Tim kami bisa memberikan estimasi awal secara GRATIS setelah diskusi singkat mengenai kebutuhan Anda. Konsultasi tidak mengikat.' : 'Costs depend on building size, material specs, and location. Our team can provide a FREE initial estimate after a brief discussion about your needs. No obligation.' },
        { q: isIndonesian ? 'Kenapa harga Anda berbeda dengan kontraktor lain?' : 'Why is your price different from other contractors?', a: isIndonesian ? 'Kami transparan dari awal — RAB detail per item pekerjaan. Tidak ada biaya tersembunyi. Jika ada kontraktor yang lebih murah, pastikan scope pekerjaannya sama. Kami utamakan kualitas & kepuasan jangka panjang.' : 'We\'re transparent from the start — detailed RAB per work item. No hidden fees. If another contractor is cheaper, make sure the scope of work is the same. We prioritize quality & long-term satisfaction.' },
        { q: isIndonesian ? 'Kenapa harus gambar kerja dulu?' : 'Why do we need working drawings first?', a: isIndonesian ? 'Gambar kerja adalah acuan tukang di lapangan. Tanpa gambar kerja, ukuran & spesifikasi hanya berdasarkan perkiraan — risiko kesalahan & pembengkakan biaya sangat tinggi. Dengan gambar kerja, Anda bisa yakin hasil akhir sesuai rencana.' : 'Working drawings are the field reference for workers. Without them, measurements & specs are just estimates — risk of errors & cost overruns is very high. With working drawings, you can be sure the final result matches the plan.' },
        { q: isIndonesian ? 'Kenapa harus pakai RAB?' : 'Why do we need a RAB?', a: isIndonesian ? 'RAB (Rencana Anggaran Biaya) membuat Anda tahu persis alokasi dana untuk setiap item pekerjaan. Anda bisa mengambil keputusan: mana yang prioritas, mana yang bisa diatur ulang. Tanpa RAB, biaya mudah membengkak.' : 'RAB (Budget Plan) lets you know exactly the cost allocation for each work item. You can decide priorities and adjust as needed. Without RAB, costs easily balloon.' },
        { q: isIndonesian ? 'Apakah konsultasi bisa online?' : 'Can consultation be done online?', a: isIndonesian ? 'Tentu! Konsultasi awal bisa via WhatsApp atau video call. Kami diskusikan kebutuhan, lokasi, dan budget Anda. Setelah itu kami siapkan estimasi & rekomendasi konsep — semua dari rumah Anda.' : 'Absolutely! Initial consultation can be via WhatsApp or video call. We discuss your needs, location, and budget. Then we prepare estimates & concept recommendations — all from the comfort of your home.' },
        { q: isIndonesian ? 'Apakah ada revisi desain?' : 'Are there design revisions?', a: isIndonesian ? 'Tentu ada. Sebelum pembangunan dimulai, kami memberikan 3D render & gambar kerja untuk Anda review. Revisi bisa dilakukan sampai Anda benar-benar puas. Setelah semua fix, baru kami eksekusi di lapangan.' : 'Yes! Before construction begins, we provide 3D renders & working drawings for your review. Revisions can be made until you\'re fully satisfied. Once everything is finalized, only then we execute in the field.' },
        { q: isIndonesian ? 'Bagaimana sistem pembayarannya?' : 'What is the payment system?', a: isIndonesian ? 'Pembayaran dilakukan bertahap sesuai progres pekerjaan (termin). Setiap termin dibayar setelah pekerjaan selesai & diverifikasi. Tidak ada permintaan pembayaran penuh di awal. Semua tertuang dalam kontrak resmi.' : 'Payment is made in stages according to work progress (terminations). Each stage is paid after work completion & verification. No full upfront payment. All stated in the official contract.' },
      ],
    },
    cta: {
      subtitle: isIndonesian ? 'Rp0 — KOMITMEN KAMI' : 'Rp0 — OUR COMMITMENT',
      title: isIndonesian ? 'Konsultasi & Estimasi' : 'Consultation & Estimate',
      titleBold: isIndonesian ? 'GRATIS!' : 'FREE!',
      desc: isIndonesian
        ? 'Tim Arsitek & Engineer kami siap analisa kebutuhan rumah Anda. Dapatkan rekomendasi desain, gambaran ruang, arahan tahap bangun, dan estimasi budget — tanpa biaya, tanpa kewajiban.'
        : 'Our Architects & Engineers are ready to analyze your home needs. Get design recommendations, space overview, construction guidance, and budget estimate — free, no obligation.',
      cta: isIndonesian ? 'Saya Mau Konsultasi Rumah' : 'I Want a Home Consultation',
      cta2: isIndonesian ? 'Hubungi Via WhatsApp' : 'Contact via WhatsApp',
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
            <button className={styles.navLink} onClick={() => scrollTo('services')}>Harga Jasa</button>
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
            <div className={styles.heroOffer}>
              <div className={styles.heroOfferTag}>
                {isIndonesian ? '🎁 GRATIS — Yang Anda Dapatkan:' : '🎁 FREE — What You Get:'}
              </div>
              <div className={styles.heroOfferGrid}>
                {content.hero.offerItems.map((item, i) => (
                  <div key={i} className={styles.heroOfferItem}>
                    <span className={styles.heroOfferIcon}>{item.icon}</span>
                    <span className={styles.heroOfferLabel}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
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
            <div className={styles.heroTrust}>
              <span className={styles.heroTrustStars}>⭐⭐⭐⭐⭐</span>
              <span className={styles.heroTrustText}>
                {isIndonesian ? '4.9/5 dari 200+ ulasan —' : '4.9/5 from 200+ reviews —'}{' '}
                <strong>{isIndonesian ? 'Telah bantu 500+ keluarga bangun rumah' : 'Helped 500+ families build homes'}</strong>
              </span>
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
                <div key={i} className={`${styles.serviceCard} ${i === 1 ? styles.serviceFeatured : ''}`}>
                  <div className={styles.serviceImgWrap}>
                    <img src={svc.image} alt={svc.title} className={styles.serviceImg} loading="lazy" />
                    {i === 1 && <span className={styles.serviceBadge}>{isIndonesian ? 'POPULER' : 'POPULAR'}</span>}
                  </div>
                  <span className={styles.serviceIcon}>{svc.icon}</span>
                  <h3 className={styles.serviceTitle}>{svc.title}</h3>
                  <div className={styles.servicePrice}>
                    <span className={styles.servicePriceValue}>{svc.price}</span>
                    <span className={styles.servicePriceUnit}>{svc.unit}</span>
                  </div>
                  <ul className={styles.serviceFeatures}>
                    {svc.features.map((f, j) => (
                      <li key={j} className={styles.serviceFeature}>
                        <span className={styles.serviceCheck}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`${styles.btn} ${i === 1 ? styles.btnGold : styles.btnOutline} ${styles.btnFull}`}
                    onClick={() => handleWa(`service_${i}`)}
                  >
                    💬 Konsultasi Sekarang
                  </button>
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

        {/* ─── LEAD MAGNET ─── */}
        <section className={styles.leadSection}>
          <div className={styles.container}>
            <div className={styles.leadBox}>
              <span className={styles.leadTag}>{content.leadMagnet.tag}</span>
              <h2 className={styles.leadTitle}>
                {content.leadMagnet.title}{' '}
                <span className={styles.gold}>{content.leadMagnet.titleHighlight}</span>
              </h2>
              <p className={styles.leadDesc}>{content.leadMagnet.desc}</p>
              <div className={styles.leadActions}>
                <button
                  className={`${styles.btn} ${styles.btnGold} ${styles.btnLg}`}
                  onClick={() => handleWa('lead_magnet')}
                >
                  {content.leadMagnet.cta}
                </button>
              </div>
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
            <div className={styles.whyGrid}>
              {content.why.reasons.map((item, i) => (
                <div key={i} className={styles.whyCard}>
                  <div className={styles.whyIcon}>{item.icon}</div>
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyDesc}>{item.desc}</p>
                </div>
              ))}
            </div>

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
            <div className={styles.finalTrust}>
              <span className={styles.finalTrustStars}>⭐⭐⭐⭐⭐</span>
              <span className={styles.finalTrustText}>
                {isIndonesian ? '4.9/5 — 200+ ulasan nyata dari pemilik rumah' : '4.9/5 — 200+ verified reviews from homeowners'}
              </span>
            </div>
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
              <button className={styles.footerLink} onClick={() => scrollTo('services')}>Harga Jasa</button>
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
        
        {/* ─── STICKY MOBILE CTA ─── */}
        <div className={styles.stickyCta}>
          <button className={`${styles.btn} ${styles.btnGold}`} onClick={() => handleWa('sticky')}>
            💬 {isIndonesian ? 'Konsultasi Gratis Sekarang' : 'Free Consultation Now'}
          </button>
        </div>
    </>
  );
}
