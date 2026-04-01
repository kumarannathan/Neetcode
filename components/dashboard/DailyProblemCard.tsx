import { Glyph } from '@/components/ui/Glyph';
import { dashboardStats } from '@/lib/mock-data';

export function DailyProblemCard() {
  return (
    <section className="panel-surface glow-ring rounded-[2rem] p-6">
      <div className="flex flex-wrap items-start justify-between gap-5"><div><div className="section-kicker">Daily Problem</div><h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">{dashboardStats.dailyProblem.title}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">A medium-level problem with enough bite to reinforce pattern fluency without turning today into a grind session.</p></div><div className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] px-4 py-3"><div className="text-[0.7rem] uppercase tracking-[0.22em] text-white/40">Estimate</div><div className="mt-2 text-lg font-semibold text-white">{dashboardStats.dailyProblem.estimate}</div></div></div>
      <div className="mt-6 flex flex-wrap gap-2">{[dashboardStats.dailyProblem.pattern, dashboardStats.dailyProblem.difficulty, 'NeetCode 150'].map((tag) => <span key={tag} className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/65">{tag}</span>)}</div>
      <div className="mt-8 flex flex-wrap gap-3"><button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#090b11]">Continue Problem<Glyph name="arrow" className="h-4 w-4" /></button><button className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white">Open Roadmap</button></div>
    </section>
  );
}
