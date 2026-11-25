'use client';

import { useState, FormEvent } from 'react';
import { trackLead } from '@/lib/tracking/funnel';

interface Props {
  serviceName?: string;
  sourceUrl?: string;
}

const WA_NUMBER = '6282231399998';

export default function LeadForm({ serviceName, sourceUrl }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const waText = [
    `Halo BerkahKarya, saya ingin penawaran${serviceName ? ` untuk ${serviceName}` : ''}.`,
    name ? `Nama: ${name}` : '',
    email ? `Email: ${email}` : '',
    phone ? `WA: ${phone}` : '',
    message ? `Pesan: ${message}` : '',
  ]
    .filter(Boolean)
    .join('\n');
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() && !phone.trim() && !email.trim()) {
      setError('Nama, email, atau nomor telepon wajib diisi.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
          service: serviceName,
          url: sourceUrl || (typeof window !== 'undefined' ? window.location.href : ''),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        error?: string;
      };

      if (!res.ok || !data.success) {
        setError('Penawaran belum terkirim. Silakan hubungi kami via WhatsApp.');
        return;
      }

      // Only fire the conversion when the backend actually stored/delivered it.
      setSubmitted(true);
      try {
        trackLead({
          content_name: serviceName ? `${serviceName} - Lead Form` : 'Lead Form',
          content_id: serviceName,
          destination: 'lead_form',
          destination_url: typeof window !== 'undefined' ? window.location.href : '',
        });
      } catch {
        // Tracking must never break UX.
      }
    } catch {
      setError('Gagal mengirim. Silakan hubungi kami via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          background: 'var(--paper-2)',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-7) var(--space-6)',
          textAlign: 'center',
          maxWidth: 480,
          margin: '0 auto',
          marginTop: 'var(--space-4)',
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>✅</div>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            margin: '0 0 var(--space-2)',
            color: 'var(--ink)',
          }}
        >
          Terima kasih!
        </h3>
        <p
          style={{
            color: 'var(--ink-muted)',
            fontSize: 'var(--text-sm)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Permintaan Anda sudah kami terima. Tim akan menghubungi dalam 1×24 jam.
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: 'var(--space-3)',
            color: 'var(--ink)',
            fontSize: 'var(--text-sm)',
            textDecoration: 'underline',
          }}
        >
          Butuh respon cepat? Chat WhatsApp →
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        maxWidth: 480,
        margin: '0 auto',
        marginTop: 'var(--space-4)',
      }}
    >
      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Anda"
          required
          style={{
            flex: 1,
            minWidth: 180,
            padding: '0.7rem 1rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--rule)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            background: 'var(--paper)',
          }}
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="No. Telepon / WA"
          type="tel"
          style={{
            flex: 1,
            minWidth: 180,
            padding: '0.7rem 1rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--rule)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            background: 'var(--paper)',
          }}
        />
      </div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email (opsional)"
        type="email"
        style={{
          padding: '0.7rem 1rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--rule)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          background: 'var(--paper)',
        }}
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Pesan singkat (opsional)"
        rows={3}
        style={{
          padding: '0.7rem 1rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--rule)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          background: 'var(--paper)',
          resize: 'vertical',
        }}
      />
      {error && (
        <p style={{ color: 'var(--margin-red)', fontSize: 'var(--text-sm)', margin: 0 }}>
          {error}{' '}
          <a href={waHref} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
            Chat WhatsApp →
          </a>
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: '0.7rem 1.5rem',
          borderRadius: 'var(--radius-lg)',
          border: 'none',
          background: 'var(--margin-red)',
          color: 'var(--bg)',
          fontFamily: 'var(--font-ui)',
          fontSize: 'var(--text-base)',
          fontWeight: 600,
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? 'Mengirim...' : 'Dapatkan Penawaran'}
      </button>
    </form>
  );
}
