import { COLORS, sectionBase, innerBase, headingStyle } from './theme';
import type { Course } from './types';
import { ProgramCard } from './ProgramCard';

export function ProgramsSection({ courses, onDetail }: { courses: Course[]; onDetail: (c: Course) => void }) {
  return (
    <section id="programs" style={{ ...sectionBase, background: '#fff' }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: COLORS['accent-light'], color: COLORS.accent, fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
            Program Kelas
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Pilih Kelas yang Sesuai dengan Kebutuhanmu
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '520px', margin: '0 auto' }}>
            Semua kelas Rp 500.000 — investasi sekali, skill seumur hidup.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {courses.map((course) => (
            <div key={course.id} style={{ flex: '1 1 320px', maxWidth: '380px' }}>
              <ProgramCard course={course} onDetail={onDetail} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
