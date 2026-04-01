import { Glyph } from '@/components/ui/Glyph';
import { dashboardSidebar } from '@/lib/mock-data';

export function SidebarNav() {
  return (
    <aside className="panel-surface hidden rounded-[2rem] p-4 lg:flex lg:min-h-[calc(100vh-5rem)] lg:w-[17rem] lg:flex-col">
      <div className="flex items-center gap-3 border-b border-white/8 pb-5"><div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(124,140,255,0.3),rgba(255,255,255,0.04))]"><span className="font-[family-name:var(--font-heading)] text-lg text-white">N</span></div><div><div className="font-[family-name:var(--font-heading)] text-xl text-white">NeetCode</div><div className="text-xs uppercase tracking-[0.22em] text-white/35">Dashboard</div></div></div>
      <div className="mt-6 space-y-2">{dashboardSidebar.map((item, index) => { const active = index === 0; return <button key={item.label} type="button" className={`flex w-full items-center gap-3 rounded-[1.2rem] px-4 py-3 text-left transition ${active ? 'bg-[rgba(124,140,255,0.16)] text-white' : 'text-white/52 hover:bg-white/[0.04] hover:text-white/82'}`}><span className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${active ? 'border-[rgba(124,140,255,0.35)] bg-[rgba(124,140,255,0.12)]' : 'border-white/8 bg-white/[0.03]'}`}><Glyph name={item.icon} className="h-4 w-4" /></span><span className="font-medium">{item.label}</span></button>; })}</div>
      <div className="mt-auto rounded-[1.6rem] border border-[rgba(69,208,255,0.18)] bg-[linear-gradient(180deg,rgba(69,208,255,0.16),rgba(255,255,255,0.03))] p-4"><div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/40">This week</div><div className="mt-3 text-3xl font-bold text-white">6 / 7</div><p className="mt-2 text-sm leading-6 text-white/60">Practice days completed. Keep the streak warm and the dashboard calm.</p></div>
    </aside>
  );
}
