'use client';

import { useEffect } from 'react';

interface LPEvent {
  timestamp: string;
  event: 'lpViewed' | 'ctaClicked';
  lpVariant: number;
  service: string;
  placement?: string;
  url?: string;
}

const KEY = 'berkahkarya_events';
const MAX = 500;

export function pushLPEvent(e: Omit<LPEvent, 'timestamp'>) {
  if (typeof window === 'undefined') return;
  try {
    const raw = window.localStorage.getItem(KEY);
    const arr: LPEvent[] = raw ? JSON.parse(raw) : [];
    arr.push({ ...e, timestamp: new Date().toISOString() });
    window.localStorage.setItem(KEY, JSON.stringify(arr.slice(-MAX)));
  } catch {
    /* storage penuh/private mode — tracking tidak boleh merusak UX */
  }
}

/** Tulis 1x lpViewed saat LP dibuka. Pakai di setiap varian LP. */
export default function LPVariantTracker({
  variant,
  service,
}: {
  variant: number;
  service: string;
}) {
  useEffect(() => {
    pushLPEvent({ event: 'lpViewed', lpVariant: variant, service, url: window.location.pathname });
  }, [variant, service]);
  return null;
}
