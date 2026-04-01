'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GlassSurface from '@/components/ui/GlassSurface';

export function ExplorePremiumButton() {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = buttonRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;

        gsap.fromTo(
          element,
          { opacity: 0, y: 14, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: 'power3.out',
          },
        );

        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={buttonRef} style={{ opacity: 0 }}>
      <GlassSurface
        width="fit-content"
        height="auto"
        borderRadius={999}
        borderWidth={1}
        brightness={95}
        opacity={0.96}
        blur={11}
        displace={0.5}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        backgroundOpacity={0.06}
        saturation={1.2}
        mixBlendMode="screen"
        className="px-5 py-3"
      >
        <a
          href="/premium"
          className="inline-flex text-sm font-semibold text-white transition hover:text-white/90"
        >
          Explore Premium
        </a>
      </GlassSurface>
    </div>
  );
}
