import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import Layout from '@/components/Layout';
import type { Course, Locale } from '@/components/academy/types';
import { COURSES } from '@/components/academy/data';
import { HeroSection } from '@/components/academy/HeroSection';
import { ValuePropsSection } from '@/components/academy/ValuePropsSection';
import { CourseCatalogSection } from '@/components/academy/CourseCatalogSection';
import { FooterCTA } from '@/components/academy/FooterCTA';
import { CourseModal } from '@/components/academy/CourseModal';

export type { Course, Locale };

/* ─── Main Page ─── */

export default function AcademyPage({ locale }: { locale: Locale }) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const scrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout
      title="Berkah Karya Academy — Kuasai Skill Digital dari Praktisi"
      description="Kursus online AI, Meta Ads, Affiliate Marketing, dan AI Coding. Belajar langsung dari praktisi. Hanya Rp 500.000 per kelas."
      keywords="kursus AI, belajar AI, meta ads course, affiliate marketing, AI coding, kursus online Indonesia"
    >
      <HeroSection scrollToCourses={scrollToCourses} />
      <ValuePropsSection />
      <CourseCatalogSection courses={COURSES} onDetail={setSelectedCourse} />

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
        }}
      />

      <FooterCTA courses={COURSES} />

      {/* Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </Layout>
  );
}

/* ─── Static Props / Paths ─── */

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: params?.locale ?? 'id' },
});
