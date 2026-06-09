import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import CTASection from '@/components/CTASection';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function DaftarPage({ locale }: { locale: Locale }) {
  const isId = locale === 'id';
  const t = {
    title: isId ? 'Daftar Belajar AI Academy' : 'Enroll — AI Academy',
    desc: isId ? 'Daftar sekarang dan mulai perjalanan AI lo. Pembayaran via Tripay — QRIS, VA, E-Wallet.' : 'Enroll now and start your AI journey. Payment via Tripay — QRIS, VA, E-Wallet.',
    h1: isId ? 'Siap Mulai Belajar? 🚀' : 'Ready to Start Learning? 🚀',
    p: isId
      ? 'Pilih paket di bawah, bayar via Tripay, langsung akses materi. Atau chat Paijo buat konsultasi gratis.'
      : 'Pick a plan below, pay via Tripay, get instant access. Or chat Paijo for free consultation.',
    back: isId ? '← Lihat Kurikulum' : '← View Curriculum',
    backHref: `/${locale}/belajar/kurikulum`,
    ctaTitle: isId ? 'Chat Paijo di Telegram 💬' : '💬 Chat Paijo on Telegram',
    ctaDesc: isId
      ? 'Masih ragu? Diskusi dulu gratis. Paijo senang ngobrolin AI, trading, atau affiliate marketing.'
      : 'Still unsure? Free consultation. Paijo loves discussing AI, trading, or affiliate marketing.',
  };

  return (
    <Layout title={t.title} description={t.desc}>
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <a href={`/${locale}/belajar/kurikulum`} style={{ color: 'var(--teal-primary)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-block', marginBottom: '1.5rem' }}>{t.back}</a>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>{t.h1}</h1>
          <p style={{ color: 'var(--text-white-60)', fontSize: '1.1rem', marginBottom: '2rem' }}>{t.p}</p>
          <a href={`/${locale}/belajarai#pricing`} style={{ display: 'inline-block', padding: '1rem 2.5rem', background: 'linear-gradient(135deg, var(--teal-primary), var(--violet-light))', color: '#fff', borderRadius: '12px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
            {isId ? '💰 Lihat Paket & Harga' : '💰 View Plans & Pricing'}
          </a>
        </div>
      </section>

      {/* How It Works Simplified */}
      <section style={{ padding: '4rem 0', background: 'var(--dark-secondary)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '2.5rem' }}>
            {isId ? 'Cara Daftar:' : 'How to Enroll:'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: '1', title: isId ? 'Pilih Paket' : 'Choose a Plan', desc: isId ? 'Pilih paket sesuai kebutuhan. Dari Video Course sampai Platinum Pass.' : 'Pick the package that fits you — from Video Course to Platinum Pass.' },
              { num: '2', title: isId ? 'Bayar via Tripay' : 'Pay via Tripay', desc: isId ? 'QRIS, Virtual Account, E-Wallet, atau Alfamart. Pembayaran otomatis terverifikasi.' : 'QRIS, Virtual Account, E-Wallet, or Alfamart. Auto-verified payment.' },
              { num: '3', title: isId ? 'Akses Materi' : 'Access Materials', desc: isId ? 'Langsung akses LMS. Video, PDF, studi kasus. Belajar kapan aja, di mana aja.' : 'Instant LMS access. Videos, PDFs, case studies. Learn anytime, anywhere.' },
              { num: '4', title: isId ? 'Join Komunitas' : 'Join Community', desc: isId ? 'Akses grup Telegram eksklusif. Tanya jawab dengan Paijo & sesama siswa.' : 'Access exclusive Telegram group. Q&A with Paijo & fellow students.' },
            ].map((step) => (
              <div key={step.num} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--teal-primary), var(--violet-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', margin: '0 auto 0.75rem', color: '#000' }}>{step.num}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-white-60)', fontSize: '0.85rem', lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t.ctaTitle} description={t.ctaDesc} button={{ text: '✈️ @codergaboets', href: 'https://t.me/codergaboets' }} />
    </Layout>
  );
}
