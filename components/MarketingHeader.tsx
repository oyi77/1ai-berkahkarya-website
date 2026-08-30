'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './MarketingHeader.module.css';
import { trackCTAClick } from '@/lib/tracking';

interface NavItem {
  slug: string;
  id: string;
  en: string;
}

const navLinks: NavItem[] = [
  { slug: '#produk', id: 'Produk', en: 'Products' },
  { slug: '#cerita', id: 'Cerita', en: 'Story' },
  { slug: '#tentang', id: 'Tentang', en: 'About' },
  { slug: '#visi', id: 'Visi & Misi', en: 'Vision' },
];

export default function MarketingHeader() {
  const router = useRouter();
  const locale = (router.query.locale as string) || 'id';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [router.asPath]);

  const switchLocale = () => {
    const next = locale === 'id' ? 'en' : 'id';
    const rest = router.asPath.replace(/^\/(id|en)/, '') || '/';
    router.push(`/${next}${rest}`);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main">
        <Link href={`/${locale}`} className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Berkah<span>Karya</span>
        </Link>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.slug}>
              <a
                href={`/${locale}${link.slug}`}
                onClick={() => trackCTAClick(`nav_${link.slug.replace('#', '')}`, link.slug)}
              >
                {locale === 'id' ? link.id : link.en}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            onClick={switchLocale}
            className={styles.langBtn}
            aria-label={locale === 'id' ? 'Switch to English (EN)' : 'Switch to Indonesian (ID)'}
          >
            {locale === 'id' ? 'EN' : 'ID'}
          </button>
          <a
            href={`/${locale}/contact`}
            className={styles.ctaBtn}
            onClick={() => trackCTAClick('nav_contact', '/contact')}
          >
            {locale === 'id' ? 'Konsultasi →' : 'Consult →'}
          </a>
          <button
            className={`${styles.menuBtn} ${mobileOpen ? styles.menuOpen : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.slug}>
              <a href={`/${locale}${link.slug}`}>
                {locale === 'id' ? link.id : link.en}
              </a>
            </li>
          ))}
          <li>
            <a href={`/${locale}/contact`} className={styles.mobileCta}>
              {locale === 'id' ? 'Konsultasi →' : 'Consult →'}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
