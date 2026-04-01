import { Glyph } from '@/components/ui/Glyph';
import { dashboardStats } from '@/lib/mock-data';

export function TopBar() {
  const progress = Math.round((dashboardStats.xp / dashboardStats.xpGoal) * 100);

  return (
    <div className="panel-surface rounded-[1.8rem] px-4 py-4 sm:px-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3 rounded-full border border-white/8 bg-white/[0.03] px-4 py-3 text-white/55 lg:min-w-[19rem]"><Glyph name="search" className="h-4 w-4" /><span className="text-sm">Search problems, patterns, and courses...</span></div>
        <div className="flex flex-wrap items-center gap-3"><div className="rounded-full border border-[rgba(255,199,107,0.22)] bg-[rgba(255,199,107,0.1)] px-4 py-2 text-sm font-semibold text-[#ffd78b]">{dashboardStats.streak} day streak</div><div className="min-w-[14rem] rounded-[1.1rem] border border-white/8 bg-white/[0.03] px-4 py-3"><div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/38"><span>XP Progress</span><span>{progress}%</span></div><div className="mt-3 h-2 rounded-full bg-white/8"><div className="h-2 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-cyan))]" style={{ width: `${progress}%` }} /></div></div><div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(124,140,255,0.18),rgba(255,255,255,0.03))] text-sm font-bold text-white">{dashboardStats.avatar}</div></div>
      </div>
    </div>
  );
}
