'use client';

import type { CSSProperties, MouseEvent } from 'react';
import { useMemo, useState } from 'react';

type FolderPreviewProps = {
  color: string;
  papers: string[];
  className?: string;
  active?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  size?: number;
};

function darkenColor(hex: string, amount: number) {
  const color = hex.replace('#', '');
  const full = color.length === 3 ? color.split('').map((c) => c + c).join('') : color;
  const value = Number.parseInt(full, 16);
  const channel = (shift: number) => Math.max(0, Math.min(255, Math.round(((value >> shift) & 255) * (1 - amount))));
  return `rgb(${channel(16)} ${channel(8)} ${channel(0)})`;
}

export function FolderPreview({
  color,
  papers,
  className = '',
  active = false,
  onClick,
  ariaLabel = 'Preview course folder',
  size = 1,
}: FolderPreviewProps) {
  const [hovered, setHovered] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);
  const isExpanded = hovered || active;

  const visiblePapers = useMemo(() => {
    const next = [...papers.slice(0, 3)];
    while (next.length < 3) next.push('');
    return next;
  }, [papers]);

  const folderBackColor = darkenColor(color, 0.08);
  const paperColors = [darkenColor('#ffffff', 0.1), darkenColor('#ffffff', 0.05), '#ffffff'];

  const handlePaperMove = (event: MouseEvent<HTMLDivElement>, index: number) => {
    if (!isExpanded) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (event.clientX - centerX) * 0.15;
    const y = (event.clientY - centerY) * 0.15;

    setPaperOffsets((current) =>
      current.map((offset, itemIndex) => (itemIndex === index ? { x, y } : offset))
    );
  };

  const resetOffsets = () => setPaperOffsets([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        resetOffsets();
      }}
      onFocus={() => setHovered(true)}
      onBlur={() => {
        setHovered(false);
        resetOffsets();
      }}
      className={`group relative flex h-48 w-full max-w-[12.5rem] items-start justify-center overflow-visible border-0 bg-transparent p-0 text-left ${className}`}
      aria-label={ariaLabel}
      aria-pressed={active}
    >
      <div className="relative inline-block origin-center overflow-visible" style={scaleStyle}>
        <div
          className={`relative transition-all duration-300 ${isExpanded ? '-translate-y-2' : 'translate-y-0'}`}
        >
        <div className="relative h-[80px] w-[100px]">
          <div
            className="absolute bottom-0 left-0 h-20 w-full rounded-[0_10px_10px_10px] shadow-[0_18px_48px_rgba(0,0,0,0.32)]"
            style={{ background: folderBackColor }}
          />
          <div
            className="absolute bottom-[98%] left-0 h-[10px] w-[30px] rounded-[5px_5px_0_0]"
            style={{ background: folderBackColor }}
          />

          {visiblePapers.map((paper, index) => (
            <div
              key={`${paper || 'paper'}-${index}`}
              onMouseMove={(event) => handlePaperMove(event, index)}
              onMouseLeave={resetOffsets}
              className={`absolute bottom-[10%] left-1/2 flex items-center justify-center rounded-[10px] border border-black/5 px-2 py-2 text-center text-[0.44rem] font-semibold tracking-[0.02em] text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.18)] transition-all duration-300 ${
                isExpanded
                  ? index === 0
                    ? '-translate-x-[96%] -translate-y-[58%] -rotate-[11deg]'
                    : index === 1
                      ? 'translate-x-[2%] -translate-y-[58%] rotate-[11deg]'
                      : '-translate-x-1/2 -translate-y-[82%] rotate-[4deg]'
                  : '-translate-x-1/2 translate-y-[10%]'
              }`}
              style={
                {
                  width: index === 0 ? '70%' : index === 1 ? '80%' : '90%',
                  height: index === 0 ? '80%' : index === 1 ? '70%' : '60%',
                  background: paperColors[index],
                  zIndex: 3 + index,
                  transform:
                    isExpanded
                      ? index === 0
                        ? `translate(-96%, -58%) rotate(-11deg) translate(${paperOffsets[index].x}px, ${paperOffsets[index].y}px)`
                        : index === 1
                          ? `translate(2%, -58%) rotate(11deg) translate(${paperOffsets[index].x}px, ${paperOffsets[index].y}px)`
                          : `translate(-50%, -82%) rotate(4deg) translate(${paperOffsets[index].x}px, ${paperOffsets[index].y}px)`
                      : undefined,
                } as CSSProperties
              }
            >
              <span className="line-clamp-2 whitespace-pre-line leading-[1.1]">{paper}</span>
            </div>
          ))}

          <div
            className={`absolute bottom-0 left-0 h-20 w-full origin-bottom rounded-[5px_10px_10px_10px] transition-all duration-300 ${
              isExpanded ? 'skew-x-[15deg] scale-y-[0.62]' : ''
            }`}
            style={{ background: color, zIndex: 10 }}
          />
          <div
            className={`absolute bottom-0 right-0 h-20 w-[54%] origin-bottom rounded-[5px_10px_10px_10px] transition-all duration-300 ${
              isExpanded ? '-skew-x-[15deg] scale-y-[0.62]' : ''
            }`}
            style={{ background: color, zIndex: 11 }}
          />
        </div>
        </div>
      </div>
    </button>
  );
}
