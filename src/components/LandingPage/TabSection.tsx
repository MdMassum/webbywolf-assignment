'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Research', 'Plan', 'Design'];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState('Research');

  return (
    <motion.section
      className="py-16 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1a1a1a]">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          {/* Tabs */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden w-full max-w-sm mb-4 text-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-2 px-4 text-center transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Animated Tab Content */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              className="text-gray-600 text-sm md:text-base max-w-md mb-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === 'Research' &&
                'Research is the foundation of every successful project. It ensures understanding of market, audience, and competition.'}
              {activeTab === 'Plan' &&
                'Planning provides a strategic framework, helping teams define timelines, resources, and goals efficiently.'}
              {activeTab === 'Design' &&
                'Design transforms ideas into visual stories and interactive experiences for users.'}
            </motion.p>
          </AnimatePresence>

          {/* Link */}
          <Link href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
            Check tools →
          </Link>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/handshake.png"
            alt="Handshake"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
