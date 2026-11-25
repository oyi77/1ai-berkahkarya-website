'use client';

import { useState, type FormEvent } from 'react';
import { trackInitiateCheckout } from '@/lib/tracking/funnel';
import { COLORS } from './theme';

interface Props {
  courseId: string;
  courseTitle: string;
  priceLabel: string;
  locale?: 'id' | 'en';
  onClose: () => void;
}

const REF_STORAGE_KEY = 'bk_checkout_refs';
const REF_TTL_MS = 30 * 60 * 1000;
const CLASS_PRICE_IDR = 500000;

type RefEntry = { ref: string; createdAt: number };

function getOrCreateOrderRef(sku: string, amount: number): string {
  const now = Date.now();
  const key = `${sku}:${amount}`;
  let entries: Record<string, RefEntry> = {};
  try {
    const raw = localStorage.getItem(REF_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Record<string, RefEntry>;
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) entries = parsed;
    }
  } catch {
    // storage unavailable
  }
  const saved = entries[key];
  if (saved && typeof saved.ref === 'string' && typeof saved.createdAt === 'number' && now - saved.createdAt < REF_TTL_MS) {
    return saved.ref;
  }
  const ref = `bk_${now}_${Math.random().toString(36).slice(2, 8)}`;
  entries[key] = { ref, createdAt: now };
  for (const [k, entry] of Object.entries(entries)) {
    if (!entry || typeof entry.createdAt !== 'number' || now - entry.createdAt >= REF_TTL_MS) delete entries[k];
  }
  try {
    localStorage.setItem(REF_STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // storage unavailable
  }
  return ref;
}

export default function CheckoutDialog({
  courseId,
  courseTitle,
  priceLabel,
  locale = 'id',
  onClose,
}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cohort, setCohort] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const sku = `academy-${courseId}`;
  const t = (id: string, en: string) => (locale === 'id' ? id : en);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || !phone.trim()) {
      setError(t('Nama, email, dan WhatsApp wajib diisi dengan benar.', 'Name, email and WhatsApp are required.'));
      return;
    }
    setSubmitting(true);
    setError('');

    trackInitiateCheckout({
      content_name: courseTitle,
      content_id: sku,
      value: CLASS_PRICE_IDR,
    });

    const orderRef = getOrCreateOrderRef(sku, CLASS_PRICE_IDR);
    const productName = `Kelas ${courseTitle}`;

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: CLASS_PRICE_IDR,
          sku,
          plan: sku,
          product_name: productName,
          customer_name: name.trim(),
          customer_email: email.trim(),
          customer_phone: phone.trim(),
          locale,
          fulfillment_type: 'cohort_class',
          ...(cohort.trim() ? { cohort: cohort.trim().slice(0, 64) } : {}),
          project_order_id: orderRef,
          idempotency_key: orderRef,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        checkout_url?: string;
        reference?: string;
        amount?: number;
        error?: string;
      };

      if (!res.ok || !data.success || !data.checkout_url) {
        setError(data.error || t('Pembayaran gagal dibuat.', 'Could not start checkout.'));
        setSubmitting(false);
        return;
      }

      try {
        localStorage.setItem('bk_checkout', JSON.stringify({
          ref: data.reference,
          project_order_id: orderRef,
          sku,
          product_name: productName,
          amount: data.amount || CLASS_PRICE_IDR,
          email: email.trim(),
          phone: phone.trim(),
          fulfillment_type: 'cohort_class',
          class_id: courseId,
          cohort: cohort.trim(),
          locale,
        }));
      } catch {
        // storage unavailable
      }

      window.location.href = data.checkout_url;
    } catch {
      setError(t('Gagal terhubung ke pembayaran.', 'Payment gateway error.'));
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.7rem 0.8rem',
    borderRadius: 10,
    border: `1px solid ${COLORS.border}`,
    fontSize: '0.9rem',
    boxSizing: 'border-box',
    marginTop: 4,
  };
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: COLORS['text-secondary'],
    marginTop: '0.7rem',
  };

  return (
    <div
      role="presentation"
      onClick={() => !submitting && onClose()}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(12, 18, 36, 0.62)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: COLORS.surface,
          borderRadius: COLORS['card-radius'],
          padding: '1.6rem',
          width: '100%',
          maxWidth: 440,
          boxShadow: `0 22px 60px ${COLORS['shadow-lg']}`,
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.2rem', color: COLORS['text-primary'] }}>
          {t('Daftar Kelas', 'Enroll in Class')}
        </h3>
        <p style={{ margin: '0.35rem 0 0.5rem', color: COLORS['text-secondary'], fontSize: '0.9rem' }}>
          {courseTitle} · <strong style={{ color: COLORS.accent }}>{priceLabel}</strong>
        </p>
        <p style={{ margin: '0 0 0.6rem', color: COLORS['text-muted'], fontSize: '0.78rem' }}>
          {t(
            'Setelah bayar, tim kami akan menghubungi WhatsApp Anda untuk jadwal dan akses kelas.',
            'After payment, our team will contact you on WhatsApp for scheduling and class access.',
          )}
        </p>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>
            {t('Nama lengkap', 'Full name')}
            <input style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" disabled={submitting} />
          </label>
          <label style={labelStyle}>
            Email
            <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" disabled={submitting} />
          </label>
          <label style={labelStyle}>
            WhatsApp {t('(wajib, untuk akses kelas)', '(required, for class access)')}
            <input style={inputStyle} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="08xxxxxxxxxx" disabled={submitting} />
          </label>
          <label style={labelStyle}>
            {t('Kohort yang diinginkan (opsional)', 'Preferred cohort (optional)')}
            <input style={inputStyle} value={cohort} onChange={(e) => setCohort(e.target.value)} placeholder={t('Contoh: Sabtu pagi', 'e.g. Saturday morning')} disabled={submitting} />
          </label>
          {error && <p style={{ color: '#dc2626', fontSize: '0.82rem', marginBottom: 0 }}>{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            style={{
              width: '100%',
              marginTop: '1rem',
              padding: '0.85rem',
              border: 'none',
              borderRadius: COLORS['btn-radius'],
              background: COLORS.accent,
              color: COLORS.primary,
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: submitting ? 'not-allowed' : 'pointer',
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting
              ? t('Membuat pembayaran…', 'Creating checkout…')
              : `${t('Bayar', 'Pay')} ${priceLabel}`}
          </button>
        </form>
        <button
          type="button"
          onClick={onClose}
          disabled={submitting}
          style={{
            marginTop: '0.7rem',
            width: '100%',
            background: 'none',
            border: 'none',
            color: COLORS['text-muted'],
            fontSize: '0.82rem',
            cursor: 'pointer',
          }}
        >
          {t('Batal', 'Cancel')}
        </button>
      </div>
    </div>
  );
}
