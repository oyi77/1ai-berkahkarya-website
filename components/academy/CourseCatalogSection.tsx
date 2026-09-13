import type { Course } from './types';
import { sectionStyle, innerStyle } from './styles';
import { CourseCard } from './CourseCard';

export function CourseCatalogSection({
  courses,
  onDetail,
}: {
  courses: Course[];
  onDetail: (course: Course) => void;
}) {
  return (
    <section
      id="courses"
      style={{ ...sectionStyle, padding: '4rem 1.5rem 5rem' }}
    >
      <div style={innerStyle}>
        <h2
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
          }}
        >
          Pilih Kelas yang Sesuai dengan Kebutuhanmu
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.9rem',
            marginBottom: '2.5rem',
          }}
        >
          Semua kelas Rp 500.000 —{' '}
          <span style={{ color: '#a5b4fc' }}>investasi sekali, skill seumur hidup</span>
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onDetail={() => onDetail(course)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
