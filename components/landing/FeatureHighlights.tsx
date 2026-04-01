import { Glyph } from '@/components/ui/Glyph';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { featureHighlights } from '@/lib/mock-data';

export function FeatureHighlights() {
  return (
    <section id="features" className="container-shell pb-20">
      <div className="mb-8 max-w-2xl">
        <div className="section-kicker">What makes the workflow work</div>
        <h2 className="section-title mt-5 text-4xl tracking-[-0.06em] text-white sm:text-5xl">
          Structured prep with a{' '}
          <span className="text-gradient">strong point of view.</span>
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-white/62">The redesign keeps the original value proposition but packages it like a serious career tool: guided, data-rich, and calm under pressure.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">{featureHighlights.map((feature) => <SpotlightCard key={feature.title} className="panel-surface rounded-[1.8rem] p-6" spotlightColor="rgba(124, 140, 255, 0.18)"><div className="relative z-10"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(124,140,255,0.24)] bg-[rgba(124,140,255,0.14)] text-[var(--accent-cyan)]"><Glyph name={feature.icon as 'roadmap' | 'play' | 'layers'} className="h-5 w-5" /></div><div className="mt-6 text-[0.72rem] uppercase tracking-[0.24em] text-white/42">{feature.eyebrow}</div><h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{feature.title}</h3><p className="mt-4 text-sm leading-7 text-white/64">{feature.description}</p></div></SpotlightCard>)}</div>
    </section>
  );
}
