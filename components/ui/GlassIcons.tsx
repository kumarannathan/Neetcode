'use client';

import type { ReactElement } from 'react';

export interface GlassIconsItem {
  icon: ReactElement;
  color: string;
  label: string;
  description?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  activeIndex?: number | null;
  onSelect?: (index: number) => void;
  className?: string;
}

const gradientMapping: Record<string, string> = {
  blue: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
  purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))',
};

export function GlassIcons({ items, activeIndex = null, onSelect, className = '' }: GlassIconsProps) {
  const getBackgroundStyle = (color: string) => ({
    background: gradientMapping[color] ?? color,
  });

  return (
    <div className={`glass-icon-grid ${className}`.trim()}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={`${item.label}-${index}`}
            type="button"
            className="glass-icon-item"
            aria-label={item.label}
            aria-pressed={isActive}
            onClick={() => onSelect?.(index)}
          >
            <span className={`glass-icon-btn ${isActive ? 'is-active' : ''}`}>
              <span className="glass-icon-btn__back" style={getBackgroundStyle(item.color)} />
              <span className="glass-icon-btn__front">
                <span className="glass-icon-btn__icon" aria-hidden="true">
                  {item.icon}
                </span>
              </span>
            </span>

            <span className={`glass-icon-title ${isActive ? 'is-active' : ''}`}>{item.label}</span>
            {item.description ? <span className="glass-icon-description">{item.description}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
