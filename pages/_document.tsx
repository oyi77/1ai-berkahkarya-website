import { Html, Head, Main, NextScript } from 'next/document';
import { TRACKING } from '@/lib/tracking';

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* ── Preconnects for critical third-party origins ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://analytics.tiktok.com" />
        <link rel="preconnect" href="https://emrld.ltd" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://analytics.tiktok.com" />

        {/* Font stylesheet (replaces render-blocking CSS @import) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Serif:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />

        {/* ── Deferred third-party loader helper ── */}
        <script
          dangerouslySetInnerHTML={{
            __html: [
              'function bkFireWhenIdle(fn){',
              "'requestIdleCallback' in window ? requestIdleCallback(fn,{timeout:2500}) : setTimeout(fn,2000)",
              '}',
            ].join(''),
          }}
        />

        {/* GTM #1: GTM-5MXPQQRT (deferred) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `bkFireWhenIdle(function(){
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5MXPQQRT');
});`,
          }}
        />

        {/* GTM #2: GTM-TWWH8B3T (deferred) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `bkFireWhenIdle(function(){
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWWH8B3T');
});`,
          }}
        />

        {/* Drive Tracking (emrld.ltd) — Veris (deferred) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `bkFireWhenIdle(function(){
var s=document.createElement("script");s.async=1;
s.src='https://emrld.ltd/NTM1NDYx.js?t=535461';
document.head.appendChild(s);
});`,
          }}
        />

        {/* GA4 (deferred) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `bkFireWhenIdle(function(){
var s=document.createElement("script");s.async=1;
s.src='https://www.googletagmanager.com/gtag/js?id=${TRACKING.GA_ID}';
document.head.appendChild(s);
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${TRACKING.GA_ID}',{page_path:window.location.pathname});
});`,
          }}
        />

        {/* Meta (Facebook) Pixel (deferred) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `bkFireWhenIdle(function(){
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${TRACKING.META_PIXEL_ID}');
fbq('track','PageView');
});`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${TRACKING.META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {/* TikTok Pixel (deferred) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `bkFireWhenIdle(function(){
!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js?appId="+e+"&sdkVersion=1.0";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i;var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"&sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${TRACKING.TIKTOK_PIXEL_ID}');ttq.page();
}(window,document,'ttq');
});`,
          }}
        />

        {/* UTM Parameter & Attribution Capture (runs early — lightweight, needed for attribution) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                function getCookie(name) {
                  const value = \`; \${document.cookie}\`;
                  const parts = value.split(\`; \${name}=\`);
                  if (parts.length === 2) return parts.pop().split(';').shift();
                  return '';
                }
                function setCookie(name, value, days) {
                  const date = new Date();
                  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                  document.cookie = \`\${name}=\${value};\${date.toUTCString()};path=/\`;
                }
                const params = new URLSearchParams(window.location.search);
                const utmSource = params.get('utm_source') || 'berkahkarya.org';
                const utmMedium = params.get('utm_medium') || 'organic';
                const utmCampaign = params.get('utm_campaign') || '';
                const utmContent = params.get('utm_content') || '';
                const lpVariant = params.get('lpVariant') || params.get('lp') || 'default';
                const fbc = params.get('fbc') || getCookie('_fbc');
                const fbp = params.get('fbp') || getCookie('_fbp');
                const ttclid = params.get('ttclid') || getCookie('_tt_enable_cookie');
                sessionStorage.setItem('utm_source', utmSource);
                sessionStorage.setItem('utm_medium', utmMedium);
                sessionStorage.setItem('utm_campaign', utmCampaign);
                sessionStorage.setItem('utm_content', utmContent);
                sessionStorage.setItem('lp_variant', lpVariant);
                sessionStorage.setItem('fbc', fbc);
                sessionStorage.setItem('fbp', fbp);
                sessionStorage.setItem('ttclid', ttclid);
                setCookie('_utm_source', utmSource, 7);
                setCookie('_utm_campaign', utmCampaign, 7);
                setCookie('_lp_variant', lpVariant, 7);
              })();
            `,
          }}
        />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0D0F14" />
        <meta name="p:domain_verify" content={TRACKING.PINTEREST_VERIFICATION} />
      </Head>
      <body>
        {/* GTM (noscript) #1 */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5MXPQQRT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* GTM (noscript) #2 */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWWH8B3T"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}