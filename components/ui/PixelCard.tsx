'use client';

import { useEffect, useRef } from 'react';

type PixelCardProps = {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'pink';
};

class Pixel {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    speed: number,
    delay: number
  ) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = (Math.random() * 0.8 + 0.1) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSize = Math.random() * 1.5 + this.minSize;
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  draw() {
    const centerOffset = 1 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }

    if (this.size >= this.maxSize) this.isShimmer = true;

    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }

    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;

    if (this.size <= 0) {
      this.isIdle = true;
      return;
    }

    this.size -= 0.1;
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) this.isReverse = true;
    else if (this.size <= this.minSize) this.isReverse = false;

    if (this.isReverse) this.size -= this.speed;
    else this.size += this.speed;
  }
}

const VARIANTS = {
  default: {
    gap: 6,
    speed: 20,
    colors: ['#f8fafc', '#cbd5e1', '#94a3b8'],
  },
  blue: {
    gap: 8,
    speed: 18,
    colors: ['#dbeafe', '#60a5fa', '#2563eb'],
  },
  pink: {
    gap: 6,
    speed: 24,
    colors: ['#fbcfe8', '#f472b6', '#8b5cf6'],
  },
} as const;

export function PixelCard({ className = '', children, variant = 'default' }: PixelCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number | null>(null);
  const previousTimeRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const config = VARIANTS[variant];

    const initPixels = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);
      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const pixels: Pixel[] = [];
      for (let x = 0; x < width; x += config.gap) {
        for (let y = 0; y < height; y += config.gap) {
          const color = config.colors[Math.floor(Math.random() * config.colors.length)];
          const dx = x - width / 2;
          const dy = y - height / 2;
          const distance = reducedMotion ? 0 : Math.sqrt(dx * dx + dy * dy);
          pixels.push(new Pixel(canvas, context, x, y, color, config.speed * 0.001, distance));
        }
      }
      pixelsRef.current = pixels;
    };

    const animate = (mode: 'appear' | 'disappear') => {
      const context = canvas.getContext('2d');
      if (!context) return;

      const tick = (time: number) => {
        animationRef.current = requestAnimationFrame(tick);
        const delta = time - previousTimeRef.current;
        if (delta < 1000 / 60) return;
        previousTimeRef.current = time;

        context.clearRect(0, 0, canvas.width, canvas.height);

        let allIdle = true;
        for (const pixel of pixelsRef.current) {
          pixel[mode]();
          if (!pixel.isIdle) allIdle = false;
        }

        if (allIdle && animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      };

      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(tick);
    };

    initPixels();

    const resizeObserver = new ResizeObserver(initPixels);
    resizeObserver.observe(container);

    const handleEnter = () => animate('appear');
    const handleLeave = () => animate('disappear');

    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleLeave);

    return () => {
      resizeObserver.disconnect();
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      className={`pixel-card-shell relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(10,14,24,0.92)] ${className}`}
    >
      <canvas ref={canvasRef} className="pixel-card-canvas absolute inset-0 h-full w-full" />
      <div className="pixel-card-overlay absolute inset-0" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
