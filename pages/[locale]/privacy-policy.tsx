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
  meta: { title: 'Privacy Policy — BerkahKarya', description: 'Privacy Policy for BerkahKarya Digital Growth Agency. Learn how we collect, use, and protect your personal information.' },
  back: '← Back to Home',
  h1: 'Privacy Policy',
  updated: 'Last updated: June 23, 2026',
  sections: [
    {
      h2: '1. Information We Collect',
      body: 'When you use our website and services, we may collect:',
      list: [
        'Personal information: name, email address, phone number, billing details',
        'Account information: registration data, login history, API keys',
        'Usage data: pages visited, services used, API calls, device information',
        'Communications: emails, messages, support tickets, chat logs',
        'Payment information: transaction records, payment method details (processed by third-party gateways)',
      ],
    },
    {
      h2: '2. How We Use Your Information',
      body: 'We use your information to:',
      list: [
        'Provide and improve our services',
        'Process payments and subscriptions',
        'Communicate with you about your account and services',
        'Send service-related announcements and updates',
        'Provide customer support',
        'Analyze usage patterns to improve our AI tools',
        'Comply with legal obligations and prevent fraud',
      ],
    },
    {
      h2: '3. Data Sharing',
      body: 'We do not sell your personal information. We may share your information with:',
      list: [
        'Service providers: payment processors, email service providers, analytics platforms',
        'Legal authorities: when required by law or to protect our rights',
        'Business partners: if you explicitly consent to sharing for specific services',
      ],
    },
    {
      h2: '4. Data Security',
      body: 'We implement reasonable security measures to protect your data, including:',
      list: [
        'Encryption in transit (TLS) and at rest',
        'Access controls and authentication',
        'Regular security audits and monitoring',
        'Data minimization — we collect only what is necessary',
      ],
    },
    {
      h2: '5. Your Rights',
      body: 'Depending on your jurisdiction, you may have rights to:',
      list: [
        'Access, correct, or delete your personal data',
        'Receive a copy of your data in a portable format',
        'Object to processing of your data',
        'Withdraw consent for specific data uses',
      ],
    },
    {
      h2: '6. Data Retention',
      body: 'We retain your data for as long as necessary to provide services and comply with legal obligations. For inactive accounts, we may delete data after 90 days of inactivity.',
    },
    {
      h2: '7. International Data Transfers',
      body: 'Your data may be transferred to and processed in countries outside your home country, including Indonesia. We ensure adequate data protection safeguards are in place for such transfers.',
    },
    {
      h2: '8. Cookies and Tracking Technologies',
      body: 'We use cookies and similar technologies to:',
      list: [
        'Maintain session state',
        'Analyze website traffic',
        'Personalize your experience',
        'Serve relevant advertising',
      ],
    },
    {
      h2: '9. Changes to This Policy',
      body: 'We may update this Privacy Policy. Changes will be effective immediately upon posting. We encourage you to review this policy periodically.',
    },
    {
      h2: '10. Contact Us',
      body: 'For privacy-related questions, contact:',
      list: ['Email: privacy@berkahkarya.com', 'WhatsApp: +62-857-3274-0006'],
    },
  ],
};

