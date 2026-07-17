'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './_lp-base.module.css';

export interface UrgencyBannerProps {
  locale?: string;
  deadline?: Date;
  message?: { id: string; en: string };
  type?: 'countdown' | 'stock' | 'flash';
}

const DEFAULT_DEADLINE = new Date();
DEFAULT_DEADLINE.setDate(DEFAULT_DEADLINE.getDate() + 7);

export default function UrgencyBanner({
  locale = 'id',
  deadline,
  message,
  type = 'countdown',
}: UrgencyBannerProps) {
  const targetDate = deadline || DEFAULT_DEADLINE;
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  const computeTimeLeft = useCallback(() => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    if (diff <= 0) return locale === 'id' ? 'Promo berakhir!' : 'Offer ended!';

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (d > 0) {
      return locale === 'id'
        ? `${d} hari ${h} jam ${m} menit`
        : `${d}d ${h}h ${m}m`;
    }
    return locale === 'id'
      ? `${h} jam ${m} menit ${s} detik`
      : `${h}h ${m}m ${s}s`;
  }, [targetDate, locale]);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(computeTimeLeft());
    const interval = setInterval(() => setTimeLeft(computeTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, [computeTimeLeft]);

  if (!mounted) return null;

  const defaultMsg = locale === 'id'
    ? '⚡ Promo Terbatas! Harga naik dalam:'
    : '⚡ Limited Offer! Price increases in:';

  const msg = message ? (locale === 'id' ? message.id : message.en) : defaultMsg;

  return (
    <div className={styles.urgencyBanner}>
      <span className={styles.urgencyMessage}>{msg}</span>
      <span className={styles.urgencyTimer}>{timeLeft}</span>
    </div>
  );
}
