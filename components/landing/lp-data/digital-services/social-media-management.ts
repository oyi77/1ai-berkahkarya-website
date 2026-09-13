import type { LPContent } from '../../ServiceLP';
import { ctaLink, trustItems } from './_shared';

// ─── 3. Social Media Management ───
export const socialMediaManagementData: LPContent = {
  serviceName: 'social-media-management',
  title: { id: 'Jasa Social Media Management', en: 'Social Media Management Service' },
  description: {
    id: 'Kelola media sosial bisnis Anda secara profesional — konten kreatif, penjadwalan rutin, dan growth engagement organik.',
    en: 'Manage your business social media professionally — creative content, regular scheduling, and organic engagement growth.',
  },
  hero: {
    badge: { id: '📱 Free audit akun medsos + strategi konten', en: '📱 Free social media audit + content strategy' },
    title: { id: 'Social Media yang Growth & Engaging', en: 'Social Media That Grows & Engages' },
    subtitle: {
      id: 'Kami handle Instagram, TikTok, Facebook, dan LinkedIn Anda — konten rutin, desain keren, dan strategi yang bikin followers terus bertambah.',
      en: 'We handle your Instagram, TikTok, Facebook, and LinkedIn — regular content, cool designs, and strategies that keep followers growing.',
    },
    cta: { id: 'Konsultasi Gratis Sekarang', en: 'Free Consultation Now' },
    ctaLink,
    trustItems,
  },
  problems: {
    title: { id: 'Masalah Medsos yang Sering Terjadi', en: 'Common Social Media Problems' },
    items: [
      {
        icon: '😴',
        title: { id: 'Akun Sepi & Tidak Aktif', en: 'Inactive & Empty Account' },
        desc: { id: 'Posting terakhir 3 bulan lalu, followers sedikit, dan engagement nyaris nol.', en: 'Last post was 3 months ago, few followers, and near-zero engagement.' },
      },
      {
        icon: '🎨',
        title: { id: 'Desain Kurang Menarik', en: 'Unattractive Design' },
        desc: { id: 'Feed tidak konsisten, desain asal-asalan, dan tidak mencerminkan brand identity.', en: 'Inconsistent feed, mediocre design, and does not reflect brand identity.' },
      },
      {
        icon: '⏰',
        title: { id: 'Tidak Punya Waktu', en: 'No Time to Manage' },
        desc: { id: 'Sibuk urus bisnis — tidak sempat bikin konten, posting rutin, atau balas komentar.', en: 'Too busy running the business — no time to create content, post regularly, or reply to comments.' },
      },
      {
        icon: '📊',
        title: { id: 'Bingung Strategi', en: 'No Clear Strategy' },
        desc: { id: 'Posting sembarangan tanpa strategi — hasilnya tidak maksimal dan buang waktu.', en: 'Posting randomly without strategy — results are suboptimal and time is wasted.' },
      },
    ],
  },
  features: {
    title: { id: 'Kenapa Pilih Kami?', en: 'Why Choose Us?' },
    items: [
      {
        icon: '📝',
        title: { id: 'Konten Berkualitas', en: 'Quality Content' },
        desc: { id: 'Copywriting dan desain visual yang menarik, konsisten, dan sesuai brand Anda.', en: 'Copywriting and visual design that are engaging, consistent, and on-brand.' },
      },
      {
        icon: '📅',
        title: { id: 'Jadwal Rutin', en: 'Regular Schedule' },
        desc: { id: 'Posting terjadwal secara konsisten — feed tetap aktif tanpa Anda repot.', en: 'Consistently scheduled posting — your feed stays active without the hassle.' },
      },
      {
        icon: '📈',
        title: { id: 'Growth Organik', en: 'Organic Growth' },
        desc: { id: 'Strategi konten dan engagement yang mendatangkan followers dan pelanggan nyata.', en: 'Content and engagement strategies that bring real followers and customers.' },
      },
      {
        icon: '📊',
        title: { id: 'Laporan Bulanan', en: 'Monthly Reports' },
        desc: { id: 'Laporan lengkap — growth followers, engagement rate, dan insight performa konten.', en: 'Complete reports — follower growth, engagement rate, and content performance insights.' },
      },
    ],
  },
  compareTable: {
    title: { id: 'Sebelum vs Sesudah', en: 'Before vs After' },
    beforeLabel: { id: 'Tanpa SMM', en: 'Without SMM' },
    afterLabel: { id: 'Dengan SMM', en: 'With SMM' },
    rows: [
      {
        feature: { id: 'Konsistensi Posting', en: 'Posting Consistency' },
        before: { id: 'Kadang-kadang, tidak terjadwal', en: 'Occasional, no schedule' },
        after: { id: 'Rutin 3-5x per minggu', en: 'Regular 3-5x per week' },
      },
      {
        feature: { id: 'Kualitas Desain', en: 'Design Quality' },
        before: { id: 'Asal-asalan, tidak konsisten', en: 'Random, inconsistent' },
        after: { id: 'Feed estetik & konsisten', en: 'Aesthetic & consistent feed' },
      },
      {
        feature: { id: 'Engagement', en: 'Engagement' },
        before: { id: 'Like & komen sepi', en: 'Few likes & comments' },
        after: { id: 'Interaksi aktif naik 200%+', en: 'Active interaction up 200%+' },
      },
      {
        feature: { id: 'Followers', en: 'Followers' },
        before: { id: 'Stagnan atau turun', en: 'Stagnant or declining' },
        after: { id: 'Bertambah 500-2000+/bulan', en: 'Growing 500-2000+/month' },
      },
      {
        feature: { id: 'Laporan', en: 'Reporting' },
        before: { id: 'Tidak ada data', en: 'No data available' },
        after: { id: 'Laporan bulanan detail', en: 'Detailed monthly reports' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Audit & Strategi', en: 'Audit & Strategy' },
        desc: { id: 'Kami audit akun Anda saat ini dan buat strategi konten yang tepat.', en: 'We audit your current account and create the right content strategy.' },
      },
      {
        title: { id: 'Pembuatan Konten', en: 'Content Creation' },
        desc: { id: 'Kami desain visual, tulis caption, dan siapkan konten untuk sebulan penuh.', en: 'We design visuals, write captions, and prepare content for a full month.' },
      },
      {
        title: { id: 'Penjadwalan & Posting', en: 'Scheduling & Posting' },
        desc: { id: 'Semua konten dijadwalkan dan diposting secara konsisten di jam terbaik.', en: 'All content is scheduled and posted consistently at the best times.' },
      },
      {
        title: { id: 'Monitoring & Laporan', en: 'Monitoring & Reporting' },
        desc: { id: 'Kami pantau performa, balas komentar/DM, dan kirim laporan bulanan.', en: 'We monitor performance, reply to comments/DMs, and send monthly reports.' },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 500.000', en: 'Rp 500,000' },
        description: { id: 'Cocok untuk UMKM & personal brand', en: 'Perfect for small businesses & personal brands' },
        features: {
          id: ['1 platform (Instagram/TikTok)', '10-12 konten/bulan', 'Desain template premium', 'Caption copywriting', 'Penjadwalan posting', 'Laporan bulanan'],
          en: ['1 platform (Instagram/TikTok)', '10-12 contents/month', 'Premium template design', 'Caption copywriting', 'Post scheduling', 'Monthly report'],
        },
        cta: { id: 'Pilih Starter', en: 'Choose Starter' },
        ctaLink,
      },
      {
        name: { id: 'Growth', en: 'Growth' },
        price: { id: 'Rp 1.200.000', en: 'Rp 1,200,000' },
        originalPrice: { id: 'Rp 1.500.000', en: 'Rp 1,500,000' },
        description: { id: 'Paling populer untuk brand berkembang', en: 'Most popular for growing brands' },
        features: {
          id: ['2 platform (IG + TikTok)', '20 konten/bulan', 'Desain visual eksklusif', 'Copywriting + CTA strategis', 'Engagement management (balas komen/DM)', 'Story & Reels konten', 'Laporan bulanan detail'],
          en: ['2 platforms (IG + TikTok)', '20 contents/month', 'Exclusive visual design', 'Copywriting + strategic CTA', 'Engagement management (reply comments/DMs)', 'Story & Reels content', 'Detailed monthly report'],
        },
        highlighted: true,
        cta: { id: 'Pilih Growth', en: 'Choose Growth' },
        ctaLink,
        badge: { id: 'TERLARIS', en: 'BESTSELLER' },
      },
      {
        name: { id: 'Premium', en: 'Premium' },
        price: { id: 'Rp 2.000.000', en: 'Rp 2,000,000' },
        description: { id: 'Solusi lengkap multi-platform', en: 'Complete multi-platform solution' },
        features: {
          id: ['3-4 platform (IG + TikTok + FB + LinkedIn)', '30 konten/bulan', 'Konten video Reels/TikTok', 'Copywriting + strategi brand', 'Engagement management', 'Ads optimasi dasar', 'Kolaborasi influencer (kuota terbatas)', 'Laporan + rekomendasi strategi'],
          en: ['3-4 platforms (IG + TikTok + FB + LinkedIn)', '30 contents/month', 'Reels/TikTok video content', 'Copywriting + brand strategy', 'Engagement management', 'Basic ads optimization', 'Influencer collaboration (limited quota)', 'Report + strategy recommendations'],
        },
        cta: { id: 'Pilih Premium', en: 'Choose Premium' },
        ctaLink,
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Fitri Handayani',
        role: { id: 'Pemilik Butik Online', en: 'Online Boutique Owner' },
        quote: {
          id: 'Followers Instagram saya naik 3x lipat dalam 2 bulan! Kontennya cantik dan engagement jadi aktif banget. Recommended!',
          en: 'My Instagram followers tripled in 2 months! The content is beautiful and engagement is very active. Highly recommended!',
        },
        avatar: '/avatars/fitri.jpg',
        rating: 5,
      },
      {
        name: 'Agus Hermawan',
        role: { id: 'Founder Startup Edukasi', en: 'EdTech Startup Founder' },
        quote: {
          id: 'BerkahKarya handle semua medsos kami. Sekarang brand awareness naik signifikan dan banyak leads dari Instagram.',
          en: 'BerkahKarya handles all our social media. Brand awareness has increased significantly and we get many leads from Instagram.',
        },
        avatar: '/avatars/agus.jpg',
        rating: 5,
      },
      {
        name: 'Dewi Lestari',
        role: { id: 'Owner Katering', en: 'Catering Business Owner' },
        quote: {
          id: 'Awalnya ragu, tapi setelah 1 bulan hasilnya luar biasa! Orderan banyak yang dari medsos. Makasih BerkahKarya!',
          en: 'I was hesitant at first, but after 1 month the results were amazing! Many orders came from social media. Thank you BerkahKarya!',
        },
        avatar: '/avatars/dewi.jpg',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Platform apa saja yang dikelola?', en: 'What platforms do you manage?' },
        a: { id: 'Kami mengelola Instagram, TikTok, Facebook, dan LinkedIn. Anda bisa pilih sesuai dengan target audiens bisnis Anda.', en: 'We manage Instagram, TikTok, Facebook, and LinkedIn. You can choose based on your business target audience.' },
      },
      {
        q: { id: 'Apakah saya bisa lihat konten sebelum diposting?', en: 'Can I see the content before it is posted?' },
        a: { id: 'Tentu! Semua konten akan dikirim untuk review Anda sebelum dipublikasikan. Anda bisa request revisi jika ada yang kurang sesuai.', en: 'Of course! All content will be sent for your review before publication. You can request revisions if something is not right.' },
      },
      {
        q: { id: 'Berapa lama sampai terlihat hasilnya?', en: 'How long until results are visible?' },
        a: { id: 'Perubahan biasanya terlihat dalam 2-4 minggu pertama — engagement mulai meningkat dan followers bertambah. Hasil signifikan biasanya dalam 2-3 bulan dengan strategi konsisten.', en: 'Changes are usually visible within the first 2-4 weeks — engagement starts increasing and followers grow. Significant results typically within 2-3 months with consistent strategy.' },
      },
      {
        q: { id: 'Apakah termasuk iklan berbayar (ads)?', en: 'Does it include paid ads?' },
        a: { id: 'Paket Premium mencakup optimasi ads dasar (budget iklan tidak termasuk). Untuk paket lain, kami bisa bantu kelola iklan terpisah dengan biaya tambahan.', en: 'The Premium package includes basic ads optimization (ad budget not included). For other packages, we can help manage ads separately at an additional cost.' },
      },
      {
        q: { id: 'Bagaimana jika saya ingin berhenti di tengah jalan?', en: 'What if I want to stop mid-contract?' },
        a: { id: 'Tidak ada kontrak jangka panjang. Anda bisa berhenti kapan saja dengan pemberitahuan 1 minggu sebelumnya. Kami akan serahkan semua aset konten yang sudah dibuat.', en: 'No long-term contracts. You can stop anytime with 1 week notice. We will hand over all content assets that have been created.' },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Bikin Medsos Bisnis Anda Naik Kelas?', en: 'Ready to Level Up Your Social Media?' },
    subtitle: {
      id: 'Konsultasi gratis — kami audit akun Anda dan kasih strategi yang tepat tanpa kewajiban.',
      en: 'Free consultation — we audit your account and give you the right strategy with no obligation.',
    },
    cta: { id: 'Hubungi Kami Sekarang', en: 'Contact Us Now' },
    ctaLink,
    guarantee: { id: 'Garansi growth engagement atau strategi kami evaluasi gratis', en: 'Engagement growth guaranteed or we reevaluate the strategy for free' },
  },
};
