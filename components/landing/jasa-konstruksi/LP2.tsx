'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import styles from '../LandingPage.module.css';
import TrackedCTA from '../TrackedCTA';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';

export default function LP2({ locale = 'id' }: { locale?: string }) {
  useEngagementTracking('Jasa Konstruksi - LP2', '0', 'jasa-konstruksi-lp2');

  return (
    <Layout
      title={locale === 'en'
        ? "Design & Build — Complete Construction Solution | BerkahKarya"
        : "Desain & Bangun — Solusi Konstruksi Lengkap | BerkahKarya"
      }
      description={locale === 'en'
        ? "From working drawings to finished interiors. Architect, RAB, construction, interior — all handled under one roof."
        : "Dari gambar kerja sampai interior jadi. Arsitek, RAB, konstruksi, interior — semua kami handle satu atap."
      }
    >
      <div className={styles.wrapper}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>KONSTRUKSI &amp; DESAIN</span>
            </div>
            <h1 className={styles.title}>
              {locale === 'en' ? <>Design + Build<br/></> : <>Desain + Bangun<br/></>}
              <span className={styles.gradientText}>
                {locale === 'en' ? 'One Roof, Made Easy' : 'Satu Atap, Bikin Hidup'}
              </span>
            </h1>

            <p className={styles.subtitle}>
              {locale === 'en'
                ? 'From working drawings to finished interiors. Architect, RAB, construction, interior — we handle it all.'
                : 'Dari gambar kerja sampai interior jadi. Arsitek, RAB, konstruksi, interior — semua kami handle.'}
            </p>

            <div className={styles.ctaRow}>
              <TrackedCTA
                href="https://wa.me/6285732740006"
                className={styles.btnPrimary}
                productName="Jasa Konstruksi - LP2 Hero"
                productId="jasa-konstruksi-lp2-hero"
              >
                {locale === 'en' ? 'Consult Now' : 'Konsultasi Sekarang'}
              </TrackedCTA>
            </div>

            <div className={styles.trustStrip}>
              <span>{locale === 'en' ? '10+ Years Experience' : '10+ Tahun Pengalaman'}</span>
              <span>{locale === 'en' ? '100+ Projects' : '100+ Proyek'}</span>
              <span>{locale === 'en' ? 'Free Design' : 'Gratis Desain'}</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <div className={styles.statNum}>10+</div>
                <div className={styles.statLabel}>{locale === 'en' ? 'Years Experience' : 'Tahun Pengalaman'}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>100+</div>
                <div className={styles.statLabel}>{locale === 'en' ? 'Projects Done' : 'Proyek Terselesaikan'}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>98%</div>
                <div className={styles.statLabel}>{locale === 'en' ? 'Client Satisfied' : 'Client Puas'}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>{locale === 'en' ? 'Free' : 'Gratis'}</div>
                <div className={styles.statLabel}>{locale === 'en' ? 'Consultation & Design' : 'Konsultasi & Desain'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.section} style={{ background: 'var(--dark-hero)' }}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'Our Services' : 'Layanan Kami'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'We Handle It ' : 'Kami Urus Semua, '}
              <span className={styles.gradientText}>{locale === 'en' ? 'All Under One Roof' : 'Satu Atap'}</span>
            </h2>

            <div className={styles.grid4}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🏗️</div>
                <h3>{locale === 'en' ? 'New Build' : 'Bangun Baru'}</h3>
                <p>{locale === 'en'
                  ? 'Houses, offices, shop-houses. From zero to finished.'
                  : 'Rumah, kantor, ruko. Dari nol sampai jadi.'}
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🔨</div>
                <h3>{locale === 'en' ? 'Renovation' : 'Renovasi'}</h3>
                <p>{locale === 'en'
                  ? 'Change the look & function of your home without total demolition.'
                  : 'Ubah tampilan & fungsi rumah tanpa bongkar total.'}
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🛋️</div>
                <h3>{locale === 'en' ? 'Interior' : 'Interior'}</h3>
                <p>{locale === 'en'
                  ? 'Interior design for living rooms, bedrooms, cafes, offices.'
                  : 'Desain interior ruang tamu, kamar, cafe, kantor.'}
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>📐</div>
                <h3>{locale === 'en' ? 'RAB & 3D' : 'RAB & 3D'}</h3>
                <p>{locale === 'en'
                  ? 'Detailed working drawings & realistic 3D visuals before construction.'
                  : 'Gambar kerja detail & visual 3D realistis sebelum bangun.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{locale === 'en' ? 'Client Testimonial' : 'Testimoni Client'}</span>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'What Our ' : 'Kata '}
              <span className={styles.gradientText}>{locale === 'en' ? 'Clients Say' : 'Mereka'}</span>
            </h2>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div className={styles.testiCard}>
                <div className={styles.testiStars}>★★★★★</div>
                <blockquote>
                  {locale === 'en'
                    ? '"A 2-story 250m² house finished on schedule. The RAB was detailed — no surprise costs. The result matched the 3D render perfectly."'
                    : '"Rumah 2 lantai 250m² selesai sesuai timeline. RAB-nya detail — tidak ada biaya mendadak. Hasilnya sesuai render 3D."'}
                </blockquote>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar}>BS</div>
                  <div>
                    <strong>Budi Santoso</strong>
                    <span>{locale === 'en' ? 'South Jakarta' : 'Jakarta Selatan'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {locale === 'en' ? 'Want a ' : 'Ingin '}
              <span className={styles.gradientText}>{locale === 'en' ? 'Free Consultation?' : 'Konsultasi Dulu?'}</span>
            </h2>
            <p className={styles.subtitle}>
              {locale === 'en'
                ? 'Free. Discuss your needs, location, and budget. Our team is ready to help.'
                : 'Gratis. Diskusi kebutuhan, lokasi, dan budget. Tim kami siap bantu.'}
            </p>
            <TrackedCTA
              href="https://wa.me/6285732740006"
              className={styles.btnPrimary}
              productName="Jasa Konstruksi - LP2 Footer"
              productId="jasa-konstruksi-lp2-footer"
            >
              {locale === 'en' ? 'Yes, I Want a Free Consultation' : 'Ya, Saya Mau Konsultasi Gratis'}
            </TrackedCTA>
          </div>
        </section>
      </div>
    </Layout>
  );
}
