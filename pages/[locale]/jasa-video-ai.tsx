import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import JasaServicePage, { JasaServiceContent } from '@/components/JasaServicePage';

interface Props { locale: string; }

const WA_NUMBER = '6285732740006';
const WA_TEXT = 'Halo BerkahKarya, saya tertarik dengan Jasa Pembuatan Video AI';

export default function JasaVideoAIPage({ locale }: Props) {
  const isIndonesian = locale === 'id';

  const content: JasaServiceContent = {
    heroTag: isIndonesian ? 'JASA PEMBUATAN VIDEO AI' : 'AI VIDEO PRODUCTION',
    heroTitle: isIndonesian ? 'Bikin Video Keren Pakai' : 'Create Amazing Videos with',
    heroTitleEm: isIndonesian ? 'Kekuatan AI' : 'AI Technology',
    heroSub: isIndonesian
      ? 'Dari script sampai jadi video dalam hitungan menit. Gak perlu kamera mahal, gak perlu jadi editor. Cukup ide kamu, kami urus sisanya.'
      : 'From script to finished video in minutes. No expensive cameras, no editing skills needed. Just your idea, we handle the rest.',
    heroCta: isIndonesian ? 'Konsultasi Gratis via WA' : 'Free Consultation via WA',
    heroCtaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,

    problemLabel: isIndonesian ? 'MASALAH' : 'PROBLEMS',
    problemTitle: isIndonesian ? 'Bikin Video Itu' : 'Video Creation',
    problemTitleEm: isIndonesian ? 'Repot & Mahal' : 'is Expensive & Complicated',
    problems: [
      {
        icon: '\U0001F3AC',
        title: isIndonesian ? 'Sewa Kameramen Mahal' : 'Expensive Videographer',
        desc: isIndonesian ? 'Sewa alat, bayar editor, biaya produksi membengkak sebelum video jadi.' : 'Equipment rental, editor fees, production costs skyrocket before the video is even done.',
      },
      {
        icon: '\u23F3',
        title: isIndonesian ? 'Proses Lama' : 'Slow Process',
        desc: isIndonesian ? 'Dari briefing sampe final butuh waktu berminggu-minggu. Deadline mepet? Good luck.' : 'From briefing to final cut takes weeks. Tight deadline? Good luck.',
      },
      {
        icon: '\U0001F3AD',
        title: isIndonesian ? 'Gak Bisa Aktor/Aktris' : 'No Actors Available',
        desc: isIndonesian ? 'Mau bikin video tapi malu tampil di depan kamera atau gak punya talent.' : 'Want to make a video but shy on camera or have no talent to feature.',
      },
    ],

    delivLabel: isIndonesian ? 'LAYANAN KAMI' : 'OUR SERVICES',
    delivTitle: isIndonesian ? 'Jenis Video yang' : 'Videos',
    delivTitleEm: isIndonesian ? 'Bisa Kami Buat' : 'We Can Create',
    deliverables: [
      { icon: '\U0001F399\uFE0F', title: isIndonesian ? 'Video Iklan / Promo' : 'Ad / Promo Videos', desc: isIndonesian ? 'Video pendek catchy buat iklan di TikTok, Instagram, YouTube, dan TV.' : 'Short, catchy videos for TikTok, Instagram, YouTube, and TV ads.' },
      { icon: '\U0001F4CB', title: isIndonesian ? 'Video Company Profile' : 'Company Profile Video', desc: isIndonesian ? 'Video profil perusahaan yang stunning tanpa perlu syuting.' : 'Stunning company profile videos without any filming required.' },
      { icon: '\U0001F3A7', title: isIndonesian ? 'Konten TikTok/Reels' : 'TikTok / Reels Content', desc: isIndonesian ? 'Video vertikal viral-ready dengan tren terbaru dan AI voice-over.' : 'Vertical viral-ready videos with trending styles and AI voice-over.' },
      { icon: '\U0001F4A1', title: isIndonesian ? 'Video Edukasi & Tutorial' : 'Educational & Tutorial Videos', desc: isIndonesian ? 'Jelaskan produk atau konsep rumit jadi video yang mudah dipahami.' : 'Turn complex products or concepts into easy-to-understand videos.' },
      { icon: '\U0001F3B5', title: isIndonesian ? 'Music Video / Lyric Video' : 'Music / Lyric Videos', desc: isIndonesian ? 'Video musik atau lyric video dengan visual AI yang estetik.' : 'Music and lyric videos with stunning AI-powered visuals.' },
      { icon: '\U0001F31F', title: isIndonesian ? 'Video Animasi & Explainer' : 'Animation & Explainer Videos', desc: isIndonesian ? 'Animasi 2D/3D untuk explainer produk atau layanan.' : '2D/3D animations to explain your products or services.' },
    ],

    processLabel: isIndonesian ? 'CARA KERJA' : 'HOW IT WORKS',
    processTitle: isIndonesian ? 'Proses' : 'Our',
    processTitleEm: isIndonesian ? '3 Langkah' : '3-Step Process',
    processSteps: [
      { num: '01', title: isIndonesian ? 'Konsultasi & Script' : 'Consultation & Script', desc: isIndonesian ? 'Kita diskusi konsep, tujuan, dan target audience videomu. Tim kami siapkan script.' : 'We discuss your concept, goals, and target audience. Our team prepares the script.' },
      { num: '02', title: isIndonesian ? 'Produksi dengan AI' : 'AI Production', desc: isIndonesian ? 'Kami produksi video pakai teknologi AI terbaru — voice-over, visual, animasi, semua dalam satu paket.' : 'We produce the video using cutting-edge AI technology — voice-over, visuals, animation, all in one package.' },
      { num: '03', title: isIndonesian ? 'Review & Selesai' : 'Review & Delivery', desc: isIndonesian ? 'Kamu review, kita revisi kalau perlu. Selesai! Video langsung siap tayang.' : 'You review, we revise if needed. Done! Your video is ready to publish.' },
    ],

    benefitLabel: isIndonesian ? 'KENAPA PILIH KAMI' : 'WHY CHOOSE US',
    benefitTitle: isIndonesian ? 'Keunggulan' : 'Advantages of',
    benefitTitleEm: isIndonesian ? 'Video AI' : 'AI Video',
    benefits: [
      { icon: '\u26A1', title: isIndonesian ? 'Cepat Banget' : 'Lightning Fast', desc: isIndonesian ? 'Video jadi dalam hitungan jam, bukan minggu.' : 'Videos ready in hours, not weeks.' },
      { icon: '\U0001F4B0', title: isIndonesian ? 'Harga 10x Lebih Murah' : '10x Cheaper', desc: isIndonesian ? 'Dibanding produksi konvensional, kamu bisa hemat hingga 90%.' : 'Compared to conventional production, you can save up to 90%.' },
      { icon: '\U0001F44D', title: isIndonesian ? 'Kualitas Premium' : 'Premium Quality', desc: isIndonesian ? 'Visual cinema-grade, voice-over natural, animasi halus.' : 'Cinema-grade visuals, natural voice-overs, smooth animations.' },
      { icon: '\U0001F504', title: isIndonesian ? 'Revisi Cepat' : 'Quick Revisions', desc: isIndonesian ? 'Nggak suka hasilnya? Kita revisi tanpa drama.' : 'Don\'t like the output? We revise without drama.' },
    ],

    pricingLabel: isIndonesian ? 'HARGA' : 'PRICING',
    pricingTitle: isIndonesian ? 'Pilih Paket' : 'Choose Your',
    pricingTitleEm: isIndonesian ? 'Video AI' : 'AI Video Package',
    pricingSub: isIndonesian
      ? 'Harga terjangkau untuk kualitas premium. Konsultasi gratis untuk diskusi kebutuhan videomu!'
      : 'Affordable pricing for premium quality. Free consultation to discuss your video needs!',
    pricingNote: isIndonesian
      ? '*Harga menyesuaikan kompleksitas dan durasi video.'
      : '*Pricing depends on complexity and video duration.',
    plans: [
      {
        name: isIndonesian ? 'Paket Basic' : 'Basic Package',
        price: isIndonesian ? 'Rp 200K' : '$15',
        unit: isIndonesian ? '/video' : '/video',
        desc: isIndonesian ? 'Video pendek siap upload untuk sosial media.' : 'Short ready-to-upload video for social media.',
        items: [
          isIndonesian ? 'Durasi 15-30 detik' : '15-30 seconds duration',
          isIndonesian ? 'AI voice-over Indonesia/Inggris' : 'AI voice-over (ID/EN)',
          isIndonesian ? 'Stock footage / visual AI' : 'Stock footage / AI visuals',
          isIndonesian ? 'Teks/Caption otomatis' : 'Auto text/captions',
          isIndonesian ? '1x revisi' : '1 revision',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Basic)')}`,
      },
      {
        name: isIndonesian ? 'Paket Standar' : 'Standard Package',
        price: isIndonesian ? 'Rp 500K' : '$35',
        unit: isIndonesian ? '/video' : '/video',
        desc: isIndonesian ? 'Video profesional dengan animasi dan editing lebih lengkap.' : 'Professional video with animation and full editing.',
        items: [
          isIndonesian ? 'Durasi 30-60 detik' : '30-60 seconds duration',
          isIndonesian ? 'AI voice-over premium' : 'Premium AI voice-over',
          isIndonesian ? 'Animasi grafis/motion' : 'Motion graphics / animation',
          isIndonesian ? 'Musik latar bebas royalti' : 'Royalty-free background music',
          isIndonesian ? '3x revisi' : '3 revisions',
          isIndonesian ? 'Format siap semua platform' : 'Multi-platform ready format',
        ],
        highlight: true,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Standar)')}`,
      },
      {
        name: isIndonesian ? 'Paket Premium' : 'Premium Package',
        price: isIndonesian ? 'Rp 1,5Jt' : '$100',
        unit: isIndonesian ? '/proyek' : '/project',
        desc: isIndonesian ? 'Video sinematik dengan custom karakter AI & efek visual.' : 'Cinematic video with custom AI characters and visual effects.',
        items: [
          isIndonesian ? 'Durasi 60-120 detik' : '60-120 seconds duration',
          isIndonesian ? 'Custom AI karakter / avatar' : 'Custom AI character / avatar',
          isIndonesian ? 'Visual sinematik penuh' : 'Full cinematic visuals',
          isIndonesian ? 'Script & storyboard profesional' : 'Professional script & storyboard',
          isIndonesian ? 'Unlimited revisi' : 'Unlimited revisions',
          isIndonesian ? 'Source file lengkap' : 'Full source files',
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
      { title: isIndonesian ? 'Pelaku UMKM' : 'SME Business Owners', desc: isIndonesian ? 'Buat iklan produk tanpa harus keluar modal besar.' : 'Create product ads without huge upfront costs.' },
      { title: isIndonesian ? 'Content Creator' : 'Content Creators', desc: isIndonesian ? 'Produksi konten video setiap hari tanpa kelelahan.' : 'Produce daily video content without burnout.' },
      { title: isIndonesian ? 'Startup & Agency' : 'Startups & Agencies', desc: isIndonesian ? 'Video promosi dan company profile dalam waktu singkat.' : 'Promotional and company profile videos in record time.' },
      { title: isIndonesian ? 'Personal Branding' : 'Personal Branding', desc: isIndonesian ? 'Bangun personal brand dengan video berkualitas tinggi.' : 'Build your personal brand with high-quality videos.' },
    ],

    ctaLabel: isIndonesian ? 'SIAP MULAI?' : 'READY TO START?',
    ctaTitle: isIndonesian ? 'Yuk, Bikin Video' : 'Let\'s Create Your',
    ctaTitleEm: isIndonesian ? 'AI-mu Sekarang' : 'AI Video Now',
    ctaSub: isIndonesian
      ? 'Konsultasi gratis, tanpa kewajiban. Ceritain ide videomu, kami wujudkan.'
      : 'Free consultation, no obligations. Tell us your video idea, we\'ll make it happen.',
    ctaBtn: isIndonesian ? 'Konsultasi Gratis' : 'Free Consultation',
    ctaBtnLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,
    ctaSecondary: '/id/jasa-video-ai',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isIndonesian ? 'Jasa Pembuatan Video AI' : 'AI Video Production Service',
    provider: { '@type': 'Organization', name: 'BerkahKarya' },
    description: isIndonesian
      ? 'Jasa pembuatan video dengan AI. Iklan, company profile, konten sosial media, animasi.'
      : 'AI-powered video production service. Ads, company profiles, social media content, animations.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: '200000',
      highPrice: '1500000',
    },
  };

  return (
    <Layout
      title={content.heroTitle + ' | BerkahKarya'}
      description={content.heroSub}
      keywords={isIndonesian ? 'jasa video AI, buat video pake AI, video promosi murah, video iklan AI, jasa animasi' : 'AI video production, AI video creator, promo video, video ads, animation service'}
      ogImage="/images/og-video-ai.jpg"
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
