'use client';

import { useState } from 'react';

import { dashboardSidebar } from '@/lib/mock-data';
import { Glyph } from '@/components/ui/Glyph';

export function MobileDock() {
  const [active, setActive] = useState('Home');

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
      <div className="mx-auto flex w-full max-w-md items-center justify-between rounded-[1.7rem] border border-white/10 bg-[#080b12]/90 px-3 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        {dashboardSidebar.slice(0, 5).map((item) => {
          const isActive = item.label === active;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setActive(item.label)}
              className={`flex min-w-[60px] flex-col items-center gap-1 rounded-2xl px-3 py-2 text-[0.65rem] transition ${isActive ? 'bg-[rgba(124,140,255,0.18)] text-white' : 'text-white/48 hover:text-white/72'}`}
            >
              <span className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${isActive ? 'border-[rgba(124,140,255,0.45)] bg-[rgba(124,140,255,0.16)]' : 'border-white/6 bg-white/[0.03]'}`}>
                <Glyph name={item.icon as Parameters<typeof Glyph>[0]['name']} className="h-4 w-4" />
              </span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
