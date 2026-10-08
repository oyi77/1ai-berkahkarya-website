'use client';

import React from 'react';
import { trackAddToCart, trackInitiateCheckout, trackLead } from '@/lib/tracking';
import { pushLPEvent } from './LPVariantTracker';

interface TrackedCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  productName: string;
  productId?: string;
  /** LP service slug for A/B ctaClicked attribution (falls back to productId prefix). */
  service?: string;
  /** LP variant number for A/B ctaClicked attribution (falls back to LP{n} in productName). */
  lpVariant?: number;
  value?: number;
  currency?: string;
  variant?: 'primary' | 'secondary';
}

/**
 * CTA Button with automatic AddToCart tracking
 * Use this for all external links (WhatsApp, SaaS, payment pages)
 */
export default function TrackedCTA({
  href,
  children,
  className,
  productName,
  productId,
  service,
  lpVariant,
  value,
  currency = 'IDR',
  variant = 'primary',
}: TrackedCTAProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Determine destination type
    let destinationType = 'external';
    if (href.includes('wa.me') || href.includes('whatsapp')) {
      destinationType = 'whatsapp';
    } else if (href.includes('t.me') || href.includes('telegram')) {
      destinationType = 'telegram';
    } else if (href.includes('aitradepulse')) {
      destinationType = 'saas_app';
    }

    // Channel join (Telegram/WhatsApp) = PENDAFTARAN → Lead.
    // JANGAN AddToCart — itu untuk niat beli, bukan join gratis.
    if (destinationType === 'telegram' || destinationType === 'whatsapp') {
      trackLead({
        content_name: productName,
        content_id: productId || productName.toLowerCase().replace(/\s+/g, '-'),
        destination: destinationType === 'telegram' ? 'telegram_channel' : 'whatsapp_chat',
        destination_url: href,
      });
    } else {
      // External (SaaS/checkout) → niat beli = AddToCart
      trackAddToCart({
        content_name: productName,
        content_id: productId || productName.toLowerCase().replace(/\s+/g, '-'),
        content_type: 'product',
        value: value,
        currency: currency,
        destination: destinationType,
        destination_url: href,
      });

      // If there's a value, also track InitiateCheckout
      if (value && value > 0) {
        trackInitiateCheckout({
          content_name: productName,
          content_id: productId,
          value: value,
          currency: currency,
        });
      }
    }

    // A/B monitor: ctaClicked (explicit service/lpVariant props win;
    // otherwise derive from productName "… - LP{n} - …" + VilonaFX check,
    // else productId prefix). Skips plain <TrackedCTA> without attribution.
    const m = /LP(\d)/i.exec(productName);
    const variantNum = lpVariant ?? (m ? parseInt(m[1], 10) : undefined);
    const svcName =
      service ??
      (/VilonaFX/i.test(productName) ? 'vilonafx' : productId?.split('-')[0]);
    if (variantNum !== undefined && svcName) {
      pushLPEvent({
        event: 'ctaClicked',
        lpVariant: variantNum,
        service: svcName,
        placement: productName,
        url: href,
      });
    }

    // Continue with navigation (don't prevent default)
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
