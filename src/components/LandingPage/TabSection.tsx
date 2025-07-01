'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tabs = ['Research', 'Plan', 'Design'];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState('Research');

  return (
    <section className="py-16 px-6">
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

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base max-w-md mb-4">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque
            donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus
            malesuada placerat arcu at enim elit in accumsan.
          </p>

          {/* Link */}
          <Link href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">
            Check tools →
          </Link>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src="/images/handshake.png"
            alt="Handshake"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