const id = {
  meta: { title: 'Kebijakan Privasi — BerkahKarya', description: 'Kebijakan Privasi untuk BerkahKarya Digital Growth Agency. Pelajari cara kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.' },
  back: '← Kembali ke Beranda',
  h1: 'Kebijakan Privasi',
  updated: 'Terakhir diperbarui: 23 Juni 2026',
  sections: [
    {
      h2: '1. Informasi yang Kami Kumpulkan',
      body: 'Saat Anda menggunakan website dan layanan kami, kami dapat mengumpulkan:',
      list: [
        'Informasi pribadi: nama, email, nomor telepon, detail pembayaran',
        'Informasi akun: data registrasi, riwayat login, kunci API',
        'Data penggunaan: halaman yang dikunjungi, layanan yang digunakan, panggilan API, informasi perangkat',
        'Komunikasi: email, pesan, tiket dukungan, log obrolan',
        'Informasi pembayaran: catatan transaksi, detail metode pembayaran (diproses oleh gateway pihak ketiga)',
      ],
    },
    {
      h2: '2. Cara Kami Menggunakan Informasi Anda',
      body: 'Kami menggunakan informasi Anda untuk:',
      list: [
        'Menyediakan dan meningkatkan layanan',
        'Memproses pembayaran dan langganan',
        'Berkomunikasi tentang akun dan layanan',
        'Mengirim pengumuman dan pembaruan',
        'Memberikan dukungan pelanggan',
        'Menganalisis penggunaan untuk meningkatkan alat AI',
        'Mematuhi kewajiban hukum dan mencegah penipuan',
      ],
    },
    {
      h2: '3. Berbagi Data',
      body: 'Kami tidak menjual informasi pribadi Anda. Kami dapat berbagi dengan penyedia layanan, otoritas hukum (jika diwajibkan), dan mitra bisnis (dengan persetujuan Anda).',
      list: [
        'Penyedia layanan: pemroses pembayaran, penyedia email, platform analitik',
        'Otoritas hukum: saat diwajibkan oleh hukum atau untuk melindungi hak kami',
        'Mitra bisnis: jika Anda secara eksplisit menyetujui berbagi untuk layanan tertentu',
      ],
    },
    {
      h2: '4. Keamanan Data',
      body: 'Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data Anda, termasuk:',
      list: [
        'Enkripsi dalam transit (TLS) dan saat diam',
        'Kontrol akses dan autentikasi',
        'Audit dan pemantauan keamanan berkala',
        'Minimisasi data — hanya mengumpulkan yang diperlukan',
      ],
    },
    {
      h2: '5. Hak Anda',
      body: 'Tergantung pada yurisdiksi Anda, Anda mungkin memiliki hak untuk:',
      list: [
        'Mengakses, memperbaiki, atau menghapus data pribadi',
        'Menerima salinan data dalam format yang dapat dibawa',
        'Mengajukan keberatan terhadap pemrosesan data',
        'Mencabut persetujuan untuk penggunaan data tertentu',
      ],
    },
    {
      h2: '6. Retensi Data',
      body: 'Kami menyimpan data Anda selama diperlukan untuk layanan dan kewajiban hukum. Akun tidak aktif dapat dihapus setelah 90 hari tidak aktif.',
    },
    {
      h2: '7. Transfer Data Internasional',
      body: 'Data Anda mungkin ditransfer ke luar negara asal, termasuk Indonesia. Kami memastikan perlindungan data yang memadai.',
    },
    {
      h2: '8. Cookie dan Pelacakan',
      body: 'Kami menggunakan cookie untuk mempertahankan sesi, menganalisis lalu lintas, mempersonalisasi pengalaman, dan menyajikan iklan yang relevan.',
      list: [
        'Mempertahankan status sesi',
        'Menganalisis lalu lintas situs web',
        'Memersonalisasi pengalaman Anda',
        'Menyajikan iklan yang relevan',
      ],
    },
    {
      h2: '9. Perubahan Kebijakan',
      body: 'Kami dapat memperbarui kebijakan ini. Perubahan berlaku segera setelah diposting. Kami sarankan Anda meninjau secara berkala.',
    },
    {
      h2: '10. Hubungi Kami',
      body: 'Untuk pertanyaan terkait privasi, hubungi:',
      list: ['Email: privacy@berkahkarya.com', 'WhatsApp: +62-857-3274-0006'],
    },
  ],
};

export default function PrivacyPolicyPage({ locale }: { locale: Locale }) {
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
          <Link href={`/${locale}/terms-of-service`} style={{ color: '#666', textDecoration: 'none' }}>
            {locale === 'id' ? 'Ketentuan Layanan' : 'Terms of Service'}
          </Link>
          <Link href={`/${otherLocale}/privacy-policy`} style={{ color: '#007bff', textDecoration: 'none' }}>
            {locale === 'id' ? 'English Version' : 'Versi Bahasa Indonesia'}
          </Link>
        </div>
      </div>
    </Layout>
  );
}
