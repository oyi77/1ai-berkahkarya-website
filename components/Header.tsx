import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import styles from './Header.module.css';
import { trackAddToCart } from '@/lib/tracking';

interface NavItem {
  slug: string;
  id: string;
  en: string;
  children?: NavItem[];
}

const navLinks: NavItem[] = [
  { slug: '', id: 'Beranda', en: 'Home' },
  { slug: 'one-ai', id: 'Untuk Personal', en: 'For Personal' },
  { slug: 'rev-system', id: 'Untuk Bisnis', en: 'For Business' },
  { slug: 'ecosystem', id: 'Ekosistem', en: 'Ecosystem' },
  { slug: 'pricing', id: 'Harga', en: 'Pricing' },
  { slug: 'roadmap', id: 'Roadmap', en: 'Roadmap' },
];

export default function Header() {
  const router = useRouter();
  const locale = (router.query.locale as string) || 'id';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [router.asPath]);

  const switchLocale = () => {
    const target = locale === 'id' ? 'en' : 'id';
    const path = router.asPath.replace(`/${locale}`, `/${target}`);
    router.push(path);
  };

  const currentSlug = router.asPath.split('/').filter(Boolean).pop() || '';

  const isActive = (slug: string) => {
    if (slug === '' && (currentSlug === locale || currentSlug === 'id' || currentSlug === 'en')) return true;
    return currentSlug === slug;
  };

  const renderNavItem = (link: NavItem, isMobile = false) => {
    if (link.children) {
      return (
        <li
          key={link.slug}
          className={`${styles.dropdown} ${dropdownOpen ? styles.dropdownOpen : ''}`}
          ref={dropdownRef}
        >
          <button
            className={styles.dropdownTrigger}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            {locale === 'id' ? link.id : link.en}
            <span className={styles.arrow}>▼</span>
          </button>
          <ul className={`${styles.dropdownMenu} ${isMobile ? styles.mobileDropdown : ''}`}>
            {link.children.map((child, idx) => {
              if (child.slug === '__divider__') {
                return (
                  <li key={`div-${idx}`} className={styles.divider}>
                    {locale === 'id' ? child.id : child.en}
                  </li>
                );
              }
              return (
                <li key={child.slug}>
                  <Link
                    href={`/${locale}/${child.slug}`}
                    className={isActive(child.slug) ? styles.active : ''}
                  >
                    {locale === 'id' ? child.id : child.en}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      );
    }

    return (
      <li key={link.slug}>
        <Link
          href={`/${locale}/${link.slug}`}
          className={isActive(link.slug) ? styles.active : ''}
        >
          {locale === 'id' ? link.id : link.en}
        </Link>
      </li>
    );
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <Link href={`/${locale}`} className={styles.logo}>
          Berkah<span>Karya</span>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.links}>
          {navLinks.map((link) => renderNavItem(link))}
        </ul>

        <div className={styles.actions}>
          <button onClick={switchLocale} className={styles.langBtn}>
            🌐 {locale === 'id' ? 'EN' : 'ID'}
          </button>
          <a
            href={`/${locale}/transparency`}
            className={styles.transparencyLink}
            onClick={() => trackAddToCart({content_name:'Header Transparency',content_id:'header-transparency',content_type:'transparency',destination:'/transparency',destination_url:`/${locale}/transparency`})}
          >
            {locale === 'id' ? 'Transparansi' : 'Transparency'}
          </a>
          <a
            href={`/${locale}#persona-switcher`}
            className={styles.ctaBtn}
            onClick={() => trackAddToCart({content_name:'Header CTA Mulai',content_id:'header-cta-mulai',content_type:'cta_mulai',destination:'/#persona-switcher',destination_url:`/${locale}#persona-switcher`})}
          >
            {locale === 'id' ? 'Mulai Sekarang' : 'Get Started'}
          </a>
          <button
            className={`${styles.menuBtn} ${mobileOpen ? styles.menuOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => renderNavItem(link, true))}
        </ul>
        <div className={styles.mobileActions}>
          <button onClick={switchLocale} className={styles.langBtn}>
            🌐 {locale === 'id' ? 'English' : 'Indonesia'}
          </button>
          <a
            href={`/${locale}/transparency`}
            className={styles.transparencyLink}
            onClick={() => trackAddToCart({content_name:'Mobile Transparency',content_id:'mobile-transparency',content_type:'transparency',destination:'/transparency',destination_url:`/${locale}/transparency`})}
          >
            {locale === 'id' ? 'Transparansi' : 'Transparency'}
          </a>
          <a
            href={`/${locale}#persona-switcher`}
            className={styles.ctaBtn}
            onClick={() => trackAddToCart({content_name:'Mobile CTA Mulai',content_id:'mobile-cta-mulai',content_type:'cta_mulai',destination:'/#persona-switcher',destination_url:`/${locale}#persona-switcher`})}
          >
            {locale === 'id' ? 'Mulai Sekarang' : 'Get Started'}
          </a>
        </div>
      </div>
    </header>
  );
}
