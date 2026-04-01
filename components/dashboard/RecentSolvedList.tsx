import { recentSolved } from '@/lib/mock-data';

export function RecentSolvedList() {
  return (
    <section className="panel-surface rounded-[1.8rem] p-5">
      <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/40">Recently solved</div>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Recent momentum</h3>
      <div className="mt-6 space-y-3">{recentSolved.map((problem) => <div key={problem.title} className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4"><div><div className="font-semibold text-white">{problem.title}</div><div className="mt-1 text-sm text-white/48">{problem.runtime}</div></div><span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/62">{problem.difficulty}</span></div>)}</div>
    </section>
  );
}
