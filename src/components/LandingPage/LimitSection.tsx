'use client';

import Image from 'next/image';
import Button from '../Button';

export default function LimitSection() {
  return (
    <section className="bg-[#f4f8fd] text-[#222222] py-20 px-6">
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Image in full width */}
        <Image
          src="/images/grouped_bike.png"
          alt="Motorbike collage"
          width={1600}
          height={1000}
          className="rounded-lg object-cover w-full h-auto"
          priority
        />

        {/* Floating Left Content */}
        <div className="absolute top-0 left-0 z-10  p-6 rounded-lg max-w-sm">
          <p className="uppercase text-sm text-gray-500 font-semibold mb-2">No limits</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            Lorem ipsum dolor sit <br /> amet
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor pharetra
            tempor quis arcu. Ipsum nullam.
          </p>
          <Button>Lorem ipsum →</Button>
        </div>
      </div>
    </section>
  );
}
