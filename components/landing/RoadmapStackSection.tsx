const stackCards = [
  { title: 'Arrays & Hashing', progress: 76 },
  { title: 'Two Pointers', progress: 70 },
  { title: 'Stack', progress: 62 },
  { title: 'Linked List', progress: 74 },
  { title: 'Sliding Window', progress: 34 },
  { title: 'Binary Search', progress: 68 },
  { title: 'Trees', progress: 58 },
  { title: 'Tries', progress: 4 },
  { title: 'Heap / Priority Queue', progress: 41 },
  { title: 'Backtracking', progress: 92 },
];

const palettes = [
  'linear-gradient(165deg,#e5d7ff 0%,#d4c0ff 100%)',
  'linear-gradient(165deg,#6152ff 0%,#6d5dff 100%)',
  'linear-gradient(165deg,#ffd95f 0%,#ffd15a 100%)',
  'linear-gradient(165deg,#9de7ca 0%,#7fddb8 100%)',
  'linear-gradient(165deg,#ffc2cf 0%,#ffacc0 100%)',
];

export function RoadmapStackSection() {
  return (
    <section id="roadmap-stack" className="container-shell pb-16">
      <h2 className="section-title text-4xl tracking-[-0.06em] text-white sm:text-5xl">
        Neetcode Roadmap
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-white/62">
        An indepth look at our programs chapters and content.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stackCards.map((card, index) => {
          const isDark = index % palettes.length === 1;
          return (
            <article
              key={card.title}
              className="rounded-[20px] border border-white/20 px-4 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
              style={{
                background: palettes[index % palettes.length],
              }}
            >
              <div
                className={`truncate text-[1rem] font-semibold tracking-[-0.02em] ${
                  isDark ? 'text-white' : 'text-[#1a1b20]'
                }`}
              >
                {card.title}
              </div>
              <div className={`mt-3 h-2.5 w-full overflow-hidden rounded-full ${isDark ? 'bg-white/35' : 'bg-black/20'}`}>
                <div className="h-full rounded-full bg-[linear-gradient(90deg,#2bd79e,#87efc8)]" style={{ width: `${card.progress}%` }} />
              </div>
              <div className={`mt-2 text-xs font-medium ${isDark ? 'text-white/85' : 'text-[#1f2127]/82'}`}>{card.progress}% complete</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
