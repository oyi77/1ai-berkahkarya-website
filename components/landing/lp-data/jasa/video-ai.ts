import type { LPContent } from '../../ServiceLP';
import { WA_BASE, trustItems } from '../lp-shared';

// ─────────────────────────────────────────────
// 3. Jasa Pembuatan Video AI
// ─────────────────────────────────────────────

export const jasaVideoAiData: LPContent = {
  serviceName: 'jasa-video-ai',
  title: {
    id: 'Jasa Pembuatan Video AI — Promo, Penjelasan Produk, Konten Viral',
    en: 'AI Video Creation Service — Promos, Product Explainers, Viral Content',
  },
  description: {
    id: 'Buat video profesional dengan AI — tanpa kamera, tanpa talent, tanpa ribet. Cocok untuk iklan, konten sosial media, dan penjelasan produk.',
    en: 'Create professional videos with AI — no camera, no talent, no hassle. Perfect for ads, social media content, and product explainers.',
  },
  hero: {
    badge: { id: '\U0001f3ac AI Video Creator', en: '\U0001f3ac AI Video Creator' },
    title: { id: 'Video AI Kualitas Studio — Tanpa Kamera, Tanpa Ribet', en: 'Studio-Quality AI Videos — No Camera, No Hassle' },
    subtitle: {
      id: 'Buat video promosi, penjelasan produk, dan konten viral dalam hitungan jam — bukan minggu. Dari skrip hingga video jadi, semua pakai AI.',
      en: 'Create promotional videos, product explainers, and viral content in hours — not weeks. From script to finished video, all AI-powered.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Video%20AI',
    trustItems: {
      id: ['\U0001f512 Data aman & rahasia', '\u26a1 Respons < 30 menit', '\u2705 Bergaransi', '\U0001f3c6 100+ klien puas'],
      en: ['\U0001f512 Secure & confidential', '\u26a1 Response < 30 min', '\u2705 Guaranteed', '\U0001f3c6 100+ happy clients'],
    },
  },
  problems: {
    title: { id: 'Masalah yang Sering Terjadi', en: 'Common Problems' },
    items: [
      {
        icon: '\U0001f3a5',
        title: { id: 'Produksi Video Mahal & Lama', en: 'Video Production is Expensive & Slow' },
        desc: {
          id: 'Sewa kamera, talent, lokasi, editor — biaya bisa puluhan juta dan proses berminggu-minggu.',
          en: 'Camera rental, talent, location, editor — costs can reach tens of millions and take weeks.',
        },
      },
      {
        icon: '\U0001f62c',
        title: { id: 'Nggak PD di Depan Kamera', en: 'Not Comfortable on Camera' },
        desc: {
          id: 'Mau bikin konten video tapi nggak pede tampil di depan kamera? Atau nggak punya talent yang cocok?',
          en: 'Want to make video content but not confident on camera? Or don\'t have the right talent?',
        },
      },
      {
        icon: '\U0001f4b0',
        title: { id: 'Budget Terbatas', en: 'Limited Budget' },
        desc: {
          id: 'Produksi video konvensional bisa habis puluhan juta. Padahal kamu butuh video untuk konten rutin setiap minggu.',
          en: 'Conventional video production can cost tens of millions. Yet you need videos for routine weekly content.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Apa yang Kami Berikan?', en: 'What We Provide' },
    items: [
      {
        icon: '\U0001f3a5',
        title: { id: 'Video AI Berkualitas', en: 'High-Quality AI Video' },
        desc: {
          id: 'Video dengan kualitas visual memukau — cocok untuk iklan, konten sosial media, company profile, dan penjelasan produk.',
          en: 'Videos with stunning visual quality — perfect for ads, social media content, company profiles, and product explainers.',
        },
      },
      {
        icon: '\U0001f3ad',
        title: { id: 'AI Avatar & Voiceover', en: 'AI Avatar & Voiceover' },
        desc: {
          id: 'Pakai AI avatar sebagai presenter atau voiceover profesional dalam berbagai bahasa — tanpa perlu talent.',
          en: 'Use AI avatars as presenters or professional voiceovers in multiple languages — no talent needed.',
        },
      },
      {
        icon: '\u270f\ufe0f',
        title: { id: 'Skrip & Storyboard', en: 'Script & Storyboard' },
        desc: {
          id: 'Tim kami buatkan skrip dan storyboard yang menarik — tinggal setujui, kami produksi.',
          en: 'Our team creates engaging scripts and storyboards — just approve and we produce.',
        },
      },
      {
        icon: '\U0001f504',
        title: { id: 'Revisi Mudah', en: 'Easy Revisions' },
        desc: {
          id: 'Minta perubahan kapan pun. Revisi teks, visual, atau voiceover tanpa biaya tambahan.',
          en: 'Request changes anytime. Revise text, visuals, or voiceover at no extra cost.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Video Konvensional vs Video AI', en: 'Conventional vs AI Video' },
    beforeLabel: { id: 'Video Konvensional', en: 'Conventional Video' },
    afterLabel: { id: 'Video AI Kami', en: 'Our AI Video' },
    rows: [
      {
        feature: { id: 'Biaya Produksi', en: 'Production Cost' },
        before: { id: 'Rp 5\u201320jt per video', en: 'Rp 5\u201320M per video' },
        after: { id: 'Mulai Rp 350rb', en: 'Starting from Rp 350k' },
      },
      {
        feature: { id: 'Waktu Produksi', en: 'Production Time' },
        before: { id: '1\u20134 minggu', en: '1\u20134 weeks' },
        after: { id: '1\u20133 hari', en: '1\u20133 days' },
      },
      {
        feature: { id: 'Kamera & Talent', en: 'Camera & Talent' },
        before: { id: 'Wajib sewa', en: 'Must rent' },
        after: { id: 'Tidak perlu', en: 'Not needed' },
      },
      {
        feature: { id: 'Revisi', en: 'Revisions' },
        before: { id: 'Mahal & terbatas', en: 'Expensive & limited' },
        after: { id: 'Gratis & tak terbatas', en: 'Free & unlimited' },
      },
      {
        feature: { id: 'Skalabilitas', en: 'Scalability' },
        before: { id: 'Sulit produksi massal', en: 'Hard to mass-produce' },
        after: { id: 'Bisa puluhan video/minggu', en: 'Dozens of videos/week' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Konsultasi & Skrip', en: 'Consultation & Script' },
        desc: {
          id: 'Ceritakan kebutuhan video kamu. Tim kami buatkan skrip dan storyboard yang sesuai.',
          en: 'Tell us your video needs. Our team creates a suitable script and storyboard.',
        },
      },
      {
        title: { id: 'Produksi Video AI', en: 'AI Video Production' },
        desc: {
          id: 'Kami produksi video dengan AI — visual, voiceover, musik latar, efek — semua dalam satu paket.',
          en: 'We produce the video with AI — visuals, voiceover, background music, effects — all in one package.',
        },
      },
      {
        title: { id: 'Review & Final', en: 'Review & Finalize' },
        desc: {
          id: 'Kami kirim draft, kamu review. Minta revisi sampai puas. Kami kirim final dalam format siap upload.',
          en: 'We send a draft, you review. Request revisions until satisfied. We deliver the final version ready to upload.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilih Paket Video AI', en: 'Choose Your AI Video Package' },
    tiers: [
      {
        name: { id: 'Basic', en: 'Basic' },
        price: { id: 'Rp 350.000', en: 'Rp 350,000' },
        originalPrice: { id: 'Rp 600.000', en: 'Rp 600,000' },
        description: {
          id: 'Video pendek siap upload — cocok untuk konten sosial media rutin',
          en: 'Short ready-to-upload video — perfect for routine social media content',
        },
        features: {
          id: [
            'Durasi 15\u201330 detik',
            'Visual AI + voiceover',
            'Skrip & storyboard',
            'Musik latar',
            '1x revisi',
            'Format MP4 1080p',
          ],
          en: [
            '15\u201330 second duration',
            'AI visuals + voiceover',
            'Script & storyboard',
            'Background music',
            '1 revision',
            'MP4 1080p format',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Basic', en: 'Choose Basic' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Video%20AI%20Basic',
      },
      {
        name: { id: 'Professional', en: 'Professional' },
        price: { id: 'Rp 1.000.000', en: 'Rp 1,000,000' },
        originalPrice: { id: 'Rp 1.800.000', en: 'Rp 1,800,000' },
        description: {
          id: 'Video kualitas produksi — cocok untuk iklan, promo produk, company profile',
          en: 'Production-quality video — perfect for ads, product promos, company profiles',
        },
        features: {
          id: [
            'Durasi 30\u201360 detik',
            'Visual AI premium + efek',
            'AI avatar / presenter',
            'Voiceover multi-bahasa',
            'Skrip & storyboard custom',
            'Revisi tanpa batas',
            'Format MP4 1080p + siap upload',
          ],
          en: [
            '30\u201360 second duration',
            'Premium AI visuals + effects',
            'AI avatar / presenter',
            'Multi-language voiceover',
            'Custom script & storyboard',
            'Unlimited revisions',
            'MP4 1080p + ready to upload',
          ],
        },
        highlighted: true,
        cta: { id: 'Pilih Professional', en: 'Choose Professional' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Video%20AI%20Professional',
        badge: { id: 'Terpopuler', en: 'Most Popular' },
      },
      {
        name: { id: 'Premium', en: 'Premium' },
        price: { id: 'Rp 2.000.000', en: 'Rp 2,000,000' },
        originalPrice: { id: 'Rp 3.500.000', en: 'Rp 3,500,000' },
        description: {
          id: 'Paket lengkap untuk kampanye — video utama + variasi untuk multi-platform',
          en: 'Complete campaign package — main video + variations for multi-platform',
        },
        features: {
          id: [
            'Video utama 60\u2013120 detik',
            '3 variasi aspect ratio (16:9, 1:1, 9:16)',
            'Visual AI premium + motion graphics',
            'AI avatar / presenter multi-adegan',
            'Voiceover multi-bahasa + subtitle',
            'Skrip & storyboard strategis',
            'Revisi tanpa batas',
            'Prioritas support 24/7',
          ],
          en: [
            'Main video 60\u2013120 seconds',
            '3 aspect ratio variations (16:9, 1:1, 9:16)',
            'Premium AI visuals + motion graphics',
            'Multi-scene AI avatar / presenter',
            'Multi-language voiceover + subtitles',
            'Strategic script & storyboard',
            'Unlimited revisions',
            '24/7 priority support',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Premium', en: 'Choose Premium' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Video%20AI%20Premium',
      },
    ],
  },
  testimonials: {
    title: { id: 'Apa Kata Klien Kami', en: 'What Our Clients Say' },
    items: [
      {
        name: 'Bambang Susilo',
        role: { id: 'Founder — Brand Skincare', en: 'Founder — Skincare Brand' },
        quote: {
          id: 'Video promosi produk kita jadi kelihatan mahal banget padahal cuma pakai AI. Biaya hemat 80% dan proses cuma 2 hari!',
          en: 'Our product promo video looks expensive even though it\'s AI-powered. Saved 80% on costs and the process only took 2 days!',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Lisa Permata',
        role: { id: 'Marketing Manager — Startup Teknologi', en: 'Marketing Manager — Tech Startup' },
        quote: {
          id: 'Kami perlu 10 video explainer dalam seminggu. Dengan jasa ini semua selesai tepat waktu. Kualitasnya konsisten dan bagus.',
          en: 'We needed 10 explainer videos in a week. With this service, everything was done on time. Quality is consistent and good.',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Doni Prasetyo',
        role: { id: 'Content Creator', en: 'Content Creator' },
        quote: {
          id: 'Skrip dan visualnya keren banget. Engagement video AI kita di TikTok naik 5x lipat dibanding konten biasa. Highly recommended!',
          en: 'The script and visuals are amazing. Our AI video engagement on TikTok increased 5x compared to regular content. Highly recommended!',
        },
        avatar: '👤',
        rating: 5,
      },
    ],
  },
  faq: {
    title: { id: 'Pertanyaan Umum', en: 'Frequently Asked Questions' },
    items: [
      {
        q: {
          id: 'Apakah video AI terlihat seperti buatan AI?',
          en: 'Does AI video look like it\'s AI-generated?',
        },
        a: {
          id: 'Tidak. Dengan teknologi AI terbaru, kualitas video kami sudah mendekati kualitas produksi riil. Kami menggunakan model AI mutakhir yang menghasilkan visual realistis, gerakan natural, dan voiceover yang tidak terdengar seperti robot.',
          en: 'No. With the latest AI technology, our video quality approaches real production quality. We use cutting-edge AI models that produce realistic visuals, natural movement, and voiceovers that don\'t sound robotic.',
        },
      },
      {
        q: {
          id: 'Berapa lama proses pembuatan video?',
          en: 'How long does video creation take?',
        },
        a: {
          id: 'Paket Basic selesai dalam 1 hari, Professional 1\u20132 hari, dan Premium 2\u20134 hari tergantung kompleksitas. Kami juga punya opsi express jika kamu butuh lebih cepat.',
          en: 'Basic package is done in 1 day, Professional 1\u20132 days, and Premium 2\u20134 days depending on complexity. We also have an express option if you need it faster.',
        },
      },
      {
        q: {
          id: 'Bisakah saya menggunakan footage sendiri?',
          en: 'Can I use my own footage?',
        },
        a: {
          id: 'Tentu! Kamu bisa provide footage, logo, atau aset brand kamu. Kami akan mengintegrasikannya ke dalam video AI untuk hasil yang lebih personal dan sesuai brand.',
          en: 'Absolutely! You can provide your own footage, logo, or brand assets. We will integrate them into the AI video for a more personal and brand-appropriate result.',
        },
      },
      {
        q: {
          id: 'Apakah ada garansi jika saya tidak suka hasilnya?',
          en: 'Is there a guarantee if I don\'t like the result?',
        },
        a: {
          id: 'Tentu! Kami garansi revisi gratis sampai kamu puas. Untuk paket Professional dan Premium, revisi tanpa batas termasuk dalam harga. Jika setelah revisi tetap tidak sesuai, kami refund.',
          en: 'Of course! We guarantee free revisions until you\'re satisfied. For Professional and Premium packages, unlimited revisions are included. If after revisions it still doesn\'t fit, we refund.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Bikin Video Keren Tanpa Ribet?', en: 'Ready to Make Awesome Videos Without the Hassle?' },
    subtitle: {
      id: 'Konsultasi gratis, tanpa commit. Ceritakan kebutuhan video kamu dan kami buatkan yang terbaik.',
      en: 'Free consultation, no commitment. Tell us your video needs and we will create the best one.',
    },
    cta: { id: 'Ya, Saya Mau Konsultasi!', en: 'Yes, Let\'s Consult!' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Video%20AI',
    guarantee: {
      id: '\u2705 Garansi revisi gratis sampai puas — atau uang kembali',
      en: '\u2705 Free revisions until satisfied — or your money back',
    },
  },
};
