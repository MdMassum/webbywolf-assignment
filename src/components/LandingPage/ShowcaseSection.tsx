'use client';

import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import FeatureItem from '../FeatureItem';
import Image from 'next/image';
import icon1 from '@/../public/images/blog_img1.png';
import icon2 from '@/../public/images/blog_img2.png';
import icon3 from '@/../public/images/blog_img3.png';
import Button from '../Button';


const ShowcaseSection = () => {
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

  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div>
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
              <FeatureItem key={index} img={item.img} text={item.text} />
            ))}
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button>Lorem Ipsum →</Button>
            

            <div className="flex items-center gap-2 text-[#1959AC] text-sm font-medium">
              <FaPhoneAlt className="text-sm" />
              <span>123456789</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-auto relative">
          <Image
            src='/images/motorcycle_1.png'
            alt="Showcase"
            width={800} // or desired width
            height={600}
            className="rounded-md shadow-md w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
