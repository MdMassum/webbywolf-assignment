'use client';

import Button from '../Button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SubscribeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center text-center py-10 px-4 text-[#222222]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="bg-gray-200 px-4 py-2 font-bold mb-6 text-sm tracking-wide"
      >
        LOGO
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold max-w-2xl leading-snug mb-4"
      >
        LOREM IPSUM DOLOR SIT AMET <br />
        CONSECTETUR. DUI.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 max-w-md text-sm md:text-base mb-6"
      >
        Lorem ipsum dolor sit amet consectetur. Nisi faucibus vitae porttitor
        pharetra tempor quis arcu. Ipsum nullam.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Button>Subscribe →</Button>
      </motion.div>
    </section>
  );
}
