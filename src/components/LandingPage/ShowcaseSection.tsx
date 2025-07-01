'use client';

import { FaPhoneAlt } from 'react-icons/fa';
import FeatureItem from '../FeatureItem';
import Image from 'next/image';
import icon1 from '@/../public/images/blog_img1.png';
import icon2 from '@/../public/images/blog_img2.png';
import icon3 from '@/../public/images/blog_img3.png';
import Button from '../Button';
import { motion } from 'framer-motion';

const features = [
  {
    img: icon1,
    text: 'Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.',
  },
  {
    img: icon2,
    text: 'Dictum at ac et lacus faucibus urna ullamcorper id dui cursus. Venenatis.',
  },
  {
    img: icon3,
    text: 'Vestibulum nisi morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.',
  },
];

const ShowcaseSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-medium mb-2 text-[#1959AC]">
            Lorem ipsum dolor sit
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#222222] leading-snug mb-4">
            LOREM IPSUM <br /> DOLOR SIT AMET
          </h2>

          <p className="text-gray-700 text-sm md:text-base mb-6">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
            Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at
            felis aliquet. Hendrerit tellus at purus lectus.
          </p>

          {/* Feature List */}
          <div className="space-y-4 mb-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <FeatureItem img={item.img} text={item.text} />
              </motion.div>
            ))}
          </div>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button>Lorem Ipsum →</Button>

            <div className="flex items-center gap-2 text-[#1959AC] text-sm font-medium">
              <FaPhoneAlt className="text-sm" />
              <span>123456789</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full h-auto relative"
        >
          <Image
            src="/images/motorcycle_1.png"
            alt="Showcase"
            width={800}
            height={600}
            className="rounded-md shadow-md w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
