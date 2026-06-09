// ecosystemData.ts — The BerkahKarya Ecosystem
// Each service is a live component of the "AI Company That Runs Itself"

interface EcosystemItem {
  slug: string;
  name_id: string;
  name_en: string;
  tagline_id: string;
  tagline_en: string;
  description_id: string;
  description_en: string;
  emoji: string;
  status: 'live' | 'beta' | 'planned';
  features: { icon: string; title_id: string; title_en: string; desc_id: string; desc_en: string }[];
}

export const ecosystemData: Record<string, {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; description: string; buttons: { text: string; href: string; primary?: boolean }[] };
  items: EcosystemItem[];
  stats: { value: string; label_id: string; label_en: string }[];
  howItWorks: { title: string; steps: { num: string; title: string; desc: string }[] };
  cta: { title: string; description: string; button: { text: string; href: string } };
}> = {
  id: {
    meta: {
      title: 'Ekosistem BerkahKarya — Perusahaan AI yang Menjalankan Dirinya Sendiri',
      description: '5 layanan AI yang membangun, menjalankan, dan mengembangkan bisnis BerkahKarya secara otomatis. Dari AI orchestration hingga trading bot — semuanya buatan 1 orang.',
    },
    hero: {
      eyebrow: '⚡ EKOSISTEM BERKAHKARYA',
      title: 'Perusahaan AI\nYang Menjalankan\nDirinya Sendiri',
      description: 'BerkahKarya bukan sekadar website — ini adalah infrastruktur AI live yang menjalankan bisnis sungguhan. Setiap layanan di bawah ini adalah komponen produksi yang bekerja 24/7, dibangun oleh satu founder, tanpa tim. Ini adalah 1-Man AI Company dalam aksinya.',
      buttons: [
        { text: 'Jelajahi Layanan →', href: '#layanan', primary: true },
        { text: 'Cek Status Live', href: '#stats', primary: false },
      ],
    },
    items: [
      {
        slug: '1ai-hub',
        name_id: '1ai-hub',
        name_en: '1ai-hub',
        tagline_id: 'Otak dari Seluruh Operasi',
        tagline_en: 'The Brain of the Operation',
        description_id: 'Pusat orchestration AI yang mengoordinasikan semua agen, mengelola memori, dan mengeksekusi workflow otomatis. 1ai-hub adalah sistem saraf pusat BerkahKarya — menghubungkan setiap layanan, menyimpan konteks, dan memastikan setiap bagian bekerja selaras. Dari menjadwalkan konten sosial media hingga mengeksekusi trading signal, semuanya melewati hub ini.',
        description_en: 'The central AI orchestration hub that coordinates all agents, manages memory, and executes automated workflows. 1ai-hub is the central nervous system of BerkahKarya — connecting every service, storing context, and ensuring every component works in harmony. From scheduling social media content to executing trade signals, everything flows through this hub.',
        emoji: '🧠',
        status: 'live',
        features: [
          { icon: '🤖', title_id: 'Multi-Agent Orchestration', title_en: 'Multi-Agent Orchestration', desc_id: '30+ agen AI khusus berjalan simultan — content creator, trader, advertiser, analyst. Masing-masing punya peran, tools, dan memori sendiri.', desc_en: '30+ specialized AI agents running simultaneously — content creator, trader, advertiser, analyst. Each has its own role, tools, and memory.' },
          { icon: '💾', title_id: 'Persistent Memory', title_en: 'Persistent Memory', desc_id: 'Memori lintas sesi yang menyimpan konteks bisnis, preferensi, dan keputusan. Agen tidak mulai dari nol setiap kali.', desc_en: 'Cross-session memory that stores business context, preferences, and decisions. Agents never start from scratch.' },
          { icon: '⚡', title_id: 'Workflow Automation', title_en: 'Workflow Automation', desc_id: 'Rantai aksi otomatis: trigger → decision → execution. Contoh: signal trading masuk → analisis risiko → eksekusi order → laporan ke Telegram.', desc_en: 'Automated action chains: trigger → decision → execution. Example: trade signal comes in → risk analysis → order execution → report to Telegram.' },
          { icon: '🔄', title_id: 'Cross-Service Integration', title_en: 'Cross-Service Integration', desc_id: 'Semua layanan (1ai, OmniRoute, ads, trade-bot) terhubung dan berbagi data real-time melalui hub pusat.', desc_en: 'All services (1ai, OmniRoute, ads, trade-bot) are connected and share real-time data through the central hub.' },
          { icon: '📊', title_id: 'Real-Time Dashboard', title_en: 'Real-Time Dashboard', desc_id: 'Monitor semua aktivitas agen, antrian tugas, dan status sistem dari satu dashboard.', desc_en: 'Monitor all agent activities, task queues, and system status from a single dashboard.' },
          { icon: '🔌', title_id: 'API-First Architecture', title_en: 'API-First Architecture', desc_id: 'Setiap fungsionalitas terekspos sebagai API — mudah diintegrasikan, diganti, atau diperluas tanpa mengganggu sistem lain.', desc_en: 'Every functionality is exposed as an API — easy to integrate, replace, or extend without disrupting other systems.' },
        ],
      },
      {
        slug: 'omniroute',
        name_id: 'OmniRoute',
        name_en: 'OmniRoute',
        tagline_id: 'Gerbang AI ke 30+ Provider',
        tagline_en: 'The AI Gateway to 30+ Providers',
        description_id: 'LLM router open-source yang menjadi backbone konektivitas AI BerkahKarya. OmniRoute menghubungkan semua agen dan layanan ke 30+ provider LLM dengan auto-failover, cost optimization, dan smart caching. Setiap request dari agen di-hub, chat di Telegram, atau API call dari pelanggan — semuanya di-route secara cerdas ke provider terbaik saat itu juga.',
        description_en: 'The open-source LLM router that serves as the AI connectivity backbone of BerkahKarya. OmniRoute connects all agents and services to 30+ LLM providers with auto-failover, cost optimization, and smart caching. Every request from hub agents, Telegram chats, or customer API calls — all intelligently routed to the best provider in real-time.',
        emoji: '🌐',
        status: 'live',
        features: [
          { icon: '🛣️', title_id: 'Smart Routing', title_en: 'Smart Routing', desc_id: 'Route otomatis ke provider optimal berdasarkan latency, biaya, dan kapabilitas model. Simple task → model murah; complex reasoning → model premium.', desc_en: 'Auto-route to optimal provider based on latency, cost, and model capabilities. Simple task → cheap model; complex reasoning → premium model.' },
          { icon: '🛡️', title_id: 'Auto-Failover', title_en: 'Auto-Failover', desc_id: 'Provider down? Switch ke backup dalam milidetik. Tidak ada satu pun layanan BerkahKarya yang mati karena provider LLM trouble.', desc_en: 'Provider down? Switch to backup in milliseconds. Not a single BerkahKarya service goes down because of an LLM provider issue.' },
          { icon: '💸', title_id: 'Cost Optimization', title_en: 'Cost Optimization', desc_id: 'Hemat hingga 70% biaya LLM dengan semantic caching, model tiering, dan batch optimization langsung di production.', desc_en: 'Save up to 70% on LLM costs with semantic caching, model tiering, and batch optimization running in production.' },
          { icon: '⚡', title_id: 'Response Caching', title_en: 'Response Caching', desc_id: 'Cache cerdas yang mengenali pertanyaan serupa secara semantik — tanpa perlu exact match. Latensi turun drastis untuk pertanyaan berulang.', desc_en: 'Smart cache that recognizes semantically similar questions — no exact match needed. Latency drops dramatically for repeated queries.' },
          { icon: '🔓', title_id: 'Open Source', title_en: 'Open Source', desc_id: 'Kode sumber terbuka. Transparan, bisa diaudit, bisa di-self-host. Tidak ada lock-in ke vendor mana pun.', desc_en: 'Open source codebase. Transparent, auditable, self-hostable. No lock-in to any vendor.' },
          { icon: '📈', title_id: 'Usage Analytics', title_en: 'Usage Analytics', desc_id: 'Monitor real-time: model mana paling sering dipakai, biaya per agen, latency trends. Data-driven optimization.', desc_en: 'Real-time monitoring: most-used models, cost per agent, latency trends. Data-driven optimization.' },
        ],
      },
      {
        slug: '1ai',
        name_id: '1AI',
        name_en: '1AI',
        tagline_id: 'Toko AI — Akses 400+ Model Satu Endpoint',
        tagline_en: 'The Storefront — 400+ Models, One Endpoint',
        description_id: 'API publik flagship BerkahKarya. Tembok depan yang memberikan akses ke 400+ model AI dari 18 provider melalui satu endpoint OpenAI-compatible. 1AI adalah revenue product utama — pelanggan bayar flat fee bulanan untuk akses unlimited ke semua model. Yang membedakan: 1AI bukan sekadar API key biasa, ini adalah infrastruktur yang sama yang menjalankan semua agen internal BerkahKarya.',
        description_en: "BerkahKarya's flagship public API. The front door that provides access to 400+ AI models from 18 providers through a single OpenAI-compatible endpoint. 1AI is the main revenue product — customers pay a flat monthly fee for unlimited access to all models. What sets it apart: 1AI isn't just another API key — it's the same infrastructure running all of BerkahKarya's internal agents.",
        emoji: '🏪',
        status: 'live',
        features: [
          { icon: '🎯', title_id: '400+ Model Satu Endpoint', title_en: '400+ Models, One Endpoint', desc_id: 'GPT-4, Claude, Gemini, DeepSeek, Llama, Qwen, Mistral, dan 390+ lainnya — cukup ganti satu base URL, langsung bisa pakai semua.', desc_en: 'GPT-4, Claude, Gemini, DeepSeek, Llama, Qwen, Mistral, and 390+ more — just change one base URL and access them all.' },
          { icon: '💳', title_id: 'Flat Fee Pricing', title_en: 'Flat Fee Pricing', desc_id: 'Rp 75K/bulan flat. Bukan per-token. Bukan per-request. Bayar sekali, akses semua model tanpa batas. Revolusioner di industri.', desc_en: '$5/mo flat. Not per-token. Not per-request. Pay once, access all models unlimited. Revolutionary in the industry.' },
          { icon: '🔌', title_id: 'Drop-In OpenAI Replacement', title_en: 'Drop-In OpenAI Replacement', desc_id: '100% API-compatible dengan OpenAI. Ganti base URL + API key, sisanya tetap. Kode lama tidak perlu diubah.', desc_en: '100% API-compatible with OpenAI. Change base URL + API key, everything else stays. No legacy code changes needed.' },
          { icon: '💬', title_id: 'Support Telegram <5 Menit', title_en: 'Telegram Support <5 Min', desc_id: 'Bukan email support yang lama. Chat langsung ke founder — respon <5 menit di jam kerja.', desc_en: 'Not slow email support. Chat directly with the founder — response <5 minutes during business hours.' },
          { icon: '🇮🇩', title_id: 'Pembayaran Lokal', title_en: 'Local Payment', desc_id: 'GoPay, OVO, DANA, QRIS, Transfer BCA. Gak perlu kartu kredit. Gak kena fluktuasi USD.', desc_en: 'GoPay, OVO, DANA, QRIS, BCA Transfer. No credit card needed. No USD fluctuation.' },
          { icon: '🔑', title_id: 'Multi-Key Management', title_en: 'Multi-Key Management', desc_id: 'Buat API key berbeda per tim, per project, per klien. Kontrol penuh siapa pakai apa.', desc_en: 'Create separate API keys per team, per project, per client. Full control over who uses what.' },
        ],
      },
      {
        slug: '1ai-ads',
        name_id: '1AI-Ads',
        name_en: '1AI-Ads',
        tagline_id: 'Manajer Iklan Otomatis untuk Meta Ads',
        tagline_en: 'The Automated Ad Manager for Meta Ads',
        description_id: 'Sistem periklanan otonom BerkahKarya yang mengelola kampanye Meta Ads (Facebook/Instagram) secara otomatis. Dari pembuatan creative, penulisan copy, penentuan targeting, hingga optimasi budget — semuanya dijalankan oleh AI tanpa campur tangan manual. Digunakan untuk affiliate marketing dan promosi layanan BerkahKarya sendiri. Sistem ini belajar dari setiap kampanye dan mengoptimasi secara real-time.',
        description_en: "BerkahKarya's autonomous advertising system that manages Meta Ads (Facebook/Instagram) campaigns fully automatically. From creative generation and copywriting to targeting and budget optimization — all executed by AI with zero manual intervention. Used for affiliate marketing and promoting BerkahKarya's own services. The system learns from every campaign and optimizes in real-time.",
        emoji: '📢',
        status: 'live',
        features: [
          { icon: '🎨', title_id: 'Auto Creative Generation', title_en: 'Auto Creative Generation', desc_id: 'AI generate gambar, video pendek, dan copy iklan yang dioptimasi untuk konversi. Tidak perlu desainer.', desc_en: 'AI generates images, short videos, and ad copy optimized for conversion. No designer needed.' },
          { icon: '🎯', title_id: 'Smart Targeting', title_en: 'Smart Targeting', desc_id: 'AI menganalisis audiens dan menentukan targeting optimal — demografi, minat, behavior — berdasarkan data kampanye sebelumnya.', desc_en: 'AI analyzes audiences and determines optimal targeting — demographics, interests, behaviors — based on past campaign data.' },
          { icon: '💰', title_id: 'Auto Budget Optimization', title_en: 'Auto Budget Optimization', desc_id: 'Budget otomatis dialokasikan ke ad set berperforma terbaik. Sistem cut yang rugi, double down yang untung — 24/7.', desc_en: 'Budget automatically allocated to best-performing ad sets. System cuts losers, doubles down on winners — 24/7.' },
          { icon: '📊', title_id: 'Real-Time Analytics', title_en: 'Real-Time Analytics', desc_id: 'Dashboard performa iklan: ROAS, CPC, CTR, conversions. Semua metrik update real-time per kampanye.', desc_en: 'Ad performance dashboard: ROAS, CPC, CTR, conversions. All metrics updated in real-time per campaign.' },
          { icon: '🤖', title_id: 'A/B Testing Otomatis', title_en: 'Automated A/B Testing', desc_id: 'AI menjalankan dan menganalisis A/B test secara kontinu — creative, copy, audience — tanpa campur tangan manual.', desc_en: 'AI runs and analyzes A/B tests continuously — creative, copy, audience — without any manual intervention.' },
          { icon: '🔄', title_id: 'Cross-Platform Scaling', title_en: 'Cross-Platform Scaling', desc_id: 'Dari Meta Ads, sistem bisa scale ke TikTok Ads, Google Ads, dan platform lain dengan optimasi spesifik per platform.', desc_en: 'From Meta Ads, the system can scale to TikTok Ads, Google Ads, and other platforms with platform-specific optimization.' },
        ],
      },
      {
        slug: '1ai-trade-bot',
        name_id: '1AI-Trade-Bot',
        name_en: '1AI-Trade-Bot',
        tagline_id: 'Pedagang Otomatis untuk Forex, Crypto & Binary',
        tagline_en: 'The Automated Trader for Forex, Crypto & Binary',
        description_id: 'Sistem trading otonom yang mengeksekusi strategi di pasar Forex, cryptocurrency, dan binary options. Berbasis signal — menganalisis data pasar, mengidentifikasi peluang, dan mengeksekusi order dengan manajemen risiko ketat. Setiap trade memiliki TP/SL built-in, sizing cap, dan trend filter. Bukan bot gambling — ini algorithmic trader yang beroperasi dengan aturan yang sama seperti trader profesional, tapi 24/7 tanpa emosi.',
        description_en: 'Autonomous trading system executing strategies in Forex, cryptocurrency, and binary options markets. Signal-based — analyzes market data, identifies opportunities, and executes orders with strict risk management. Every trade has built-in TP/SL, sizing cap, and trend filter. Not a gambling bot — this is an algorithmic trader operating with the same rules as professional traders, but 24/7 without emotions.',
        emoji: '📈',
        status: 'live',
        features: [
          { icon: '📊', title_id: 'Multi-Market Support', title_en: 'Multi-Market Support', desc_id: 'Forex (major & minor pairs), cryptocurrency (Bitget, Binance), binary options (Deriv). Satu sistem, semua pasar.', desc_en: 'Forex (major & minor pairs), cryptocurrency (Bitget, Binance), binary options (Deriv). One system, all markets.' },
          { icon: '🛡️', title_id: 'Risk Management Otomatis', title_en: 'Automated Risk Management', desc_id: 'Setiap entry wajib TP/SL. Sizing cap maksimal 1.5x equity. Trend filter EMA200 (1h). Tidak ada overtrading.', desc_en: 'Every entry requires TP/SL. Max sizing cap of 1.5x equity. EMA200 (1h) trend filter. No overtrading.' },
          { icon: '🔍', title_id: 'Signal-Based Execution', title_en: 'Signal-Based Execution', desc_id: 'Menganalisis multiple timeframe, indikator teknikal, dan sentimen pasar sebelum mengeksekusi. Bukan random entry.', desc_en: 'Analyzes multiple timeframes, technical indicators, and market sentiment before executing. Not random entries.' },
          { icon: '📝', title_id: 'Loss Audit Otomatis', title_en: 'Automated Loss Audit', desc_id: 'Setiap loss dianalisis dan penyebabnya dicatat. Sistem belajar dari kesalahan dan menyesuaikan strategi.', desc_en: 'Every loss is analyzed and the cause is logged. The system learns from mistakes and adjusts strategy.' },
          { icon: '📱', title_id: 'Telegram Notifications', title_en: 'Telegram Notifications', desc_id: 'Semua aktivitas trading dilaporkan real-time ke Telegram — entry, exit, profit/loss, audit. Transparan penuh.', desc_en: 'All trading activity reported in real-time via Telegram — entry, exit, profit/loss, audit. Full transparency.' },
          { icon: '💹', title_id: 'Portfolio Dashboard', title_en: 'Portfolio Dashboard', desc_id: 'Dashboard terpusat: saldo, posisi terbuka, P&L history, drawdown, win rate. Semua yang perlu trader tahu.', desc_en: 'Centralized dashboard: balance, open positions, P&L history, drawdown, win rate. Everything a trader needs to know.' },
        ],
      },
    ],
    stats: [
      { value: '5', label_id: 'Layanan Live Production', label_en: 'Live Production Services' },
      { value: '24/7', label_id: 'Berjalan Non-Stop', label_en: 'Running Non-Stop' },
      { value: '1', label_id: 'Founder (Tanpa Tim)', label_en: 'Founder (No Team)' },
      { value: '30+', label_id: 'Provider AI Terintegrasi', label_en: 'Integrated AI Providers' },
    ],
    howItWorks: {
      title: 'Bagaimana Satu Orang Menjalankan Semua Ini',
      steps: [
        { num: '1', title: 'Dibangun Satu per Satu', desc: 'Setiap layanan dimulai sebagai solusi untuk masalah nyata. Tidak ada funding, tidak ada tim — hanya kode, kopi, dan konsistensi selama berbulan-bulan.' },
        { num: '2', title: 'Otomatisasi Bertahap', desc: 'Semakin sering digunakan, semakin banyak yang diotomatisasi. Dari manual → script → agent AI → sistem otonom. Setiap layer mengurangi ketergantungan pada manusia.' },
        { num: '3', title: 'Live & Saling Terhubung', desc: 'Sekarang semua layanan live di production, saling terintegrasi melalui 1ai-hub, dan berjalan tanpa pengawasan konstan. Founder cukup memonitor dan mengarahkan.' },
      ],
    },
    cta: {
      title: 'Ini Baru Awal. Ekosistem Terus Bertumbuh.',
      description: 'Setiap layanan adalah produk nyata yang bisa Anda gunakan. Atau, jadikan inspirasi untuk membangun 1-Man AI Company versi Anda sendiri.',
      button: { text: 'Mulai dengan 1AI — Rp 75K/bulan →', href: 'https://1ai.aitradepulse.com/' },
    },
  },
  en: {
    meta: {
      title: 'BerkahKarya Ecosystem — The AI Company That Runs Itself',
      description: '5 AI services that build, run, and grow the BerkahKarya business automatically. From AI orchestration to trading bots — all built by 1 person.',
    },
    hero: {
      eyebrow: '⚡ BERKAHKARYA ECOSYSTEM',
      title: 'The AI Company\nThat Runs\nItself',
      description: 'BerkahKarya is not just a website — it is a live AI infrastructure running a real business. Every service below is a production component working 24/7, built by one founder, with no team. This is the 1-Man AI Company in action.',
      buttons: [
        { text: 'Explore Services →', href: '#services', primary: true },
        { text: 'Check Live Status', href: '#stats', primary: false },
      ],
    },
    items: [
      {
        slug: '1ai-hub',
        name_id: '1ai-hub',
        name_en: '1ai-hub',
        tagline_id: 'Otak dari Seluruh Operasi',
        tagline_en: 'The Brain of the Operation',
        description_id: 'Pusat orchestration AI yang mengoordinasikan semua agen, mengelola memori, dan mengeksekusi workflow otomatis. 1ai-hub adalah sistem saraf pusat BerkahKarya — menghubungkan setiap layanan, menyimpan konteks, dan memastikan setiap bagian bekerja selaras. Dari menjadwalkan konten sosial media hingga mengeksekusi trading signal, semuanya melewati hub ini.',
        description_en: 'The central AI orchestration hub that coordinates all agents, manages memory, and executes automated workflows. 1ai-hub is the central nervous system of BerkahKarya — connecting every service, storing context, and ensuring every component works in harmony. From scheduling social media content to executing trade signals, everything flows through this hub.',
        emoji: '🧠',
        status: 'live',
        features: [
          { icon: '🤖', title_id: 'Multi-Agent Orchestration', title_en: 'Multi-Agent Orchestration', desc_id: '30+ agen AI khusus berjalan simultan — content creator, trader, advertiser, analyst. Masing-masing punya peran, tools, dan memori sendiri.', desc_en: '30+ specialized AI agents running simultaneously — content creator, trader, advertiser, analyst. Each has its own role, tools, and memory.' },
          { icon: '💾', title_id: 'Persistent Memory', title_en: 'Persistent Memory', desc_id: 'Memori lintas sesi yang menyimpan konteks bisnis, preferensi, dan keputusan. Agen tidak mulai dari nol setiap kali.', desc_en: 'Cross-session memory that stores business context, preferences, and decisions. Agents never start from scratch.' },
          { icon: '⚡', title_id: 'Workflow Automation', title_en: 'Workflow Automation', desc_id: 'Rantai aksi otomatis: trigger → decision → execution. Contoh: signal trading masuk → analisis risiko → eksekusi order → laporan ke Telegram.', desc_en: 'Automated action chains: trigger → decision → execution. Example: trade signal comes in → risk analysis → order execution → report to Telegram.' },
          { icon: '🔄', title_id: 'Cross-Service Integration', title_en: 'Cross-Service Integration', desc_id: 'Semua layanan (1ai, OmniRoute, ads, trade-bot) terhubung dan berbagi data real-time melalui hub pusat.', desc_en: 'All services (1ai, OmniRoute, ads, trade-bot) are connected and share real-time data through the central hub.' },
          { icon: '📊', title_id: 'Real-Time Dashboard', title_en: 'Real-Time Dashboard', desc_id: 'Monitor semua aktivitas agen, antrian tugas, dan status sistem dari satu dashboard.', desc_en: 'Monitor all agent activities, task queues, and system status from a single dashboard.' },
          { icon: '🔌', title_id: 'API-First Architecture', title_en: 'API-First Architecture', desc_id: 'Setiap fungsionalitas terekspos sebagai API — mudah diintegrasikan, diganti, atau diperluas tanpa mengganggu sistem lain.', desc_en: 'Every functionality is exposed as an API — easy to integrate, replace, or extend without disrupting other systems.' },
        ],
      },
      {
        slug: 'omniroute',
        name_id: 'OmniRoute',
        name_en: 'OmniRoute',
        tagline_id: 'Gerbang AI ke 30+ Provider',
        tagline_en: 'The AI Gateway to 30+ Providers',
        description_id: 'LLM router open-source yang menjadi backbone konektivitas AI BerkahKarya. OmniRoute menghubungkan semua agen dan layanan ke 30+ provider LLM dengan auto-failover, cost optimization, dan smart caching. Setiap request dari agen di hub, chat di Telegram, atau API call dari pelanggan — semuanya di-route secara cerdas ke provider terbaik saat itu juga.',
        description_en: 'The open-source LLM router that serves as the AI connectivity backbone of BerkahKarya. OmniRoute connects all agents and services to 30+ LLM providers with auto-failover, cost optimization, and smart caching. Every request from hub agents, Telegram chats, or customer API calls — all intelligently routed to the best provider in real-time.',
        emoji: '🌐',
        status: 'live',
        features: [
          { icon: '🛣️', title_id: 'Smart Routing', title_en: 'Smart Routing', desc_id: 'Route otomatis ke provider optimal berdasarkan latency, biaya, dan kapabilitas model. Simple task → model murah; complex reasoning → model premium.', desc_en: 'Auto-route to optimal provider based on latency, cost, and model capabilities. Simple task → cheap model; complex reasoning → premium model.' },
          { icon: '🛡️', title_id: 'Auto-Failover', title_en: 'Auto-Failover', desc_id: 'Provider down? Switch ke backup dalam milidetik. Tidak ada satu pun layanan BerkahKarya yang mati karena provider LLM trouble.', desc_en: 'Provider down? Switch to backup in milliseconds. Not a single BerkahKarya service goes down because of an LLM provider issue.' },
          { icon: '💸', title_id: 'Cost Optimization', title_en: 'Cost Optimization', desc_id: 'Hemat hingga 70% biaya LLM dengan semantic caching, model tiering, dan batch optimization langsung di production.', desc_en: 'Save up to 70% on LLM costs with semantic caching, model tiering, and batch optimization running in production.' },
          { icon: '⚡', title_id: 'Response Caching', title_en: 'Response Caching', desc_id: 'Cache cerdas yang mengenali pertanyaan serupa secara semantik — tanpa perlu exact match. Latensi turun drastis untuk pertanyaan berulang.', desc_en: 'Smart cache that recognizes semantically similar questions — no exact match needed. Latency drops dramatically for repeated queries.' },
          { icon: '🔓', title_id: 'Open Source', title_en: 'Open Source', desc_id: 'Kode sumber terbuka. Transparan, bisa diaudit, bisa di-self-host. Tidak ada lock-in ke vendor mana pun.', desc_en: 'Open source codebase. Transparent, auditable, self-hostable. No lock-in to any vendor.' },
          { icon: '📈', title_id: 'Usage Analytics', title_en: 'Usage Analytics', desc_id: 'Monitor real-time: model mana paling sering dipakai, biaya per agen, latency trends. Data-driven optimization.', desc_en: 'Real-time monitoring: most-used models, cost per agent, latency trends. Data-driven optimization.' },
        ],
      },
      {
        slug: '1ai',
        name_id: '1AI',
        name_en: '1AI',
        tagline_id: 'Toko AI — Akses 400+ Model Satu Endpoint',
        tagline_en: 'The Storefront — 400+ Models, One Endpoint',
        description_id: 'API publik flagship BerkahKarya. Tembok depan yang memberikan akses ke 400+ model AI dari 18 provider melalui satu endpoint OpenAI-compatible. 1AI adalah revenue product utama — pelanggan bayar flat fee bulanan untuk akses unlimited ke semua model. Yang membedakan: 1AI bukan sekadar API key biasa, ini adalah infrastruktur yang sama yang menjalankan semua agen internal BerkahKarya.',
        description_en: "BerkahKarya's flagship public API. The front door that provides access to 400+ AI models from 18 providers through a single OpenAI-compatible endpoint. 1AI is the main revenue product — customers pay a flat monthly fee for unlimited access to all models. What sets it apart: 1AI isn't just another API key — it's the same infrastructure running all of BerkahKarya's internal agents.",
        emoji: '🏪',
        status: 'live',
        features: [
          { icon: '🎯', title_id: '400+ Model Satu Endpoint', title_en: '400+ Models, One Endpoint', desc_id: 'GPT-4, Claude, Gemini, DeepSeek, Llama, Qwen, Mistral, dan 390+ lainnya — cukup ganti satu base URL, langsung bisa pakai semua.', desc_en: 'GPT-4, Claude, Gemini, DeepSeek, Llama, Qwen, Mistral, and 390+ more — just change one base URL and access them all.' },
          { icon: '💳', title_id: 'Flat Fee Pricing', title_en: 'Flat Fee Pricing', desc_id: 'Rp 75K/bulan flat. Bukan per-token. Bukan per-request. Bayar sekali, akses semua model tanpa batas. Revolusioner di industri.', desc_en: '$5/mo flat. Not per-token. Not per-request. Pay once, access all models unlimited. Revolutionary in the industry.' },
          { icon: '🔌', title_id: 'Drop-In OpenAI Replacement', title_en: 'Drop-In OpenAI Replacement', desc_id: '100% API-compatible dengan OpenAI. Ganti base URL + API key, sisanya tetap. Kode lama tidak perlu diubah.', desc_en: '100% API-compatible with OpenAI. Change base URL + API key, everything else stays. No legacy code changes needed.' },
          { icon: '💬', title_id: 'Support Telegram <5 Menit', title_en: 'Telegram Support <5 Min', desc_id: 'Bukan email support yang lama. Chat langsung ke founder — respon <5 menit di jam kerja.', desc_en: 'Not slow email support. Chat directly with the founder — response <5 minutes during business hours.' },
          { icon: '🇮🇩', title_id: 'Pembayaran Lokal', title_en: 'Local Payment', desc_id: 'GoPay, OVO, DANA, QRIS, Transfer BCA. Gak perlu kartu kredit. Gak kena fluktuasi USD.', desc_en: 'GoPay, OVO, DANA, QRIS, BCA Transfer. No credit card needed. No USD fluctuation.' },
          { icon: '🔑', title_id: 'Multi-Key Management', title_en: 'Multi-Key Management', desc_id: 'Buat API key berbeda per tim, per project, per klien. Kontrol penuh siapa pakai apa.', desc_en: 'Create separate API keys per team, per project, per client. Full control over who uses what.' },
        ],
      },
      {
        slug: '1ai-ads',
        name_id: '1AI-Ads',
        name_en: '1AI-Ads',
        tagline_id: 'Manajer Iklan Otomatis untuk Meta Ads',
        tagline_en: 'The Automated Ad Manager for Meta Ads',
        description_id: 'Sistem periklanan otonom BerkahKarya yang mengelola kampanye Meta Ads (Facebook/Instagram) secara otomatis. Dari pembuatan creative, penulisan copy, penentuan targeting, hingga optimasi budget — semuanya dijalankan oleh AI tanpa campur tangan manual. Digunakan untuk affiliate marketing dan promosi layanan BerkahKarya sendiri. Sistem ini belajar dari setiap kampanye dan mengoptimasi secara real-time.',
        description_en: "BerkahKarya's autonomous advertising system that manages Meta Ads (Facebook/Instagram) campaigns fully automatically. From creative generation and copywriting to targeting and budget optimization — all executed by AI with zero manual intervention. Used for affiliate marketing and promoting BerkahKarya's own services. The system learns from every campaign and optimizes in real-time.",
        emoji: '📢',
        status: 'live',
        features: [
          { icon: '🎨', title_id: 'Auto Creative Generation', title_en: 'Auto Creative Generation', desc_id: 'AI generate gambar, video pendek, dan copy iklan yang dioptimasi untuk konversi. Tidak perlu desainer.', desc_en: 'AI generates images, short videos, and ad copy optimized for conversion. No designer needed.' },
          { icon: '🎯', title_id: 'Smart Targeting', title_en: 'Smart Targeting', desc_id: 'AI menganalisis audiens dan menentukan targeting optimal — demografi, minat, behavior — berdasarkan data kampanye sebelumnya.', desc_en: 'AI analyzes audiences and determines optimal targeting — demographics, interests, behaviors — based on past campaign data.' },
          { icon: '💰', title_id: 'Auto Budget Optimization', title_en: 'Auto Budget Optimization', desc_id: 'Budget otomatis dialokasikan ke ad set berperforma terbaik. Sistem cut yang rugi, double down yang untung — 24/7.', desc_en: 'Budget automatically allocated to best-performing ad sets. System cuts losers, doubles down on winners — 24/7.' },
          { icon: '📊', title_id: 'Real-Time Analytics', title_en: 'Real-Time Analytics', desc_id: 'Dashboard performa iklan: ROAS, CPC, CTR, conversions. Semua metrik update real-time per kampanye.', desc_en: 'Ad performance dashboard: ROAS, CPC, CTR, conversions. All metrics updated in real-time per campaign.' },
          { icon: '🤖', title_id: 'A/B Testing Otomatis', title_en: 'Automated A/B Testing', desc_id: 'AI menjalankan dan menganalisis A/B test secara kontinu — creative, copy, audience — tanpa campur tangan manual.', desc_en: 'AI runs and analyzes A/B tests continuously — creative, copy, audience — without any manual intervention.' },
          { icon: '🔄', title_id: 'Cross-Platform Scaling', title_en: 'Cross-Platform Scaling', desc_id: 'Dari Meta Ads, sistem bisa scale ke TikTok Ads, Google Ads, dan platform lain dengan optimasi spesifik per platform.', desc_en: 'From Meta Ads, the system can scale to TikTok Ads, Google Ads, and other platforms with platform-specific optimization.' },
        ],
      },
      {
        slug: '1ai-trade-bot',
        name_id: '1AI-Trade-Bot',
        name_en: '1AI-Trade-Bot',
        tagline_id: 'Pedagang Otomatis untuk Forex, Crypto & Binary',
        tagline_en: 'The Automated Trader for Forex, Crypto & Binary',
        description_id: 'Sistem trading otonom yang mengeksekusi strategi di pasar Forex, cryptocurrency, dan binary options. Berbasis signal — menganalisis data pasar, mengidentifikasi peluang, dan mengeksekusi order dengan manajemen risiko ketat. Setiap trade memiliki TP/SL built-in, sizing cap, dan trend filter. Bukan bot gambling — ini algorithmic trader yang beroperasi dengan aturan yang sama seperti trader profesional, tapi 24/7 tanpa emosi.',
        description_en: 'Autonomous trading system executing strategies in Forex, cryptocurrency, and binary options markets. Signal-based — analyzes market data, identifies opportunities, and executes orders with strict risk management. Every trade has built-in TP/SL, sizing cap, and trend filter. Not a gambling bot — this is an algorithmic trader operating with the same rules as professional traders, but 24/7 without emotions.',
        emoji: '📈',
        status: 'live',
        features: [
          { icon: '📊', title_id: 'Multi-Market Support', title_en: 'Multi-Market Support', desc_id: 'Forex (major & minor pairs), cryptocurrency (Bitget, Binance), binary options (Deriv). Satu sistem, semua pasar.', desc_en: 'Forex (major & minor pairs), cryptocurrency (Bitget, Binance), binary options (Deriv). One system, all markets.' },
          { icon: '🛡️', title_id: 'Risk Management Otomatis', title_en: 'Automated Risk Management', desc_id: 'Setiap entry wajib TP/SL. Sizing cap maksimal 1.5x equity. Trend filter EMA200 (1h). Tidak ada overtrading.', desc_en: 'Every entry requires TP/SL. Max sizing cap of 1.5x equity. EMA200 (1h) trend filter. No overtrading.' },
          { icon: '🔍', title_id: 'Signal-Based Execution', title_en: 'Signal-Based Execution', desc_id: 'Menganalisis multiple timeframe, indikator teknikal, dan sentimen pasar sebelum mengeksekusi. Bukan random entry.', desc_en: 'Analyzes multiple timeframes, technical indicators, and market sentiment before executing. Not random entries.' },
          { icon: '📝', title_id: 'Loss Audit Otomatis', title_en: 'Automated Loss Audit', desc_id: 'Setiap loss dianalisis dan penyebabnya dicatat. Sistem belajar dari kesalahan dan menyesuaikan strategi.', desc_en: 'Every loss is analyzed and the cause is logged. The system learns from mistakes and adjusts strategy.' },
          { icon: '📱', title_id: 'Telegram Notifications', title_en: 'Telegram Notifications', desc_id: 'Semua aktivitas trading dilaporkan real-time ke Telegram — entry, exit, profit/loss, audit. Transparan penuh.', desc_en: 'All trading activity reported in real-time via Telegram — entry, exit, profit/loss, audit. Full transparency.' },
          { icon: '💹', title_id: 'Portfolio Dashboard', title_en: 'Portfolio Dashboard', desc_id: 'Dashboard terpusat: saldo, posisi terbuka, P&L history, drawdown, win rate. Semua yang perlu trader tahu.', desc_en: 'Centralized dashboard: balance, open positions, P&L history, drawdown, win rate. Everything a trader needs to know.' },
        ],
      },
    ],
    stats: [
      { value: '5', label_id: 'Layanan Live Production', label_en: 'Live Production Services' },
      { value: '24/7', label_id: 'Berjalan Non-Stop', label_en: 'Running Non-Stop' },
      { value: '1', label_id: 'Founder (Tanpa Tim)', label_en: 'Founder (No Team)' },
      { value: '30+', label_id: 'Provider AI Terintegrasi', label_en: 'Integrated AI Providers' },
    ],
    howItWorks: {
      title: 'How One Person Runs All of This',
      steps: [
        { num: '1', title: 'Built One at a Time', desc: 'Each service started as a solution to a real problem. No funding, no team — just code, coffee, and months of consistency.' },
        { num: '2', title: 'Gradual Automation', desc: 'The more something was used, the more it got automated. From manual → script → AI agent → autonomous system. Each layer reduced human dependency.' },
        { num: '3', title: 'Live & Interconnected', desc: 'Now all services are live in production, interlinked through 1ai-hub, and running without constant supervision. The founder just monitors and steers.' },
      ],
    },
    cta: {
      title: 'This Is Just the Beginning. The Ecosystem Keeps Growing.',
      description: 'Every service is a real product you can use. Or, let it inspire you to build your own 1-Man AI Company.',
      button: { text: 'Start with 1AI — $5/mo →', href: 'https://1ai.aitradepulse.com/' },
    },
  },
};
