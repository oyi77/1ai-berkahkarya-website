import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import JasaServicePage, { JasaServiceContent } from '@/components/JasaServicePage';

type Locale = 'id' | 'en';

interface Props { locale: string; }

const WA_NUMBER = '6285732740006';
const WA_TEXT = 'Halo%20BerkahKarya%2C%20saya%20tertarik%20dengan%20Jasa%20Design%20Arsitektur%20%26%20Interior';

export default function JasaDesignPage({ locale }: Props) {
  const isIndonesian = locale === 'id';
  const loc = locale as Locale;

  const content: JasaServiceContent = {
    heroTag: isIndonesian ? 'JASA DESIGN ARSITEKTUR & INTERIOR' : 'ARCHITECTURE & INTERIOR DESIGN',
    heroTitle: isIndonesian ? 'Wujudkan' : 'Turn Your',
    heroTitleEm: isIndonesian ? 'Ruang Impian Anda' : 'Dream Space Into Reality',
    heroSub: isIndonesian
      ? 'Dari konsep sampai gambar kerja lengkap. Arsitektur, interior, 3D visualisasi, dan RAB detail — satu tim, satu tanggung jawab. Konsultasi gratis!'
      : 'From concept to complete working drawings. Architecture, interior, 3D visualization, and detailed RAB — one team, one responsibility. Free consultation!',
    heroCta: isIndonesian ? 'Konsultasi Gratis via WA' : 'Free Consultation via WA',
    heroCtaLink: `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`,

    problemLabel: isIndonesian ? 'MASALAH' : 'PROBLEMS',
    problemTitle: isIndonesian ? 'Desain Rumah' : 'Designing Your Home',
    problemTitleEm: isIndonesian ? 'Itu Gak Gampang' : 'Is Never Easy',
    problems: [
      {
        icon: '\uD83D\uDCAD',
        title: isIndonesian ? 'Bingung Cari Desainer yang Cocok' : 'Can\'t Find the Right Designer',
        desc: isIndonesian ? 'Banyak desainer, tapi gaya dan visi-nya belum tentu sesuai dengan keinginan Anda. Komunikasi sering gak nyambung.' : 'Many designers out there, but their style and vision may not match yours. Communication often misses the mark.' },
      {
        icon: '\uD83D\uDCB0',
        title: isIndonesian ? 'Biaya Arsitek Terasa Mahal' : 'Architect Fees Feel Expensive',
        desc: isIndonesian ? 'Tarif arsitek per proyek bisa mencapai puluhan juta — belum termasuk biaya revisi dan konsultasi tambahan.' : 'Architect fees per project can reach tens of millions — not including revision and extra consultation costs.' },
      {
        icon: '\uD83D\uDCCF',
        title: isIndonesian ? 'Takut Desain Gak Sesuai Budget' : 'Afraid Design Won\'t Fit Budget',
        desc: isIndonesian ? 'Desain keren tapi biaya konstruksi membengkak. Tanpa RAB detail sejak awal, budget bisa meleset jauh.' : 'Great design but construction costs blow up. Without a detailed RAB from the start, your budget can go way off.' },
    ],

    delivLabel: isIndonesian ? 'LAYANAN KAMI' : 'OUR SERVICES',
    delivTitle: isIndonesian ? 'Layanan' : 'Our',
    delivTitleEm: isIndonesian ? 'Design Lengkap' : 'Complete Design Services',
    deliverables: [
      { icon: '\uD83D\uDCD0', title: isIndonesian ? 'Gambar Kerja / DED' : 'Working Drawings / DED', desc: isIndonesian ? 'Gambar arsitektur lengkap: floor plan, tampak, potongan, detail konstruksi — siap untuk IMB dan tender kontraktor.' : 'Complete architectural drawings: floor plans, elevations, sections, construction details — ready for building permits and contractor tenders.' },
      { icon: '\uD83D\uDDFC', title: isIndonesian ? 'Visualisasi 3D Realistis' : 'Realistic 3D Visualization', desc: isIndonesian ? 'Lihat rumah Anda sebelum dibangun. Render 3D fotorealistik dari eksterior dan interior — termasuk material dan pencahayaan.' : 'See your home before it\'s built. Photorealistic 3D renders of exterior and interior — including materials and lighting.' },
      { icon: '\uD83D\uDEAA', title: isIndonesian ? 'Desain Interior' : 'Interior Design', desc: isIndonesian ? 'Tata letak ruangan, pemilihan material, furnitur, dan skema warna — interior yang nyaman, fungsional, dan estetik.' : 'Room layout, material selection, furniture, and color schemes — comfortable, functional, and aesthetic interiors.' },
      { icon: '\uD83D\uDCCB', title: isIndonesian ? 'RAB & Bill of Quantity' : 'RAB & Bill of Quantity', desc: isIndonesian ? 'Estimasi biaya konstruksi detail per item pekerjaan. Transparan, akurat, dan bisa jadi acuan tender kontraktor.' : 'Detailed construction cost estimate per work item. Transparent, accurate, and usable as contractor tender reference.' },
      { icon: '\uD83C\uDF3F', title: isIndonesian ? 'Desain Landscape' : 'Landscape Design', desc: isIndonesian ? 'Taman dan area outdoor yang menyatu dengan desain bangunan — dari taman minimalis sampai area hijau fungsional.' : 'Garden and outdoor areas that blend with the building design — from minimalist gardens to functional green spaces.' },
      { icon: '\uD83D\uDD28', title: isIndonesian ? 'Renovasi & Retrofit' : 'Renovation & Retrofit', desc: isIndonesian ? 'Redesain dan renovasi bangunan eksisting. Ubah tampilan, optimasi ruang, atau perkuatan struktur tanpa bongkar total.' : 'Redesign and renovation of existing buildings. Change appearance, optimize space, or strengthen structures without full demolition.' },
    ],

    processLabel: isIndonesian ? 'CARA KERJA' : 'HOW IT WORKS',
    processTitle: isIndonesian ? 'Proses' : 'Our',
    processTitleEm: isIndonesian ? '3 Tahap' : '3-Stage Process',
    processSteps: [
      { num: '01', title: isIndonesian ? 'Konsultasi & Brief' : 'Consultation & Brief', desc: isIndonesian ? 'Diskusi kebutuhan, gaya arsitektur, anggaran, dan lokasi. Kami buat konsep awal dan sketsa kasar.' : 'Discuss needs, architectural style, budget, and location. We create initial concepts and rough sketches.' },
      { num: '02', title: isIndonesian ? 'Desain & Revisi' : 'Design & Revision', desc: isIndonesian ? 'Pengembangan desain detail: floor plan, tampak, 3D visualisasi. Revisi fleksibel sampai Anda puas.' : 'Detailed design development: floor plans, elevations, 3D visualization. Flexible revisions until you\'re satisfied.' },
      { num: '03', title: isIndonesian ? 'Final & Siap Bangun' : 'Final & Ready to Build', desc: isIndonesian ? 'Gambar kerja lengkap, RAB detail, dan dokumen siap tender — semua siap untuk proses konstruksi.' : 'Complete working drawings, detailed RAB, and tender-ready documents — everything ready for construction.' },
    ],

    benefitLabel: isIndonesian ? 'KENAPA PILIH KAMI' : 'WHY CHOOSE US',
    benefitTitle: isIndonesian ? 'Keunggulan' : 'Advantages of',
    benefitTitleEm: isIndonesian ? 'Design Kami' : 'Our Design Service',
    benefits: [
      { icon: '\uD83D\uDCB0', title: isIndonesian ? 'Desain Sesuai Budget' : 'Design Within Your Budget', desc: isIndonesian ? 'Kami desain sesuai anggaran Anda — bukan sebaliknya. RAB detail sejak awal, tanpa biaya membengkak.' : 'We design according to your budget — not the other way around. Detailed RAB from the start, no cost overruns.' },
      { icon: '\uD83C\uDF1F', title: isIndonesian ? 'Tim Profesional & Berpengalaman' : 'Professional & Experienced Team', desc: isIndonesian ? 'Arsitek dan desainer interior dengan portofolio puluhan proyek — dari rumah tinggal sampai bangunan komersial.' : 'Architects and interior designers with dozens of project portfolios — from residential to commercial buildings.' },
      { icon: '\uD83D\uDD04', title: isIndonesian ? 'Revisi Fleksibel' : 'Flexible Revisions', desc: isIndonesian ? 'Revisi desain sampai Anda benar-benar puas. Tidak ada batasan kaku — yang penting hasilnya sesuai ekspektasi.' : 'Design revisions until you\'re truly satisfied. No rigid limits — what matters is the result meets your expectations.' },
      { icon: '\u2709\uFE0F', title: isIndonesian ? 'Gratis Konsultasi Awal' : 'Free Initial Consultation', desc: isIndonesian ? 'Konsultasi gratis tanpa komitmen. Diskusikan ide, budget, dan kebutuhan Anda — kami bantu tentukan langkah selanjutnya.' : 'Free no-obligation consultation. Discuss your ideas, budget, and needs — we\'ll help determine the next steps.' },
    ],

    pricingLabel: isIndonesian ? 'HARGA' : 'PRICING',
    pricingTitle: isIndonesian ? 'Pilih Paket' : 'Choose Your',
    pricingTitleEm: isIndonesian ? 'Design' : 'Design Package',
    pricingSub: isIndonesian
      ? 'Harga per meter persegi luas bangunan. Konsultasi gratis dulu untuk menentukan paket yang tepat!'
      : 'Price per square meter of building area. Free consultation to determine the right package!',
    pricingNote: isIndonesian
      ? '*Harga tergantung kompleksitas desain, luas bangunan, dan tingkat detail yang dibutuhkan.'
      : '*Pricing depends on design complexity, building area, and level of detail required.',
    plans: [
      {
        name: isIndonesian ? 'Paket Basic' : 'Basic Package',
        price: isIndonesian ? 'Rp 28rb' : '$1.8',
        unit: isIndonesian ? '/m\u00B2' : '/m\u00B2',
        desc: isIndonesian ? 'Floor plan, tampak, potongan — cocok untuk IMB dan panduan bangun.' : 'Floor plan, elevations, sections — suitable for building permits and construction guidance.',
        items: [
          isIndonesian ? 'Layout floor plan & site plan' : 'Floor plan layout & site plan',
          isIndonesian ? 'Gambar tampak (depan, samping, belakang)' : 'Elevation drawings (front, side, rear)',
          isIndonesian ? 'Potongan bangunan' : 'Building sections',
          isIndonesian ? 'File PDF + print A3' : 'PDF + A3 print files',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}%20(Basic)`,
      },
      {
        name: isIndonesian ? 'Paket Standar' : 'Standard Package',
        price: isIndonesian ? 'Rp 45rb' : '$3',
        unit: isIndonesian ? '/m\u00B2' : '/m\u00B2',
        desc: isIndonesian ? 'Paket Basic + 3D visualisasi eksterior + RAB detail.' : 'Basic package + 3D exterior visualization + detailed RAB.',
        items: [
          isIndonesian ? 'Semua dari Paket Basic' : 'Everything in Basic Package',
          isIndonesian ? '3D visualisasi eksterior (2 angle)' : '3D exterior visualization (2 angles)',
          isIndonesian ? 'RAB detail & Bill of Quantity' : 'Detailed RAB & Bill of Quantity',
          isIndonesian ? 'Revisi 2x' : '2x revisions',
          isIndonesian ? 'File PDF + DWG + 3D render' : 'PDF + DWG + 3D render files',
        ],
        highlight: true,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}%20(Standar)`,
      },
      {
        name: isIndonesian ? 'Paket Premium' : 'Premium Package',
        price: isIndonesian ? 'Rp 75rb' : '$5',
        unit: isIndonesian ? '/m\u00B2' : '/m\u00B2',
        desc: isIndonesian ? 'Paket Standar + interior 3D + desain landscape + unlimited revisi.' : 'Standard package + interior 3D + landscape design + unlimited revisions.',
        items: [
          isIndonesian ? 'Semua dari Paket Standar' : 'Everything in Standard Package',
          isIndonesian ? '3D interior (seluruh ruangan)' : '3D interior (all rooms)',
          isIndonesian ? 'Desain landscape & outdoor' : 'Landscape & outdoor design',
          isIndonesian ? 'Unlimited revisi' : 'Unlimited revisions',
          isIndonesian ? 'File PDF + DWG + 3D render + 360\u00B0 virtual tour' : 'PDF + DWG + 3D render + 360\u00B0 virtual tour files',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}%20(Premium)`,
      },
    ],

    usecaseLabel: isIndonesian ? 'COCOK UNTUK' : 'PERFECT FOR',
    usecaseTitle: isIndonesian ? 'Siapa Aja yang' : 'Who',
    usecaseTitleEm: isIndonesian ? 'Butuh Jasa Ini' : 'Needs This Service',
    useCases: [
      { title: isIndonesian ? 'Rumah Tinggal' : 'Residential Homes', desc: isIndonesian ? 'Desain rumah tinggal dari awal — minimalis, modern, tropis, atau custom sesuai keinginan Anda.' : 'New home design from scratch — minimalist, modern, tropical, or custom to your preferences.' },
      { title: isIndonesian ? 'Ruko & Bangunan Komersial' : 'Shophouses & Commercial', desc: isIndonesian ? 'Desain ruko, kantor, showroom, dan bangunan komersial lainnya — fungsional dan representatif.' : 'Shophouse, office, showroom, and other commercial building designs — functional and representative.' },
      { title: isIndonesian ? 'Renovasi & Perluasan' : 'Renovation & Extension', desc: isIndonesian ? 'Redesain rumah eksisting, penambahan ruang, atau renovasi total — tanpa perlu bongkar semua.' : 'Redesign existing homes, add rooms, or full renovation — without total demolition.' },
    ],

    ctaLabel: isIndonesian ? 'SIAP MULAI?' : 'READY TO START?',
    ctaTitle: isIndonesian ? 'Yuk, Wujudkan' : 'Let\'s Bring Your',
    ctaTitleEm: isIndonesian ? 'Ruang Impian' : 'Dream Space to Life',
    ctaSub: isIndonesian
      ? 'Konsultasi gratis — ceritakan ide Anda, kami bantu wujudkan dalam gambar kerja dan 3D visualisasi.'
      : 'Free consultation — share your ideas, we\'ll turn them into working drawings and 3D visualizations.',
    ctaBtn: isIndonesian ? 'Konsultasi Gratis' : 'Free Consultation',
    ctaBtnLink: `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`,
    ctaSecondary: `/${locale}/jasa-design`,
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isIndonesian ? 'Jasa Design Arsitektur & Interior' : 'Architecture & Interior Design Service',
    provider: { '@type': 'Organization', name: 'BerkahKarya' },
    description: isIndonesian
      ? 'Jasa design arsitektur dan interior profesional. Gambar kerja, 3D visualisasi, RAB detail.'
      : 'Professional architecture and interior design service. Working drawings, 3D visualization, detailed RAB.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: '28000',
      highPrice: '75000',
    },
  };

  return (
    <Layout
      title={`${content.heroTag} | BerkahKarya`}
      description={content.heroSub}
      keywords={isIndonesian
        ? 'jasa desain rumah, arsitek rumah, desain interior, gambar kerja, 3D visualisasi, jasa arsitek'
        : 'architecture design, interior design, home design, working drawings, 3D visualization, architectural services'}
      jsonLd={jsonLd}
    >
      <JasaServicePage locale={loc} content={content} pageName="jasa-design" />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: params?.locale as string },
});
