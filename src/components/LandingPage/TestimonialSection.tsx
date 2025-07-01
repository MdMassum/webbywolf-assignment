'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    icon: '⚡',
    text: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla...',
    name: 'Jane Cooper',
    avatar: '/images/handshake.png',
  },
  {
    icon: '⭐',
    text: 'Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus...',
    name: 'Ralph Edwards',
    avatar: '/images/handshake.png',
  },
  {
    icon: '🏰',
    text: 'Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien...',
    name: 'Courtney Henry',
    avatar: '/images/handshake.png',
  },
  {
    icon: '⭕',
    text: 'Hendrerit augue ut ac quis integer netus. Nullam rhoncus...',
    name: 'Cameron Williamson',
    avatar: '/images/handshake.png',
  },
];

const TestimonialSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#0452D2] text-white py-16 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto relative">
        <p className="text-sm font-medium text-white mb-2">Join other Sun harvesters</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          LOREM IPSUM DOLOR SIT AMET
        </h2>
        <p className="text-white text-base md:text-lg max-w-3xl mb-6">
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor...
        </p>

        <div className="mb-10">
          <button className="bg-white text-[#0452D2] font-semibold px-6 py-2 rounded-md text-sm shadow-sm">
            Lorem Ipsum
          </button>
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute top-[70%] -left-7 transform -translate-y-1/2 bg-white text-[#0452D2] w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-md"
        >
          <FaArrowLeft size={14} />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute top-[70%] -right-7 transform -translate-y-1/2 bg-white text-[#0452D2] w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-md"
        >
          <FaArrowRight size={14} />
        </button>

        {/* Testimonial Cards with animation */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white text-[#222] w-80 min-h-[290px] p-6 rounded-xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <p className="text-base leading-relaxed mb-6">{item.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <span className="text-sm font-semibold">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
