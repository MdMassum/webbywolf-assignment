'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AppDownloadSection() {
  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#1959AC] font-medium text-xl mb-2">Lorem Ipsum</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Lorem Ipsum Dolor <br /> Sit Amet
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-6 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse
            convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque
            ultricies ipsum.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4">
            <Image
              src="/images/google_play.png"
              alt="Get it on Google Play"
              width={150}
              height={50}
            />
            <Image
              src="/images/apple_store.png"
              alt="Download on the App Store"
              width={150}
              height={50}
            />
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/section6_img.png"
            alt="Phone in hand"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
