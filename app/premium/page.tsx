import Link from 'next/link';
import Grainient from '@/components/backgrounds/Grainient';

type Plan = {
  name: string;
  price: string;
  oldPrice: string;
  cadence: string;
  blurb: string;
  cta: string;
  perks: string[];
};

type Feature = {
  title: string;
  description: string;
  value: string;
};

type Story = {
  company: string;
  role: string;
  quote: string;
};

const plans: Plan[] = [
  {
    name: 'Lifetime',
    price: '$297',
    oldPrice: '$599',
    cadence: 'one-time payment',
    blurb: 'Best for engineers who want full access for the long term.',
    cta: 'Get Lifetime',
    perks: ['Everything, forever', 'All future content included', 'Private Discord community'],
  },
  {
    name: 'One-Year Access',
    price: '$119',
    oldPrice: '$199',
    cadence: 'auto-renew off by default',
    blurb: 'Great for focused interview prep over the next 12 months.',
    cta: 'Get One-Year',
    perks: ['Full access for 12 months', 'Includes future content', 'Private Discord community'],
  },
];

const comparisonRows = [
  { label: 'Video Courses', lifetime: '200+ Videos', yearly: '200+ Videos' },
  { label: 'Practice Problems', lifetime: '300+ Problems', yearly: '300+ Problems' },
  { label: 'Written Guides', lifetime: 'Detailed Articles', yearly: 'Detailed Articles' },
  { label: 'Code Solutions', lifetime: '8 Languages', yearly: '8 Languages' },
  { label: 'NeetBot Assistant', lifetime: 'Included', yearly: 'Included' },
  { label: 'AI Hints & Debug', lifetime: 'Included', yearly: 'Included' },
  { label: 'Company Tagged Problems', lifetime: '100+ Companies', yearly: '100+ Companies' },
  { label: 'Cloud Sync', lifetime: 'Cross-Device', yearly: 'Cross-Device' },
];

const features: Feature[] = [
  {
    title: 'Video Courses',
    description:
      'Learn from hours of in-depth video content covering data structures, algorithms, system design, and more. Each concept is explained clearly with visual animations and real coding examples.',
    value: '200+ Videos',
  },
  {
    title: 'Practice Problems',
    description:
      'Solve curated problems directly in your browser with our built-in code editor. Get instant feedback, run test cases, and track your progress as you work through the NeetCode 150 and beyond.',
    value: '300+ Problems',
  },
  {
    title: 'Written Guides',
    description:
      'Comprehensive articles that break down each topic with diagrams, code snippets, and step-by-step explanations. Perfect for review or when you prefer reading over watching.',
    value: 'Detailed Articles',
  },
  {
    title: 'Code Solutions',
    description:
      'Every problem comes with solutions in Python, Java, C++, JavaScript, C#, Go, Swift, and Kotlin. See exactly how to implement each algorithm with clean, well-commented code you can learn from.',
    value: '8 Languages',
  },
  {
    title: 'NeetBot Assistant',
    description:
      'Chat directly with NeetBot while solving problems to ask questions, get feedback and generate visual walkthroughs when you want to see your approach step-by-step.',
    value: 'NeetBot',
  },
  {
    title: 'AI Hints & Debug',
    description:
      'Stuck on a problem? Get intelligent hints that guide you toward the solution without giving it away. Debug your code with analysis that explains what went wrong, and see a side-by-side diff of your code and the suggested fix directly in the editor.',
    value: 'AI Powered',
  },
  {
    title: 'Company Tagged Problems',
    description:
      'Know which companies ask which questions. Filter problems by company tags to focus your prep on the exact questions asked at your target companies.',
    value: '100+ Companies',
  },
  {
    title: 'Cloud Sync',
    description:
      'Your code is automatically saved to the cloud. Switch between devices and pick up right where you left off. Never lose your progress again.',
    value: 'Cross-Device',
  },
];

const stories: Story[] = [
  {
    company: 'Meta',
    role: 'Machine Learning Engineer',
    quote:
      'Passed a FAANG interview loop at Meta for an MLE position. After failing at Google 10 years ago, DeepMind 4 years ago, and Meta a year ago, I was determined to stick the landing this time.',
  },
  {
    company: 'Amazon',
    role: 'SDE II',
    quote:
      'All the medium/hard exercises from the interviews were in the company tagged list, so it definitely helped a lot.',
  },
  {
    company: 'Google',
    role: 'Machine Learning Engineer',
    quote:
      "Cracked my final round at Google today! I used to be so scared of DSA. But now I'm more confident in my DSA skills than in my ML skills!",
  },
  {
    company: 'Amazon & Meta',
    role: 'Software Engineer',
    quote:
      'With ~1 month of NeetCode prep I was able to land two offers at Amazon and Meta! Worth every penny. Definitely recommending to my friends.',
  },
  {
    company: 'PayPal',
    role: 'Senior Software Engineer',
    quote:
      'Laid off on June 20th. Started the roadmap the very next day. Studied for 15 days straight. Received my offer on July 18th!',
  },
  {
    company: 'Amazon',
    role: 'SDE-1',
    quote:
      'I got a matrix BFS question that I had just gone over from the NeetCode course. I felt like LeBron dunking.',
  },
];

