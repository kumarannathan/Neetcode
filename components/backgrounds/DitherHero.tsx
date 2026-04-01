'use client';

import { useEffect, useState } from 'react';

import DitherScene from '@/components/backgrounds/DitherScene';

export function DitherHero() {
  const [lowMotionMode, setLowMotionMode] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateMode = () => {
      setLowMotionMode(media.matches);
    };

    updateMode();
    media.addEventListener('change', updateMode);
    window.addEventListener('resize', updateMode);

    return () => {
      media.removeEventListener('change', updateMode);
      window.removeEventListener('resize', updateMode);
    };
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {lowMotionMode ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(69,208,255,0.18),transparent_0_22%),radial-gradient(circle_at_82%_16%,rgba(124,140,255,0.24),transparent_0_18%),linear-gradient(180deg,#0b0f18_0%,#0a0d15_100%)]" />
      ) : (
        <DitherScene disableAnimation={false} enableMouseInteraction={false} pixelSize={3} />
      )}
      <div className="dither-mask absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0d15] via-[#0a0d15]/72 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[30rem] bg-gradient-to-t from-[#090b11] via-[#090b11]/78 via-35% to-transparent" />
      <div className="absolute inset-x-0 bottom-[-2rem] h-[14rem] bg-[linear-gradient(180deg,rgba(9,11,17,0),rgba(9,11,17,0.18)_18%,rgba(9,11,17,0.52)_46%,#090b11_100%)] backdrop-blur-[18px] [mask-image:linear-gradient(to_bottom,transparent,black_26%,black)]" />
    </div>
  );
}
