import type { Course } from './types';

export const COURSES: Course[] = [
  {
    id: 'ai-produktivitas',
    emoji: '\u{1F916}', // 🤖
    title: 'AI Produktivitas',
    tagline: 'Kerja 10x Lebih Cepat dengan AI',
    description: 'Kelas ini dirancang untuk membantu kamu mengoptimalkan pekerjaan sehari-hari dengan bantuan AI. Mulai dari menulis email, membuat konten, menganalisis data, hingga menyusun presentasi — semuanya bisa diselesaikan dalam hitungan menit. Cocok untuk profesional, content creator, dan siapa pun yang ingin bekerja lebih efisien.',
    topics: [
      'Prompt engineering dasar hingga mahir',
      'Membuat konten tulisan, gambar, dan video dengan AI',
      'Automasi tugas repetitive dengan AI',
      'Analisis data cepat pakai AI',
      'Integrasi AI ke workflow harian (Google Workspace, Notion, dll)',
      'Studi kasus: 10 skenario kerja nyata',
    ],
    audience: ['Karyawan', 'Freelancer', 'Content Creator', 'Owner Bisnis'],
    outcomes: [
      'Mampu membuat konten 10x lebih cepat pakai AI',
      'Bisa mengotomatiskan tugas-tugas repetitive',
      'Memiliki sistem prompt library siap pakai',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya tertarik dengan kelas AI Produktivitas. Mohon info pendaftarannya.',
  },
  {
    id: 'meta-ads',
    emoji: '\u{1F4E3}', // 📣
    title: 'Meta Ads',
    tagline: 'Jago Iklan Facebook & Instagram dalam 4 Pekan',
    description: 'Kelas ini membekali kamu dengan kemampuan merancang, menjalankan, dan mengoptimalkan iklan Meta (Facebook & Instagram) dari nol hingga mahir. Mulai dari riset audiens, pembuatan creative brief, sampai analisis performa iklan. Cocok untuk pemilik bisnis, marketer, dan siapa pun yang ingin memaksimalkan budget iklan.',
    topics: [
      'Pengenalan Meta Ads Manager & Business Suite',
      'Riset audiens dan pembuatan buyer persona',
      'Strategi creative: gambar, video, dan copy yang konversi',
      'Setup pixel dan konversi (CAPI)',
      'A/B testing dan optimasi campaign',
      'Analisis metrics: ROAS, CPA, CTR, dan lainnya',
      'Retargeting dan lookalike audience',
    ],
    audience: ['Owner Bisnis', 'Marketer', 'Agency', 'Freelancer'],
    outcomes: [
      'Mampu membuat dan mengelola campaign Meta Ads secara mandiri',
      'Bisa membaca dan mengoptimalkan data iklan',
      'Punya strategi iklan yang terbukti (bukan coba-coba)',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya tertarik dengan kelas Meta Ads. Mohon info pendaftarannya.',
  },
  {
    id: 'affiliate-marketing',
    emoji: '\u{1F4B0}', // 💰
    title: 'Affiliate Marketing',
    tagline: 'Hasilkan Komisi Tanpa Modal Besar',
    description: 'Kelas ini mengajarkan strategi affiliate marketing yang sudah teruji untuk menghasilkan komisi secara konsisten. Dari memilih produk, membuat konten promosi, sampai mengoptimalkan konversi. Cocok untuk pemula yang ingin memulai bisnis online tanpa stok barang.',
    topics: [
      'Fundamental affiliate marketing dan cara kerjanya',
      'Cara memilih produk dan program affiliate yang menguntungkan',
      'Membangun platform promosi (blog, sosial media, YouTube)',
      'Teknik copywriting untuk konversi affiliate',
      'SEO untuk konten affiliate',
      'Email marketing untuk affiliate',
      'Analisis performa dan scaling income',
    ],
    audience: ['Pemula', 'Content Creator', 'Ibu Rumah Tangga', 'Mahasiswa'],
    outcomes: [
      'Memiliki sistem affiliate marketing yang bisa menghasilkan pasif income',
      'Bisa memilih produk affiliate dengan potensi komisi tinggi',
      'Punya strategi promosi yang terbukti efektif',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya tertarik dengan kelas Affiliate Marketing. Mohon info pendaftarannya.',
  },
  {
    id: 'ai-coding',
    emoji: '\u{1F4BB}', // 💻
    title: 'AI Coding',
    tagline: 'Bikin Aplikasi Tanpa Harus Hafal Kode',
    description: 'Kelas ini mengajarkan cara membuat aplikasi web dan mobile dengan bantuan AI coding assistant. Kamu tidak perlu hafal sintaks atau menjadi programmer senior — cukup pahami logika dasarnya, AI akan membantu menulis kodenya. Cocok untuk pemula yang ingin belajar coding dengan cara modern.',
    topics: [
      'Dasar logika pemrograman tanpa harus coding manual',
      'Menggunakan AI coding assistant (Cursor, Copilot, Claude)',
      'Membuat landing page dan website sederhana',
      'Membangun aplikasi web dengan data dinamis',
      'Integrasi API dan database',
      'Deploy dan publikasi aplikasi ke internet',
      'Studi kasus: 3 proyek nyata dari awal sampai deploy',
    ],
    audience: ['Pemula', 'Owner Bisnis', 'Product Manager', 'Designer'],
    outcomes: [
      'Mampu membuat dan deploy aplikasi web sendiri',
      'Bisa menggunakan AI coding assistant secara efektif',
      'Punya portofolio 3 proyek nyata',
    ],
    price: 'Rp 500.000',
    waText: 'Halo, saya tertarik dengan kelas AI Coding. Mohon info pendaftarannya.',
  },
];

export const VALUE_PROPS = [
  {
    emoji: '\u{1F4B5}', // 💵
    title: 'Harga Terjangkau',
    desc: 'Hanya Rp 500.000 per kelas. Investasi sekali, skill bertahan seumur hidup.',
  },
  {
    emoji: '\u{1F558}', // 🕘
    title: 'Jadwal Weekend',
    desc: '4x pertemuan tiap Hari Minggu. Nggak ganggu kerja atau kuliah.',
  },
  {
    emoji: '\u{1F30D}', // 🌍
    title: 'Online + Offline',
    desc: 'Bisa ikut dari mana aja via Zoom, atau tatap muka langsung.',
  },
  {
    emoji: '\u{1F528}', // 🔨
    title: 'Praktik Langsung',
    desc: 'Wajib PR dan final project. Bukan teori doang — beneran praktik.',
  },
  {
    emoji: '\u{1F468}\u200D\u{1F3EB}', // 👨‍🏫
    title: 'Pendampingan',
    desc: '1 bulan support setelah kelas selesai. Konsultasi bebas tanya kapan aja.',
  },
  {
    emoji: '\u{1F4AC}', // 💬
    title: 'Komunitas Eksklusif',
    desc: 'Akses grup Telegram khusus. Saling sharing sesama peserta + mentor.',
  },
];

export const WA_PHONE = '6285280000449';
