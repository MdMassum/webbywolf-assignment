'use client';

import Image from 'next/image';
import bgImage from '@/../public/images/section_3.png';
import Button from '../Button';

const DarkHeroSection = () => {
  return (
    <section className="relative w-full min-h-[100vh] text-white overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <Image
        src={bgImage}
        alt="Dark Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay (optional, uncomment if needed) */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-10" /> */}

      {/* Logo - top-left */}
      <div className="absolute top-6 left-6 z-20">
        <div className="bg-gray-200 px-4 py-2 rounded font-bold text-[#222] w-fit">
          LOGO
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8 text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight mb-6 text-white max-w-4xl mx-auto">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS.
        </h1>

        <p className="text-sm md:text-base text-white mb-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet.
          Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu
          vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
        </p>

        <p className="text-sm md:text-base text-white mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in
          tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus
          quam lacus nascetur non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt
          cursus vitae leo.
        </p>

        <div className="mx-auto w-fit">
          <Button variant="outline">lorem ipsum →</Button>
        </div>
      </div>
    </section>
  );
};

export default DarkHeroSection;
