'use client';

import { usePathname } from 'next/navigation';

import { ClickSpark } from '@/components/ui/ClickSpark';

export function ClickSparkGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const disableSpark = pathname.startsWith('/dashboard');

  if (disableSpark) {
    return <>{children}</>;
  }

  return (
    <ClickSpark sparkColor="#dbe4ff" sparkSize={10} sparkRadius={18} sparkCount={10} duration={420}>
      {children}
    </ClickSpark>
  );
}
