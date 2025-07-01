'use client';

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import heroImg from '@/../public/images/hero_img.png';
import Button from "../Button";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center min-h-screen bg-white text-[#222222] overflow-hidden">
      {/* Left Part */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full md:w-1/2 px-6 md:px-12 py-12 space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
          elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
          morbi libero imperdiet neque.
        </p>

        {/* Subscribe input and button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            placeholder="example@mail.com"
            className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
          />
          <Button>Subscribe →</Button>
        </motion.div>

        {/* Note with check icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex items-center space-x-2 text-[#0546D2] font-medium mt-2"
        >
          <FaCheckCircle className="text-xl" />
          <span>No credit required!</span>
        </motion.div>
      </motion.div>

      {/* Right Part (Image with slight zoom/fade animation) */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative w-full md:w-1/2 h-[400px] md:h-screen clip-hero"
      >
        <Image
          src={heroImg}
          alt="Motorcycle Hero"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
