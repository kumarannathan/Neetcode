import Image from 'next/image';
import { founderStory } from '@/lib/mock-data';

export function FounderStory() {
  return (
    <section className="container-shell pb-24">
      <div className="grid gap-8 rounded-[2rem] border border-white/8 bg-white/[0.02] px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="flex flex-col justify-between"><div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(124,140,255,0.16),rgba(255,255,255,0.03))] p-6"><div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/40">{founderStory.role}</div><div className="relative mt-6 h-[25rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#11182a]"><Image src="/navi.png" alt="Navi" fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 28rem" /></div><div className="mt-4 text-xl font-semibold text-white">{founderStory.name}</div></div><div className="mt-4 flex flex-wrap gap-2">{founderStory.previous.map((company) => <span key={company} className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-sm text-white/65">{company}</span>)}</div></div>
        <div><div className="section-kicker">Navi - Creator of NeetCode</div><h2 className="section-title mt-5 text-4xl tracking-[-0.06em] text-white sm:text-5xl">{founderStory.heading}</h2><div className="mt-6 space-y-5 text-base leading-8 text-white/66">{founderStory.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
      </div>
    </section>
  );
}
