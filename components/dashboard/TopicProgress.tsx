import { topicProgress } from '@/lib/mock-data';

export function TopicProgress() {
  return (
    <section className="panel-surface rounded-[1.8rem] p-5">
      <div><div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/40">Progress by topic</div><h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Pattern coverage</h3></div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">{topicProgress.map((item) => <div key={item.topic} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4"><div className="flex items-center gap-4"><div className="metric-ring h-20 w-20" style={{ background: `conic-gradient(${item.color} ${item.progress}%, rgba(255,255,255,0.08) 0)` }}><span className="text-sm font-semibold text-white">{item.progress}%</span></div><div><div className="text-lg font-semibold text-white">{item.topic}</div><div className="mt-1 text-sm text-white/55">{item.solved} solved</div></div></div></div>)}</div>
    </section>
  );
}
