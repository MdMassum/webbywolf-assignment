'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const logos = [
  '/images/hero.png',
  '/images/honda.png',
  '/images/bajaj.png',
  '/images/tvs.png',
  '/images/royal_enfield.png',
  '/images/yamaha.png',
  '/images/ktm.png',
  '/images/ather.png',
  '/images/ola_electric.png',
  '/images/revolt.png',
  '/images/ultraviolette.png',
  '/images/tork.png',
];

// Split into 3 rows of 4 each
const chunkArray = (arr: string[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const BrandLogoSection = () => {
  const rows = chunkArray(logos, 4);

  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#222222] mb-16">
        LOREM IPSUM DOLOR SIT AMET <br />
        CONSECTETUR. COMMODO LEO AMET.
      </h2>

      <div className="space-y-8">
        {rows.map((row, index) => (
          <MarqueeRow
            key={index}
            logos={row}
            direction={index % 2 === 1 ? 'right' : 'left'} // Middle row scrolls right
          />
        ))}
      </div>
    </section>
  );
};

export default BrandLogoSection;

interface MarqueeRowProps {
  logos: string[];
  direction?: 'left' | 'right';
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ logos, direction = 'left' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scroll = 0;
    let animationFrameId: number;

    const step = () => {
      if (!container) return;

      scroll += direction === 'left' ? 0.5 : -0.5;
      container.scrollLeft = scroll;

      // Loop
      if (scroll >= container.scrollWidth / 2) scroll = 0;
      if (scroll <= 0) scroll = container.scrollWidth / 2;

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap w-full"
    >
      <div className="flex gap-12 min-w-max items-center">
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="relative w-36 h-20 md:w-44 md:h-24 shrink-0"
          >
            <Image
              src={logo}
              alt={`logo-${idx}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 140px, 180px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
