'use client';

import React, {
  Children,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import gsap from 'gsap';

type CardSwapProps = {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  className?: string;
  skewAmount?: number;
  easing?: 'elastic' | 'smooth';
  children: React.ReactNode;
};

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  customClass?: string;
};

type SwapChildProps = {
  style?: React.CSSProperties;
  className?: string;
  customClass?: string;
  children?: React.ReactNode;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { customClass, className = '', ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      {...rest}
      className={`absolute left-1/2 top-1/2 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[rgba(9,12,20,0.96)] shadow-[0_24px_70px_rgba(0,0,0,0.34)] ${customClass ?? ''} ${className}`.trim()}
    />
  );
});

const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (element: HTMLDivElement, slot: ReturnType<typeof makeSlot>, skew: number) =>
  gsap.set(element, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true,
  });

export function CardSwap({
  width = 500,
  height = 380,
  cardDistance = 56,
  verticalDistance = 62,
  delay = 5000,
  pauseOnHover = false,
  className = '',
  skewAmount = 6,
  easing = 'elastic',
  children,
}: CardSwapProps) {
  const config = useMemo(
    () =>
      easing === 'elastic'
        ? {
            ease: 'elastic.out(0.6,0.9)',
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: 'power1.inOut',
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          },
    [easing]
  );

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr]);
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containerNode = containerRef.current;
    const total = refs.length;
    refs.forEach((ref, index) => {
      if (ref.current) placeNow(ref.current, makeSlot(index, cardDistance, verticalDistance, total), skewAmount);
    });

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const frontEl = refs[front].current;
      if (!frontEl) return;

      const timeline = gsap.timeline();
      timelineRef.current = timeline;

      timeline.to(frontEl, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease,
      });

      timeline.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);

      rest.forEach((idx, i) => {
        const element = refs[idx].current;
        if (!element) return;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        timeline.set(element, { zIndex: slot.zIndex }, 'promote');
        timeline.to(
          element,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      timeline.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      timeline.call(() => {
        gsap.set(frontEl, { zIndex: backSlot.zIndex });
      }, undefined, 'return');
      timeline.to(
        frontEl,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        'return'
      );

      timeline.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover && containerNode) {
      const pause = () => {
        timelineRef.current?.pause();
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      };
      const resume = () => {
        timelineRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };

      containerNode.addEventListener('mouseenter', pause);
      containerNode.addEventListener('mouseleave', resume);

      return () => {
        containerNode.removeEventListener('mouseenter', pause);
        containerNode.removeEventListener('mouseleave', resume);
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      };
    }

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, refs, config]);

  const rendered = childArr.map((child, i) =>
    isValidElement<SwapChildProps>(child) ? (
      <Card
        key={i}
        ref={refs[i]}
        customClass={child.props.customClass}
        className={child.props.className}
        style={{ width, height, ...(child.props.style ?? {}) }}
      >
        {child.props.children}
      </Card>
    ) : (
      child
    )
  );

  return (
    <div
      ref={containerRef}
      className={`relative h-[26rem] w-full overflow-visible [perspective:900px] ${className}`}
    >
      <div className="absolute bottom-0 right-0 [transform:translate(-30%,18%)] origin-bottom-right md:[transform:translate(-25%,10%)]">
        {rendered}
      </div>
    </div>
  );
}
