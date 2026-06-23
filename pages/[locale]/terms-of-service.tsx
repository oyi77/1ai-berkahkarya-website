import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { locale: 'id' } },
    { params: { locale: 'en' } },
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

const en = {
  meta: { title: 'Terms of Service — BerkahKarya', description: 'Terms of Service for BerkahKarya Digital Growth Agency. Understand your rights and obligations when using our AI-powered digital services.' },
  back: '← Back to Home',
  h1: 'Terms of Service',
  updated: 'Last updated: June 23, 2026',
  sections: [
    {
      h2: '1. Introduction',
      body: 'Welcome to BerkahKarya ("we," "our," or "us"). By accessing or using our website and services at berkahkarya.org, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
    },
    {
      h2: '2. Services',
      body: 'BerkahKarya provides AI-powered digital growth agency services, including but not limited to:',
      list: [
        'AI Video Studio — AI-driven video content creation',
        'AdForge AI — advertising campaign automation',
        'AI Agent Pro — autonomous AI agents for business',
        'OmniRoute — LLM API gateway and routing',
        'Social media management and automation',
        'E-commerce optimization (Shopee, Tokopedia, TikTok Shop)',
        'Trading algorithms and market analysis tools',
      ],
    },
    {
      h2: '3. User Obligations',
      body: 'By using our services, you agree to:',
      list: [
        'Provide accurate and complete information when registering or purchasing.',
        'Use our services only for lawful purposes and in compliance with applicable laws.',
        'Not misuse our automated tools, scrape our data, or attempt to reverse-engineer our systems.',
        'Respect intellectual property rights of BerkahKarya and third parties.',
        'Maintain the confidentiality of your account credentials.',
      ],
    },
    {
      h2: '4. Payment & Refunds',
      body: '',
      list: [
        'Payment: All services must be paid in advance unless otherwise agreed in writing. We accept bank transfers and major digital payment methods via our integrated payment gateways.',
        'Refunds: Due to the nature of digital services and custom AI development, we generally do not offer refunds once work has commenced. Exceptions are made solely at our discretion if we fail to deliver the agreed scope.',
        'Subscription services: recurring billing with 7-day cancellation notice required.',
      ],
    },
    {
      h2: '5. Intellectual Property',
      body: '',
      list: [
        'Client Ownership: Upon full payment, the client retains ownership of final deliverables produced specifically for them.',
        'Agency Rights: BerkahKarya retains the right to use the work in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) is signed. We retain full ownership of our underlying AI tools, scripts, methodologies, and software.',
      ],
    },
    {
      h2: '6. Limitation of Liability',
      body: 'To the fullest extent permitted by applicable law, BerkahKarya shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunity, arising out of or in connection with the use of our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.',
    },
    {
      h2: '7. AI Services Disclaimer',
      body: 'Our AI-powered tools provide automated outputs based on machine learning models. While we strive for accuracy, AI-generated content may contain errors, hallucinations, or inaccuracies. You are responsible for reviewing and validating AI outputs before using them in your business or publishing them publicly.',
    },
    {
      h2: '8. Governing Law',
      body: 'These terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Surabaya, Indonesia.',
    },
    {
      h2: '9. Changes to Terms',
      body: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service after changes constitutes acceptance of the modified terms.',
    },
    {
      h2: '10. Contact Us',
      body: 'For any questions regarding these Terms, please contact us at:',
      list: ['Email: legal@berkahkarya.com', 'WhatsApp: +62-857-3274-0006'],
    },
  ],
};

