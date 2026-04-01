import Link from 'next/link';

import { footerGroups } from '@/lib/mock-data';

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/8 bg-black/20 py-10">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div><Link href="/" className="font-[family-name:var(--font-heading)] text-3xl tracking-[-0.05em] text-white">NeetCode</Link><p className="mt-4 max-w-sm text-sm leading-7 text-white/54">A better way to prepare for technical interviews with cleaner paths, stronger explanations, and a calmer experience.</p></div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{footerGroups.map((group) => <div key={group.title}><div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/40">{group.title}</div><div className="mt-4 space-y-3 text-sm text-white/62">{group.items.map((item) => <div key={item}>{item}</div>)}</div></div>)}</div>
        </div>
        <div className="mt-10 border-t border-white/8 pt-5 text-sm text-white/42">Copyright © 2026 neetcode.io All rights reserved.</div>
      </div>
    </footer>
  );
}
