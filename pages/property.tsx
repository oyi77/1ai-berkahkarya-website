import Head from 'next/head';

export default function PropertyRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/id/property" />
        <link rel="canonical" href="https://berkahkarya.org/id/property" />
        <title>Redirecting - BerkahKarya</title>
      </Head>
      <div style={{ padding: '40px', fontFamily: 'system-ui', textAlign: 'center' }}>
        <p>Redirecting to <a href="/id/property">/id/property</a>...</p>
      </div>
    </>
  );
}
