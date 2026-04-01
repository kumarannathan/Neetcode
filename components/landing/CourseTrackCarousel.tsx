'use client';

type Course = {
  title: string;
  description: string;
  coverTitle: string;
  tags: string[];
  image?: string;
};

type CourseTrackCarouselProps = {
  label: string;
  color: string;
  courses: Course[];
};

const palettes = [
  { bg: 'linear-gradient(165deg,#e5d7ff 0%,#d4c0ff 100%)', text: '#18191f' },
  { bg: 'linear-gradient(165deg,#6152ff 0%,#6d5dff 100%)', text: '#ffffff' },
  { bg: 'linear-gradient(165deg,#ffd95f 0%,#ffd15a 100%)', text: '#171717' },
  { bg: 'linear-gradient(165deg,#9de7ca 0%,#7fddb8 100%)', text: '#171717' },
  { bg: 'linear-gradient(165deg,#ffc2cf 0%,#ffacc0 100%)', text: '#18191f' },
];

export function CourseTrackCarousel({ label, courses }: CourseTrackCarouselProps) {
  const hasTwoCards = courses.length === 2;

  return (
    <div className="mx-auto max-w-[980px]">
      <p className="mb-5 text-xs uppercase tracking-[0.14em] text-white/45">{label}</p>
      <div
        className={`grid gap-5 md:grid-cols-2 ${
          hasTwoCards ? 'mx-auto max-w-[760px] lg:grid-cols-2' : 'lg:grid-cols-3'
        }`}
      >
        {courses.map((course, index) => {
          const palette = palettes[index % palettes.length];
          return (
            <article
              key={`${label}-${course.title}`}
              className="relative min-h-[18rem] overflow-hidden rounded-[2rem] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition-transform duration-200 hover:-translate-y-1"
              style={{
                background: palette.bg,
                color: palette.text,
                transform: `rotate(${index % 2 === 0 ? '-1.2deg' : '1.1deg'})`,
              }}
            >
              <div className="absolute left-4 top-3 h-10 w-10 rounded-full bg-white/50" />
              <div className="absolute right-5 top-4 h-14 w-14 rounded-full border-[6px] border-white/35" />
              <h3 className="relative z-10 h-[2.15rem] max-w-full overflow-hidden pr-2 text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] whitespace-nowrap text-ellipsis">
                {course.title}
              </h3>
              <p className="relative z-10 mt-4 max-w-[30ch] text-[1rem] leading-6 opacity-85">
                {course.description}
              </p>
              <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={`${course.title}-${tag}`}
                    className="rounded-full bg-black/12 px-2.5 py-1 text-[11px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
