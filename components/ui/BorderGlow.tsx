'use client';

import type { CSSProperties, HTMLAttributes, MouseEvent } from 'react';
import { useRef } from 'react';

type BorderGlowProps = HTMLAttributes<HTMLDivElement> & {
  glowColor?: string;
  glowOpacity?: number;
};

export function BorderGlow({
  children,
  className = '',
  glowColor = '124, 140, 255',
  glowOpacity = 0.3,
  ...props
}: BorderGlowProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    node.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
    node.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`border-glow-shell ${className}`}
      style={
        {
          '--glow-color-rgb': glowColor,
          '--glow-opacity': glowOpacity,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
}
