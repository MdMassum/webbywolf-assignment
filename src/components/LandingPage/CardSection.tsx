'use client';

import Image from 'next/image';

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
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
  },
  {
    img: '/images/blog_post_img3.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
  },
  {
    img: '/images/blog_post_img4.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
  },
  {
    img: '/images/blog_post_img2.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
  },
];

const CardSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      {/* Heading */}
      <div className="max-w-4xlo mb-12">
        <p className="text-xl text-[#0546D2] font-semibold mb-2">
          Lorem ipsum dolor sit amet
        </p>
        <h2 className="text-3xl font-bold text-[#222222] mb-4">
          LOREM IPSUM DOLOR SIT
        </h2>
        <p className="text-gray-700 text-base max-w-96">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto md:mx-28">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-lg shadow-sm border border-gray-100 overflow-hidden transition hover:shadow-md"
          >
            <div className="relative w-full h-56 md:h-64">
              <Image
                src={card.img}
                alt={`card-${idx}`}
                fill
                className="object-cover hover:scale-105"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
