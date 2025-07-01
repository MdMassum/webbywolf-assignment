'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-[#0F1623] text-white py-12 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo */}
        <div>
          <div className="text-lg font-bold bg-gray-200 px-4 py-2 rounded text-[#222222]">
            LOGO
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
          {[1, 2, 3, 4].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
            >
              <h3 className="text-sm font-semibold mb-3">Lorem Ipsum</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {[1, 2, 3, 4].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      Lorem Ipsum
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
