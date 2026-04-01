import { CourseExplorer } from '@/components/landing/CourseExplorer';

export function CourseGrid() {
  return (
    <section id="courses" className="pb-24">
      <div className="mx-auto w-[min(1340px,calc(100vw-2rem))]">
        <h2 className="section-title text-4xl tracking-[-0.06em] text-white sm:text-5xl">
          Structured learning paths from{' '}
          <span className="text-gradient">fundamentals</span>
          {' '}to{' '}
          <span className="text-[#c89bff] underline decoration-[#c89bff]/80 underline-offset-4">advanced topics</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">
          Explore each learning path, compare what every track includes, and jump directly into the exact chapters,
          difficulty levels, and outcomes you want to focus on next.
        </p>

        <CourseExplorer />
      </div>
    </section>
  );
}
