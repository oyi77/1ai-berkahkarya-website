'use client';

import React from 'react';
import Layout from '@/components/Layout';
import UrgencyBanner, { type UrgencyBannerProps } from './UrgencyBanner';
import PricingCard, { type PricingTier } from './PricingCard';
import FAQSection, { type FAQItem } from './FAQSection';
import TestimonialGrid, { type Testimonial } from './TestimonialGrid';
import CompareTable, { type CompareRow } from './CompareTable';
import b from './_lp-base.module.css';

export interface LPContent {
  serviceName: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  hero: {
    badge?: { id: string; en: string };
    title: { id: string; en: string };
    subtitle: { id: string; en: string };
    cta: { id: string; en: string };
    ctaLink: string;
    trustItems: { id: string[]; en: string[] };
  };
  problems?: {
    title: { id: string; en: string };
    items: { icon: string; title: { id: string; en: string }; desc: { id: string; en: string } }[];
  };
  features?: {
    title: { id: string; en: string };
    items: {
      icon: string;
      title: { id: string; en: string };
      desc: { id: string; en: string };
    }[];
  };
  compareTable?: {
    title?: { id: string; en: string };
    beforeLabel?: { id: string; en: string };
    afterLabel?: { id: string; en: string };
    rows: CompareRow[];
  };
  howItWorks?: {
    title: { id: string; en: string };
    steps: {
      title: { id: string; en: string };
      desc: { id: string; en: string };
    }[];
  };
  pricing?: {
    title: { id: string; en: string };
    tiers: PricingTier[];
  };
  testimonials?: {
    title?: { id: string; en: string };
    items: Testimonial[];
  };
  faq?: {
    title?: { id: string; en: string };
    items: FAQItem[];
  };
  finalCta: {
    title: { id: string; en: string };
    subtitle: { id: string; en: string };
    cta: { id: string; en: string };
    ctaLink: string;
    guarantee?: { id: string; en: string };
  };
  urgency?: UrgencyBannerProps;
  noindex?: boolean;
  jsonLd?: object;
}

interface ServiceLPProps {
  content: LPContent;
  locale?: string;
}

export default function ServiceLP({ content, locale = 'id' }: ServiceLPProps) {
  const t = (obj: { id: string; en: string } | undefined) =>
    obj ? (locale === 'id' ? obj.id : obj.en) : '';

  return (
    <Layout
      title={t(content.title)}
      description={t(content.description)}
      noindex={content.noindex}
      jsonLd={content.jsonLd}
    >
      {/* ── Urgency Banner ── */}
      {content.urgency && <UrgencyBanner locale={locale} {...content.urgency} />}

      <div className={b.wrapper}>
        {/* ── Hero ── */}
        <section className={b.hero}>
          <div className={b.heroInner}>
            {content.hero.badge && (
              <div className={b.badge}>
                <span className={b.badgeDot} />
                {t(content.hero.badge)}
              </div>
            )}
            <h1 className={b.title}>
              {t(content.hero.title)}
            </h1>
            <p className={b.subtitle}>{t(content.hero.subtitle)}</p>
            <div className={b.ctaRow}>
              <a href={content.hero.ctaLink} className={b.btnPrimary}>
                {t(content.hero.cta)}
              </a>
            </div>
            <div className={b.trustStrip}>
              {(locale === 'id' ? content.hero.trustItems.id : content.hero.trustItems.en).map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Problem Section ── */}
        {content.problems && (
          <section className={b.problemSection}>
            <div className={b.container}>
              <h2 className={b.sectionTitle}>{t(content.problems.title)}</h2>
              <div className={b.problemGrid}>
                {content.problems.items.map((item, i) => (
                  <div key={i} className={b.problemCard}>
                    <div className={b.problemIcon}>{item.icon}</div>
                    <h3>{t(item.title)}</h3>
                    <p>{t(item.desc)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Features ── */}
        {content.features && (
          <section className={b.section}>
            <div className={b.container}>
              <h2 className={b.sectionTitle}>{t(content.features.title)}</h2>
              {content.features.items.length <= 4 ? (
                <div className={b.grid4}>
                  {content.features.items.map((item, i) => (
                    <div key={i} className={b.card}>
                      <div className={b.cardIcon}>{item.icon}</div>
                      <h3>{t(item.title)}</h3>
                      <p>{t(item.desc)}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={b.grid3}>
                  {content.features.items.map((item, i) => (
                    <div key={i} className={b.card}>
                      <div className={b.cardIcon}>{item.icon}</div>
                      <h3>{t(item.title)}</h3>
                      <p>{t(item.desc)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── Compare Table ── */}
        {content.compareTable && (
          <CompareTable
            locale={locale}
            rows={content.compareTable.rows}
            title={content.compareTable.title}
            beforeLabel={content.compareTable.beforeLabel}
            afterLabel={content.compareTable.afterLabel}
          />
        )}

        {/* ── How It Works ── */}
        {content.howItWorks && (
          <section className={b.stepsSection}>
            <div className={b.container}>
              <h2 className={b.sectionTitle}>{t(content.howItWorks.title)}</h2>
              <div className={b.stepsGrid}>
                {content.howItWorks.steps.map((step, i) => (
                  <div key={i} className={b.stepItem}>
                    <div className={b.stepNumber}>{i + 1}</div>
                    <h3>{t(step.title)}</h3>
                    <p>{t(step.desc)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Pricing ── */}
        {content.pricing && (
          <section className={b.pricingSection}>
            <div className={b.container}>
              <h2 className={b.sectionTitle}>{t(content.pricing.title)}</h2>
              <div className={b.pricingGrid}>
                {content.pricing.tiers.map((tier, i) => (
                  <PricingCard key={i} tier={tier} locale={locale} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Testimonials ── */}
        {content.testimonials && (
          <TestimonialGrid
            locale={locale}
            testimonials={content.testimonials.items}
            title={content.testimonials.title}
          />
        )}

        {/* ── FAQ ── */}
        {content.faq && (
          <FAQSection
            locale={locale}
            items={content.faq.items}
            title={content.faq.title}
          />
        )}

        {/* ── Final CTA ── */}
        <section className={b.finalCta}>
          <div className={b.container}>
            <h2 className={b.sectionTitle}>{t(content.finalCta.title)}</h2>
            <p className={b.subtitle}>{t(content.finalCta.subtitle)}</p>
            <div className={b.ctaRow}>
              <a href={content.finalCta.ctaLink} className={b.btnPrimary}>
                {t(content.finalCta.cta)}
              </a>
            </div>
            {content.finalCta.guarantee && (
              <div className={b.guarantee}>
                <span className={b.guaranteeIcon}>🛡️</span>
                {t(content.finalCta.guarantee)}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ── Mobile Sticky CTA ── */}
      <div className={b.mobileStickyCta}>
        <a href={content.hero.ctaLink}>
          {t(content.hero.cta)}
        </a>
        <small>{locale === 'id' ? 'Respons cepat 24 jam' : 'Fast response 24/7'}</small>
      </div>
    </Layout>
  );
}
