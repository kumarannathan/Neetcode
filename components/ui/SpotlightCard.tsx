'use client';

import type { HTMLAttributes, CSSProperties, MouseEvent } from 'react';
import { useRef } from 'react';

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  spotlightColor?: string;
};

export function SpotlightCard({ children, className = '', spotlightColor = 'rgba(124, 140, 255, 0.18)', ...props }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    node.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
    node.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
      style={{ '--spotlight-color': spotlightColor } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
