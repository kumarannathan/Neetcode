import MagicBento, { type BentoCardProps } from '@/components/ui/MagicBento';
import { ExplorePremiumButton } from '@/components/landing/ExplorePremiumButton';

const practiceFeatures: BentoCardProps[] = [
  {
    label: 'Learn',
    title: 'Video Courses',
    description: '200+ in-depth lessons with video explanations.',
    color: '#060010',
  },
  {
    label: 'Train',
    title: 'Practice Problems',
    description: '300+ practice problems.',
    color: '#060010',
  },
  {
    label: 'Read',
    title: 'Written Guides',
    description:
      'Concise guides with diagrams and step-by-step breakdowns.',
    color: '#060010',
  },
  {
    label: 'Implement',
    title: 'Code Solutions',
    description:
      'Clean solutions across Python, Java, C++, JavaScript, C#, Go, Swift, and Kotlin.',
    color: '#060010',
  },
  {
    label: 'Assist',
    title: 'NeetBot Assistant',
    description:
      'Chat while solving for feedback and visual walkthroughs.',
    color: '#060010',
  },
  {
    label: 'Debug',
    title: 'AI Hints & Debug',
    description:
      'Get hints, bug analysis, and side-by-side fix diffs. AI powered.',
    color: '#060010',
  },
  {
    label: 'Target',
    title: 'Company Tagged Problems',
    description:
      'Filter by company and focus on real interview patterns. 100+ companies.',
    color: '#060010',
  },
  {
    label: 'Sync',
    title: 'Cloud Sync',
    description: 'Auto-save your code and continue across devices.',
    color: '#060010',
  },
];

export function PracticeCta() {
  return (
    <section id="practice" className="container-shell pb-24 lg:min-h-[100svh] lg:pb-10 lg:pt-8">
      <div className="grid items-start gap-8 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-10">
        <div className="max-w-xl pt-0 lg:mt-[0.5%]">
          <h2 className="section-title text-4xl tracking-[-0.06em] text-white sm:text-5xl">
            The <span className="text-gradient">best</span> resources for coding interviews.{' '}
            <span className="text-[#c89bff] underline decoration-[#c89bff]/80 underline-offset-4">Period.</span>
          </h2>
          <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Everything you need to prepare in one place: video lessons, interactive practice,
            detailed writeups, multi-language solutions, and AI support as you solve.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/dashboard"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black transition hover:translate-y-[-1px]"
            >
              Start Practicing
            </a>
            <ExplorePremiumButton />
          </div>
        </div>
        <div className="practice-bento-shell w-full">
          <MagicBento
            cards={practiceFeatures}
            textAutoHide={false}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
            disableAnimations={false}
          />
        </div>
      </div>
    </section>
  );
}
