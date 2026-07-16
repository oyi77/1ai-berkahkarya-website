import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import JasaServicePage, { JasaServiceContent } from '@/components/JasaServicePage';

type Locale = 'id' | 'en';

interface Props { locale: Locale; }

const WA_NUMBER = '6285732740006';
const WA_TEXT = 'Halo BerkahKarya, saya tertarik dengan Jasa Pembuatan Website';

export default function JasaWebsitePage({ locale }: Props) {
  const isIndonesian = locale === 'id';

  const content: JasaServiceContent = {
    heroTag: isIndonesian ? 'JASA PEMBUATAN WEBSITE' : 'WEBSITE DEVELOPMENT SERVICE',
    heroTitle: isIndonesian ? 'Bikin Website Profesional yang' : 'Create a Professional Website that',
    heroTitleEm: isIndonesian ? 'Bikin Bisnismu Naik Kelas' : 'Elevates Your Business',
    heroSub: isIndonesian
      ? 'Dari landing page sampai e-commerce — kami bikin website yang cepat, responsif, dan dioptimalkan untuk konversi. Tanpa ribet, tanpa coding.'
      : 'From landing pages to e-commerce — we build fast, responsive, conversion-optimized websites. No hassle, no coding.',
    heroCta: isIndonesian ? 'Konsultasi Gratis via WA' : 'Free Consultation via WA',
    heroCtaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,

    problemLabel: isIndonesian ? 'MASALAH' : 'PROBLEMS',
    problemTitle: isIndonesian ? 'Website itu penting, tapi' : 'A website is essential, but',
    problemTitleEm: isIndonesian ? 'bikinnya males banget' : 'creating one is a drag',
    problems: [
      {
        icon: '\u23F3',
        title: isIndonesian ? 'Bikin Sendiri? Lama Banget' : 'DIY Takes Forever',
        desc: isIndonesian
          ? 'Belajar coding atau otak-atik template berminggu-minggu. Hasil? Belum tentu profesional.'
          : 'Learning to code or fiddling with templates takes weeks. Results? Not always professional.',
      },
      {
        icon: '\U0001F4B0',
        title: isIndonesian ? 'Jasa Mahal & Nggak Transparan' : 'Expensive & Opaque Pricing',
        desc: isIndonesian
          ? 'Budget membengkak, timeline molor, dan sering ada biaya tersembunyi.'
          : 'Budget overruns, missed deadlines, hidden costs everywhere.',
      },
      {
        icon: '\U0001F4F1',
        title: isIndonesian ? 'Nggak Responsif, Ketinggalan Zaman' : 'Outdated & Not Mobile-Friendly',
        desc: isIndonesian
          ? 'Website yang nggak optimal di HP bikin calon pelanggan kabur.'
          : 'Websites that arent mobile-optimized drive potential customers away.',
      },
      {
        icon: '\U0001F50D',
        title: isIndonesian ? 'Sepi Pengunjung' : 'No Visitors, No Leads',
        desc: isIndonesian
          ? 'Website udah jadi tapi susah ditemukan di Google. Investasi sia-sia.'
          : 'Your site is live but disappears in search results. Wasted investment.',
      },
    ],

    delivLabel: isIndonesian ? 'LAYANAN KAMI' : 'OUR SERVICES',
    delivTitle: isIndonesian ? 'Yang Kamu Dapetin' : 'What You\'ll Get',
    delivTitleEm: isIndonesian ? 'di Setiap Paket' : 'in Every Package',
    deliverables: [
      {
        icon: '\U0001F3A8',
        title: isIndonesian ? 'Desain Profesional' : 'Professional Design',
        desc: isIndonesian
          ? 'Tampilan modern yang mencerminkan brand kamu. Bisa custom sesuai selera.'
          : 'Modern visuals that reflect your brand. Fully customizable to your taste.',
      },
      {
        icon: '\u26A1',
        title: isIndonesian ? 'Cepat & Ringan' : 'Fast & Lightweight',
        desc: isIndonesian
          ? 'Optimasi performa biar loading nggak bikin pengunjung kabur.'
          : 'Performance-tuned to keep visitors engaged with zero lag.',
      },
      {
        icon: '\U0001F4F1',
        title: isIndonesian ? 'Responsive Semua Layar' : 'Fully Responsive',
        desc: isIndonesian
          ? 'Cakep di HP, tablet, maupun desktop — dijamin.'
          : 'Looks great on mobile, tablet, and desktop — guaranteed.',
      },
      {
        icon: '\U0001F310',
        title: isIndonesian ? 'SEO Siap Pakai' : 'SEO-Ready',
        desc: isIndonesian
          ? 'Dioptimalkan biar gampang ditemukan di Google dan mesin pencari lain.'
          : 'Optimized for Google and search engines right out of the box.',
      },
      {
        icon: '\U0001F510',
        title: isIndonesian ? 'Keamanan Standar Industri' : 'Industry-Standard Security',
        desc: isIndonesian
          ? 'SSL, proteksi malware, backup otomatis — data kamu aman.'
          : 'SSL, malware protection, automatic backups — your data stays safe.',
      },
      {
        icon: '\U0001F4D6',
        title: isIndonesian ? 'CMS Mudah Dikelola' : 'Easy-to-Manage CMS',
        desc: isIndonesian
          ? 'Update konten sendiri tanpa perlu bantuan developer.'
          : 'Update your own content without needing a developer.',
      },
    ],

    processLabel: isIndonesian ? 'CARA KERJA' : 'HOW IT WORKS',
    processTitle: isIndonesian ? 'Proses' : 'Our',
    processTitleEm: isIndonesian ? '3 Langkah Simpel' : 'Simple 3-Step Process',
    processSteps: [
      {
        num: '01',
        title: isIndonesian ? 'Konsultasi & Brief' : 'Consultation & Brief',
        desc: isIndonesian
          ? 'Kita ngobrol tentang visi, kebutuhan, dan target website kamu.'
          : 'We discuss your vision, requirements, and website goals.',
      },
      {
        num: '02',
        title: isIndonesian ? 'Desain & Development' : 'Design & Development',
        desc: isIndonesian
          ? 'Tim kami bikin desain dan coding sesuai brief yang udah disepakati.'
          : 'Our team designs and codes according to the agreed brief.',
      },
      {
        num: '03',
        title: isIndonesian ? 'Launch & Support' : 'Launch & Support',
        desc: isIndonesian
          ? 'Website live! Kami pantau dan siap bantu maintenance.'
          : 'Your website goes live! We monitor and provide ongoing support.',
      },
    ],

    benefitLabel: isIndonesian ? 'KENAPA PILIH KAMI' : 'WHY CHOOSE US',
    benefitTitle: isIndonesian ? 'Nggak Sembarang' : 'Not Your Average',
    benefitTitleEm: isIndonesian ? 'Bikin Website' : 'Web Development',
    benefits: [
      {
        icon: '\u2705',
        title: isIndonesian ? 'Hasil Terjamin' : 'Guaranteed Results',
        desc: isIndonesian ? 'Revisi sampai puas. Nggak ada kata selesai sebelum kamu senyum.' : 'Unlimited revisions until you\'re satisfied. We don\'t stop until you smile.',
      },
      {
        icon: '\u26A1',
        title: isIndonesian ? 'Proses Cepat' : 'Fast Turnaround',
        desc: isIndonesian ? 'Website bisa selesai dalam hitungan hari, bukan bulan.' : 'Your website can be ready in days, not months.',
      },
      {
        icon: '\U0001F4B0',
        title: isIndonesian ? 'Harga Bersahabat' : 'Affordable Pricing',
        desc: isIndonesian ? 'Murah tapi nggak murahan. Transparan dari awal.' : 'Affordable without cutting corners. Transparent pricing from day one.',
      },
      {
        icon: '\U0001F4E6',
        title: isIndonesian ? 'Bisa Custom Sesuai Brand' : 'Fully Customizable',
        desc: isIndonesian ? 'Template? No way. Setiap website dibuat unik buat bisnismu.' : 'Templates? No way. Every website is uniquely crafted for your business.',
      },
      {
        icon: '\U0001F4CA',
        title: isIndonesian ? 'SEO Optimized' : 'SEO Optimized',
        desc: isIndonesian ? 'Langsung siap bersaing di halaman pertama Google.' : 'Ready to compete on Google\'s first page from day one.',
      },
      {
        icon: '\U0001F513',
        title: isIndonesian ? 'Support 1 Bulan' : '1 Month Support',
        desc: isIndonesian ? 'Free maintenance dan support penuh selama sebulan setelah launch.' : 'Free maintenance and full support for a month after launch.',
      },
    ],

    pricingLabel: isIndonesian ? 'HARGA' : 'PRICING',
    pricingTitle: isIndonesian ? 'Pilih Paket' : 'Choose Your',
    pricingTitleEm: isIndonesian ? 'Sesuai Kebutuhan' : 'Perfect Package',
    pricingSub: isIndonesian
      ? 'Transparan tanpa biaya tersembunyi. Konsultasi gratis untuk tentuin paket yang pas.'
      : 'Transparent pricing with zero hidden fees. Free consultation to pick the right plan.',
    pricingNote: isIndonesian
      ? '*Harga bisa berbeda tergantung kompleksitas fitur. Konsultasi gratis dulu yuk!'
      : '*Pricing may vary based on feature complexity. Free consultation available!',
    plans: [
      {
        name: isIndonesian ? 'Landing Page' : 'Landing Page',
        price: isIndonesian ? 'Rp 500K' : '$35',
        unit: isIndonesian ? '/paket' : '/package',
        desc: isIndonesian
          ? 'Cocok untuk UMKM, freelancer, dan personal brand yang butuh website satu halaman.'
          : 'Perfect for SMEs, freelancers, and personal brands needing a single-page website.',
        items: [
          isIndonesian ? '1 halaman landing page' : '1-page landing page',
          isIndonesian ? 'Desain responsive' : 'Responsive design',
          isIndonesian ? 'Form kontak' : 'Contact form',
          isIndonesian ? 'SEO dasar' : 'Basic SEO',
          isIndonesian ? 'Hosting + domain 1 thn' : 'Hosting + domain 1 year',
          isIndonesian ? 'Support 1 bulan' : '1 month support',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Landing Page)')}`,
      },
      {
        name: isIndonesian ? 'Company Profile' : 'Company Profile',
        price: isIndonesian ? 'Rp 1,5Jt' : '$100',
        unit: isIndonesian ? '/paket' : '/package',
        desc: isIndonesian
          ? 'Website multi-halaman profesional untuk bisnis yang ingin tampil kredibel.'
          : 'Multi-page professional website for businesses wanting to establish credibility.',
        items: [
          isIndonesian ? 'Hingga 5 halaman' : 'Up to 5 pages',
          isIndonesian ? 'Desain custom premium' : 'Premium custom design',
          isIndonesian ? 'Galeri portofolio' : 'Portfolio gallery',
          isIndonesian ? 'Blog/artikel' : 'Blog/articles',
          isIndonesian ? 'Integrasi media sosial' : 'Social media integration',
          isIndonesian ? 'SEO lengkap' : 'Full SEO',
          isIndonesian ? 'Hosting + domain 1 thn' : 'Hosting + domain 1 year',
        ],
        highlight: true,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Company Profile)')}`,
      },
      {
        name: isIndonesian ? 'Toko Online' : 'E-Commerce',
        price: isIndonesian ? 'Rp 3,5Jt' : '$235',
        unit: isIndonesian ? '/paket' : '/package',
        desc: isIndonesian
          ? 'Toko online siap jualan dengan sistem pembayaran dan manajemen produk lengkap.'
          : 'Online store ready to sell with complete payment and product management systems.',
        items: [
          isIndonesian ? 'Katalog produk unlimited' : 'Unlimited product catalog',
          isIndonesian ? 'Keranjang belanja' : 'Shopping cart',
          isIndonesian ? 'Payment gateway' : 'Payment gateway',
          isIndonesian ? 'Manajemen pesanan' : 'Order management',
          isIndonesian ? 'Dashboard admin' : 'Admin dashboard',
          isIndonesian ? 'SEO & marketing tools' : 'SEO & marketing tools',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Toko Online)')}`,
      },
    ],

    usecaseLabel: isIndonesian ? 'COCOK UNTUK' : 'PERFECT FOR',
    usecaseTitle: isIndonesian ? 'Siapa Aja yang' : 'Who',
    usecaseTitleEm: isIndonesian ? 'Butuh Jasa Ini' : 'Needs This Service',
    useCases: [
      {
        title: isIndonesian ? 'UMKM & Startup' : 'SMEs & Startups',
        desc: isIndonesian
          ? 'Mau go digital tapi bingung mulai dari mana? Kami bantu dari nol.'
          : 'Want to go digital but don\'t know where to start? We help from scratch.',
      },
      {
        title: isIndonesian ? 'Freelancer & Kreator' : 'Freelancers & Creators',
        desc: isIndonesian
          ? 'Portofolio online yang bikin klien langsung percaya.'
          : 'An online portfolio that makes clients trust you instantly.',
      },
      {
        title: isIndonesian ? 'Toko Fisik yang Mau Online' : 'Brick-and-Mortar Going Online',
        desc: isIndonesian
          ? 'Kembangkan jangkauan bisnismu dengan toko online profesional.'
          : 'Expand your reach with a professional online store.',
      },
      {
        title: isIndonesian ? 'Organisasi & Komunitas' : 'Organizations & Communities',
        desc: isIndonesian
          ? 'Website profil yang informatif dan gampang diupdate.'
          : 'An informative profile website thats easy to update.',
      },
    ],

    ctaLabel: isIndonesian ? 'SIAP MULAI?' : 'READY TO START?',
    ctaTitle: isIndonesian ? 'Yuk, Bikin Website' : 'Let\'s Build Your',
    ctaTitleEm: isIndonesian ? 'Bersama Kami' : 'Website Together',
    ctaSub: isIndonesian
      ? 'Konsultasi gratis, nggak ada kewajiban. Kita bahas kebutuhan website kamu dan kasih solusi terbaik.'
      : 'Free consultation, no obligations. We\'ll discuss your website needs and find the best solution.',
    ctaBtn: isIndonesian ? 'Konsultasi Gratis Sekarang' : 'Free Consultation Now',
    ctaBtnLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,
    ctaSecondary: '/id/jasa-website',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isIndonesian ? 'Jasa Pembuatan Website' : 'Website Development Service',
    provider: { '@type': 'Organization', name: 'BerkahKarya' },
    description: isIndonesian
      ? 'Jasa pembuatan website profesional untuk UMKM, startup, dan bisnis. Landing page, company profile, toko online.'
      : 'Professional website development for SMEs, startups, and businesses. Landing pages, company profiles, online stores.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: '500000',
      highPrice: '3500000',
    },
  };

  return (
    <Layout
      title={content.heroTitle + ' | BerkahKarya'}
      description={content.heroSub}
      keywords={isIndonesian ? 'jasa pembuatan website, buat website murah, website UMKM, landing page, toko online, jasa website profesional' : 'website development service, affordable website, business website, landing page, e-commerce development'}
      ogImage="/images/og-website.jpg"
      jsonLd={jsonLd}
    >
      <JasaServicePage locale={locale} waNumber={WA_NUMBER} waText={WA_TEXT} content={content} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});
