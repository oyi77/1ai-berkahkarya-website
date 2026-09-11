import type { LPContent } from '../../ServiceLP';
import { waLink, trustItems } from '../lp-shared';

/* ──────────────────────────────────────
 * 4. digital-products — Produk Digital AI
 * ────────────────────────────────────── */

export const digitalProductsData: LPContent = {
  serviceName: 'digital-products',
  title: {
    id: 'Produk Digital AI',
    en: 'AI Digital Products',
  },
  description: {
    id: 'Produk digital siap pakai — prompt packs AI, template Notion, workflow automation, dan tools AI. Mulai Rp 49K.',
    en: 'Ready-to-use digital products — AI prompt packs, Notion templates, workflow automation, and AI tools. Starts at Rp 49K.',
  },
  hero: {
    badge: { id: '⚡ Siap Pakai, Harga Terjangkau', en: '⚡ Ready-to-Use, Affordable' },
    title: {
      id: 'Produk Digital AI Siap Pakai — Mulai Rp 49K',
      en: 'Ready-to-Use AI Digital Products — Starts at Rp 49K',
    },
    subtitle: {
      id: 'Prompt packs, template Notion, workflow automation, dan tools AI yang langsung bisa digunakan. Hemat waktu & uang — tanpa ribet setup.',
      en: 'AI prompt packs, Notion templates, workflow automation, and AI tools you can use immediately. Save time & money — no complicated setup.',
    },
    cta: { id: 'Lihat Katalog', en: 'View Catalog' },
    ctaLink: waLink('Halo, saya tertarik dengan Produk Digital AI.'),
    trustItems: {
      id: ['✅ Sudah 50+ klien', '💰 Garansi 100%', '🚀 Mulai Rp 49K'],
      en: ['✅ 50+ clients served', '💰 100% guarantee', '🚀 Starts at Rp 49K'],
    },
  },
  problems: {
    title: { id: 'Masalah Produktivitas Digital', en: 'Digital Productivity Pain Points' },
    items: [
      {
        icon: '💸',
        title: { id: 'Langganan SaaS Mahal', en: 'Expensive SaaS Subscriptions' },
        desc: {
          id: 'Bayar jutaan rupiah per bulan untuk tools yang cuma dipakai beberapa fiturnya — pemborosan yang tidak perlu.',
          en: 'Paying millions per month for tools using only a fraction of their features — unnecessary waste.',
        },
      },
      {
        icon: '🔧',
        title: { id: 'Setup yang Rumit', en: 'Complicated Setup' },
        desc: {
          id: 'Tools AI butuh config, API key, dan integrasi yang bikin pusing — belum selesai setup, semangat sudah hilang.',
          en: 'AI tools require config, API keys, and integrations that are frustrating — by the time setup is done, motivation is gone.',
        },
      },
      {
        icon: '🔍',
        title: { id: 'Tidak Ada Solusi Siap Pakai', en: 'No Ready-to-Use Solutions' },
        desc: {
          id: 'Harus merakit sendiri dari berbagai sumber — tutorial YouTube, template gratis, trial and error yang memakan waktu.',
          en: 'Having to piece together solutions from various sources — YouTube tutorials, free templates, hours of trial and error.',
        },
      },
      {
        icon: '🎲',
        title: { id: 'Trial & Error Terus-menerus', en: 'Constant Trial and Error' },
        desc: {
          id: 'Coba berbagai pendekatan, gagal, coba lagi — waktu dan tenaga habis untuk hal yang sebenarnya sudah ada solusinya.',
          en: 'Trying various approaches, failing, trying again — time and energy wasted on problems that already have solutions.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Fitur Unggulan', en: 'Key Features' },
    items: [
      {
        icon: '⬇️',
        title: { id: 'Download Instan', en: 'Instant Download' },
        desc: {
          id: 'Setelah pembayaran, produk langsung bisa diunduh — tidak perlu menunggu, tidak perlu antre.',
          en: 'Products are available for download immediately after payment — no waiting, no queueing.',
        },
      },
      {
        icon: '♾️',
        title: { id: 'Akses Seumur Hidup', en: 'Lifetime Access' },
        desc: {
          id: 'Bayar sekali, akses selamanya. Tidak ada biaya berlangganan bulanan atau tahunan.',
          en: 'Pay once, access forever. No monthly or annual subscription fees.',
        },
      },
      {
        icon: '🔄',
        title: { id: 'Update Rutin', en: 'Regular Updates' },
        desc: {
          id: 'Produk terus diperbarui dengan konten baru — prompt terbaru, template lebih baik, workflow lebih efisien.',
          en: 'Products are continuously updated with new content — latest prompts, better templates, more efficient workflows.',
        },
      },
      {
        icon: '👥',
        title: { id: 'Dukungan Komunitas', en: 'Community Support' },
        desc: {
          id: 'Bergabung dengan komunitas pengguna — sharing tips, tanya jawab, dan dapat inspirasi dari sesama pengguna.',
          en: 'Join the user community — share tips, ask questions, and get inspired by fellow users.',
        },
      },
      {
        icon: '🎁',
        title: { id: 'Diskon Bundling', en: 'Bundle Discounts' },
        desc: {
          id: 'Beli paket bundle lebih hemat — dapatkan 3 produk dengan harga hanya 2 produk. Semakin banyak, semakin murah.',
          en: 'Bundle packages for more savings — get 3 products for the price of 2. The more you buy, the more you save.',
        },
      },
      {
        icon: '👀',
        title: { id: 'Preview Gratis', en: 'Free Previews' },
        desc: {
          id: 'Lihat contoh isi produk sebelum beli — pastikan sesuai kebutuhan sebelum memutuskan.',
          en: 'View product samples before purchasing — make sure it fits your needs before deciding.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Cara Lama vs Produk Digital AI', en: 'Old Way vs AI Digital Products' },
    beforeLabel: { id: 'Cara Lama', en: 'Old Way' },
    afterLabel: { id: 'Produk Digital AI', en: 'AI Digital Products' },
    rows: [
      {
        feature: { id: 'Biaya', en: 'Cost' },
        before: { id: 'Ratusan ribu hingga jutaan per bulan', en: 'Hundreds of thousands to millions monthly' },
        after: { id: 'Mulai Rp 49K — bayar sekali', en: 'Starts at Rp 49K — pay once' },
      },
      {
        feature: { id: 'Setup', en: 'Setup' },
        before: { id: 'Berjam-jam — instalasi, config, trial error', en: 'Hours — installation, config, trial & error' },
        after: { id: 'Download & langsung pakai', en: 'Download & use immediately' },
      },
      {
        feature: { id: 'Update', en: 'Updates' },
        before: { id: 'Manual cari update sendiri', en: 'Manually search for updates' },
        after: { id: 'Update otomatis & gratis seumur hidup', en: 'Automatic & free lifetime updates' },
      },
      {
        feature: { id: 'Dukungan', en: 'Support' },
        before: { id: 'Dokumentasi terbatas atau tidak ada', en: 'Limited or no documentation' },
        after: { id: 'Komunitas aktif + panduan lengkap', en: 'Active community + complete guides' },
      },
      {
        feature: { id: 'Garansi', en: 'Guarantee' },
        before: { id: 'Tidak ada jaminan kualitas', en: 'No quality guarantee' },
        after: { id: 'Garansi 100% — cocok atau refund', en: '100% guarantee — fit or refund' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: '1. Pilih Produk', en: '1. Choose Your Product' },
        desc: {
          id: 'Jelajahi katalog produk digital kami — prompt packs, template Notion, workflow automation, dan tools AI.',
          en: 'Browse our digital product catalog — AI prompt packs, Notion templates, workflow automation, and AI tools.',
        },
      },
      {
        title: { id: '2. Pesan via WhatsApp', en: '2. Order via WhatsApp' },
        desc: {
          id: 'Hubungi kami, sebutkan produk yang diinginkan, dan lakukan pembayaran via transfer bank atau e-wallet.',
          en: 'Contact us, mention the product you want, and make payment via bank transfer or e-wallet.',
        },
      },
      {
        title: { id: '3. Dapatkan Akses', en: '3. Get Instant Access' },
        desc: {
          id: 'Link download + panduan penggunaan dikirim langsung ke WhatsApp Anda. Download dan mulai gunakan.',
          en: 'Download link + usage guide sent directly to your WhatsApp. Download and start using immediately.',
        },
      },
      {
        title: { id: '4. Update Gratis', en: '4. Free Updates' },
        desc: {
          id: 'Dapatkan update produk secara gratis — prompt baru, template lebih baik, dan fitur tambahan tanpa biaya.',
          en: 'Receive free product updates — new prompts, better templates, and additional features at no cost.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 49.000', en: 'Rp 49,000' },
        description: {
          id: 'Cocok untuk mencoba — 1 produk digital pilihan',
          en: 'Perfect for trying out — 1 digital product of your choice',
        },
        features: {
          id: ['1 produk digital', 'Download instan', 'Akses seumur hidup', 'Panduan penggunaan', 'Update gratis'],
          en: ['1 digital product', 'Instant download', 'Lifetime access', 'Usage guide', 'Free updates'],
        },
        cta: { id: 'Pilih Starter', en: 'Choose Starter' },
        ctaLink: waLink('Halo, saya mau pesan paket Starter Produk Digital.'),
      },
      {
        name: { id: 'Professional', en: 'Professional' },
        price: { id: 'Rp 99.000', en: 'Rp 99,000' },
        originalPrice: { id: 'Rp 147.000', en: 'Rp 147,000' },
        description: {
          id: 'Cocok untuk produktivitas — 3 produk digital pilihan',
          en: 'Perfect for productivity — 3 digital products of your choice',
        },
        features: {
          id: ['3 produk digital', 'Download instan', 'Akses seumur hidup', 'Update gratis + konten baru', 'Bonus: 1 produk gratis bulan ini', 'Komunitas eksklusif'],
          en: ['3 digital products', 'Instant download', 'Lifetime access', 'Free updates + new content', 'Bonus: 1 free product this month', 'Exclusive community'],
        },
        highlighted: true,
        badge: { id: 'Terpopuler', en: 'Most Popular' },
        cta: { id: 'Pilih Professional', en: 'Choose Professional' },
        ctaLink: waLink('Halo, saya mau pesan paket Professional Produk Digital.'),
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Rp 199.000', en: 'Rp 199,000' },
        originalPrice: { id: 'Rp 299.000', en: 'Rp 299,000' },
        description: {
          id: 'Cocok untuk power user — akses semua produk + update',
          en: 'Perfect for power users — access all products + updates',
        },
        features: {
          id: ['Akses semua produk', 'Download instan', 'Akses seumur hidup', 'Semua update & konten baru', 'Prioritas request produk', 'Komunitas eksklusif + support prioritas', 'Diskon 30% untuk produk baru'],
          en: ['Access all products', 'Instant download', 'Lifetime access', 'All updates & new content', 'Priority product requests', 'Exclusive community + priority support', '30% off new products'],
        },
        cta: { id: 'Pilih Enterprise', en: 'Choose Enterprise' },
        ctaLink: waLink('Halo, saya mau pesan paket Enterprise Produk Digital.'),
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Indah Cahyani',
        role: { id: 'Content Creator, 50K Followers', en: 'Content Creator, 50K Followers' },
        quote: {
          id: 'Prompt packs AI untuk content creation ini GAME CHANGER! Tinggal copy-paste prompt, konten langsung jadi. Hemat waktu berjam-jam setiap hari. Recommended banget!',
          en: 'The AI prompt packs for content creation are a GAME CHANGER! Just copy-paste the prompt, content is ready instantly. Saves hours every day. Highly recommended!',
        },
        avatar: '👩‍💻',
        rating: 5,
      },
      {
        name: 'Rizki Amelia',
        role: { id: 'Project Manager, Agency Kreatif', en: 'Project Manager, Creative Agency' },
        quote: {
          id: 'Template Notion-nya lengkap banget! Dari project tracker sampai CRM — semua sudah terstruktur. Tim kami langsung adaptasi tanpa training.',
          en: 'The Notion templates are incredibly comprehensive! From project tracker to CRM — everything is structured. Our team adapted immediately without training.',
        },
        avatar: '👩‍💼',
        rating: 5,
      },
      {
        name: 'Gilang Pratama',
        role: { id: 'Founder, Digital Agency', en: 'Founder, Digital Agency' },
        quote: {
          id: 'Workflow automation tools-nya ngebantu banget. Proses onboarding klien yang dulu makan waktu 2 jam, sekarang cuma 15 menit. Best investment!',
          en: 'The workflow automation tools are incredibly helpful. The client onboarding process that used to take 2 hours now takes just 15 minutes. Best investment!',
        },
        avatar: '👨‍💼',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Produk digital apa saja yang tersedia?', en: 'What digital products are available?' },
        a: {
          id: 'Kami menyediakan AI prompt packs untuk content creation, coding, dan bisnis; template Notion untuk project management, CRM, dan finance; workflow automation tools; serta berbagai tools AI siap pakai.',
          en: 'We offer AI prompt packs for content creation, coding, and business; Notion templates for project management, CRM, and finance; workflow automation tools; and various ready-to-use AI tools.',
        },
      },
      {
        q: { id: 'Bagaimana cara mendapatkan produk setelah bayar?', en: 'How do I get the product after payment?' },
        a: {
          id: 'Setelah pembayaran dikonfirmasi, link download dan panduan penggunaan akan langsung dikirim ke WhatsApp Anda. Semua produk digital — langsung akses tanpa perlu installasi rumit.',
          en: 'Once payment is confirmed, the download link and usage guide are sent directly to your WhatsApp. All digital products — instant access with no complicated installation.',
        },
      },
      {
        q: { id: 'Apakah produknya bisa di-refund?', en: 'Can products be refunded?' },
        a: {
          id: 'Ya! Kami memberikan garansi 100% — jika produk tidak sesuai dengan yang dijelaskan, kami akan refund penuh. Lihat preview sebelum beli untuk memastikan.',
          en: 'Yes! We offer a 100% guarantee — if the product does not match the description, we will provide a full refund. Check the preview before buying to make sure.',
        },
      },
      {
        q: { id: 'Apakah ada update setelah pembelian?', en: 'Are there updates after purchase?' },
        a: {
          id: 'Ya! Semua produk mendapatkan update gratis seumur hidup. Prompt packs ditambah, template diperbarui, dan workflow ditingkatkan secara berkala.',
          en: 'Yes! All products receive free lifetime updates. Prompt packs are expanded, templates are updated, and workflows are improved regularly.',
        },
      },
      {
        q: { id: 'Bisa request produk custom?', en: 'Can I request custom products?' },
        a: {
          id: 'Tentu! Untuk paket Professional dan Enterprise, Anda bisa request produk spesifik. Tim kami akan membuatkan sesuai kebutuhan Anda. Hubungi kami untuk diskusi.',
          en: 'Absolutely! For Professional and Enterprise packages, you can request specific products. Our team will create them according to your needs. Contact us to discuss.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Tingkatkan Produktivitas?', en: 'Ready to Boost Your Productivity?' },
    subtitle: {
      id: 'Bergabung dengan 50+ pengguna yang sudah merasakan manfaat produk digital AI kami. Mulai dari Rp 49K — investasi kecil, dampak besar.',
      en: 'Join 50+ users who have experienced the benefits of our AI digital products. Starts at Rp 49K — small investment, massive impact.',
    },
    cta: { id: 'Lihat Katalog', en: 'View Catalog' },
    ctaLink: waLink('Halo, saya tertarik dengan Produk Digital AI.'),
    guarantee: {
      id: '✅ Garansi 100% — jika tidak cocok, uang kembali penuh.',
      en: '✅ 100% guarantee — if it is not a fit, full refund.',
    },
  },
  urgency: {
    type: 'stock',
    message: {
      id: '🎉 Paket Professional — gratis 1 produk bonus! Hanya untuk 20 pembeli pertama.',
      en: '🎉 Professional package — get 1 bonus product free! Only for the first 20 buyers.',
    },
  },
};
