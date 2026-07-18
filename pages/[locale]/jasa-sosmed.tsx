import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import JasaServicePage, { JasaServiceContent } from '@/components/JasaServicePage';

type Locale = 'id' | 'en';

interface Props { locale: Locale; }

const WA_NUMBER = '6285732740006';
const WA_TEXT = 'Halo BerkahKarya, saya tertarik dengan Jasa Kelola Sosial Media';

export default function JasaSosmedPage({ locale }: Props) {
  const isIndonesian = locale === 'id';

  const content: JasaServiceContent = {
    heroTag: isIndonesian ? 'JASA KELOLA SOSIAL MEDIA' : 'SOCIAL MEDIA MANAGEMENT',
    heroTitle: isIndonesian ? 'Biar Sosmed-mu' : 'Make Your Social Media',
    heroTitleEm: isIndonesian ? 'Nggak Mati Gaya' : 'Stay Fresh & Active',
    heroSub: isIndonesian
      ? 'Konten rutin, desain kece, caption menarik. Kami kelola sosial media kamu biar growth terus tanpa repot.'
      : 'Consistent content, stunning designs, engaging captions. We manage your social media so you keep growing without the hassle.',
    heroCta: isIndonesian ? 'Konsultasi Gratis via WA' : 'Free Consultation via WA',
    heroCtaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,

    problemLabel: isIndonesian ? 'MASALAH' : 'PROBLEMS',
    problemTitle: isIndonesian ? 'Sosial Media Itu' : 'Social Media',
    problemTitleEm: isIndonesian ? 'Repot Banget' : 'is Exhausting',
    problems: [
      {
        icon: '\U0001F4AD',
        title: isIndonesian ? 'Ide Konten Habis' : 'Out of Content Ideas',
        desc: isIndonesian ? 'Bingung mau posting apa setiap hari. Akhirnya kosong melompong berhari-hari.' : 'Stuck on what to post daily. Days go by with nothing.' },
      {
        icon: '\u23F3',
        title: isIndonesian ? 'Nggak Punya Waktu' : 'No Time to Manage',
        desc: isIndonesian ? 'Sibuk urus bisnis, nggak sempet bikin konten dan engage sama followers.' : 'Too busy running the business to create content and engage with followers.' },
      {
        icon: '\U0001F50D',
        title: isIndonesian ? 'Engagement Turun' : 'Declining Engagement',
        desc: isIndonesian ? 'Posting sepi like, jarang comment, followers stuck atau malah turun.' : 'Posts get few likes, rare comments, followers stagnate or decline.' },
    ],

    delivLabel: isIndonesian ? 'LAYANAN KAMI' : 'OUR SERVICES',
    delivTitle: isIndonesian ? 'Yang Kamu Dapetin' : 'What You\'ll Get',
    delivTitleEm: isIndonesian ? 'Setiap Bulan' : 'Every Month',
    deliverables: [
      { icon: '\U0001F5BC\uFE0F', title: isIndonesian ? 'Desain Feed Kekinian' : 'Trendy Feed Designs', desc: isIndonesian ? 'Desain feed Instagram/TikTok yang estetik dan konsisten dengan brand kamu.' : 'Aesthetic Instagram/TikTok feed designs consistent with your brand.' },
      { icon: '\U0001F4DD', title: isIndonesian ? 'Copywriting Engaging' : 'Engaging Copywriting', desc: isIndonesian ? 'Caption yang nggak cuma bagus, tapi bikin orang pengen komen.' : 'Captions that don\'t just look good but spark conversations.' },
      { icon: '\U0001F4F9', title: isIndonesian ? 'Konten Video/Reels' : 'Video / Reels Content', desc: isIndonesian ? 'Video pendek dan Reels yang bakal bikin feed kamu hidup.' : 'Short videos and Reels that bring your feed to life.' },
      { icon: '\U0001F4C5', title: isIndonesian ? 'Jadwal Posting Rutin' : 'Consistent Posting Schedule', desc: isIndonesian ? 'Nggak pernah bolong. Konten terkirim sesuai jadwal yang udah ditentuin.' : 'No more gaps. Content delivered on a set schedule.' },
      { icon: '\U0001F4CA', title: isIndonesian ? 'Laporan Bulanan' : 'Monthly Reports', desc: isIndonesian ? 'Data lengkap: growth followers, engagement rate, performa tiap postingan.' : 'Complete data: follower growth, engagement rate, per-post performance.' },
      { icon: '\U0001F4AC', title: isIndonesian ? 'Manajemen Komentar & DM' : 'Comment & DM Management', desc: isIndonesian ? 'Kami bales komentar dan DM biar engagement tetap terjaga.' : 'We reply to comments and DMs to keep engagement flowing.' },
    ],

    processLabel: isIndonesian ? 'CARA KERJA' : 'HOW IT WORKS',
    processTitle: isIndonesian ? 'Proses' : 'Our',
    processTitleEm: isIndonesian ? '3 Langkah' : '3-Step Process',
    processSteps: [
      { num: '01', title: isIndonesian ? 'Audit & Strategi' : 'Audit & Strategy', desc: isIndonesian ? 'Kami analisis akun kamu sekarang, kompetitor, dan bikin strategi konten.' : 'We analyze your current account, competitors, and craft a content strategy.' },
      { num: '02', title: isIndonesian ? 'Produksi Konten' : 'Content Production', desc: isIndonesian ? 'Desain, copy, video — semua diproduksi sesuai jadwal dan branding.' : 'Designs, copy, videos — all produced on schedule and on-brand.' },
      { num: '03', title: isIndonesian ? 'Posting & Pantau' : 'Post & Monitor', desc: isIndonesian ? 'Konten diposting, engagement dipantau, laporan dikirim tiap bulan.' : 'Content is posted, engagement is monitored, reports sent monthly.' },
    ],

    benefitLabel: isIndonesian ? 'KENAPA PILIH KAMI' : 'WHY CHOOSE US',
    benefitTitle: isIndonesian ? 'Keuntungan' : 'Benefits of',
    benefitTitleEm: isIndonesian ? 'Pakai Jasa Ini' : 'This Service',
    benefits: [
      { icon: '\U0001F4C8', title: isIndonesian ? 'Growth Konsisten' : 'Consistent Growth', desc: isIndonesian ? 'Follower dan engagement naik tiap bulan, bukan instan lalu turun.' : 'Followers and engagement grow monthly, not spike-and-drop.' },
      { icon: '\u23F3', title: isIndonesian ? 'Hemat Waktu' : 'Save Time', desc: isIndonesian ? 'Fokus urus bisnis, urusan sosmed biar kami yang handle.' : 'Focus on your business, leave social media to us.' },
      { icon: '\U0001F3A8', title: isIndonesian ? 'Branding Konsisten' : 'Consistent Branding', desc: isIndonesian ? 'Feed rapi, tone of voice seragam, identitas brand kuat.' : 'Clean feed, uniform tone, strong brand identity.' },
      { icon: '\U0001F4B0', title: isIndonesian ? 'Hasil Terukur' : 'Measurable Results', desc: isIndonesian ? 'Laporan bulanan detail, transparan, kamu tau persis perkembangannya.' : 'Detailed monthly reports — transparent, you know exactly how things are going.' },
    ],

    pricingLabel: isIndonesian ? 'HARGA' : 'PRICING',
    pricingTitle: isIndonesian ? 'Pilih Paket' : 'Choose Your',
    pricingTitleEm: isIndonesian ? 'Sosial Media' : 'Social Media Plan',
    pricingSub: isIndonesian
      ? 'Mulai dari 30 konten per bulan. Bisa custom sesuai kebutuhan bisnismu.'
      : 'Starting from 30 posts per month. Fully customizable to your business needs.',
    pricingNote: isIndonesian
      ? '*Harga tergantung jumlah platform dan volume konten per bulan.'
      : '*Pricing depends on number of platforms and monthly content volume.',
    plans: [
      {
        name: isIndonesian ? 'Paket Basic' : 'Basic Plan',
        price: isIndonesian ? 'Rp 500K' : '$35',
        unit: isIndonesian ? '/bulan' : '/month',
        desc: isIndonesian ? 'Cocok untuk personal brand atau UMKM kecil yang mulai serius.' : 'Perfect for personal brands or small businesses getting serious.',
        items: [
          isIndonesian ? '1 platform (IG/TikTok)' : '1 platform (IG/TikTok)',
          isIndonesian ? '12 konten per bulan' : '12 posts per month',
          isIndonesian ? 'Desain feed + caption' : 'Feed design + captions',
          isIndonesian ? '2 Reels per bulan' : '2 Reels per month',
          isIndonesian ? 'Laporan bulanan' : 'Monthly reports',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Basic)')}`,
      },
      {
        name: isIndonesian ? 'Paket Standar' : 'Standard Plan',
        price: isIndonesian ? 'Rp 1,5Jt' : '$100',
        unit: isIndonesian ? '/bulan' : '/month',
        desc: isIndonesian ? 'Untuk bisnis yang butuh kehadiran sosmed aktif di 2 platform.' : 'For businesses needing active social presence on 2 platforms.',
        items: [
          isIndonesian ? '2 platform (IG + TikTok)' : '2 platforms (IG + TikTok)',
          isIndonesian ? '30 konten per bulan' : '30 posts per month',
          isIndonesian ? 'Desain feed + caption' : 'Feed design + captions',
          isIndonesian ? '8 Reels per bulan' : '8 Reels per month',
          isIndonesian ? 'Manajemen komentar & DM' : 'Comment & DM management',
          isIndonesian ? 'Laporan bulanan detail' : 'Detailed monthly reports',
        ],
        highlight: true,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Standar)')}`,
      },
      {
        name: isIndonesian ? 'Paket Premium' : 'Premium Plan',
        price: isIndonesian ? 'Rp 3,5Jt' : '$235',
        unit: isIndonesian ? '/bulan' : '/month',
        desc: isIndonesian ? 'Full-service untuk bisnis yang serius growth di semua platform.' : 'Full-service for businesses serious about growth across all platforms.',
        items: [
          isIndonesian ? '3 platform (IG + TikTok + FB/LinkedIn)' : '3 platforms (IG + TikTok + FB/LinkedIn)',
          isIndonesian ? '60 konten per bulan' : '60 posts per month',
          isIndonesian ? 'Desain feed + caption premium' : 'Premium design + captions',
          isIndonesian ? '15 Reels per bulan' : '15 Reels per month',
          isIndonesian ? 'Manajemen penuh' : 'Full management',
          isIndonesian ? 'Iklan booster (budget terpisah)' : 'Ad booster (separate budget)',
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
      { title: isIndonesian ? 'UMKM & Toko Online' : 'SMEs & Online Stores', desc: isIndonesian ? 'Biar produkmu keliatan setiap hari di feed pelanggan.' : 'Keep your products visible in customers\' feeds daily.' },
      { title: isIndonesian ? 'Kafe, Resto & Hotel' : 'Cafes, Restaurants & Hotels', desc: isIndonesian ? 'Promo harian dan konten menarik biar selalu ramai.' : 'Daily promos and engaging content to stay busy.' },
      { title: isIndonesian ? 'Personal Brand' : 'Personal Brands', desc: isIndonesian ? 'Bangun otoritas dan koneksi dengan konten yang konsisten.' : 'Build authority and connection through consistent content.' },
      { title: isIndonesian ? 'Jasa & Agency' : 'Services & Agencies', desc: isIndonesian ? 'Tampilkan portofolio dan testimoni biar makin dipercaya.' : 'Showcase portfolios and testimonials to build trust.' },
    ],

    ctaLabel: isIndonesian ? 'SIAP MULAI?' : 'READY TO START?',
    ctaTitle: isIndonesian ? 'Yuk, Kelola Sosmed-mu' : 'Let\'s Manage Your',
    ctaTitleEm: isIndonesian ? 'Bersama Kami' : 'Social Media Together',
    ctaSub: isIndonesian
      ? 'Konsultasi gratis, kita audit akun kamu, dan bikin strategi yang tepat.'
      : 'Free consultation — we\'ll audit your account and create the right strategy.',
    ctaBtn: isIndonesian ? 'Konsultasi Gratis' : 'Free Consultation',
    ctaBtnLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,
    ctaSecondary: `/${locale}/jasa-sosmed`,
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isIndonesian ? 'Jasa Kelola Sosial Media' : 'Social Media Management Service',
    provider: { '@type': 'Organization', name: 'BerkahKarya' },
    description: isIndonesian
      ? 'Jasa kelola sosial media profesional untuk UMKM, kafe, dan personal brand. Konten rutin, desain kece, growth konsisten.'
      : 'Professional social media management for SMEs, cafes, and personal brands. Consistent content, great design, steady growth.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: '500000',
      highPrice: '3500000',
    },
  };

  return (
    <Layout
      title={content.heroTitle + ' | BerkahKarya'}
      description={content.heroSub}
      keywords={isIndonesian ? 'jasa kelola sosial media, jasa sosial media murah, manajemen IG, konten TikTok, growth sosmed' : 'social media management, Instagram management, TikTok content, social media growth'}
      ogImage="/images/og-sosmed.jpg"
      jsonLd={jsonLd}
    >
      <JasaServicePage locale={locale} pageName='jasa-sosmed' content={content} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});
