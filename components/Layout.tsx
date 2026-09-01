import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: object;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const SITE_URL = 'https://berkahkarya.org';
const DEFAULT_OG_IMAGE = '/images/og-default.jpg';

export default function Layout({ 
  children, 
  title, 
  description, 
  keywords,
  ogImage,
  noindex,
  jsonLd,
  hideHeader,
  hideFooter
}: LayoutProps) {
  const { asPath, pathname } = useRouter();
  // Derive locale from path since Next.js i18n may not be configured
  const locale = asPath.startsWith('/en') ? 'en' : 'id';
  // Strip any existing locale prefix to get canonical path without locale
  const pathWithoutLocale = asPath.replace(/^\/(id|en)(?=\/|$)/, '') || '/';
  const path = asPath;
  
  const isLPPage = pathname.includes('/lp/');
  const shouldHideHeader = hideHeader || isLPPage;
  const shouldHideFooter = hideFooter || isLPPage;
  const fullTitle = title 
    ? `${title}` 
    : 'BerkahKarya — AI Ecosystem untuk Bisnis Indonesia';
  
  const fullDescription = description 
    || 'Solusi AI lengkap untuk bisnis Indonesia. Video AI, chatbot, automation, sistem otonom. Hemat 90% biaya, 10x lebih cepat.';

  const defaultKeywords = 'AI Indonesia, jasa AI, video AI, chatbot AI, automation bisnis, sistem otonom, digital agency, BerkahKarya';
  const fullKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  const canonicalUrl = `${SITE_URL}${path}`;
  const alternateId = `/id${pathWithoutLocale}`;
  const alternateEn = `/en${pathWithoutLocale}`;

  const ogImageUrl = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`)
    : `${SITE_URL}${DEFAULT_OG_IMAGE}`;

  // Default Organization JSON-LD
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BerkahKarya",
    "alternateName": "Berkah Karya Digital Agency",
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/logo.png`,
    "description": "AI Ecosystem untuk bisnis Indonesia",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Perumahan Nirwana Regency Blok C12",
      "addressLocality": "Jombang",
      "addressRegion": "Jawa Timur",
      "postalCode": "61419",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-857-3274-0006",
      "contactType": "sales",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://wa.me/6285732740006",
      "https://t.me/berkahkarya_saas_bot"
    ]
  };

  // WebSite JSON-LD for search
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BerkahKarya",
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // BreadcrumbList JSON-LD for LP pages
  const breadcrumbJsonLd = isLPPage ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": `${SITE_URL}/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Layanan",
        "item": `${SITE_URL}/${locale}/digital-products`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": fullTitle,
        "item": canonicalUrl
      }
    ]
  } : null;

  // Product JSON-LD for LP pages
  const productJsonLd = isLPPage ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": fullTitle,
    "description": fullDescription,
    "image": ogImageUrl,
    "url": canonicalUrl,
    "brand": {
      "@type": "Brand",
      "name": "BerkahKarya"
    },
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "BerkahKarya"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5"
    }
  } : null;

  // FAQ JSON-LD for service pages
  const faqJsonLd = isLPPage ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu layanan ini?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": fullDescription
        }
      },
      {
        "@type": "Question",
        "name": "Berapa harga layanan ini?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hubungi kami untuk informasi harga terbaik. Kami menawarkan harga kompetitif dengan kualitas terjamin."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana cara memulai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klik tombol 'Hubungi Kami' atau WhatsApp untuk konsultasi gratis. Tim kami siap membantu Anda 24/7."
        }
      }
    ]
  } : null;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="title" content={fullTitle} />
        <meta name="description" content={fullDescription} />
        <meta name="keywords" content={fullKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="BerkahKarya" />
        <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
        <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
        
        {/* Canonical & Hreflang */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="id" href={`${SITE_URL}${alternateId}`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}${alternateEn}`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/id`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="BerkahKarya" />
        <meta property="og:locale" content={locale === 'id' ? 'id_ID' : 'en_US'} />
        <meta property="og:locale:alternate" content={locale === 'id' ? 'en_US' : 'id_ID'} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={fullDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:creator" content="@berkahkarya" />
        <meta name="twitter:site" content="@berkahkarya" />

        {/* Geo & Language */}
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Jombang, East Java" />
        <meta name="language" content={locale === 'id' ? 'Indonesian' : 'English'} />
        <meta httpEquiv="content-language" content={locale} />

        {/* Mobile & PWA */}
        <meta name="theme-color" content="#1C2430" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BerkahKarya" />
        <meta name="application-name" content="BerkahKarya" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect for performance */}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {breadcrumbJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          />
        )}
        {productJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
          />
        )}
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
        {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((ld, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
          />
        ))}
      </Head>
      {!shouldHideHeader && <Header />}
      {isLPPage ? (
        <>{children}</>
      ) : (
        <main className="ledger-margin">
          <div className="ledger-margin-content">{children}</div>
        </main>
      )}
      {!shouldHideFooter && <Footer />}
    </>
  );
}
