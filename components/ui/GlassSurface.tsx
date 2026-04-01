'use client';

import type { CSSProperties, ReactNode } from 'react';

export interface GlassSurfaceProps {
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: 'R' | 'G' | 'B';
  yChannel?: 'R' | 'G' | 'B';
  mixBlendMode?: CSSProperties['mixBlendMode'];
  className?: string;
  style?: CSSProperties;
}

export default function GlassSurface({
  children,
  width = 'fit-content',
  height = 'auto',
  borderRadius = 999,
  borderWidth = 1,
  brightness = 90,
  opacity = 0.9,
  blur = 12,
  backgroundOpacity = 0.08,
  saturation = 1.2,
  mixBlendMode = 'normal',
  className = '',
  style = {},
}: GlassSurfaceProps) {
  const surfaceStyle: CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius,
    border: `${borderWidth}px solid rgba(255,255,255,0.28)`,
    background: `rgba(255,255,255,${backgroundOpacity})`,
    backdropFilter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness / 100})`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness / 100})`,
    boxShadow:
      'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.15), 0 8px 28px rgba(10,16,40,0.24)',
    opacity,
    mixBlendMode,
    ...style,
  };

  return (
    <div className={className} style={surfaceStyle}>
      {children}
    </div>
  );
}
