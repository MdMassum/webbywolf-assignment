'use client';

import { useEffect, useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md opacity-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold bg-gray-200 px-4 py-2 rounded text-[#222222]">
          LOGO
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-[#1959AC] font-medium">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="flex items-center space-x-1">
                <span>Lorem Ipsum</span>
                <FaChevronDown className="text-sm" />
              </div>
              <div className="absolute hidden group-hover:block mt-2 bg-white shadow-md rounded-md w-40 p-2 z-10 text-[#222222]">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Option 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Option 2
                </a>
              </div>
            </div>
          ))}
        </nav>

        {/* Sign In Button */}
        <div className="hidden md:block">
          <button className="bg-white border text-[#222222] border-gray-300 rounded px-4 py-2 hover:bg-gray-100 text-sm">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1959AC] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md px-6 py-4 text-[#1959AC] space-y-4"
          >
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <span>Lorem Ipsum</span>
                  <FaChevronDown className="text-sm" />
                </div>
                <div className="ml-4 text-[#222222]">
                  <a href="#" className="block py-1">Option 1</a>
                  <a href="#" className="block py-1">Option 2</a>
                </div>
              </div>
            ))}

            <button className="w-full mt-4 bg-white border text-[#222222] border-gray-300 rounded px-4 py-2 hover:bg-gray-100 text-sm">
              Sign In
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
