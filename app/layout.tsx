import type { Metadata } from 'next';
import { Manrope, Syne, Geist } from 'next/font/google';

import { ClickSparkGate } from '@/components/ui/ClickSparkGate';
import { PageTransition } from '@/components/ui/PageTransition';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body' });
const headingFont = Syne({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'NeetCode Redesign',
  description: 'A premium redesign concept for the NeetCode landing page and dashboard.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        <ClickSparkGate>
          <PageTransition>{children}</PageTransition>
        </ClickSparkGate>
      </body>
    </html>
  );
}
