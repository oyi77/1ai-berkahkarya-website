import Head from 'next/head';
import { useEffect } from 'react';

export default function MicinPage() {
  useEffect(() => {
    window.location.replace('/id/micin/');
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0;url=/id/micin/" />
        <title>MICIN | BerkahKarya</title>
      </Head>
      <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', textAlign: 'center' }}>
        <p>Redirecting to <a href="/id/micin/">/id/micin/</a>...</p>
      </div>
    </>
  );
}