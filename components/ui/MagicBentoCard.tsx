'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type MagicBentoCardProps = {
  label: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  children?: ReactNode;
  glowColor?: string;
};

const DEFAULT_GLOW = '132, 0, 255';

export function MagicBentoCard({
  label,
  title,
  description,
  metric,
  metricLabel,
  children,
  glowColor = DEFAULT_GLOW,
}: MagicBentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      element.style.setProperty('--bento-x', `${(x / rect.width) * 100}%`);
      element.style.setProperty('--bento-y', `${(y / rect.height) * 100}%`);
      element.style.setProperty('--bento-opacity', '1');

      gsap.to(element, {
        x: (x - centerX) * 0.04,
        y: (y - centerY) * 0.04,
        duration: 0.25,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      element.style.setProperty('--bento-opacity', '0');
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleClick = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 1.4;
      const ripple = document.createElement('div');

      ripple.style.cssText = `
        position:absolute;
        left:${x - size / 2}px;
        top:${y - size / 2}px;
        width:${size}px;
        height:${size}px;
        border-radius:9999px;
        pointer-events:none;
        background:radial-gradient(circle, rgba(${glowColor}, 0.32) 0%, rgba(${glowColor}, 0.12) 35%, transparent 70%);
        z-index:30;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.75,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        },
      );
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('click', handleClick);
    };
  }, [glowColor]);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--bento-opacity', '1');
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      className="magic-bento-card-shell relative min-h-[20rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#060010] p-5 text-white"
      style={
        {
          '--bento-color': glowColor,
          '--bento-x': '50%',
          '--bento-y': '50%',
          '--bento-opacity': 0,
        } as React.CSSProperties
      }
    >
      <div className="magic-bento-card-glow absolute inset-0 rounded-[inherit]" />
      <div className="magic-bento-card-spotlight absolute inset-0 rounded-[inherit]" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-white/72">{label}</div>
            <div className="mt-2 text-2xl font-semibold">{title}</div>
          </div>
          {metric ? (
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-right">
              <div className="text-sm font-semibold text-white">{metric}</div>
              {metricLabel ? <div className="text-[0.65rem] uppercase tracking-[0.14em] text-white/45">{metricLabel}</div> : null}
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex-1 rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
          <div className="text-[0.7rem] uppercase tracking-[0.22em] text-white/38">Next problem</div>
          <div className="mt-3 text-xl font-semibold text-white">{description}</div>
          {children ? <div className="mt-5 flex flex-wrap gap-2">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}
