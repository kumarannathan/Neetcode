'use client';

import { Card, CardSwap } from '@/components/ui/CardSwap';
import CountUp from '@/components/ui/CountUp';
import { FolderPreview } from '@/components/ui/FolderPreview';
import { Glyph } from '@/components/ui/Glyph';
import { heroRoadmapNodes } from '@/lib/mock-data';

export function HeroCardSwap() {
  return (
    <CardSwap width={460} height={320} cardDistance={54} verticalDistance={58} delay={4400} pauseOnHover={false}>
      <Card customClass="p-5 sm:p-6">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-white/40">NeetCode 150</div>
              <div className="mt-2 text-3xl font-bold text-white">
                <CountUp to={51} duration={1.7} />/150
              </div>
            </div>
            <div className="rounded-full border border-[rgba(124,140,255,0.28)] bg-[rgba(124,140,255,0.14)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
              Continue
            </div>
          </div>
          <div className="mt-5 rounded-[1.6rem] border border-white/8 bg-[rgba(255,255,255,0.04)] p-4">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-white/38">Next problem</div>
            <div className="mt-3 text-xl font-semibold text-white">Product of Array Except Self</div>
            <div className="mt-2 text-sm leading-6 text-white/60">
              The exact kind of medium-difficulty pattern that decides whether arrays feel solved or still fuzzy.
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {heroRoadmapNodes.map((node) => (
                <span
                  key={node}
                  className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70"
                >
                  {node}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card customClass="p-5 sm:p-6">
        <div className="flex h-full flex-col justify-between">
          <div className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(124,140,255,0.2),rgba(255,255,255,0.03))] p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-white/72">
              <Glyph name="spark" className="h-4 w-4 text-[var(--accent-cyan)]" />
              Roadmap checkpoint
            </div>
            <div className="mt-3 text-2xl font-semibold text-white">Arrays and Hashing almost complete.</div>
            <div className="mt-4 text-sm leading-6 text-white/62">
              You are through the bulk of the high-frequency array problems and ready for more reconstruction-style questions.
            </div>
            <div className="mt-5 h-2 rounded-full bg-white/8">
              <div className="h-2 w-[76%] rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-cyan))]" />
            </div>
          </div>

          <div className="mt-4 rounded-[1.6rem] border border-white/8 bg-[rgba(255,255,255,0.04)] p-4">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-white/38">Momentum</div>
            <div className="mt-3 text-lg font-semibold text-white">
              <CountUp to={3} duration={1.3} /> day streak
            </div>
            <div className="mt-2 text-sm leading-6 text-white/58">
              Consistency compounds faster when the next step is obvious.
            </div>
          </div>
        </div>
      </Card>

      <Card customClass="p-5 sm:p-6">
        <div className="flex h-full flex-col justify-between">
          <div className="rounded-[1.6rem] border border-white/8 bg-[rgba(255,255,255,0.04)] p-4">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-white/38">Study surface</div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <div>
                <div className="text-lg font-semibold text-white">Structured course layers</div>
                <div className="mt-2 text-sm leading-6 text-white/58">
                  Designed to feel like a serious product, not a spreadsheet of links.
                </div>
              </div>
              <FolderPreview color="#7c8cff" papers={['NeetCode 150', 'Advanced Algorithms', 'System Design']} />
            </div>
          </div>

          <div className="mt-4 rounded-[1.6rem] border border-white/8 bg-[rgba(255,255,255,0.04)] p-4">
            <div className="text-[0.7rem] uppercase tracking-[0.22em] text-white/38">Recommended next</div>
            <div className="mt-3 text-lg font-semibold text-white">Binary Tree Right Side View</div>
            <div className="mt-2 text-sm leading-6 text-white/58">
              A clean follow-up problem once you want to pivot from arrays into trees.
            </div>
          </div>
        </div>
      </Card>
    </CardSwap>
  );
}
