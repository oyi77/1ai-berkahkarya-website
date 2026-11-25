'use client';

import { useState, type FormEvent } from 'react';
import { trackInitiateCheckout } from '@/lib/tracking';
import TrackedCTA from './TrackedCTA';
import styles from './_lp-base.module.css';

const REF_STORAGE_KEY = 'bk_checkout_refs';
const REF_TTL_MS = 30 * 60 * 1000;

type RefEntry = { ref: string; createdAt: number };

/**
 * Reuse one idempotency key per SKU + amount for a short window.
 * A retry after an ambiguous gateway failure must not create a second
 * chargeable order. Keys are stored per product so opening two tiers in
 * two tabs cannot make them clobber each other.
 */
function getOrCreateOrderRef(sku: string, amount: number): string {
  const now = Date.now();
  const key = `${sku}:${amount}`;
  let entries: Record<string, RefEntry> = {};

  try {
    const raw = localStorage.getItem(REF_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, RefEntry>;
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        entries = parsed;
      }
    }
  } catch {
    // Storage disabled — fall through to a fresh key.
  }

  const saved = entries[key];
  if (
    saved &&
    typeof saved.ref === 'string' &&
    typeof saved.createdAt === 'number' &&
    now - saved.createdAt < REF_TTL_MS
  ) {
    return saved.ref;
  }

  const ref = `bk_${now}_${Math.random().toString(36).slice(2, 8)}`;
  entries[key] = { ref, createdAt: now };
  for (const [k, entry] of Object.entries(entries)) {
    if (!entry || typeof entry.createdAt !== 'number' || now - entry.createdAt >= REF_TTL_MS) {
      delete entries[k];
    }
  }
  try {
    localStorage.setItem(REF_STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // Private mode: server-side idempotency is still keyed by the ref below.
  }
  return ref;
}

export interface PricingTier {
  name: { id: string; en: string };
  price: { id: string; en: string };
  originalPrice?: { id: string; en: string };
  description: { id: string; en: string };
  features: { id: string[]; en: string[] };
  highlighted?: boolean;
  cta: { id: string; en: string };
  ctaLink: string;
  badge?: { id: string; en: string };
  /**
   * When set, the CTA becomes a real self-serve Buy Now flow:
   * buyer identity is collected first, then /api/checkout creates the payment.
   * checkoutProduct doubles as the SKU for download-link lookup.
   */
  checkoutAmount?: number;
  checkoutProduct?: string;
}

interface PricingCardProps {
  tier: PricingTier;
  locale?: string;
  serviceName?: string;
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 9999,
  background: 'rgba(12, 18, 28, 0.62)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
};

const dialogStyle: React.CSSProperties = {
  background: '#fff',
  borderRadius: 14,
  padding: '1.5rem',
  width: '100%',
  maxWidth: 420,
  boxShadow: '0 22px 60px rgba(0,0,0,0.24)',
  fontFamily: 'system-ui, sans-serif',
  color: '#1C2430',
};

const fieldStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.7rem 0.8rem',
  border: '1px solid #d7dce3',
  borderRadius: 8,
  fontSize: '0.95rem',
  marginTop: 4,
  boxSizing: 'border-box',
};

const submitStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem',
  border: 'none',
  borderRadius: 8,
  background: '#2563eb',
  color: '#fff',
  fontWeight: 700,
  fontSize: '0.95rem',
  cursor: 'pointer',
  marginTop: '0.4rem',
};

