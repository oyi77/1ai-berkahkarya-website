'use client';

import React from 'react';
import Layout from '@/components/Layout';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

interface RawHtmlLPProps {
  html: string;
  title: string;
  description: string;
  trackingKey: string;
}

/**
 * Renders raw HTML inside Layout + tracking wrapper.
 * For marketing/creative teams to drop standalone landing page HTML.
 * The HTML must include all its own <style> and structure.
 *
 * Usage: pass the HTML content from a file or inline string.
 */
export default function RawHtmlLP({
  html,
  title,
  description,
  trackingKey,
}: RawHtmlLPProps) {
  useEngagementTracking(trackingKey, '0', trackingKey.toLowerCase().replace(/\s+/g, '-'));

  return (
    <Layout title={title} description={description}>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ all: 'initial', display: 'contents' }}
      />
    </Layout>
  );
}