export default function PremiumPage() {
  return (
    <main className="page-shell relative isolate overflow-hidden pb-14">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-55">
        <Grainient className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(6,8,14,0.82),rgba(7,9,16,0.9)_42%,rgba(6,8,14,0.94))]" />
      <section className="container-shell relative z-10 pt-8">
        <div className="px-1 sm:px-2 lg:px-0">
          <header className="border-b border-white/10 pb-4">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="font-[family-name:var(--font-heading)] text-xl tracking-[-0.04em] text-white sm:text-2xl">
                NeetCode.io
              </Link>
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm font-medium text-white/82 transition hover:bg-white/[0.06]"
                >
                  Back
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </header>

          <div className="mt-10 border-b border-white/8 pb-8">
            <h1 className="section-title text-4xl tracking-[-0.06em] text-white sm:text-5xl lg:text-[3.7rem]">
              Choose a plan that is right for you
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-white/60">
              Premium interview prep with polished lessons, real practice workflows, and AI support that helps you ship better solutions faster.
            </p>
            <div className="mt-6 inline-flex rounded-xl border border-white/10 bg-white/[0.03] p-1">
              <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black">Annual pricing</button>
              <button className="rounded-lg px-4 py-2 text-sm font-medium text-white/70">Monthly pricing</button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {plans.map((plan) => (
              <article key={plan.name} className="border-b border-white/10 pb-6 lg:pb-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
                    <p className="mt-1 text-sm text-white/58">{plan.blurb}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-end gap-3">
                  <div className="text-5xl font-bold tracking-[-0.05em] text-white">{plan.price}</div>
                  <div className="pb-2 text-lg text-white/40 line-through">{plan.oldPrice}</div>
                </div>
                <div className="mt-1 text-sm text-white/58">{plan.cadence}</div>

                <ul className="mt-5 space-y-2 text-sm text-white/78">
                  {plan.perks.map((perk) => (
                    <li key={perk}>- {perk}</li>
                  ))}
                </ul>

                <button className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90">
                  {plan.cta}
                </button>
              </article>
            ))}
          </div>

          <div className="mt-4">
            <button className="rounded-xl border border-white/14 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]">
              Gift a Plan
            </button>
          </div>

          <div className="mt-10 overflow-x-auto border-y border-white/10 py-1">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-white">Features</th>
                  <th className="px-4 py-3 text-sm font-semibold text-white">Lifetime</th>
                  <th className="px-4 py-3 text-sm font-semibold text-white">One-Year Access</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-white/8">
                    <td className="px-4 py-3 text-sm text-white/82">{row.label}</td>
                    <td className="px-4 py-3 text-sm text-white/68">{row.lifetime}</td>
                    <td className="px-4 py-3 text-sm text-white/68">{row.yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container-shell relative z-10 pt-14">
        <h2 className="section-title text-3xl tracking-[-0.05em] text-white sm:text-4xl">Everything You Need to Succeed</h2>
        <div className="mt-7 grid gap-0 border-y border-white/8">
          {features.map((feature) => (
            <article key={feature.title} className="border-b border-white/8 py-5 last:border-b-0">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <div className="text-sm font-semibold text-white">{feature.value}</div>
              </div>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-white/70">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell relative z-10 pt-14">
        <h2 className="section-title text-3xl tracking-[-0.05em] text-white sm:text-4xl">Success Stories</h2>
        <div className="premium-stories-grid mt-7">
          {stories.map((story, index) => (
            <article key={`${story.company}-${index}`} className="premium-story-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-base font-semibold text-white">{story.company}</div>
                <div className="text-sm text-white/55">{story.role}</div>
              </div>
              <p className="mt-3 line-clamp-6 text-sm leading-6 text-white/72">"{story.quote}"</p>
            </article>
          ))}
        </div>
        <button className="mt-6 rounded-md border border-white/16 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]">
          Show More Stories
        </button>
      </section>

      <footer className="container-shell relative z-10 mt-16 border-t border-white/8 pt-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.2em] text-white/45">Common Questions</div>
          </div>
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.2em] text-white/45">Links</div>
            <div className="mt-3 space-y-2 text-sm text-white/72">
              <div>Blind 75</div>
              <div>NeetCode 150</div>
              <div>NeetCode 250</div>
              <div>How to use NeetCode Effectively</div>
            </div>
          </div>
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.2em] text-white/45">Social</div>
            <div className="mt-3 space-y-2 text-sm text-white/72">
              <div>YouTube</div>
              <div>LinkedIn</div>
              <div>Twitter</div>
            </div>
          </div>
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.2em] text-white/45">Contact</div>
            <div className="mt-3 text-sm text-white/72">support@neetcode.io</div>
          </div>
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.2em] text-white/45">Legal</div>
            <div className="mt-3 space-y-2 text-sm text-white/72">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/8 pt-5 text-sm text-white/45">
          Copyright © 2026 neetcode.io All rights reserved.
        </div>
      </footer>
    </main>
  );
}
