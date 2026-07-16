import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import JasaServicePage, { JasaServiceContent } from '@/components/JasaServicePage';

type Locale = 'id' | 'en';

interface Props { locale: string; }

const WA_NUMBER = '6285732740006';
const WA_TEXT = 'Halo%20BerkahKarya%2C%20saya%20tertarik%20dengan%20Algorithmic%20Trading%20Bot';

export default function AlgorithmicTradingPage({ locale }: Props) {
  const isIndonesian = locale === 'id';
  const loc = locale as Locale;

  const content: JasaServiceContent = {
    heroTag: isIndonesian ? 'ALGORITHMIC TRADING BOT' : 'ALGORITHMIC TRADING BOT',
    heroTitle: isIndonesian ? 'Trading Otomatis Pakai' : 'Automated Trading with',
    heroTitleEm: isIndonesian ? 'AI & Data' : 'AI & Data',
    heroSub: isIndonesian
      ? 'Sinyal entry/exit otomatis berbasis AI untuk XAUUSD, Forex, dan Crypto. Auto-execution bot via exchange API. Tanpa emosi, tanpa begadang.'
      : 'AI-powered automated entry/exit signals for XAUUSD, Forex, and Crypto. Auto-execution bot via exchange API. No emotion, no all-nighters.',
    heroCta: isIndonesian ? 'Konsultasi Gratis via WA' : 'Free Consultation via WA',
    heroCtaLink: `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`,

    problemLabel: isIndonesian ? 'MASALAH' : 'PROBLEMS',
    problemTitle: isIndonesian ? 'Kenapa Trader' : 'Why Most Traders',
    problemTitleEm: isIndonesian ? 'Gagal Konsisten' : 'Fail to Stay Consistent',
    problems: [
      {
        icon: '\uD83D\uDE24',
        title: isIndonesian ? 'Emosi Merusak Strategi' : 'Emotion Ruins Strategy',
        desc: isIndonesian ? 'FOMO, panik, over-trading. Emosi selalu menang lawan logika. Takut bikin exit kepagian, serakah bikin hold kelamaan.' : 'FOMO, panic, over-trading. Emotions always beat logic. Fear makes you exit too early, greed makes you hold too long.' },
      {
        icon: '\uD83D\uDE34',
        title: isIndonesian ? 'Begadang Staring Chart' : 'All-Night Chart Staring',
        desc: isIndonesian ? 'Capek staring di chart berjam-jam. Hidup jadi budak chart. Jam tidur berantakan, social life hancur.' : 'Exhausted from staring at charts for hours. Your screen becomes your prison. Sleep schedule ruined, social life destroyed.' },
      {
        icon: '\uD83C\uDFB2',
        title: isIndonesian ? 'Strategi Belum Tervalidasi' : 'Unvalidated Strategies',
        desc: isIndonesian ? 'Copy strategi dari YouTube/grup tanpa backtest proper = judi, bukan trading. Lu gak tau apakah strateginya beneran works.' : 'Copying strategies from YouTube/Telegram groups without proper backtesting is gambling, not trading. You don\'t know if it actually works.' },
    ],

    delivLabel: isIndonesian ? 'LAYANAN KAMI' : 'OUR SERVICES',
    delivTitle: isIndonesian ? 'Layanan' : 'Our',
    delivTitleEm: isIndonesian ? 'Trading Bot' : 'Trading Bot Services',
    deliverables: [
      { icon: '\uD83D\uDCE1', title: isIndonesian ? 'Signal Real-time via Telegram' : 'Real-time Signals via Telegram', desc: isIndonesian ? 'Sinyal entry/exit otomatis dikirim langsung ke Telegram. Lengkap dengan SL, TP, dan risk:reward ratio. Tinggal eksekusi.' : 'Automated entry/exit signals sent directly to Telegram. Complete with SL, TP, and risk:reward ratio. Just execute.' },
      { icon: '\uD83E\uDD16', title: isIndonesian ? 'Auto Execution Bot' : 'Auto Execution Bot', desc: isIndonesian ? 'Bot trading otomatis terhubung ke exchange via API trading-only (tanpa akses withdrawal). Eksekusi sinyal 24/7 tanpa pantau.' : 'Automated trading bot connected to exchange via trading-only API (no withdrawal access). Executes signals 24/7 without monitoring.' },
      { icon: '\uD83D\uDCCA', title: isIndonesian ? 'Backtest Reports' : 'Backtest Reports', desc: isIndonesian ? 'Setiap strategi divalidasi dengan data historis. Laporan lengkap: win rate, drawdown, profit factor, Sharpe ratio.' : 'Every strategy validated with historical data. Complete reports: win rate, drawdown, profit factor, Sharpe ratio.' },
      { icon: '\uD83D\uDEE1\uFE0F', title: isIndonesian ? 'Risk Management Tools' : 'Risk Management Tools', desc: isIndonesian ? 'Stop-loss terprogram, trailing stop, position sizing otomatis. Modal terlindungi, profit optimal.' : 'Programmed stop-loss, trailing stop, automatic position sizing. Capital protected, profits optimized.' },
      { icon: '\uD83D\uDD04', title: isIndonesian ? 'Multi-Exchange Support' : 'Multi-Exchange Support', desc: isIndonesian ? 'Support Binance, Bybit, OKX, dan exchange utama lainnya. Satu bot untuk semua akun trading Anda.' : 'Supports Binance, Bybit, OKX, and other major exchanges. One bot for all your trading accounts.' },
      { icon: '\uD83D\uDCC8', title: isIndonesian ? 'Performance Dashboard' : 'Performance Dashboard', desc: isIndonesian ? 'Pantau performa real-time: P&L harian, drawdown, jumlah sinyal, dan metrik kunci lainnya dalam satu dashboard.' : 'Real-time performance monitoring: daily P&L, drawdown, signal count, and other key metrics in one dashboard.' },
    ],

    processLabel: isIndonesian ? 'CARA KERJA' : 'HOW IT WORKS',
    processTitle: isIndonesian ? 'Mulai Dalam' : 'Start in',
    processTitleEm: isIndonesian ? '3 Langkah' : '3 Steps',
    processSteps: [
      { num: '01', title: isIndonesian ? 'Hubungkan Exchange API' : 'Connect Exchange API', desc: isIndonesian ? 'Buat API key di exchange Anda (Binance/Bybit/OKX) — mode trading-only, tanpa akses withdrawal. Dana tetap aman di exchange.' : 'Create an API key on your exchange (Binance/Bybit/OKX) — trading-only mode, no withdrawal access. Funds stay safe on the exchange.' },
      { num: '02', title: isIndonesian ? 'Aktifkan Bot Trading' : 'Activate Trading Bot', desc: isIndonesian ? 'Pilih strategi, set risk parameter (lot size, SL/TP), dan aktifkan bot. Bot mulai memonitor pasar dan eksekusi sinyal otomatis.' : 'Choose strategy, set risk parameters (lot size, SL/TP), and activate the bot. Bot starts monitoring markets and executing signals automatically.' },
      { num: '03', title: isIndonesian ? 'Monitor & Optimasi' : 'Monitor & Optimize', desc: isIndonesian ? 'Pantau performa via dashboard. Terima notifikasi real-time. Optimasi strategi berdasarkan data — bukan feeling.' : 'Monitor performance via dashboard. Receive real-time notifications. Optimize strategies based on data — not feelings.' },
    ],

    benefitLabel: isIndonesian ? 'KENAPA PILIH KAMI' : 'WHY CHOOSE US',
    benefitTitle: isIndonesian ? 'Keunggulan' : 'Advantages of',
    benefitTitleEm: isIndonesian ? 'Trading Bot Kami' : 'Our Trading Bot',
    benefits: [
      { icon: '\uD83D\uDD04', title: isIndonesian ? '24/7 Non-stop Trading' : '24/7 Non-stop Trading', desc: isIndonesian ? 'Bot bekerja 24 jam sehari, 7 hari seminggu. Tidak perlu begadang, tidak perlu staring chart. Trading tetap jalan sambil Anda tidur.' : 'Bot works 24 hours a day, 7 days a week. No need for all-nighters, no chart staring required. Trading runs while you sleep.' },
      { icon: '\uD83D\uDCAA', title: isIndonesian ? 'Tanpa Emosi' : 'No Emotion Trading', desc: isIndonesian ? 'Bot mengeksekusi strategi secara disiplin — tanpa FOMO, tanpa panik, tanpa ragu. Setiap keputusan berdasarkan data dan algoritma.' : 'Bot executes strategies with discipline — no FOMO, no panic, no hesitation. Every decision based on data and algorithms.' },
      { icon: '\u2705', title: isIndonesian ? 'Strategi Tervalidasi' : 'Backtested Strategies', desc: isIndonesian ? 'Semua strategi sudah diuji dengan data historis sebelum live. Tidak ada guesswork, tidak ada gambling. Performance terukur dan transparan.' : 'All strategies are tested with historical data before going live. No guesswork, no gambling. Measurable and transparent performance.' },
      { icon: '\uD83D\uDEE1\uFE0F', title: isIndonesian ? 'Modal Terlindungi' : 'Capital Protected', desc: isIndonesian ? 'Built-in risk management: stop-loss, trailing stop, position sizing. Bot menggunakan API trading-only tanpa akses withdrawal.' : 'Built-in risk management: stop-loss, trailing stop, position sizing. Bot uses trading-only API with no withdrawal access.' },
    ],

    pricingLabel: isIndonesian ? 'HARGA' : 'PRICING',
    pricingTitle: isIndonesian ? 'Pilih Paket' : 'Choose Your',
    pricingTitleEm: isIndonesian ? 'Trading Bot' : 'Trading Bot Package',
    pricingSub: isIndonesian
      ? 'Langganan bulanan, bisa stop kapan saja. Semua paket include support Telegram 24/7.'
      : 'Monthly subscription, cancel anytime. All packages include 24/7 Telegram support.',
    pricingNote: isIndonesian
      ? '*Harga belum termasuk biaya trading (spread/komisi exchange). Garansi 7 hari uang kembali.'
      : '*Pricing excludes trading costs (exchange spreads/commissions). 7-day money-back guarantee.',
    plans: [
      {
        name: isIndonesian ? 'Signal Channel' : 'Signal Channel',
        price: isIndonesian ? 'Rp 150rb' : '$10',
        unit: isIndonesian ? '/bln' : '/mo',
        desc: isIndonesian ? 'Sinyal real-time via Telegram untuk XAUUSD, Forex & Crypto.' : 'Real-time signals via Telegram for XAUUSD, Forex & Crypto.',
        items: [
          isIndonesian ? 'Sinyal entry/exit real-time' : 'Real-time entry/exit signals',
          isIndonesian ? 'XAUUSD + Forex + Crypto' : 'XAUUSD + Forex + Crypto',
          isIndonesian ? 'SL, TP, risk:reward ratio' : 'SL, TP, risk:reward ratio',
          isIndonesian ? 'Analisis pasar harian' : 'Daily market analysis',
          isIndonesian ? 'Support Telegram 24/7' : '24/7 Telegram support',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}%20(Signal%20Channel)`,
      },
      {
        name: isIndonesian ? 'Auto Bot' : 'Auto Bot',
        price: isIndonesian ? 'Rp 350rb' : '$23',
        unit: isIndonesian ? '/bln' : '/mo',
        desc: isIndonesian ? 'Eksekusi otomatis via exchange API. Set & forget.' : 'Automatic execution via exchange API. Set & forget.',
        items: [
          isIndonesian ? 'Semua dari Signal Channel' : 'Everything in Signal Channel',
          isIndonesian ? 'Eksekusi otomatis 24/7' : '24/7 automatic execution',
          isIndonesian ? 'Binance, Bybit, OKX' : 'Binance, Bybit, OKX',
          isIndonesian ? 'Risk management otomatis' : 'Automatic risk management',
          isIndonesian ? 'Performance dashboard' : 'Performance dashboard',
        ],
        highlight: true,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}%20(Auto%20Bot)`,
      },
      {
        name: isIndonesian ? 'Enterprise' : 'Enterprise',
        price: isIndonesian ? 'Rp 750rb' : '$50',
        unit: isIndonesian ? '/bln' : '/mo',
        desc: isIndonesian ? 'Dedicated bot + custom strategy + priority support.' : 'Dedicated bot + custom strategy + priority support.',
        items: [
          isIndonesian ? 'Semua dari Auto Bot' : 'Everything in Auto Bot',
          isIndonesian ? 'Custom strategy development' : 'Custom strategy development',
          isIndonesian ? 'Dedicated bot instance' : 'Dedicated bot instance',
          isIndonesian ? 'Multi-account support' : 'Multi-account support',
          isIndonesian ? 'Priority support 24/7' : '24/7 priority support',
        ],
        highlight: false,
        cta: isIndonesian ? 'Pilih Paket Ini' : 'Choose This Plan',
        ctaLink: `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}%20(Enterprise)`,
      },
    ],

    usecaseLabel: isIndonesian ? 'COCOK UNTUK' : 'PERFECT FOR',
    usecaseTitle: isIndonesian ? 'Siapa Aja yang' : 'Who',
    usecaseTitleEm: isIndonesian ? 'Butuh Jasa Ini' : 'Needs This Service',
    useCases: [
      { title: isIndonesian ? 'Trader Pemula' : 'Beginner Traders', desc: isIndonesian ? 'Baru mulai trading? Dapatkan sinyal real-time tanpa harus analisis rumit. Belajar sambil jalan.' : 'New to trading? Get real-time signals without complex analysis. Learn as you go.' },
      { title: isIndonesian ? 'Trader Sibuk' : 'Busy Traders', desc: isIndonesian ? 'Punya pekerjaan full-time tapi tetap ingin trading? Bot kami yang kerja, Anda tinggal terima profit.' : 'Have a full-time job but still want to trade? Let our bot work while you earn.' },
      { title: isIndonesian ? 'Investor Institusi' : 'Institutional Investors', desc: isIndonesian ? 'Butuh bot kustom dengan strategi spesifik? Kami develop dan maintain untuk kebutuhan Anda.' : 'Need a custom bot with specific strategies? We develop and maintain for your needs.' },
    ],

    ctaLabel: isIndonesian ? 'SIAP MULAI?' : 'READY TO START?',
    ctaTitle: isIndonesian ? 'Stop Trading Pakai Feeling,' : 'Stop Trading on Feelings,',
    ctaTitleEm: isIndonesian ? 'Mulai Pakai Data' : 'Start Using Data',
    ctaSub: isIndonesian
      ? 'Konsultasi gratis — tim kami bantu pilih paket yang sesuai dengan modal dan target trading Anda.'
      : 'Free consultation — our team helps you choose the right package for your capital and trading goals.',
    ctaBtn: isIndonesian ? 'Konsultasi Gratis' : 'Free Consultation',
    ctaBtnLink: `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`,
    ctaSecondary: '/id/algorithmic-trading',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isIndonesian ? 'Algorithmic Trading Bot' : 'Algorithmic Trading Bot',
    provider: { '@type': 'Organization', name: 'BerkahKarya' },
    description: isIndonesian
      ? 'Sinyal trading otomatis berbasis AI dan eksekusi bot untuk XAUUSD, Forex, dan Crypto.'
      : 'AI-powered automated trading signals and bot execution for XAUUSD, Forex, and Crypto.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: '150000',
      highPrice: '750000',
    },
  };

  return (
    <Layout
      title={`${content.heroTag} | BerkahKarya`}
      description={content.heroSub}
      keywords={isIndonesian
        ? 'algorithmic trading, trading bot, sinyal trading, trading otomatis, bot crypto, trading AI'
        : 'algorithmic trading, trading bot, automated trading, crypto bot, AI trading, forex bot'}
      jsonLd={jsonLd}
    >
      <JasaServicePage locale={loc} content={content} pageName="algorithmic-trading" />
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
