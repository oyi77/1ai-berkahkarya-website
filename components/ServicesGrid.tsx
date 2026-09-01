'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { trackCTAClick } from '@/lib/tracking';
import { SERVICE_METADATA, type ServiceCategory } from '@/data/lp-services';
import styles from './ServicesGrid.module.css';

interface Props {
  locale: 'id' | 'en';
}

type SortKey = 'popular' | 'newest' | 'az';

const CATEGORY_TABS: { key: 'all' | ServiceCategory; id: string; en: string }[] = [
  { key: 'all', id: 'Semua', en: 'All' },
  { key: 'ai', id: 'AI', en: 'AI' },
  { key: 'development', id: 'Development', en: 'Development' },
  { key: 'trading', id: 'Trading', en: 'Trading' },
  { key: 'creative', id: 'Creative', en: 'Creative' },
  { key: 'infrastructure', id: 'Infra', en: 'Infra' },
];

const CATEGORY_BADGE: Record<ServiceCategory, { id: string; en: string }> = {
  ai: { id: 'AI', en: 'AI' },
  development: { id: 'Development', en: 'Development' },
  trading: { id: 'Trading', en: 'Trading' },
  creative: { id: 'Creative', en: 'Creative' },
  infrastructure: { id: 'Infrastruktur', en: 'Infrastructure' },
};

export default function ServicesGrid({ locale }: Props) {
  const isId = locale === 'id';
  const [activeCategory, setActiveCategory] = useState<'all' | ServiceCategory>('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortKey>('popular');

  const filtered = useMemo(() => {
    let list = [...SERVICE_METADATA];

    // Category filter
    if (activeCategory !== 'all') {
      list = list.filter((s) => s.category === activeCategory);
    }

    // Search filter
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter((s) => {
        const name = isId ? s.displayName.id : s.displayName.en;
        const desc = isId ? s.description.id : s.description.en;
        return name.toLowerCase().includes(q) || desc.toLowerCase().includes(q);
      });
    }

    // Sort
    switch (sort) {
      case 'popular':
        list.sort((a, b) => b.socialProof.clients - a.socialProof.clients);
        break;
      case 'newest':
        // Reverse original order = newest first
        list.reverse();
        break;
      case 'az':
        list.sort((a, b) => {
          const na = isId ? a.displayName.id : a.displayName.en;
          const nb = isId ? b.displayName.id : b.displayName.en;
          return na.localeCompare(nb);
        });
        break;
    }

    return list;
  }, [activeCategory, search, sort, isId]);

  return (
    <section className={styles.section} id="layanan" aria-labelledby="services-title">
      <div className={styles.wrap}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            {isId ? 'LAYANAN & SOLUSI' : 'SERVICES & SOLUTIONS'}
          </span>
          <h2 id="services-title" className={styles.title}>
            {isId ? (
              <>
                Semua <em className={styles.titleEm}>layanan</em> dalam satu tempat
              </>
            ) : (
              <>
                Every <em className={styles.titleEm}>service</em> in one place
              </>
            )}
          </h2>
          <p className={styles.subtitle}>
            {isId
              ? 'Dari AI, konten, website, hingga konstruksi — buka penawaran lengkap dan hubungi langsung.'
              : 'From AI and content to websites and construction — open the full offer and connect directly.'}
          </p>
        </div>

        {/* Controls: filter + search + sort */}
        <div className={styles.controls}>
          <div className={styles.filterRow} role="tablist" aria-label={isId ? 'Kategori layanan' : 'Service categories'}>
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeCategory === tab.key}
                className={`${styles.filterPill} ${activeCategory === tab.key ? styles.filterPillActive : ''}`}
                onClick={() => setActiveCategory(tab.key)}
              >
                {isId ? tab.id : tab.en}
              </button>
            ))}
          </div>

          <div className={styles.searchRow}>
            <div className={styles.searchWrap}>
              <span className={styles.searchIcon} aria-hidden="true">🔍</span>
              <input
                type="search"
                className={styles.searchInput}
                placeholder={isId ? 'Cari layanan...' : 'Search services...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label={isId ? 'Cari layanan' : 'Search services'}
              />
            </div>
            <select
              className={styles.sortSelect}
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              aria-label={isId ? 'Urutkan' : 'Sort by'}
            >
              <option value="popular">{isId ? 'Populer' : 'Popular'}</option>
              <option value="newest">{isId ? 'Terbaru' : 'Newest'}</option>
              <option value="az">{isId ? 'A-Z' : 'A-Z'}</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className={styles.resultsCount} aria-live="polite">
          {isId
            ? `${filtered.length} layanan ditemukan`
            : `${filtered.length} services found`}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon} aria-hidden="true">🔎</span>
            <p className={styles.emptyText}>
              {isId
                ? 'Tidak ada layanan yang cocok. Coba kata kunci lain.'
                : 'No services match. Try a different keyword.'}
            </p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((svc) => {
              const id = svc.lps[0];
              const url = `/${locale}/lp/${svc.service}/${id}`;
              const badge = CATEGORY_BADGE[svc.category];
              const name = isId ? svc.displayName.id : svc.displayName.en;
              const desc = isId ? svc.description.id : svc.description.en;
              const { rating, clients, revenue } = svc.socialProof;

              return (
                <Link
                  key={svc.service}
                  href={url}
                  className={styles.card}
                  onClick={() => trackCTAClick(`services_${svc.service}`, url)}
                >
                  <span className={styles.cardGradient} aria-hidden="true" />
                  <div className={styles.cardHead}>
                    <span className={styles.cardIcon} aria-hidden="true">{svc.icon}</span>
                    <span className={styles.categoryBadge}>
                      {isId ? badge.id : badge.en}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardName}>{name}</h3>
                    <p className={styles.cardDesc}>{desc}</p>
                  </div>
                  <div className={styles.socialProof}>
                    <span className={styles.rating} title={`${rating}/5`}>
                      <span aria-hidden="true">⭐</span> {rating.toFixed(1)}
                    </span>
                    <span className={styles.clients}>
                      {clients.toLocaleString('id-ID')}+ {isId ? 'klien' : 'clients'}
                    </span>
                    <span className={styles.revenue}>
                      {revenue}+ {isId ? 'revenue' : 'revenue'}
                    </span>
                  </div>
                  <span className={styles.cardLink}>
                    {isId ? 'Lihat Penawaran' : 'View Offer'} →
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
