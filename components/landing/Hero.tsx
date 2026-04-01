import { DitherHero } from '@/components/backgrounds/DitherHero';
import { Glyph } from '@/components/ui/Glyph';
import { HeroCardSwap } from '@/components/landing/HeroCardSwap';
import CountUp from '@/components/ui/CountUp';

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-0">
      <DitherHero />
      <div className="hero-grid pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[44%] opacity-60 lg:block" />
      <div className="container-shell relative px-1 sm:px-0">
        <div className="grid min-h-[43rem] items-center gap-10 pb-10 pt-28 sm:pb-14 sm:pt-32 lg:min-h-[47rem] lg:grid-cols-[1.08fr_0.92fr] lg:pb-20 lg:pt-36">
          <div className="max-w-xl">
            <h1 className="section-title max-w-lg text-[3rem] leading-[0.92] tracking-[-0.07em] text-white sm:text-[4.2rem] lg:text-[5.2rem]">
              A Better Way to{' '}
              <span className="text-gradient">Prepare</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">Tech interview roadmaps trusted by engineers at Google, Meta, OpenAI, and other top tech companies.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#practice" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold !text-[#090b11] shadow-[0_10px_30px_rgba(255,255,255,0.14)] transition hover:translate-y-[-1px]">Start for Free<Glyph name="arrow" className="h-4 w-4 !text-[#090b11]" /></a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]">View Roadmap</a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">
                  <CountUp to={1} duration={1.6} />M+
                </div>
                <div className="mt-1 text-sm leading-6 text-white/55">Engineers prepared using roadmaps and problem lists.</div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">
                  <CountUp to={150} duration={1.8} />
                </div>
                <div className="mt-1 text-sm leading-6 text-white/55">The core problem set most learners rally around.</div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">
                  <CountUp to={7} duration={1.5} /> days
                </div>
                <div className="mt-1 text-sm leading-6 text-white/55">A workflow that makes consistency easier to sustain.</div>
              </div>
            </div>
          </div>
          <div
            className="relative lg:-ml-10 xl:-ml-32"
            style={{ transform: 'translateX(-32%)', paddingBottom: '25%', top: '-5%' }}
          >
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-[rgba(69,208,255,0.18)] blur-3xl lg:block" />
            <HeroCardSwap />
          </div>
        </div>
      </div>
    </section>
  );
}
