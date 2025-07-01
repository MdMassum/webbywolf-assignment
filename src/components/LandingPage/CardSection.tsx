'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface CardData {
  img: string;
  title: string;
  description: string;
}

const cards: CardData[] = [
  {
    img: '/images/blog_post_img2.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.',
  },
  {
    img: '/images/blog_post_img3.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.',
  },
  {
    img: '/images/blog_post_img4.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.',
  },
  {
    img: '/images/blog_post_img2.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CardSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mb-12"
      >
        <p className="text-xl text-[#0546D2] font-semibold mb-2">
          Lorem ipsum dolor sit amet
        </p>
        <h2 className="text-3xl font-bold text-[#222222] mb-4">
          LOREM IPSUM DOLOR SIT
        </h2>
        <p className="text-gray-700 text-base max-w-96">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto md:mx-28"
      >
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="rounded-lg shadow-sm border border-gray-100 overflow-hidden transition hover:shadow-md bg-white"
          >
            <div className="relative w-full h-56 md:h-64">
              <Image
                src={card.img}
                alt={`card-${idx}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-[#222222] mb-2 text-base md:text-lg">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{card.description}</p>
              <a
                href="#"
                className="text-sm text-[#0546D2] font-medium hover:underline"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CardSection;
