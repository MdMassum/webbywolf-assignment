'use client';

import Button from '../Button';

export default function SubscribeSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-10 px-4 text-[#222222]">
      {/* Logo */}
      <div className="bg-gray-200 px-4 py-2 font-bold mb-6 text-sm tracking-wide">
        LOGO
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold max-w-2xl leading-snug mb-4">
        LOREM IPSUM DOLOR SIT AMET <br />
        CONSECTETUR. DUI.
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 max-w-md text-sm md:text-base mb-6">
        Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor
        pharetra tempor quis arcu. Ipsum nullam.
      </p>

      {/* Button */}
      <Button>Subscribe →</Button>
    </section>
  );
}