const id = {
  meta: { title: 'Ketentuan Layanan — BerkahKarya', description: 'Ketentuan Layanan untuk BerkahKarya Digital Growth Agency. Pahami hak dan kewajiban Anda saat menggunakan layanan digital berbasis AI kami.' },
  back: '← Kembali ke Beranda',
  h1: 'Ketentuan Layanan',
  updated: 'Terakhir diperbarui: 23 Juni 2026',
  sections: [
    {
      h2: '1. Pendahuluan',
      body: 'Selamat datang di BerkahKarya ("kami"). Dengan mengakses atau menggunakan website dan layanan kami di berkahkarya.org, Anda menyetujui Ketentuan Layanan ini. Jika Anda tidak setuju, mohon tidak menggunakan layanan kami.',
    },
    {
      h2: '2. Layanan',
      body: 'BerkahKarya menyediakan layanan agensi pertumbuhan digital berbasis AI, termasuk namun tidak terbatas pada:',
      list: [
        'AI Video Studio — pembuatan konten video dengan AI',
        'AdForge AI — otomatisasi kampanye periklanan',
        'AI Agent Pro — agen AI otonom untuk bisnis',
        'OmniRoute — gateway dan routing API LLM',
        'Manajemen dan otomatisasi media sosial',
        'Optimasi e-commerce (Shopee, Tokopedia, TikTok Shop)',
        'Algoritma trading dan alat analisis pasar',
      ],
    },
    {
      h2: '3. Kewajiban Pengguna',
      body: 'Dengan menggunakan layanan kami, Anda setuju untuk:',
      list: [
        'Memberikan informasi yang akurat dan lengkap saat mendaftar atau membeli.',
        'Menggunakan layanan kami hanya untuk tujuan yang sah sesuai hukum yang berlaku.',
        'Tidak menyalahgunakan alat otomatis kami, mengikis data, atau merekayasa balik sistem kami.',
        'Menghormati hak kekayaan intelektual BerkahKarya dan pihak ketiga.',
        'Menjaga kerahasiaan kredensial akun Anda.',
      ],
    },
    {
      h2: '4. Pembayaran & Pengembalian Dana',
      body: '',
      list: [
        'Pembayaran: Semua layanan harus dibayar di muka kecuali disepakati lain secara tertulis. Kami menerima transfer bank dan metode pembayaran digital utama melalui gateway pembayaran terintegrasi.',
        'Pengembalian Dana: Karena sifat layanan digital dan pengembangan AI kustom, kami umumnya tidak memberikan pengembalian dana setelah pekerjaan dimulai. Pengecualian dibuat atas kebijakan kami jika kami gagal memberikan ruang lingkup yang disepakati.',
        'Layanan berlangganan: penagihan berulang dengan pemberitahuan pembatalan 7 hari.',
      ],
    },
    {
      h2: '5. Kekayaan Intelektual',
      body: '',
      list: [
        'Kepemilikan Klien: Setelah pembayaran penuh, klien memiliki hasil akhir yang diproduksi khusus untuk mereka.',
        'Hak Agensi: BerkahKarya berhak menggunakan pekerjaan dalam portofolio dan materi pemasaran kami kecuali Perjanjian Kerahasiaan (NDA) ditandatangani. Kami mempertahankan kepemilikan penuh atas alat AI, skrip, metodologi, dan perangkat lunak dasar kami.',
      ],
    },
    {
      h2: '6. Batasan Tanggung Jawab',
      body: 'Sejauh yang diizinkan oleh hukum yang berlaku, BerkahKarya tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, atau punitif, termasuk kehilangan keuntungan, data, atau peluang bisnis, yang timbul dari atau sehubungan dengan penggunaan layanan kami. Total tanggung jawab kami untuk setiap klaim tidak boleh melebihi jumlah yang dibayarkan oleh Anda untuk layanan spesifik yang menimbulkan klaim tersebut.',
    },
    {
      h2: '7. Penyangkalan Layanan AI',
      body: 'Alat bertenaga AI kami memberikan output otomatis berdasarkan model machine learning. Meskipun kami berusaha untuk akurat, konten yang dihasilkan AI mungkin mengandung kesalahan, halusinasi, atau ketidakakuratan. Anda bertanggung jawab untuk meninjau dan memvalidasi output AI sebelum menggunakannya dalam bisnis Anda atau mempublikasikannya.',
    },
    {
      h2: '8. Hukum yang Berlaku',
      body: 'Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul berdasarkan ketentuan ini akan tunduk pada yurisdiksi eksklusif pengadilan di Surabaya, Indonesia.',
    },
    {
      h2: '9. Perubahan Ketentuan',
      body: 'Kami berhak mengubah ketentuan ini kapan saja. Perubahan akan berlaku efektif segera setelah diposting di situs web. Penggunaan layanan Anda setelah perubahan merupakan penerimaan terhadap ketentuan yang dimodifikasi.',
    },
    {
      h2: '10. Hubungi Kami',
      body: 'Untuk pertanyaan mengenai Ketentuan ini, silakan hubungi kami di:',
      list: ['Email: legal@berkahkarya.com', 'WhatsApp: +62-857-3274-0006'],
    },
  ],
};

export default function TermsOfServicePage({ locale }: { locale: Locale }) {
  const router = useRouter();
  const d = locale === 'en' ? en : id;
  const otherLocale = locale === 'en' ? 'id' : 'en';

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '2rem 1.5rem',
        minHeight: '80vh',
      }}>
        <Link
          href={`/${locale}`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#007bff', textDecoration: 'none', fontWeight: 500, marginBottom: '2rem' }}
        >
          {d.back}
        </Link>

        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a1a1a' }}>{d.h1}</h1>
        <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '2rem' }}>{d.updated}</p>

        {d.sections.map((s, i) => (
          <div key={i}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem', color: '#1a1a1a' }}>{s.h2}</h2>
            {s.body && <p style={{ marginBottom: '1rem', color: '#555', lineHeight: 1.6 }}>{s.body}</p>}
            {s.list && (
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                {s.list.map((li, j) => (
                  <li key={j} style={{ marginBottom: '0.5rem', color: '#555', lineHeight: 1.6 }}>{li}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #e0e0e0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href={`/${locale}/privacy-policy`} style={{ color: '#007bff', textDecoration: 'none' }}>
            {locale === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}
          </Link>
          <Link href={`/${otherLocale}/terms-of-service`} style={{ color: '#666', textDecoration: 'none' }}>
            {locale === 'id' ? 'English Version' : 'Versi Bahasa Indonesia'}
          </Link>
        </div>
      </div>
    </Layout>
  );
}
