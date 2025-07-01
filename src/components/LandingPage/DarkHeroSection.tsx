'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import bgImage from '@/../public/images/section_3.png';
import Button from '../Button';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

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

      {/* Logo - top-left (static, no animation) */}
      <div className="absolute top-6 left-6 z-20">
        <div className="bg-gray-200 px-4 py-2 rounded font-bold text-[#222] w-fit">
          LOGO
        </div>
      </div>

      {/* Centered Content (animated on scroll) */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-20 max-w-6xl mx-auto px-4 md:px-8 text-center"
      >
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight mb-6 text-white max-w-4xl mx-auto">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS.
        </h1>

        <p className="text-sm md:text-base text-white mb-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet.
          Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id.
        </p>

        <p className="text-sm md:text-base text-white mb-8 max-w-2xl mx-auto">
          Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae.
          Nulla luctus quam lacus nascetur non at. Tincidunt cursus vitae leo.
        </p>

        <div className="mx-auto w-fit">
          <Button variant="outline">lorem ipsum →</Button>
        </div>
      </motion.div>
    </section>
  );
};

export default DarkHeroSection;
