'use client';

import { useState } from 'react';
import styles from './_lp-base.module.css';

export interface FAQItem {
  q: { id: string; en: string };
  a: { id: string; en: string };
}

interface FAQSectionProps {
  locale?: string;
  items: FAQItem[];
  title?: { id: string; en: string };
}

export default function FAQSection({
  locale = 'id',
  items,
  title,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultTitle = locale === 'id' ? 'Pertanyaan Umum (FAQ)' : 'Frequently Asked Questions';
  const sectionTitle = title ? (locale === 'id' ? title.id : title.en) : defaultTitle;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: locale === 'id' ? item.q.id : item.q.en,
      acceptedAnswer: {
        '@type': 'Answer',
        text: locale === 'id' ? item.a.id : item.a.en,
      },
    })),
  };

  return (
    <section className={styles.faqSection}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.faqList}>
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          const question = locale === 'id' ? item.q.id : item.q.en;
          const answer = locale === 'id' ? item.a.id : item.a.en;

          return (
            <div
              key={i}
              className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{question}</span>
                <span className={styles.faqToggle}>{isOpen ? '−' : '+'}</span>
              </button>
              <div
                className={styles.faqAnswer}
                style={{
                  maxHeight: isOpen ? '500px' : '0',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p>{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
