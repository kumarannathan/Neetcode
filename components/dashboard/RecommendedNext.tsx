import { Glyph } from '@/components/ui/Glyph';
import { dashboardStats } from '@/lib/mock-data';

export function RecommendedNext() {
  return (
    <section className="panel-surface rounded-[1.8rem] p-5">
      <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/40">Recommended next</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{dashboardStats.recommended.title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/62">{dashboardStats.recommended.reason}</p>
      <div className="mt-6 rounded-[1.4rem] border border-[rgba(124,140,255,0.22)] bg-[rgba(124,140,255,0.08)] p-4 text-sm leading-7 text-white/74">Learn it now while trees are still fresh. This is the kind of follow-up problem that turns basic familiarity into pattern confidence.</div>
      <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]">Queue this problem<Glyph name="arrow" className="h-4 w-4" /></button>
    </section>
  );
}
