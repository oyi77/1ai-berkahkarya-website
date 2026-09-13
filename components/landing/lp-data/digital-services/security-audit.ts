import type { LPContent } from '../../ServiceLP';
import { ctaLink, trustItems } from './_shared';

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
