'use client';

import { useEffect, useRef, useState } from 'react';

import { CourseTrackCarousel } from '@/components/landing/CourseTrackCarousel';
import { AnimatedContent } from '@/components/ui/AnimatedContent';
import { GlassIcons } from '@/components/ui/GlassIcons';
import { Glyph } from '@/components/ui/Glyph';
import { courseFamilies } from '@/lib/mock-data';

export function CourseExplorer() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const selectedFamily = selectedIndex === null ? null : courseFamilies[selectedIndex];

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const handleSelect = (index: number) => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (selectedIndex === index) {
      setIsClosing(true);
      closeTimerRef.current = window.setTimeout(() => {
        setSelectedIndex(null);
        setIsClosing(false);
      }, 240);
      return;
    }

    setIsClosing(false);
    setSelectedIndex(index);
  };

  const courseItems = courseFamilies.map((family, index) => ({
    label: family.label,
    description: family.summary,
    color: ['blue', 'purple', 'orange', 'green', 'indigo'][index] ?? 'blue',
    icon: (
      <Glyph
        name={
          index === 0
            ? 'code'
            : index === 1
              ? 'roadmap'
              : index === 2
                ? 'spark'
                : index === 3
                  ? 'layers'
                  : 'settings'
        }
        className="h-6 w-6"
      />
    ),
  }));

  return (
    <div className="mt-10">
      <GlassIcons items={courseItems} activeIndex={selectedIndex} onSelect={handleSelect} />

      {selectedFamily ? (
        <div
          className={`mt-12 overflow-hidden transition-all duration-300 ${
            isClosing ? 'max-h-0 -translate-y-2 opacity-0' : 'max-h-[1400px] translate-y-0 opacity-100'
          }`}
        >
          <AnimatedContent
            key={selectedFamily.label}
            distance={72}
            direction="vertical"
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.98}
          >
            <CourseTrackCarousel
              label={selectedFamily.label}
              color={selectedFamily.color}
              courses={selectedFamily.courses}
            />
          </AnimatedContent>
        </div>
      ) : null}
    </div>
  );
}
