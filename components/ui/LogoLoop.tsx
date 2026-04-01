'use client';

import { CompanyLogo } from '@/components/ui/CompanyLogo';

type LogoLoopProps = {
  logos: string[];
  speedSeconds?: number;
  ariaLabel?: string;
};

export function LogoLoop({
  logos,
  speedSeconds = 28,
  ariaLabel = 'Trusted company logos',
}: LogoLoopProps) {
  const items = [...logos, ...logos];

  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-label={ariaLabel}
    >
      <div
        className="flex w-max animate-[logo-loop_var(--loop-speed,28s)_linear_infinite] items-center"
        style={{ ['--loop-speed' as string]: `${speedSeconds}s` }}
      >
        {items.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="mr-6 flex h-14 min-w-[5.5rem] items-center justify-center px-3 opacity-72 transition hover:opacity-100 sm:mr-8 sm:min-w-[6rem]"
            aria-hidden={index >= logos.length}
          >
            <CompanyLogo name={logo as Parameters<typeof CompanyLogo>[0]['name']} />
          </div>
        ))}
      </div>
    </div>
  );
}
