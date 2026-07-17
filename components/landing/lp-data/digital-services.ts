import type { LPContent } from '../ServiceLP';

// ─── Shared assets ───
const ctaLink = 'https://wa.me/6282231399998?text=Halo%20BerkahKarya!%20Saya%20tertarik%20dengan%20layanan%20Anda.';
const trustItems = {
  id: ['🔒 Data aman & rahasia', '⚡ Respons < 30 menit', '✅ Bergaransi', '🏆 100+ klien puas'],
  en: ['🔒 Data safe & confidential', '⚡ Response < 30 min', '✅ Guaranteed', '🏆 100+ satisfied clients'],
};

// ─── 1. Website Development ───
export const websiteDevelopmentData: LPContent = {
  serviceName: 'website-development',
  title: { id: 'Jasa Pembuatan Website Profesional', en: 'Professional Website Development' },
  description: {
    id: 'Kami membangun website berkualitas tinggi — company profile, toko online, landing page — dengan desain modern, responsif, dan SEO-friendly.',
    en: 'We build high-quality websites — company profiles, online stores, landing pages — with modern, responsive, SEO-friendly design.',
  },
  hero: {
    badge: { id: '🔥 Diskon 20% untuk project pertama', en: '🔥 20% off your first project' },
    title: { id: 'Website Profesional untuk Bisnis Anda', en: 'Professional Websites for Your Business' },
    subtitle: {
      id: 'Dari company profile hingga toko online — solusi lengkap dengan desain modern, mobile-friendly, dan siap membantu bisnis Anda tumbuh.',
      en: 'From company profiles to online stores — a complete solution with modern design, mobile-friendly, ready to help your business grow.',
    },
    cta: { id: 'Konsultasi Gratis Sekarang', en: 'Free Consultation Now' },
    ctaLink,
    trustItems,
  },
  problems: {
    title: { id: 'Masalah Website yang Sering Terjadi', en: 'Common Website Problems' },
    items: [
      {
        icon: '😫',
        title: { id: 'Tidak Punya Website', en: 'No Website Yet' },
        desc: { id: 'Bisnis Anda tidak terlihat online. Calon pelanggan tidak bisa menemukan Anda.', en: 'Your business is invisible online. Potential customers cannot find you.' },
      },
      {
        icon: '🐌',
        title: { id: 'Website Lemot & Jelek', en: 'Slow & Ugly Website' },
        desc: { id: 'Website lama loading-nya lama, tidak responsif di HP, dan desainnya ketinggalan zaman.', en: 'Old website loads slowly, not responsive on mobile, and looks outdated.' },
      },
      {
        icon: '📉',
        title: { id: 'Sepi Pengunjung', en: 'No Visitors' },
        desc: { id: 'Website sudah ada tapi tidak ada yang datang karena tidak dioptimasi untuk SEO.', en: 'Website exists but no one visits because it is not SEO-optimized.' },
      },
      {
        icon: '😰',
        title: { id: 'Bingung Mulai', en: 'Confused Where to Start' },
        desc: { id: 'Banyak pilihan platform, teknologi, dan harga — bingung mana yang cocok untuk bisnis Anda.', en: 'Too many platforms, technologies, and prices — confused which fits your business.' },
      },
    ],
  },
  features: {
    title: { id: 'Kenapa Pilih Kami?', en: 'Why Choose Us?' },
    items: [
      {
        icon: '🎨',
        title: { id: 'Desain Modern & Responsif', en: 'Modern & Responsive Design' },
        desc: { id: 'Tampilan elegan yang menyesuaikan di semua perangkat — desktop, tablet, dan smartphone.', en: 'Elegant look that adapts to all devices — desktop, tablet, and smartphone.' },
      },
      {
        icon: '🚀',
        title: { id: 'Performa Cepat', en: 'Fast Performance' },
        desc: { id: 'Dioptimasi dengan teknologi terkini agar website loading super cepat dan pengalaman pengguna maksimal.', en: 'Optimized with cutting-edge technology for blazing-fast loading and maximum user experience.' },
      },
      {
        icon: '🔍',
        title: { id: 'SEO-Friendly', en: 'SEO-Friendly' },
        desc: { id: 'Struktur kode dan konten dioptimasi untuk mesin pencari agar bisnis Anda mudah ditemukan di Google.', en: 'Code and content structure optimized for search engines so your business is easily found on Google.' },
      },
      {
        icon: '🛡️',
        title: { id: 'Keamanan Terjamin', en: 'Secure & Reliable' },
        desc: { id: 'SSL certificate, proteksi malware, dan backup rutin — website Anda aman 24/7.', en: 'SSL certificate, malware protection, and regular backups — your website is safe 24/7.' },
      },
    ],
  },
  compareTable: {
    title: { id: 'Sebelum vs Sesudah', en: 'Before vs After' },
    beforeLabel: { id: 'Website Biasa', en: 'Ordinary Website' },
    afterLabel: { id: 'Website Kami', en: 'Our Website' },
    rows: [
      {
        feature: { id: 'Tampilan', en: 'Design' },
        before: { id: 'Kurang menarik, tidak konsisten', en: 'Unattractive, inconsistent' },
        after: { id: 'Modern, konsisten dengan brand', en: 'Modern, on-brand, consistent' },
      },
      {
        feature: { id: 'Kecepatan Loading', en: 'Loading Speed' },
        before: { id: '3-5 detik', en: '3-5 seconds' },
        after: { id: '< 1.5 detik', en: '< 1.5 seconds' },
      },
      {
        feature: { id: 'Mobile Friendly', en: 'Mobile Friendly' },
        before: { id: 'Tidak responsif', en: 'Not responsive' },
        after: { id: 'Sempurna di semua layar', en: 'Perfect on all screens' },
      },
      {
        feature: { id: 'SEO', en: 'SEO' },
        before: { id: 'Tidak dioptimasi', en: 'Not optimized' },
        after: { id: 'Optimasi SEO lengkap', en: 'Full SEO optimization' },
      },
      {
        feature: { id: 'Maintenance', en: 'Maintenance' },
        before: { id: 'Ribet dan mahal', en: 'Complicated & expensive' },
        after: { id: 'Mudah diatur sendiri', en: 'Easy self-management' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Konsultasi', en: 'Consultation' },
        desc: { id: 'Kami diskusikan kebutuhan, tujuan, dan visi website Anda secara gratis.', en: 'We discuss your needs, goals, and vision for the website — for free.' },
      },
      {
        title: { id: 'Desain & Review', en: 'Design & Review' },
        desc: { id: 'Tim kami buat mockup desain. Anda review dan beri masukan hingga puas.', en: 'Our team creates a design mockup. You review and give feedback until satisfied.' },
      },
      {
        title: { id: 'Development', en: 'Development' },
        desc: { id: 'Kami bangun website dengan teknologi terbaik, lengkap dengan fitur yang disepakati.', en: 'We build the website with the best technology, complete with agreed features.' },
      },
      {
        title: { id: 'Launch & Support', en: 'Launch & Support' },
        desc: { id: 'Website online! Kami siap bantu maintenance dan update kapan pun Anda butuh.', en: 'Website goes live! We are ready to help with maintenance and updates anytime.' },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 1.500.000', en: 'Rp 1,500,000' },
        description: { id: 'Cocok untuk personal branding & UMKM', en: 'Perfect for personal branding & small businesses' },
        features: {
          id: ['Company profile 1 halaman', 'Desain responsif', 'Domain & hosting 1 tahun', 'SSL certificate', 'Form kontak', 'SEO dasar'],
          en: ['Single-page company profile', 'Responsive design', '1 year domain & hosting', 'SSL certificate', 'Contact form', 'Basic SEO'],
        },
        cta: { id: 'Pilih Starter', en: 'Choose Starter' },
        ctaLink,
      },
      {
        name: { id: 'Business', en: 'Business' },
        price: { id: 'Rp 3.000.000', en: 'Rp 3,000,000' },
        originalPrice: { id: 'Rp 4.000.000', en: 'Rp 4,000,000' },
        description: { id: 'Paling populer untuk bisnis berkembang', en: 'Most popular for growing businesses' },
        features: {
          id: ['Company profile multi-halaman', 'Halaman produk/layanan', 'Integrasi WhatsApp & medsos', 'Galeri foto', 'Optimasi SEO lanjutan', 'Google Analytics', 'Maintenance 1 bulan'],
          en: ['Multi-page company profile', 'Product/service pages', 'WhatsApp & social media integration', 'Photo gallery', 'Advanced SEO optimization', 'Google Analytics', '1 month maintenance'],
        },
        highlighted: true,
        cta: { id: 'Pilih Business', en: 'Choose Business' },
        ctaLink,
        badge: { id: 'TERLARIS', en: 'BESTSELLER' },
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Rp 5.000.000', en: 'Rp 5,000,000' },
        description: { id: 'Solusi lengkap untuk korporasi', en: 'Complete solution for corporations' },
        features: {
          id: ['Semua fitur Business', 'Sistem manajemen konten (CMS)', 'Multi-bahasa (EN/ID)', 'Integrasi payment gateway', 'Dashboard admin eksklusif', 'Maintenance 3 bulan', 'Prioritas support'],
          en: ['All Business features', 'Content management system (CMS)', 'Multi-language (EN/ID)', 'Payment gateway integration', 'Exclusive admin dashboard', '3 month maintenance', 'Priority support'],
        },
        cta: { id: 'Pilih Enterprise', en: 'Choose Enterprise' },
        ctaLink,
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Budi Santoso',
        role: { id: 'Pemilik Toko Online', en: 'Online Store Owner' },
        quote: {
          id: 'Website toko online saya jadi jauh lebih profesional. Loading cepat dan banyak pelanggan baru yang datang. Recommended banget!',
          en: 'My online store website became much more professional. Fast loading and many new customers came. Highly recommended!',
        },
        avatar: '/avatars/budi.jpg',
        rating: 5,
      },
      {
        name: 'Sari Dewi',
        role: { id: 'Founder Startup', en: 'Startup Founder' },
        quote: {
          id: 'Tim BerkahKarya sangat responsif dan paham kebutuhan startup. Landing page kami jadi keren dalam 3 hari!',
          en: 'The BerkahKarya team is very responsive and understands startup needs. Our landing page was done in 3 days!',
        },
        avatar: '/avatars/sari.jpg',
        rating: 5,
      },
      {
        name: 'Adi Pratama',
        role: { id: 'Direktur PT Maju Jaya', en: 'Director of PT Maju Jaya' },
        quote: {
          id: 'Company profile website kami sekarang sangat informatif dan elegan. Banyak rekan bisnis yang memberikan pujian.',
          en: 'Our company profile website is now very informative and elegant. Many business associates have complimented it.',
        },
        avatar: '/avatars/adi.jpg',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Berapa lama proses pembuatan website?', en: 'How long does website development take?' },
        a: { id: 'Untuk website company profile standar, biasanya 5-7 hari kerja. Untuk toko online dengan fitur kompleks, sekitar 10-14 hari kerja. Kami selalu memberikan timeline yang jelas di awal.', en: 'For a standard company profile website, usually 5-7 working days. For online stores with complex features, about 10-14 working days. We always provide a clear timeline upfront.' },
      },
      {
        q: { id: 'Apakah domain dan hosting sudah termasuk?', en: 'Are domain and hosting included?' },
        a: { id: 'Ya, paket kami sudah termasuk domain dan hosting untuk tahun pertama. Setelah itu, biaya perpanjangan dikenakan terpisah dengan harga terjangkau.', en: 'Yes, our packages include domain and hosting for the first year. After that, renewal fees are charged separately at affordable rates.' },
      },
      {
        q: { id: 'Bisa minta revisi setelah website selesai?', en: 'Can I request revisions after the website is done?' },
        a: { id: 'Tentu! Setiap paket mencakup sesi revisi tertentu. Kami juga menyediakan paket maintenance bulanan jika Anda membutuhkan perubahan rutin.', en: 'Of course! Each package includes a certain number of revision sessions. We also offer monthly maintenance packages if you need regular changes.' },
      },
      {
        q: { id: 'Apakah website saya akan muncul di Google?', en: 'Will my website appear on Google?' },
        a: { id: 'Setiap website yang kami buat sudah dioptimasi untuk SEO dasar — struktur kode, meta tags, kecepatan loading. Ini membantu website Anda terindeks dan muncul di pencarian Google.', en: 'Every website we build is optimized for basic SEO — code structure, meta tags, loading speed. This helps your website get indexed and appear in Google searches.' },
      },
      {
        q: { id: 'Teknologi apa yang digunakan?', en: 'What technology do you use?' },
        a: { id: 'Kami menggunakan teknologi modern seperti Next.js, React, Tailwind CSS untuk front-end. Untuk backend, kami pakai Node.js atau Laravel sesuai kebutuhan project.', en: 'We use modern technologies like Next.js, React, Tailwind CSS for the front-end. For the backend, we use Node.js or Laravel depending on project requirements.' },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Membangun Website Impian?', en: 'Ready to Build Your Dream Website?' },
    subtitle: {
      id: 'Konsultasi gratis tanpa kewajiban. Kami bantu Anda menentukan solusi terbaik untuk bisnis Anda.',
      en: 'Free consultation with no obligation. We help you find the best solution for your business.',
    },
    cta: { id: 'Hubungi Kami Sekarang', en: 'Contact Us Now' },
    ctaLink,
    guarantee: { id: 'Garansi revisi sampai puas atau uang kembali', en: 'Satisfaction guaranteed — free revisions or your money back' },
  },
};

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

// ─── 4. Security Audit ───
export const securityAuditData: LPContent = {
  serviceName: 'security-audit',
  title: { id: 'Jasa Keamanan Sistem & Penetration Testing', en: 'System Security & Penetration Testing' },
  description: {
    id: 'Audit keamanan sistem Anda secara menyeluruh — mulai dari celah keamanan website, API, jaringan, hingga infrastruktur cloud.',
    en: 'Comprehensive security audit — from website vulnerabilities, APIs, networks, to cloud infrastructure.',
  },
  hero: {
    badge: { id: '🛡️ Free vulnerability assessment awal', en: '🛡️ Free initial vulnerability assessment' },
    title: { id: 'Amankan Sistem Bisnis Anda', en: 'Secure Your Business Systems' },
    subtitle: {
      id: 'Temukan dan perbaiki celah keamanan sebelum peretas memanfaatkannya — penetration testing, vulnerability assessment, dan security audit profesional.',
      en: 'Find and fix security gaps before hackers exploit them — penetration testing, vulnerability assessment, and professional security audit.',
    },
    cta: { id: 'Konsultasi Keamanan Gratis', en: 'Free Security Consultation' },
    ctaLink,
    trustItems,
  },
  problems: {
    title: { id: 'Masalah Keamanan yang Sering Terjadi', en: 'Common Security Problems' },
    items: [
      {
        icon: '🔓',
        title: { id: 'Website Mudah Diretas', en: 'Website Easily Hacked' },
        desc: { id: 'Celah keamanan seperti SQL injection, XSS, dan CSRF membuat website Anda target empuk peretas.', en: 'Security vulnerabilities like SQL injection, XSS, and CSRF make your website an easy target for hackers.' },
      },
      {
        icon: '👁️',
        title: { id: 'Data Pelanggan Bocor', en: 'Customer Data Leak' },
        desc: { id: 'Kebocoran data bisa menghancurkan reputasi dan berujung tuntutan hukum — seperti yang sering terjadi di Indonesia.', en: 'Data leaks can destroy reputation and lead to lawsuits — as often happens in Indonesia.' },
      },
      {
        icon: '🔐',
        title: { id: 'Access Control Lemah', en: 'Weak Access Control' },
        desc: { id: 'Pengguna bisa mengakses data yang bukan haknya karena sistem otorisasi yang tidak ketat.', en: 'Users can access data they should not have access to due to lenient authorization systems.' },
      },
      {
        icon: '🚨',
        title: { id: 'Tidak Sadar Ada Celah', en: 'Unaware of Vulnerabilities' },
        desc: { id: 'Banyak bisnis baru sadar setelah diretas. Padahal mencegah jauh lebih murah daripada memperbaiki.', en: 'Many businesses only realize after being hacked. Prevention is far cheaper than repair.' },
      },
    ],
  },
  features: {
    title: { id: 'Kenapa Pilih Kami?', en: 'Why Choose Us?' },
    items: [
      {
        icon: '🔍',
        title: { id: 'Pengujian Menyeluruh', en: 'Thorough Testing' },
        desc: { id: 'Kami uji dari berbagai sudut — web app, API, jaringan, server, dan human factor (social engineering).', en: 'We test from multiple angles — web apps, APIs, networks, servers, and human factors (social engineering).' },
      },
      {
        icon: '📋',
        title: { id: 'Laporan Detail & Aksi', en: 'Detailed Report & Action' },
        desc: { id: 'Laporan lengkap dengan severity level, proof of concept, dan rekomendasi perbaikan yang jelas.', en: 'Complete report with severity levels, proof of concept, and clear remediation recommendations.' },
      },
      {
        icon: '🛡️',
        title: { id: 'Standar Industri', en: 'Industry Standards' },
        desc: { id: 'Mengacu pada OWASP Top 10, PTES, dan NIST framework — metodologi yang diakui global.', en: 'Referencing OWASP Top 10, PTES, and NIST framework — globally recognized methodologies.' },
      },
      {
        icon: '🤝',
        title: { id: 'Pendampingan Perbaikan', en: 'Remediation Assistance' },
        desc: { id: 'Kami tidak cuma kasih laporan — kami bantu tim teknis Anda memperbaiki setiap celah yang ditemukan.', en: 'We do not just give a report — we help your technical team fix every vulnerability found.' },
      },
    ],
  },
  compareTable: {
    title: { id: 'Sebelum vs Sesudah', en: 'Before vs After' },
    beforeLabel: { id: 'Tanpa Audit', en: 'Without Audit' },
    afterLabel: { id: 'Setelah Audit', en: 'After Audit' },
    rows: [
      {
        feature: { id: 'Kerentanan Diketahui', en: 'Known Vulnerabilities' },
        before: { id: 'Tidak tahu apa yang salah', en: 'No idea what is wrong' },
        after: { id: 'Semua celah teridentifikasi', en: 'All gaps identified' },
      },
      {
        feature: { id: 'Prioritas Perbaikan', en: 'Fix Priorities' },
        before: { id: 'Bingung mulai dari mana', en: 'Confused where to start' },
        after: { id: 'Prioritas berdasarkan risiko', en: 'Prioritized by risk level' },
      },
      {
        feature: { id: 'Kepatuhan', en: 'Compliance' },
        before: { id: 'Berisiko tidak lolos audit', en: 'Risk failing compliance' },
        after: { id: 'Siap untuk sertifikasi', en: 'Ready for certification' },
      },
      {
        feature: { id: 'Keamanan Data', en: 'Data Security' },
        before: { id: 'Data pelanggan berisiko bocor', en: 'Customer data at risk' },
        after: { id: 'Data aman & terlindungi', en: 'Data safe & protected' },
      },
      {
        feature: { id: 'Kepercayaan Klien', en: 'Client Trust' },
        before: { id: 'Ragu dengan keamanan sistem', en: 'Uncertain about security' },
        after: { id: 'Sertifikasi keamanan teruji', en: 'Proven security credentials' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Scoping & Agreement', en: 'Scoping & Agreement' },
        desc: { id: 'Kami tentukan ruang lingkup pengujian — aplikasi apa saja, IP range, dan aturan engagement.', en: 'We determine the testing scope — which applications, IP ranges, and rules of engagement.' },
      },
      {
        title: { id: 'Reconnaissance & Scanning', en: 'Reconnaissance & Scanning' },
        desc: { id: 'Pengumpulan informasi dan pemindaian kerentanan menggunakan tools profesional.', en: 'Information gathering and vulnerability scanning using professional tools.' },
      },
      {
        title: { id: 'Eksploitasi & Validasi', en: 'Exploitation & Validation' },
        desc: { id: 'Kami coba eksploitasi setiap celah untuk memvalidasi dampak dan risiko sebenarnya.', en: 'We attempt to exploit each vulnerability to validate the actual impact and risk.' },
      },
      {
        title: { id: 'Laporan & Remediasi', en: 'Report & Remediation' },
        desc: { id: 'Laporan detail + rekomendasi perbaikan. Kami juga dampingi tim Anda dalam implementasi fix.', en: 'Detailed report + remediation recommendations. We also assist your team in implementing fixes.' },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Basic', en: 'Basic' },
        price: { id: 'Rp 1.000.000', en: 'Rp 1,000,000' },
        description: { id: 'Cocok untuk website UMKM & landing page', en: 'Perfect for small business websites & landing pages' },
        features: {
          id: ['1 website/domain', 'Vulnerability assessment otomatis', 'OWASP Top 10 scan', 'Laporan celah + severity', 'Rekomendasi perbaikan dasar'],
          en: ['1 website/domain', 'Automated vulnerability assessment', 'OWASP Top 10 scan', 'Vulnerability report + severity', 'Basic remediation recommendations'],
        },
        cta: { id: 'Pilih Basic', en: 'Choose Basic' },
        ctaLink,
      },
      {
        name: { id: 'Standard', en: 'Standard' },
        price: { id: 'Rp 3.500.000', en: 'Rp 3,500,000' },
        originalPrice: { id: 'Rp 4.500.000', en: 'Rp 4,500,000' },
        description: { id: 'Paling populer untuk bisnis & korporasi', en: 'Most popular for businesses & corporations' },
        features: {
          id: ['2-3 website/API', 'Full vulnerability assessment', 'Manual penetration testing', 'Web app + API security test', 'Social engineering testing', 'Laporan detail + PoC', 'Rekomendasi perbaikan teknis', '1 sesi konsultasi hasil'],
          en: ['2-3 websites/APIs', 'Full vulnerability assessment', 'Manual penetration testing', 'Web app + API security test', 'Social engineering testing', 'Detailed report + PoC', 'Technical remediation recommendations', '1 result consultation session'],
        },
        highlighted: true,
        cta: { id: 'Pilih Standard', en: 'Choose Standard' },
        ctaLink,
        badge: { id: 'TERLARIS', en: 'BESTSELLER' },
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Rp 7.000.000', en: 'Rp 7,000,000' },
        description: { id: 'Audit menyeluruh untuk perusahaan besar', en: 'Comprehensive audit for large enterprises' },
        features: {
          id: ['5+ website/API', 'Full pentest + vulnerability assessment', 'Web, API, network, & cloud testing', 'Mobile app security testing', 'Code review (source code audit)', 'Report komprehensif + PoC detail', 'Pendampingan remediasi penuh', '3 sesi konsultasi', 'Sertifikat keamanan sistem'],
          en: ['5+ websites/APIs', 'Full pentest + vulnerability assessment', 'Web, API, network, & cloud testing', 'Mobile app security testing', 'Code review (source code audit)', 'Comprehensive report + detailed PoC', 'Full remediation assistance', '3 consultation sessions', 'System security certificate'],
        },
        cta: { id: 'Pilih Enterprise', en: 'Choose Enterprise' },
        ctaLink,
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Hendra Gunawan',
        role: { id: 'CTO Fintech Startup', en: 'CTO of Fintech Startup' },
        quote: {
          id: 'Security audit dari BerkahKarya sangat thorough! Mereka menemukan 12 celah kritis yang selama ini kami tidak sadar. Recommended untuk semua bisnis digital.',
          en: 'The security audit from BerkahKarya was very thorough! They found 12 critical vulnerabilities we were unaware of. Recommended for all digital businesses.',
        },
        avatar: '/avatars/hendra.jpg',
        rating: 5,
      },
      {
        name: 'Nina Anggraini',
        role: { id: 'IT Manager Perusahaan Retail', en: 'IT Manager at Retail Company' },
        quote: {
          id: 'Laporannya sangat detail dan mudah dipahami. Tim teknis kami langsung bisa tindak lanjut perbaikannya. Worth every penny!',
          en: 'The report was very detailed and easy to understand. Our technical team could immediately follow up on the fixes. Worth every penny!',
        },
        avatar: '/avatars/nina.jpg',
        rating: 5,
      },
      {
        name: 'Rizky Firdaus',
        role: { id: 'Founder SaaS Platform', en: 'SaaS Platform Founder' },
        quote: {
          id: 'Setelah audit, kami jadi tenang karena sistem sudah aman. Klien kami juga lebih percaya setelah lihat sertifikat keamanan.',
          en: 'After the audit, we feel at ease knowing our system is secure. Our clients also trust us more after seeing the security certificate.',
        },
        avatar: '/avatars/rizky.jpg',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Apa perbedaan vulnerability assessment dengan penetration testing?', en: 'What is the difference between vulnerability assessment and penetration testing?' },
        a: { id: 'Vulnerability assessment adalah pemindaian otomatis untuk mendeteksi celah keamanan yang dikenal. Penetration testing adalah pengujian manual oleh ahli keamanan yang mencoba mengeksploitasi celah untuk membuktikan dampaknya. Paket Standard dan Enterprise mencakup keduanya.', en: 'Vulnerability assessment is automated scanning to detect known security gaps. Penetration testing is manual testing by security experts who try to exploit vulnerabilities to prove the impact. Standard and Enterprise packages include both.' },
      },
      {
        q: { id: 'Apakah pengujian akan mengganggu operasional sistem?', en: 'Will testing disrupt system operations?' },
        a: { id: 'Kami selalu melakukan pengujian dengan hati-hati dan sudah termasuk aturan engagement yang jelas. Untuk paket tertentu, kami jadwalkan di luar jam sibuk. Tidak ada downtime yang tidak direncanakan.', en: 'We always conduct testing carefully with clear rules of engagement. For certain packages, we schedule outside peak hours. No unplanned downtime.' },
      },
      {
        q: { id: 'Berapa lama proses security audit?', en: 'How long does a security audit take?' },
        a: { id: 'Paket Basic selesai dalam 2-3 hari. Paket Standard 5-7 hari. Paket Enterprise bisa 10-14 hari tergantung kompleksitas sistem.', en: 'Basic package is completed in 2-3 days. Standard package 5-7 days. Enterprise package can take 10-14 days depending on system complexity.' },
      },
      {
        q: { id: 'Apakah data saya aman selama proses audit?', en: 'Is my data safe during the audit process?' },
        a: { id: 'Kami menandatangani NDA dan semua data yang diakses selama pengujian bersifat rahasia. Tidak ada data yang disimpan atau dibagikan ke pihak ketiga.', en: 'We sign an NDA and all data accessed during testing is confidential. No data is stored or shared with third parties.' },
      },
      {
        q: { id: 'Apakah bisa melakukan retest setelah perbaikan?', en: 'Can you do a retest after fixes are applied?' },
        a: { id: 'Ya, paket Standard dan Enterprise mencakup sesi retest untuk memvalidasi bahwa semua celah sudah diperbaiki dengan benar.', en: 'Yes, Standard and Enterprise packages include a retest session to validate that all vulnerabilities have been properly fixed.' },
      },
    ],
  },
  finalCta: {
    title: { id: 'Jangan Tunggu Sampai Diretas!', en: 'Do Not Wait Until You Get Hacked!' },
    subtitle: {
      id: 'Konsultasi keamanan gratis — kami bantu identifikasi risiko dan berikan solusi yang tepat untuk sistem Anda.',
      en: 'Free security consultation — we help identify risks and provide the right solutions for your system.',
    },
    cta: { id: 'Hubungi Kami Sekarang', en: 'Contact Us Now' },
    ctaLink,
    guarantee: { id: 'Garansi — laporan lengkap & rekomendasi aksi dalam 3 hari kerja', en: 'Guaranteed — complete report & actionable recommendations within 3 business days' },
  },
};