export default function PricingCard({ tier, locale = 'id', serviceName }: PricingCardProps) {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [checking, setChecking] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');

  const name = locale === 'id' ? tier.name.id : tier.name.en;
  const price = locale === 'id' ? tier.price.id : tier.price.en;
  const originalPrice = tier.originalPrice ? (locale === 'id' ? tier.originalPrice.id : tier.originalPrice.en) : null;
  const description = locale === 'id' ? tier.description.id : tier.description.en;
  const features = locale === 'id' ? tier.features.id : tier.features.en;
  const cta = locale === 'id' ? tier.cta.id : tier.cta.en;
  const badge = tier.badge ? (locale === 'id' ? tier.badge.id : tier.badge.en) : null;
  const sku = tier.checkoutProduct || name.toLowerCase().replace(/\s+/g, '-');

  const handleCheckout = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checking) return;
    setCheckoutError('');

    if (!buyerName.trim()) {
      setCheckoutError(locale === 'id' ? 'Nama wajib diisi.' : 'Name is required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(buyerEmail.trim())) {
      setCheckoutError(locale === 'id' ? 'Email tidak valid.' : 'Invalid email.');
      return;
    }

    setChecking(true);
    trackInitiateCheckout({
      content_name: name,
      content_id: sku,
      value: tier.checkoutAmount,
    });

    // Stable key: a retry within the window cannot create a second paid order.
    const orderRef = getOrCreateOrderRef(sku, tier.checkoutAmount || 0);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: tier.checkoutAmount,
          product_name: name,
          plan: sku,
          sku,
          customer_name: buyerName.trim(),
          customer_email: buyerEmail.trim(),
          customer_phone: buyerPhone.trim(),
          locale,
          project_order_id: orderRef,
          idempotency_key: orderRef,
        }),
      });
      const data = await res.json();

      if (!data.success || !data.checkout_url) {
        setCheckoutError(data.error || (locale === 'id' ? 'Pembayaran gagal dibuat.' : 'Could not start checkout.'));
        setChecking(false);
        return;
      }

      // Confirmation page reads this to verify payment and reveal downloads.
      try {
        localStorage.setItem(
          'bk_checkout',
          JSON.stringify({
            ref: data.reference,
            project_order_id: orderRef,
            sku,
            product_name: name,
            amount: data.amount,
            email: buyerEmail.trim(),
          }),
        );
      } catch {
        // Private mode / storage disabled — callback still works server-side.
      }

      window.location.href = data.checkout_url;
    } catch {
      setCheckoutError(locale === 'id' ? 'Gagal terhubung ke pembayaran.' : 'Payment gateway error.');
      setChecking(false);
    }
  };

  return (
    <div className={`${styles.pricingCard} ${tier.highlighted ? styles.pricingCardHighlighted : ''}`}>
      {badge && <div className={styles.pricingBadge}>{badge}</div>}
      <h3 className={styles.pricingName}>{name}</h3>
      <div className={styles.pricingPriceWrap}>
        {originalPrice && <span className={styles.pricingOriginal}>{originalPrice}</span>}
        <span className={styles.pricingAmount}>{price}</span>
      </div>
      <p className={styles.pricingDesc}>{description}</p>
      <ul className={styles.pricingFeatures}>
        {features.map((f, i) => (
          <li key={i} className={styles.pricingFeatureItem}>
            <span className={styles.pricingCheck}>✓</span> {f}
          </li>
        ))}
      </ul>

      {tier.checkoutAmount ? (
        <button
          type="button"
          className={styles.pricingCta}
          style={{ border: 'none', cursor: 'pointer' }}
          onClick={() => {
            setCheckoutError('');
            setCheckoutOpen(true);
          }}
        >
          {cta}
        </button>
      ) : (
        <TrackedCTA
          href={tier.ctaLink}
          className={styles.pricingCta}
          productName={`${serviceName ?? 'lp'} - LP1 Pricing - ${name}`}
          productId={serviceName ? `${serviceName}-lp1` : undefined}
          service={serviceName}
          lpVariant={1}
        >
          {cta}
        </TrackedCTA>
      )}

      {checkoutError && !checkoutOpen && (
        <p style={{ color: '#dc2626', fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>
          {checkoutError}
        </p>
      )}

      {checkoutOpen && (
        <div style={overlayStyle} role="presentation" onClick={() => !checking && setCheckoutOpen(false)}>
          <div style={dialogStyle} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.15rem' }}>
              {locale === 'id' ? 'Selesaikan Pembelian' : 'Complete Your Purchase'}
            </h3>
            <p style={{ margin: '0 0 1rem', color: '#5a6472', fontSize: '0.9rem' }}>
              {name} · {price}
            </p>
            <form onSubmit={handleCheckout}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600 }}>
                {locale === 'id' ? 'Nama lengkap' : 'Full name'}
                <input
                  style={fieldStyle}
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  autoComplete="name"
                  placeholder="Nama Anda"
                  disabled={checking}
                />
              </label>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.8rem' }}>
                Email
                <input
                  style={fieldStyle}
                  type="email"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="you@example.com"
                  disabled={checking}
                />
              </label>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.8rem' }}>
                WhatsApp {locale === 'id' ? '(opsional)' : '(optional)'}
                <input
                  style={fieldStyle}
                  type="tel"
                  value={buyerPhone}
                  onChange={(e) => setBuyerPhone(e.target.value)}
                  autoComplete="tel"
                  placeholder="08xxxxxxxxxx"
                  disabled={checking}
                />
              </label>
              {checkoutError && (
                <p style={{ color: '#dc2626', fontSize: '0.82rem', marginBottom: 0 }}>{checkoutError}</p>
              )}
              <button type="submit" style={submitStyle} disabled={checking}>
                {checking
                  ? locale === 'id' ? 'Membuat pembayaran…' : 'Creating checkout…'
                  : locale === 'id' ? `Bayar ${price}` : `Pay ${price}`}
              </button>
            </form>
            <button
              type="button"
              onClick={() => setCheckoutOpen(false)}
              disabled={checking}
              style={{
                marginTop: '0.75rem', width: '100%', background: 'none', border: 'none',
                color: '#5a6472', fontSize: '0.85rem', cursor: 'pointer',
              }}
            >
              {locale === 'id' ? 'Batal' : 'Cancel'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
