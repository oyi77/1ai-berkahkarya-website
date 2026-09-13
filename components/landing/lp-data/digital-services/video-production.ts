import type { LPContent } from '../../ServiceLP';
import { ctaLink, trustItems } from './_shared';

// ─── 2. Video Production ───
export const videoProductionData: LPContent = {
  serviceName: 'video-production',
  title: { id: 'Jasa Produksi Video Profesional', en: 'Professional Video Production' },
  description: {
    id: 'Kami produksi video komersial, korporat, dan konten media sosial berkualitas sinematik untuk branding bisnis Anda.',
    en: 'We produce commercial, corporate, and social media videos with cinematic quality for your business branding.',
  },
  hero: {
    badge: { id: '🎬 Free storyboard untuk project pertama', en: '🎬 Free storyboard on your first project' },
    title: { id: 'Video Berkualitas Sinematik', en: 'Cinematic Quality Videos' },
    subtitle: {
      id: 'Tingkatkan brand Anda dengan video profesional — iklan komersial, company profile, hingga konten TikTok dan Instagram yang engaging.',
      en: 'Elevate your brand with professional videos — TV commercials, company profiles, to engaging TikTok and Instagram content.',
    },
    cta: { id: 'Konsultasi Gratis Sekarang', en: 'Free Consultation Now' },
    ctaLink,
    trustItems,
  },
  problems: {
    title: { id: 'Masalah Video yang Sering Terjadi', en: 'Common Video Problems' },
    items: [
      {
        icon: '🤳',
        title: { id: 'Video Amatiran', en: 'Amateur-looking Videos' },
        desc: { id: 'Rekaman HP dengan pencahayaan buruk, suara berisik, dan editing seadanya — tidak mencerminkan kualitas brand Anda.', en: 'Phone recordings with poor lighting, noisy audio, and basic editing — they do not reflect your brand quality.' },
      },
      {
        icon: '📉',
        title: { id: 'Konten Tidak Engaging', en: 'Unengaging Content' },
        desc: { id: 'Video membosankan yang tidak menarik perhatian — viewer skip dalam 3 detik pertama.', en: 'Boring videos that fail to grab attention — viewers skip within the first 3 seconds.' },
      },
      {
        icon: '💸',
        title: { id: 'Budget Terbatas', en: 'Limited Budget' },
        desc: { id: 'Produksi video mahal? Kami punya paket terjangkau tanpa mengorbankan kualitas.', en: 'Expensive video production? We have affordable packages without sacrificing quality.' },
      },
      {
        icon: '😰',
        title: { id: 'Bingung Ide & Konsep', en: 'No Ideas or Concepts' },
        desc: { id: 'Punya produk bagus tapi bingung bagaimana cara memvisualisasikannya dalam video yang menarik.', en: 'Great product but unsure how to visualize it in an engaging video.' },
      },
    ],
  },
  features: {
    title: { id: 'Kenapa Pilih Kami?', en: 'Why Choose Us?' },
    items: [
      {
        icon: '🎥',
        title: { id: 'Peralatan Profesional', en: 'Professional Equipment' },
        desc: { id: 'Kamera sinematik, lighting studio, dan audio gear untuk hasil video berkualitas tinggi.', en: 'Cinematic cameras, studio lighting, and audio gear for high-quality video results.' },
      },
      {
        icon: '🎬',
        title: { id: 'Konsep Kreatif', en: 'Creative Concepts' },
        desc: { id: 'Tim kreatif kami siap membantu merancang konsep, storyboard, dan naskah yang impactful.', en: 'Our creative team helps design impactful concepts, storyboards, and scripts.' },
      },
      {
        icon: '✂️',
        title: { id: 'Editing Cinematic', en: 'Cinematic Editing' },
        desc: { id: 'Color grading, motion graphics, sound design — editing profesional yang bikin video Anda standout.', en: 'Color grading, motion graphics, sound design — professional editing that makes your video stand out.' },
      },
      {
        icon: '📱',
        title: { id: 'Optimasi Multi-Platform', en: 'Multi-Platform Optimization' },
        desc: { id: 'Format video disesuaikan untuk Instagram, TikTok, YouTube, dan TV — ukuran dan durasi yang tepat.', en: 'Video formats tailored for Instagram, TikTok, YouTube, and TV — right dimensions and duration.' },
      },
    ],
  },
  compareTable: {
    title: { id: 'Sebelum vs Sesudah', en: 'Before vs After' },
    beforeLabel: { id: 'Video Biasa', en: 'Ordinary Video' },
    afterLabel: { id: 'Video Kami', en: 'Our Video' },
    rows: [
      {
        feature: { id: 'Kualitas Gambar', en: 'Image Quality' },
        before: { id: 'Buram, pencahayaan kurang', en: 'Blurry, poor lighting' },
        after: { id: 'HD/4K sinematik', en: 'HD/4K cinematic' },
      },
      {
        feature: { id: 'Audio', en: 'Audio' },
        before: { id: 'Bising, tidak jelas', en: 'Noisy, unclear' },
        after: { id: 'Jernih, mixing profesional', en: 'Crystal clear, pro mixing' },
      },
      {
        feature: { id: 'Editing', en: 'Editing' },
        before: { id: 'Polos tanpa efek', en: 'Plain, no effects' },
        after: { id: 'Color grading + motion graphics', en: 'Color grading + motion graphics' },
      },
      {
        feature: { id: 'Storytelling', en: 'Storytelling' },
        before: { id: 'Tidak ada narasi jelas', en: 'No clear narrative' },
        after: { id: 'Alur cerita yang kuat', en: 'Strong story flow' },
      },
      {
        feature: { id: 'Engagement', en: 'Engagement' },
        before: { id: 'Viewer skip dalam 3 detik', en: 'Viewers skip in 3 seconds' },
        after: { id: 'Hook kuat di 3 detik pertama', en: 'Strong hook in first 3 seconds' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Brief & Konsep', en: 'Brief & Concept' },
        desc: { id: 'Kami diskusikan tujuan, target audiens, dan pesan yang ingin disampaikan.', en: 'We discuss the goals, target audience, and message you want to convey.' },
      },
      {
        title: { id: 'Storyboard & Naskah', en: 'Storyboard & Script' },
        desc: { id: 'Tim kreatif kami buat storyboard dan naskah untuk Anda review dan approve.', en: 'Our creative team creates a storyboard and script for your review and approval.' },
      },
      {
        title: { id: 'Produksi', en: 'Production' },
        desc: { id: 'Syuting dengan peralatan profesional di lokasi yang sudah disepakati.', en: 'Shooting with professional equipment at the agreed location.' },
      },
      {
        title: { id: 'Editing & Delivery', en: 'Editing & Delivery' },
        desc: { id: 'Post-produksi lengkap — editing, color grading, sound design — siap tayang.', en: 'Full post-production — editing, color grading, sound design — ready to air.' },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Basic', en: 'Basic' },
        price: { id: 'Rp 1.000.000', en: 'Rp 1,000,000' },
        description: { id: 'Cocok untuk konten media sosial', en: 'Perfect for social media content' },
        features: {
          id: ['Durasi 30-60 detik', 'Konsep & naskah sederhana', '1 lokasi shooting', 'Editing dasar + color grading', 'Format 16:9 & 9:16', '1x revisi'],
          en: ['30-60 seconds duration', 'Simple concept & script', '1 shooting location', 'Basic editing + color grading', '16:9 & 9:16 formats', '1 revision'],
        },
        cta: { id: 'Pilih Basic', en: 'Choose Basic' },
        ctaLink,
      },
      {
        name: { id: 'Pro', en: 'Pro' },
        price: { id: 'Rp 2.500.000', en: 'Rp 2,500,000' },
        originalPrice: { id: 'Rp 3.500.000', en: 'Rp 3,500,000' },
        description: { id: 'Paling populer untuk brand & korporasi', en: 'Most popular for brands & corporations' },
        features: {
          id: ['Durasi 1-2 menit', 'Konsep & storyboard detail', '1-2 lokasi shooting', 'Editing profesional + motion graphics', 'Color grading sinematik', 'Sound design & mixing', '2x revisi'],
          en: ['1-2 minutes duration', 'Detailed concept & storyboard', '1-2 shooting locations', 'Professional editing + motion graphics', 'Cinematic color grading', 'Sound design & mixing', '2 revisions'],
        },
        highlighted: true,
        cta: { id: 'Pilih Pro', en: 'Choose Pro' },
        ctaLink,
        badge: { id: 'TERLARIS', en: 'BESTSELLER' },
      },
      {
        name: { id: 'Premium', en: 'Premium' },
        price: { id: 'Rp 4.000.000', en: 'Rp 4,000,000' },
        description: { id: 'Video sinematik untuk brand besar', en: 'Cinematic video for major brands' },
        features: {
          id: ['Durasi 2-5 menit', 'Konsep kreatif eksklusif', 'Multi-lokasi shooting', 'Drone aerial footage', 'Animasi & VFX', 'Color grading Hollywood', 'Unlimited revisi', 'File source lengkap'],
          en: ['2-5 minutes duration', 'Exclusive creative concept', 'Multi-location shooting', 'Drone aerial footage', 'Animation & VFX', 'Hollywood-grade color grading', 'Unlimited revisions', 'Full source files'],
        },
        cta: { id: 'Pilih Premium', en: 'Choose Premium' },
        ctaLink,
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Rina Wijaya',
        role: { id: 'Marketing Manager', en: 'Marketing Manager' },
        quote: {
          id: 'Video company profile yang dibuat sangat profesional. Klien kami terkesan dengan kualitas produksinya. Thank you BerkahKarya!',
          en: 'The company profile video was very professional. Our clients were impressed with the production quality. Thank you BerkahKarya!',
        },
        avatar: '/avatars/rina.jpg',
        rating: 5,
      },
      {
        name: 'Doni Prasetyo',
        role: { id: 'Owner Coffee Shop', en: 'Coffee Shop Owner' },
        quote: {
          id: 'Konten TikTok yang dibuat BerkahKarya bikin ramai pengunjung! Video creative banget dan engage dengan anak muda.',
          en: 'The TikTok content created by BerkahKarya brought in more visitors! Very creative videos that engage young people.',
        },
        avatar: '/avatars/doni.jpg',
        rating: 5,
      },
      {
        name: 'Mega Putri',
        role: { id: 'Brand Manager', en: 'Brand Manager' },
        quote: {
          id: 'Tim produksinya profesional banget dari pra-produksi sampai akhir. Hasilnya超出 ekspektasi!',
          en: 'The production team was very professional from pre-production to finish. The result exceeded expectations!',
        },
        avatar: '/avatars/mega.jpg',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Berapa lama proses produksi video?', en: 'How long does video production take?' },
        a: { id: 'Untuk video sederhana (konten medsos) sekitar 3-5 hari kerja. Video komersial atau company profile membutuhkan 7-14 hari kerja tergantung kompleksitas.', en: 'For simple videos (social media content) about 3-5 working days. Commercial or company profile videos require 7-14 working days depending on complexity.' },
      },
      {
        q: { id: 'Apakah kami perlu menyiapkan naskah sendiri?', en: 'Do we need to prepare our own script?' },
        a: { id: 'Tidak perlu! Tim kreatif kami yang akan membuat konsep, naskah, dan storyboard. Anda tinggal review dan approve.', en: 'Not at all! Our creative team creates the concept, script, and storyboard. You just review and approve.' },
      },
      {
        q: { id: 'Lokasi shooting di mana saja?', en: 'Where are the shooting locations?' },
        a: { id: 'Kami bisa shooting di lokasi Anda (kantor, studio, toko) atau di lokasi eksternal yang sudah disepakati. Biaya transportasi menyesuaikan.', en: 'We can shoot at your location (office, studio, store) or at an agreed external location. Transportation costs are adjusted accordingly.' },
      },
      {
        q: { id: 'Apakah bisa pakai drone untuk footage udara?', en: 'Can we use a drone for aerial footage?' },
        a: { id: 'Ya, paket Premium sudah termasuk drone aerial footage. Untuk paket lain, drone bisa ditambahkan dengan biaya tambahan.', en: 'Yes, the Premium package already includes drone aerial footage. For other packages, drone can be added for an additional fee.' },
      },
      {
        q: { id: 'Format video apa yang akan kami terima?', en: 'What video format will we receive?' },
        a: { id: 'Anda akan menerima file dalam format MP4 HD/4K, plus versi yang dioptimasi untuk Instagram, TikTok, dan YouTube sesuai paket.', en: 'You will receive files in MP4 HD/4K format, plus versions optimized for Instagram, TikTok, and YouTube depending on the package.' },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Bikin Video Keren?', en: 'Ready to Make an Awesome Video?' },
    subtitle: {
      id: 'Konsultasi gratis — ceritakan ide Anda, kami wujudkan dalam video berkualitas sinematik.',
      en: 'Free consultation — tell us your idea, we will bring it to life in cinematic quality.',
    },
    cta: { id: 'Hubungi Kami Sekarang', en: 'Contact Us Now' },
    ctaLink,
    guarantee: { id: 'Garansi revisi sampai puas — kualitas sinematik atau uang kembali', en: 'Satisfaction guaranteed — cinematic quality or your money back' },
  },
};
