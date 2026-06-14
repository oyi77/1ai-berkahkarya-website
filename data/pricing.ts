export const pricingData = {
  id: {
    meta: {
      title: 'Harga — BerkahKarya',
      description:
        'Produk yang sudah live dan dapat dipakai sekarang. Partnership tentang kolaborasi bisnis.',
    },
    hero: {
      badge: 'PRICING & ACCESS',
      title: 'Produk yang Sudah Live',
      subtitle:
        'Halaman ini hanya menampilkan produk atau layanan BerkahKarya yang sudah siap dipakai sekarang.',
    },
    confirmed: {
      title: 'Produk Aktif',
      plans: [
        {
          name: '1AI — API AI',
          price: 'Rp 75.000/bulan',
          desc: 'Langganan bulanan untuk akses 398+ model via 1 API key.',
          features: [
            '1 API key untuk semua model',
            'Harga flat per bulan',
            'Pembayaran dan faktur lokal',
            'Cukup register + top up',
          ],
          cta: 'Daftar 1AI',
          href: '/one-ai',
        },
        {
          name: 'VFIT — Subscription Fitur AI Baru',
          price: 'Rp 75.000/bulan',
          desc: 'Paket fitur AI baru yang di-update setiap bulan.',
          features: [
            'Fitur baru rutin tiap bulan',
            'Progressive disclosure — tidak overwhelming',
            'Support khusus anggota',
            'Insight dan trend terbaru',
          ],
          cta: 'Gabung VFIT',
          href: '/contact',
        },
      ],
    },
    partner: {
      title: 'Kolaborasi',
      subtitle: 'Jika ingin bekerja sama, gunakan jalur resmi BerkahKarya.',
      sections: [
        {
          heading: 'Partnership / Investor',
          desc: 'Komunikasi langsung tentang kerjasama atau minat investasi.',
        },
        {
          heading: 'Pelajar / Mahasiswa',
          desc: 'Minta akses trial untuk keperluan riset atau pembelajaran.',
        },
      ],
      cta: {
        title: 'Hubungi Kami',
        desc: 'Channel resmi akan direspon.',
        button: 'Kirim Permintaan',
        href: '/contact',
      },
    },
  },
  en: {
    meta: {
      title: 'Pricing — BerkahKarya',
      description:
        'Only currently available BerkahKarya products/services are listed here.',
    },
    hero: {
      badge: 'PRICING & ACCESS',
      title: 'Available Products',
      subtitle:
        'This page only contains products you can use now. Partnership requests go through official channels.',
    },
    confirmed: {
      title: 'Active Products',
      plans: [
        {
          name: '1AI — AI API',
          price: 'Rp 75,000/month',
          desc: 'Monthly access to 398+ models via 1 API key.',
          features: [
            'Single API key for all models',
            'Flat monthly pricing',
            'Local payment + invoice',
            'Quick register + top-up flow',
          ],
          cta: 'Get 1AI',
          href: '/one-ai',
        },
        {
          name: 'VFIT — New AI Feature Bundle',
          price: 'Rp 75,000/month',
          desc: 'New AI features updated every month.',
          features: [
            'New features every month',
            'Progressive disclosure',
            'Member-specific support',
            'Fresh insights and trends',
          ],
          cta: 'Join VFIT',
          href: '/contact',
        },
      ],
    },
    partner: {
      title: 'Partnership Requests',
      subtitle: 'Use the official channel.',
      sections: [
        {
          heading: 'Partnership / Investor',
          desc: 'Direct outreach for collaboration or investment interest.',
        },
        {
          heading: 'Students / Academics',
          desc: 'Request a trial for research or learning purposes.',
        },
      ],
      cta: {
        title: 'Contact Us',
        desc: 'Official channel will respond.',
        button: 'Send Request',
        href: '/contact',
      },
    },
  },
} as const;
