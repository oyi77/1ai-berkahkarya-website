import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

type Locale = 'id' | 'en';

interface CheckoutInfo {
  ref?: string;
  sku?: string;
  product_name?: string;
  amount?: number;
  email?: string;
}

interface DownloadLink {
  label: string;
  url: string;
}

type State = 'checking' | 'pending' | 'paid' | 'error';

const WA_FALLBACK = '6282231399998';

const pageStyle: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'system-ui, sans-serif',
  background: '#faf8f3',
  color: '#1C2430',
  padding: '2rem 1rem',
};

const cardStyle: React.CSSProperties = {
  background: '#fff',
  borderRadius: 16,
  padding: '2rem',
  maxWidth: 560,
  width: '100%',
  boxShadow: '0 12px 40px rgba(28,36,48,0.08)',
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function PaymentSuccess({ locale }: { locale: Locale }) {
  const [state, setState] = useState<State>('checking');
  const [info, setInfo] = useState<CheckoutInfo>({});
  const [links, setLinks] = useState<DownloadLink[]>([]);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    let stored: CheckoutInfo = {};
    try {
      stored = JSON.parse(localStorage.getItem('bk_checkout') || '{}') as CheckoutInfo;
    } catch {
      stored = {};
    }
    if (cancelled) return;
    setInfo(stored);

    const cancelledByUser = new URLSearchParams(window.location.search).get('cancelled');
    if (cancelledByUser || !stored.ref) {
      setState(cancelledByUser ? 'pending' : 'error');
      return;
    }

    let count = 0;
    const poll = async () => {
      try {
        const res = await fetch(`/api/order-status?ref=${encodeURIComponent(stored.ref || '')}`, {
          cache: 'no-store',
        });
        const data = (await res.json()) as { paid?: boolean; status?: string };
        if (data.paid) {
          const lr = await fetch(`/api/download-links?sku=${encodeURIComponent(stored.sku || '')}`);
          const ld = (await lr.json()) as { links?: DownloadLink[] };
          if (!cancelled) {
            setLinks(Array.isArray(ld.links) ? ld.links : []);
            setState('paid');
          }
          return;
        }
        if (['failed', 'expired', 'refunded', 'cancelled'].includes(data.status || '')) {
          if (!cancelled) setState('error');
          return;
        }
      } catch {
        // transient — retry below
      }
      if (cancelled) return;
      count += 1;
      setAttempt(count);
      if (count < 20) timer = setTimeout(poll, 3000);
      else setState('pending');
    };

    void poll();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  const t = (id: string, en: string) => (locale === 'id' ? id : en);
  const waMessage = `Halo, saya sudah bayar tapi belum mendapat link download.\nProduk: ${info.product_name || '-'}\nRef: ${info.ref || '-'}\nEmail: ${info.email || '-'}`;
  const waHref = `https://wa.me/${WA_FALLBACK}?text=${encodeURIComponent(waMessage)}`;

  return (
    <>
      <Head>
        <title>{t('Pembayaran', 'Payment')} | BerkahKarya</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main style={pageStyle}>
        <div style={cardStyle}>
          {state === 'checking' && (
            <>
              <h1 style={{ marginTop: 0 }}>{t('Memverifikasi pembayaran…', 'Verifying payment…')}</h1>
              <p style={{ color: '#5a6472' }}>
                {t(`Mengecek status pesanan (${attempt}/20). Jangan tutup halaman ini.`, `Checking order status (${attempt}/20). Do not close this page.`)}
              </p>
            </>
          )}

          {state === 'paid' && (
            <>
              <div style={{ fontSize: '2.4rem' }}>✅</div>
              <h1 style={{ marginTop: '0.5rem' }}>
                {t('Pembayaran berhasil', 'Payment confirmed')}
              </h1>
              <p style={{ color: '#5a6472' }}>
                {info.product_name || t('Produk digital', 'Digital product')}
                {info.email ? ` · ${info.email}` : ''}
              </p>
              {links.length > 0 ? (
                <>
                  <h2 style={{ fontSize: '1rem', marginTop: '1.5rem' }}>
                    {t('Link download Anda', 'Your downloads')}
                  </h2>
                  <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                    {links.map((link, i) => (
                      <li key={i} style={{ marginBottom: '0.6rem' }}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'block', padding: '0.85rem 1rem', borderRadius: 10,
                            background: '#eff6ff', color: '#1d4ed8', textDecoration: 'none',
                            fontWeight: 600,
                          }}
                        >
                          ⬇️ {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p style={{ color: '#b45309', background: '#fffbeb', padding: '0.85rem', borderRadius: 10 }}>
                  {t(
                    'Pembayaran diterima, tapi link download belum tersedia. Hubungi kami — pesanan Anda akan dikirim manual.',
                    'Payment received, but no download link is configured yet. Contact us — we will deliver manually.',
                  )}
                </p>
              )}
            </>
          )}

          {state === 'pending' && (
            <>
              <div style={{ fontSize: '2.4rem' }}>⏳</div>
              <h1>{t('Menunggu konfirmasi', 'Awaiting confirmation')}</h1>
              <p style={{ color: '#5a6472' }}>
                {t(
                  'Pembayaran belum terdeteksi. Jika sudah bayar, tunggu beberapa saat lalu refresh halaman ini.',
                  'Payment not detected yet. If you already paid, wait a moment and refresh this page.',
                )}
              </p>
            </>
          )}

          {state === 'error' && (
            <>
              <div style={{ fontSize: '2.4rem' }}>⚠️</div>
              <h1>{t('Perlu bantuan', 'Need help')}</h1>
              <p style={{ color: '#5a6472' }}>
                {t(
                  'Kami tidak bisa memverifikasi pesanan otomatis. Hubungi WhatsApp dengan detail di bawah.',
                  'We could not verify the order automatically. Contact us on WhatsApp with the details below.',
                )}
              </p>
            </>
          )}

          {(state === 'pending' || state === 'error') && (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block', marginTop: '1rem', padding: '0.8rem 1.2rem',
                borderRadius: 10, background: '#16a34a', color: '#fff',
                textDecoration: 'none', fontWeight: 700,
              }}
            >
              {t('Hubungi WhatsApp', 'Contact WhatsApp')}
            </a>
          )}

          {info.ref && (
            <p style={{ marginTop: '1.5rem', fontSize: '0.78rem', color: '#94a3b8', wordBreak: 'break-all' }}>
              Ref: {info.ref}
            </p>
          )}
        </div>
      </main>
    </>
  );
}
