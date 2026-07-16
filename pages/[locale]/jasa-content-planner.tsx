import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import JasaServicePage, { JasaServiceContent } from '@/components/JasaServicePage';

interface Props { locale: string; }

const WA_NUMBER = '6285732740006';
const WA_TEXT = 'Halo BerkahKarya, saya tertarik dengan Jasa Content Planner';

export default function JasaContentPlannerPage({ locale }: Props) {
  const isIndonesian = locale === 'id';

  const content: JasaServiceContent = {
    heroTag: isIndonesian ? 'JASA CONTENT PLANNER' : 'CONTENT PLANNER SERVICE',
    heroTitle: isIndonesian ? 'Nggak Bakal Kehabisan' : 'Never Run Out of',
    heroTitleEm: isIndonesian ? 'Ide Konten' : 'Content Ideas',
    heroSub: isIndonesian
      ? 'Dapatkan kalender konten 30 hari + 50 ide postingan siap pakai setiap bulan. Cocok buat yang mau konsisten posting tanpa pusing mikirin mau upload apa.'
      : 'Get a 30-day content calendar + 50 ready-to-post ideas every month. Perfect for staying consistent without the headache of what to post.',
    heroCta: isIndonesian ? 'Konsultasi Gratis via WA' : 'Free Consultation via WA',
    heroCtaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,

    problemLabel: isIndonesian ? 'MASALAH' : 'PROBLEMS',
    problemTitle: isIndonesian ? 'Ide Konten' : 'Content Ideas',
    problemTitleEm: isIndonesian ? 'Sering Habis?' : 'Always Running Out?',
    problems: [
      {
        icon: '\U0001F914',
        title: isIndonesian ? 'Bingung Mau Posting Apa' : 'Stuck on What to Post',
        desc: isIndonesian ? 'Setiap hari nge-stare layar HP bingung mau upload konten apa.' : 'Staring at your screen daily, clueless about what to post.' },
      {
        icon: '\U0001F4C5',
        title: isIndonesian ? 'Nggak Punya Jadwal' : 'No Posting Schedule',
        desc: isIndonesian ? 'Posting asal-asalan, nggak terencana, feed berantakan.' : 'Random posting, no plan, messy feed.' },
      {
        icon: '\U0001F4C9',
        title: isIndonesian ? 'Hasil Nggak Maksimal' : 'Results Are Lacking',
        desc: isIndonesian ? 'Konten nggak nyambung sama target audience, engagement rendah.' : 'Content misses the target audience, engagement stays low.' },
    ],

    delivLabel: isIndonesian ? 'YANG KAMU DAPET' : 'WHAT YOU GET',
    delivTitle: isIndonesian ? 'Layanan' : 'Our',
    delivTitleEm: isIndonesian ? 'Content Planner' : 'Content Planner Service',
    deliverables: [
      { icon: '\U0001F4C5', title: isIndonesian ? 'Kalender Konten 30 Hari' : '30-Day Content Calendar', desc: isIndonesian ? 'Jadwal posting harian lengkap dengan tema dan waktu terbaik.' : 'Daily posting schedule with themes and optimal times.' },
      { icon: '\U0001F4DD', title: isIndonesian ? '50 Ide Postingan Siap Pakai' : '50 Ready-to-Post Ideas', desc: isIndonesian ? 'Ide konten lengkap dengan caption dan hooks yang engaging.' : 'Content ideas with complete captions and engaging hooks.' },
      { icon: '\U0001F3A8', title: isIndonesian ? 'Template Visual' : 'Visual Templates', desc: isIndonesian ? 'Template desain yang tinggal edit dan pakai.' : 'Design templates ready for quick edits.' },
      { icon: '\U0001F4CA', title: isIndonesian ? 'Riset Konten Bulanan' : 'Monthly Content Research', desc: isIndonesian ? 'Trending topics dan insight audience buat bulan ini.' : 'Trending topics and audience insights for the month.' },
      { icon: '\U0001F4AC', title: isIndonesian ? 'Caption Siap Pakai' : 'Ready-Made Captions', desc: isIndonesian ? 'Copywriting yang udah dioptimasi buat engage dan konversi.' : 'Optimized copy for engagement and conversion.' },
      { icon: '\U0001F4E6', title: isIndonesian ? 'Bonus: Konten Viral Kit' : 'Bonus: Viral Content Kit', desc: isIndonesian ? 'Template konten viral challenge dan tren terbaru.' : 'Viral challenge templates and latest trend ideas.' },
    ],

    processLabel: isIndonesian ? 'CARA KERJA' : 'HOW IT WORKS',
    processTitle: isIndonesian ? 'Proses' : 'Our',
    processTitleEm: isIndonesian ? '3 Langkah' : '3-Step Process',
    processSteps: [
      { num: '01', title: isIndonesian ? 'Audit & Riset' : 'Audit & Research', desc: isIndonesian ? 'Kami analisis akun kamu, kompetitor, dan tren industri.' : 'We analyze your account, competitors, and industry trends.' },
      { num: '02', title: isIndonesian ? 'Bikin Kalender' : 'Create the Calendar', desc: isIndonesian ? 'Tim kami susun kalender konten 30 hari plus 50 ide.' : 'Our team creates a 30-day content calendar plus 50 ideas.' },
      { num: '03', title: isIndonesian ? 'Deliver & Revisi' : 'Deliver & Revise', desc: isIndonesian ? 'Kamu review, kita sesuaikan. Siap eksekusi!' : 'You review, we adjust. Ready to execute!' },
    ],

    benefitLabel: isIndonesian ? 'KENAPA PILIH KAMI' : 'WHY CHOOSE US',
    benefitTitle: isIndonesian ? 'Keuntungan' : 'Benefits of',
    benefitTitleEm: isIndonesian ? 'Content Planner' : 'Content Planner',
    benefits: [
      { icon: '\U0001F4C8', title: isIndonesian ? 'Konsisten Tiap Hari' : 'Daily Consistency', desc: isIndonesian ? 'Nggak pernah bolong posting, feed selalu fresh.' : 'Never miss a post, keep your feed fresh.' },
      { icon: '\u23F3', title: isIndonesian ? 'Hemat Waktu' : 'Save Time', desc: isIndonesian ? 'Nggak perlu mikir mau posting apa setiap hari.' : 'No more daily content anxiety.' },
      { icon: '\U0001F3AF', title: isIndonesian ? 'Konten Tersusun Rapi' : 'Well-Structured Content', desc: isIndonesian ? 'Setiap konten punya tujuan, bukan asal upload.' : 'Every post has a purpose, not random uploads.' },
      { icon: '\U0001F4B0', title: isIndonesian ? 'Hasil Terukur' : 'Measurable Results', desc: isIndonesian ? 'Strategi konten yang dioptimasi buat reach dan engagement.' : 'Content strategy optimized for reach and engagement.' },
    ],

    pricingLabel: isIndonesian ? 'HARGA' : 'PRICING',
    pricingTitle: isIndonesian ? 'Pilih Paket' : 'Choose Your',
    pricingTitleEm: isIndonesian ? 'Content Plan' : 'Content Plan',
    pricingSub: isIndonesian
      ? 'Mulai dari 30 ide per bulan. Semakin lengkap paketnya, semakin besar potensi growth-mu!'
      : 'Starting from 30 ideas per month. The more complete the package, the bigger your growth potential!',
    pricingNote: isIndonesian
      ? '*Harga tergantung volume konten dan jumlah platform.'
      : '*Pricing depends on content volume and number of platforms.',
    plans: [
      {
        name: isIndonesian ? 'Paket Basic' : 'Basic Plan',
        price: isIndonesian ? 'Rp 300K' : '$20',
        unit: isIndonesian ? '/bulan' : '/month',
        desc: isIndonesian ? 'Cocok untuk personal brand atau bisnis kecil yang baru mulai.' : 'Perfect for personal brands or small businesses just starting.',
        items: [
          isIndonesian ? '1 platform' : '1 platform',
          isIndonesian ? '30 ide konten' : '30 content ideas',
          isIndonesian ? 'Kalender konten 30 hari' : '30-day content calendar',
          isIndonesian ? 'Caption siap pakai' : 'Ready-made captions',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Basic)')}`,
      },
      {
        name: isIndonesian ? 'Paket Standar' : 'Standard Plan',
        price: isIndonesian ? 'Rp 750K' : '$50',
        unit: isIndonesian ? '/bulan' : '/month',
        desc: isIndonesian ? 'Untuk bisnis yang aktif di 2 platform dan butuh lebih banyak ide.' : 'For businesses active on 2 platforms needing more ideas.',
        items: [
          isIndonesian ? '2 platform' : '2 platforms',
          isIndonesian ? '50 ide konten' : '50 content ideas',
          isIndonesian ? 'Kalender konten 30 hari' : '30-day content calendar',
          isIndonesian ? 'Caption + hooks' : 'Captions + hooks',
          isIndonesian ? 'Template visual' : 'Visual templates',
          isIndonesian ? 'Riset konten bulanan' : 'Monthly content research',
        ],
        highlight: true,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Standar)')}`,
      },
      {
        name: isIndonesian ? 'Paket Premium' : 'Premium Plan',
        price: isIndonesian ? 'Rp 1,5Jt' : '$100',
        unit: isIndonesian ? '/bulan' : '/month',
        desc: isIndonesian ? 'Full-service untuk bisnis yang serius dengan content marketing.' : 'Full-service for businesses serious about content marketing.',
        items: [
          isIndonesian ? '3 platform' : '3 platforms',
          isIndonesian ? '100 ide konten' : '100 content ideas',
          isIndonesian ? 'Kalender konten 30 hari' : '30-day content calendar',
          isIndonesian ? 'Caption + hooks premium' : 'Premium captions + hooks',
          isIndonesian ? 'Template visual + video' : 'Visual + video templates',
          isIndonesian ? 'Riset + analitik bulanan' : 'Monthly research + analytics',
          isIndonesian ? 'Viral content kit' : 'Viral content kit',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Premium)')}`,
      },
    ],

    usecaseLabel: isIndonesian ? 'COCOK UNTUK' : 'PERFECT FOR',
    usecaseTitle: isIndonesian ? 'Siapa Aja yang' : 'Who',
    usecaseTitleEm: isIndonesian ? 'Butuh Jasa Ini' : 'Needs This Service',
    useCases: [
      { title: isIndonesian ? 'Content Creator' : 'Content Creators', desc: isIndonesian ? 'Produksi konten konsisten tanpa kehabisan ide.' : 'Consistent content production without running out of ideas.' },
      { title: isIndonesian ? 'Social Media Manager' : 'Social Media Managers', desc: isIndonesian ? 'Kalender konten siap pakai buat klien.' : 'Ready-made content calendars for clients.' },
      { title: isIndonesian ? 'Owner Bisnis Sibuk' : 'Busy Business Owners', desc: isIndonesian ? 'Biar sosial media tetap aktif tanpa ambil waktumu.' : 'Keep social media active without taking up your time.' },
      { title: isIndonesian ? 'Agency' : 'Agencies', desc: isIndonesian ? 'Skalakan produksi konten untuk banyak klien.' : 'Scale content production for multiple clients.' },
    ],

    ctaLabel: isIndonesian ? 'SIAP MULAI?' : 'READY TO START?',
    ctaTitle: isIndonesian ? 'Yuk, Rencanakan' : 'Let\'s Plan Your',
    ctaTitleEm: isIndonesian ? 'Konten-mu' : 'Content',
    ctaSub: isIndonesian
      ? 'Konsultasi gratis, kita bikin strategi konten yang pas untuk brand kamu!'
      : 'Free consultation — we\'ll create the perfect content strategy for your brand!',
    ctaBtn: isIndonesian ? 'Konsultasi Gratis' : 'Free Consultation',
    ctaBtnLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,
    ctaSecondary: '/id/jasa-content-planner',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isIndonesian ? 'Jasa Content Planner' : 'Content Planner Service',
    provider: { '@type': 'Organization', name: 'BerkahKarya' },
    description: isIndonesian
      ? 'Jasa content planner untuk social media. Kalender konten 30 hari, 50+ ide postingan siap pakai.'
      : 'Social media content planner service. 30-day calendar, 50+ ready-to-post ideas.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: '300000',
      highPrice: '1500000',
    },
  };

  return (
    <Layout
      title={content.heroTitle + ' | BerkahKarya'}
      description={content.heroSub}
      keywords={isIndonesian ? 'jasa content planner, kalender konten, ide konten sosial media, jasa content plan murah, strategi konten' : 'content planner service, content calendar, social media content ideas, content strategy'}
      ogImage="/images/og-content-planner.jpg"
      jsonLd={jsonLd}
    >
      <JasaServicePage locale={locale as 'id' | 'en'} waNumber={WA_NUMBER} waText={WA_TEXT} content={content} />
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
