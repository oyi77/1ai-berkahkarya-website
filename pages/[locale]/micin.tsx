import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
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

const content = {
  id: {
    meta: {
      title: 'MICIN — Market & Coin Intelligence Nexus | BerkahKarya',
      description: 'MICIN: dashboard intelijen kripto — whale tracking, smart money analysis, dan sinyal harian berbasis data on-chain real-time. Segera hadir.',
    },
    eyebrow: 'Segera Hadir',
    h1: 'MICIN',
    sub: 'Market Intelligence & Coin Intelligence Nexus — dashboard kripto dengan whale tracking, smart money analysis, dan sinyal harian berbasis data on-chain real-time.',
    cards: [
      { icon: '🐋', title: 'Whale Tracking', desc: 'Pantau akumulasi & distribusi wallet besar secara real-time sebelum pergerakan harga.' },
      { icon: '🧠', title: 'Smart Money', desc: 'Analisis perilaku wallet terverifikasi yang konsisten profitable di berbagai market cycle.' },
      { icon: '📈', title: 'Sinyal Harian', desc: 'Ringkasan sinyal entry/exit tiap pagi berbasis konfluensi data on-chain dan momentum.' },
    ],
    waitlistTitle: 'Gabung Waitlist',
    waitlistDesc: 'Dapatkan akses awal saat MICIN rilis. Tim kami akan menghubungi kamu lebih dulu.',
    cta: 'Hubungi Kami',
    back: '← Kembali ke Beranda',
  },
  en: {
    meta: {
      title: 'MICIN — Market & Coin Intelligence Nexus | BerkahKarya',
      description: 'MICIN: crypto intelligence dashboard — whale tracking, smart money analysis, and daily signals from real-time on-chain data. Coming soon.',
    },
    eyebrow: 'Coming Soon',
    h1: 'MICIN',
    sub: 'Market Intelligence & Coin Intelligence Nexus — a crypto dashboard with whale tracking, smart money analysis, and daily signals powered by real-time on-chain data.',
    cards: [
      { icon: '🐋', title: 'Whale Tracking', desc: 'Monitor accumulation & distribution of large wallets in real-time before price moves.' },
      { icon: '🧠', title: 'Smart Money', desc: 'Analyze verified wallets that stay consistently profitable across market cycles.' },
      { icon: '📈', title: 'Daily Signals', desc: 'Morning entry/exit signal summaries based on on-chain confluence and momentum.' },
    ],
    waitlistTitle: 'Join the Waitlist',
    waitlistDesc: 'Get early access when MICIN launches. Our team will reach out to you first.',
    cta: 'Contact Us',
    back: '← Back to Home',
  },
} as const;

const styles: Record<string, React.CSSProperties> = {
  wrap: { maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem', minHeight: '80vh' },
  eyebrow: { fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.75rem' },
  h1: { fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)', lineHeight: 1.1 },
  sub: { fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: 640 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' },
  card: { border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', background: 'var(--surface-2)' },
  cardIcon: { fontSize: '2rem', marginBottom: '0.75rem' },
  cardTitle: { fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text)' },
  cardDesc: { fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 },
  waitlist: { border: '1px solid var(--accent)', borderRadius: 12, padding: '1.75rem', background: 'var(--surface-2)' },
  waitlistTitle: { fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text)' },
  waitlistDesc: { fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.25rem' },
  back: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, marginBottom: '2rem' },
};

export default function MicinPage({ locale }: { locale: Locale }) {
  const d = content[locale];
  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      <div style={styles.wrap}>
        <Link href={`/${locale}`} style={styles.back}>{d.back}</Link>
        <p style={styles.eyebrow}>{d.eyebrow}</p>
        <h1 style={styles.h1}>{d.h1}</h1>
        <p style={styles.sub}>{d.sub}</p>
        <div style={styles.grid}>
          {d.cards.map((c) => (
            <div key={c.title} style={styles.card}>
              <div style={styles.cardIcon}>{c.icon}</div>
              <h3 style={styles.cardTitle}>{c.title}</h3>
              <p style={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
        <div style={styles.waitlist}>
          <h2 style={styles.waitlistTitle}>{d.waitlistTitle}</h2>
          <p style={styles.waitlistDesc}>{d.waitlistDesc}</p>
          <Link href={`/${locale}/contact`} className="btn btn--primary">{d.cta} →</Link>
        </div>
      </div>
    </Layout>
  );
}
