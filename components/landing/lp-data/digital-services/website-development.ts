import type { LPContent } from '../../ServiceLP';
import { ctaLink, trustItems } from './_shared';

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
