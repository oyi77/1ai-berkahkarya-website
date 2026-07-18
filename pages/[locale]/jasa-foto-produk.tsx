import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import JasaServicePage, { JasaServiceContent } from '@/components/JasaServicePage';

type Locale = 'id' | 'en';

interface Props { locale: string; }

const WA_NUMBER = '6285732740006';
const WA_TEXT = 'Halo BerkahKarya, saya tertarik dengan Jasa Foto Produk';

export default function JasaFotoProdukPage({ locale }: Props) {
  const isIndonesian = locale === 'id';
  const loc = locale as Locale;

  const content: JasaServiceContent = {
    heroTag: isIndonesian ? 'JASA FOTO PRODUK' : 'PRODUCT PHOTOGRAPHY',
    heroTitle: isIndonesian ? 'Biar Produk-mu' : 'Make Your Products',
    heroTitleEm: isIndonesian ? 'Keliatan Mahal' : 'Look Premium',
    heroSub: isIndonesian
      ? 'Foto produk berkualitas tinggi bikin calon pembeli langsung yakin. Dari small product sampai big items — hasilnya stunning tanpa ribet.'
      : 'High-quality product photos that make potential buyers confident instantly. From small items to big products — stunning results without the hassle.',
    heroCta: isIndonesian ? 'Konsultasi Gratis via WA' : 'Free Consultation via WA',
    heroCtaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,

    problemLabel: isIndonesian ? 'MASALAH' : 'PROBLEMS',
    problemTitle: isIndonesian ? 'Foto Produk' : 'Product Photos',
    problemTitleEm: isIndonesian ? 'Itu Penting Banget' : 'Matter More Than You Think',
    problems: [
      {
        icon: '\U0001F4F7',
        title: isIndonesian ? 'Foto Sendiri? Hasilnya Biasa Aja' : 'DIY Photos Look Average',
        desc: isIndonesian ? 'Cahaya kurang, background berantakan, produk kelihatan murah.' : 'Bad lighting, messy background, products look cheap.' },
      {
        icon: '\U0001F4B0',
        title: isIndonesian ? 'Sewa Fotografer Mahal & Ribet' : 'Hiring a Photographer is Expensive',
        desc: isIndonesian ? 'Sewa studio, alat, fotografer — budget membengkak sebelum foto jadi.' : 'Studio rental, equipment, photographer — costs add up fast.' },
      {
        icon: '\u23F3',
        title: isIndonesian ? 'Butuh Cepat, Hasilnya Molor' : 'Need Speed, Get Delay',
        desc: isIndonesian ? 'Proses lama bikin ketinggalan momen launching atau promo.' : 'Slow process makes you miss launch or promo opportunities.' },
    ],

    delivLabel: isIndonesian ? 'LAYANAN KAMI' : 'OUR SERVICES',
    delivTitle: isIndonesian ? 'Jenis Foto yang' : 'Types of Photos',
    delivTitleEm: isIndonesian ? 'Bisa Kami Buat' : 'We Can Create',
    deliverables: [
      { icon: '\U0001F4F8', title: isIndonesian ? 'Flat Lay' : 'Flat Lay', desc: isIndonesian ? 'Foto dari atas, rapi, cocok untuk produk kecil seperti aksesoris, kosmetik, makanan.' : 'Top-down shots, neat, perfect for small items like accessories, cosmetics, food.' },
      { icon: '\U0001F4F7', title: isIndonesian ? 'White Background' : 'White Background', desc: isIndonesian ? 'Foto clean dengan background putih — standar marketplace dan e-commerce.' : 'Clean white background shots — marketplace and e-commerce standard.' },
      { icon: '\U0001F3A8', title: isIndonesian ? 'Lifestyle' : 'Lifestyle', desc: isIndonesian ? 'Produk dipakai dalam konteks — bikin calon pembeli kebayang punya produk itu.' : 'Products in use context — helps buyers imagine owning the product.' },
      { icon: '\U0001F4A1', title: isIndonesian ? '360\u00B0 Product View' : '360\u00B0 Product View', desc: isIndonesian ? 'Foto dari semua sudut, interaktif, cocok untuk produk fashion dan elektronik.' : 'All-angle shots, interactive, great for fashion and electronics.' },
      { icon: '\U0001F4DD', title: isIndonesian ? 'Katalog & Lookbook' : 'Catalog & Lookbook', desc: isIndonesian ? 'Koleksi foto produk tersusun rapi untuk katalog digital atau cetak.' : 'Organized product photo collections for digital or print catalogs.' },
      { icon: '\U0001F31F', title: isIndonesian ? 'Creative Editorial' : 'Creative Editorial', desc: isIndonesian ? 'Foto artistik dengan konsep unik — bikin brand kamu standout.' : 'Artistic shots with unique concepts — make your brand stand out.' },
    ],

    processLabel: isIndonesian ? 'CARA KERJA' : 'HOW IT WORKS',
    processTitle: isIndonesian ? 'Proses' : 'Our',
    processTitleEm: isIndonesian ? '3 Langkah' : '3-Step Process',
    processSteps: [
      { num: '01', title: isIndonesian ? 'Konsultasi & Brief' : 'Consultation & Brief', desc: isIndonesian ? 'Kita diskusi konsep, angle, dan jumlah foto yang dibutuhkan.' : 'We discuss the concept, angles, and number of photos needed.' },
      { num: '02', title: isIndonesian ? 'Produksi Foto' : 'Photo Production', desc: isIndonesian ? 'Foto diambil dengan perlengkapan profesional, diedit, dan siap pakai.' : 'Photos taken with professional equipment, edited, and ready to use.' },
      { num: '03', title: isIndonesian ? 'Revisi & Delivery' : 'Revision & Delivery', desc: isIndonesian ? 'Revisi sesuai kebutuhan, deliver file resolusi tinggi.' : 'Revisions as needed, high-resolution files delivered.' },
    ],

    benefitLabel: isIndonesian ? 'KENAPA PILIH KAMI' : 'WHY CHOOSE US',
    benefitTitle: isIndonesian ? 'Keunggulan' : 'Advantages of',
    benefitTitleEm: isIndonesian ? 'Foto Produk' : 'Our Product Photos',
    benefits: [
      { icon: '\U0001F4F8', title: isIndonesian ? 'Kualitas Setara Studio' : 'Studio-Grade Quality', desc: isIndonesian ? 'Peralatan dan editing profesional untuk hasil maksimal.' : 'Professional equipment and editing for maximum results.' },
      { icon: '\u26A1', title: isIndonesian ? 'Proses Cepat' : 'Fast Turnaround', desc: isIndonesian ? 'Foto siap dalam 1-2 hari kerja.' : 'Photos ready within 1-2 business days.' },
      { icon: '\U0001F4B0', title: isIndonesian ? 'Harga Ramah' : 'Friendly Pricing', desc: isIndonesian ? 'Terjangkau dengan kualitas yang nggak murahan.' : 'Affordable without compromising quality.' },
      { icon: '\U0001F504', title: isIndonesian ? 'Revisi Puas' : 'Satisfaction Guaranteed', desc: isIndonesian ? 'Revisi sampai kamu benar-benar puas.' : 'Revisions until you\'re truly satisfied.' },
    ],

    pricingLabel: isIndonesian ? 'HARGA' : 'PRICING',
    pricingTitle: isIndonesian ? 'Pilih Paket' : 'Choose Your',
    pricingTitleEm: isIndonesian ? 'Foto Produk' : 'Photo Package',
    pricingSub: isIndonesian
      ? 'Harga per foto atau paket, tergantung jenis dan jumlah. Konsultasi gratis dulu!'
      : 'Per-photo or package pricing depending on type and quantity. Free consultation!',
    pricingNote: isIndonesian
      ? '*Harga tergantung jenis foto, jumlah item, dan tingkat editing.'
      : '*Pricing depends on photo type, number of items, and editing level.',
    plans: [
      {
        name: isIndonesian ? 'Paket Basic' : 'Basic Package',
        price: isIndonesian ? 'Rp 30K' : '$2',
        unit: isIndonesian ? '/foto' : '/photo',
        desc: isIndonesian ? 'Flat lay atau background putih, editing dasar.' : 'Flat lay or white background, basic editing.',
        items: [
          isIndonesian ? 'Flat lay / white bg' : 'Flat lay / white bg',
          isIndonesian ? 'Editing dasar (cahaya, warna)' : 'Basic editing (lighting, color)',
          isIndonesian ? 'Resolusi HD' : 'HD resolution',
          isIndonesian ? 'Format JPEG' : 'JPEG format',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Basic)')}`,
      },
      {
        name: isIndonesian ? 'Paket Standar' : 'Standard Package',
        price: isIndonesian ? 'Rp 75K' : '$5',
        unit: isIndonesian ? '/foto' : '/photo',
        desc: isIndonesian ? 'Foto lifestyle atau kreatif dengan editing penuh.' : 'Lifestyle or creative shots with full editing.',
        items: [
          isIndonesian ? 'Lifestyle / kreatif' : 'Lifestyle / creative',
          isIndonesian ? 'Editing penuh (retouch, background)' : 'Full editing (retouch, background)',
          isIndonesian ? 'Resolusi HD + Web' : 'HD + Web resolution',
          isIndonesian ? 'Format JPEG + PNG' : 'JPEG + PNG format',
        ],
        highlight: true,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Standar)')}`,
      },
      {
        name: isIndonesian ? 'Paket Premium' : 'Premium Package',
        price: isIndonesian ? 'Rp 150K' : '$10',
        unit: isIndonesian ? '/foto' : '/photo',
        desc: isIndonesian ? 'Foto 360\u00B0 atau editorial dengan efek spesial.' : '360\u00B0 or editorial shots with special effects.',
        items: [
          isIndonesian ? '360\u00B0 / editorial' : '360\u00B0 / editorial',
          isIndonesian ? 'Editing premium + efek' : 'Premium editing + effects',
          isIndonesian ? 'Resolusi full + Web' : 'Full + Web resolution',
          isIndonesian ? 'Format JPEG + PNG + TIFF' : 'JPEG + PNG + TIFF format',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT + ' (Premium)')}`,
      },
    ],

    usecaseLabel: isIndonesian ? 'COCOK UNTUK' : 'PERFECT FOR',
    usecaseTitle: isIndonesian ? 'Siapa Aja yang' : 'Who',
    usecaseTitleEm: isIndonesian ? 'Butuh Jasa Ini' : 'Needs This Service',
    useCases: [
      { title: isIndonesian ? 'Toko Online / Marketplace' : 'Online Stores / Marketplaces', desc: isIndonesian ? 'Foto produk untuk katalog Shopee, Tokopedia, Lazada.' : 'Product photos for Shopee, Tokopedia, Lazada catalogs.' },
      { title: isIndonesian ? 'Brand Fashion & Kosmetik' : 'Fashion & Cosmetic Brands', desc: isIndonesian ? 'Foto yang bikin produk fashion dan kosmetik keliatan premium.' : 'Photos that make fashion and cosmetic products look premium.' },
      { title: isIndonesian ? 'UMKM Makanan & Minuman' : 'Food & Beverage SMEs', desc: isIndonesian ? 'Foto makanan yang bikin orang laper dan pengen beli.' : 'Food photos that make people hungry and ready to buy.' },
      { title: isIndonesian ? 'Kreator & Reseller' : 'Creators & Resellers', desc: isIndonesian ? 'Konten produk berkualitas untuk feed dan katalog.' : 'Quality product content for feeds and catalogs.' },
    ],

    ctaLabel: isIndonesian ? 'SIAP MULAI?' : 'READY TO START?',
    ctaTitle: isIndonesian ? 'Yuk, Foto Produk-mu' : 'Let\'s Shoot Your',
    ctaTitleEm: isIndonesian ? 'Sekarang' : 'Products Now',
    ctaSub: isIndonesian
      ? 'Konsultasi gratis, kirim sample produk, kami fotoin — lihat hasilnya sebelum putuskan.'
      : 'Free consultation, send us a sample product, see the results before deciding.',
    ctaBtn: isIndonesian ? 'Konsultasi Gratis' : 'Free Consultation',
    ctaBtnLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,
    ctaSecondary: `/${locale}/jasa-foto-produk`,
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isIndonesian ? 'Jasa Foto Produk' : 'Product Photography Service',
    provider: { '@type': 'Organization', name: 'BerkahKarya' },
    description: isIndonesian
      ? 'Jasa foto produk profesional untuk e-commerce, brand fashion, dan UMKM. Flat lay, lifestyle, 360\u00B0.'
      : 'Professional product photography for e-commerce, fashion brands, and SMEs. Flat lay, lifestyle, 360\u00B0.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: '30000',
      highPrice: '150000',
    },
  };

  return (
    <Layout
      title={content.heroTitle + ' | BerkahKarya'}
      description={content.heroSub}
      keywords={isIndonesian ? 'jasa foto produk, foto produk murah, foto katalog, flat lay, foto e-commerce' : 'product photography, professional product photos, catalog photos, flat lay photography'}
      ogImage="/images/og-foto-produk.jpg"
      jsonLd={jsonLd}
    >
      <JasaServicePage locale={loc} pageName='jasa-foto-produk' content={content} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: params?.locale as string },
});
