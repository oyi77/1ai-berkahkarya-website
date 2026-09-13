import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import { useEngagementTracking } from '@/hooks/useEngagementTracking';
import type { Course, Locale } from '@/components/academy-lp/types';
import { COURSES } from '@/components/academy-lp/data';
import { Navbar } from '@/components/academy-lp/Navbar';
import { HeroSection } from '@/components/academy-lp/HeroSection';
import { TrustBar } from '@/components/academy-lp/TrustBar';
import { ProgramsSection } from '@/components/academy-lp/ProgramsSection';
import { SiapaCocokSection } from '@/components/academy-lp/SiapaCocokSection';
import { HowItWorks } from '@/components/academy-lp/HowItWorks';
import { YangKamuDapatkanSection } from '@/components/academy-lp/YangKamuDapatkanSection';
import { ValuePropsSection } from '@/components/academy-lp/ValuePropsSection';
import { CredibilitySection } from '@/components/academy-lp/CredibilitySection';
import { TestimonialsSection } from '@/components/academy-lp/TestimonialsSection';
import { ClassRecordingsSection } from '@/components/academy-lp/ClassRecordingsSection';
import { CommunitySection } from '@/components/academy-lp/CommunitySection';
import { ClosingCTA } from '@/components/academy-lp/ClosingCTA';
import { AcademyFooter } from '@/components/academy-lp/AcademyFooter';
import { CourseModal } from '@/components/academy-lp/CourseModal';
import { RevealedSection } from '@/components/academy-lp/Reveal';
import { GlobalStyles } from '@/components/academy-lp/GlobalStyles';

export type { Course, Locale };

/* ─── Main Page ─── */

export default function AcademyLPPage({ locale }: { locale: Locale }) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  useEngagementTracking('BerkahKarya Academy', '500000', 'academy');

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <RevealedSection>
          <HeroSection />
        </RevealedSection>

        <RevealedSection delay="0.1s">
          <TrustBar />
        </RevealedSection>

        <RevealedSection delay="0.15s">
          <ProgramsSection courses={COURSES} onDetail={setSelectedCourse} />
        </RevealedSection>

        <RevealedSection delay="0.1s">
          <SiapaCocokSection />
        </RevealedSection>

        <RevealedSection delay="0.1s">
          <HowItWorks />
        </RevealedSection>

        <RevealedSection delay="0.15s">
          <YangKamuDapatkanSection />
        </RevealedSection>

        <RevealedSection delay="0.15s">
          <ValuePropsSection />
        </RevealedSection>
        <RevealedSection delay="0.1s">
          <CredibilitySection />
        </RevealedSection>

        <RevealedSection delay="0.15s">
          <TestimonialsSection />
        </RevealedSection>

        <RevealedSection delay="0.1s">
          <ClassRecordingsSection />
        </RevealedSection>

        <RevealedSection delay="0.1s">
          <CommunitySection />
        </RevealedSection>

        <RevealedSection delay="0.15s">
          <ClosingCTA />
        </RevealedSection>
      </main>
      <AcademyFooter />

      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </>
  );
}

/* ─── Static Props / Paths ─── */

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});
