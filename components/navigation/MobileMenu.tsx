'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Glyph } from '@/components/ui/Glyph';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/20 hover:bg-white/8"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <Glyph name={open ? 'close' : 'menu'} className="h-5 w-5" />
      </button>

      <div
        className={`fixed inset-0 z-50 transition ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div
          className={`absolute right-0 top-0 h-full w-[min(92vw,24rem)] border-l border-white/10 bg-[#090b11]/95 px-6 py-6 shadow-2xl backdrop-blur-2xl transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="font-[family-name:var(--font-heading)] text-2xl text-white">NeetCode.io</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              aria-label="Close menu"
            >
              <Glyph name="close" className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-12 flex flex-col gap-3">
            <Link
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-sm font-medium text-white"
            >
              Sign In
            </Link>
            <Link
              href="/premium"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white px-5 py-4 text-center text-sm font-semibold text-[#090b11]"
            >
              Get Pro
            </Link>
          </div>

          <div className="mt-10 rounded-[1.6rem] border border-[rgba(129,140,248,0.22)] bg-[linear-gradient(180deg,rgba(124,140,255,0.18),rgba(255,255,255,0.03))] p-5">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-white/45">Start here</div>
            <p className="mt-3 text-sm leading-6 text-white/72">
              Focus on one structured path, keep your prep consistent, and move through interview practice with less noise.
            </p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#090b11]">
              Continue
              <Glyph name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
