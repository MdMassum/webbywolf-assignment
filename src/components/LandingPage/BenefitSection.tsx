'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import BenefitItem from '../BenefitItem';
import icon from '@/../public/images/section2_logo.png';
import heroImg from '@/../public/images/section_2.png';

const benefits = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi.',
    desc: 'Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec.',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi.',
    desc: 'Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec.',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi.',
    desc: 'Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-[#1959AC] font-medium mb-2">
            Lorem ipsum dolor sit amet
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-4 leading-tight">
            LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. EU ELIT.
          </h2>

          <p className="text-gray-700 text-sm mb-6">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend
            condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus
            suspendisse ornare.
          </p>

          {/* Animated Benefit Items */}
          <div className="space-y-4">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <BenefitItem icon={icon} title={item.title} desc={item.desc} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full h-auto"
        >
          <Image
            src={heroImg}
            alt="Discussion"
            className="w-full rounded-md shadow-md"
            priority
          />
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="h-[4px] w-full mt-12 bg-gradient-to-r from-[#1959AC] via-[#00A651] to-[#5F259F] origin-left"
      />
    </section>
  );
};

export default BenefitsSection;
