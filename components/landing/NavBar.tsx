import Link from 'next/link';

import { MobileMenu } from '@/components/navigation/MobileMenu';

function LogoMark() {
  return (
    <span className="font-[family-name:var(--font-heading)] text-[1.45rem] tracking-[-0.06em] text-white">
      NeetCode.io
    </span>
  );
}

export function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 pt-5 sm:pt-6">
      <div className="container-shell">
        <nav className="mx-auto flex w-full items-center justify-between rounded-full border border-white/10 bg-[rgba(7,10,18,0.52)] px-5 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:px-6">
          <Link href="/" className="shrink-0">
            <LogoMark />
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/sign-in"
              className="rounded-full px-4 py-2.5 text-sm font-medium text-white/68 transition hover:bg-white/[0.04] hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="/premium"
              className="relative z-10 rounded-full border border-white/80 bg-white px-4 py-2.5 text-sm font-semibold !text-black shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition hover:scale-[1.02] hover:bg-[#f4f4f4]"
            >
              Get Pro
            </Link>
            <Link
              href="/dashboard"
              aria-label="Open dashboard"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(160deg,rgba(126,146,255,0.26),rgba(86,223,255,0.2))] shadow-[0_10px_26px_rgba(65,122,255,0.24)] transition hover:scale-[1.03] hover:border-white/35"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#9bb2ff_0%,#6f88ff_46%,#4f69ea_100%)] text-xs font-semibold text-white">
                N
              </span>
            </Link>
          </div>

          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}
