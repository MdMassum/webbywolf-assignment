'use client';

import Image from 'next/image';
import BenefitItem from '../BenefitItem';
import icon from '@/../public/images/section2_logo.png';
import heroImg from '@/../public/images/section_2.png';

const BenefitsSection = () => {
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

  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left */}
        <div>
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

          {benefits.map((item, idx) => (
            <BenefitItem key={idx} icon={icon} title={item.title} desc={item.desc} />
          ))}
        </div>

        {/* Right */}
        <div className="w-full h-auto">
          <Image
            src={heroImg}
            alt="Discussion"
            className="w-full rounded-md shadow-md"
            priority
          />
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="h-[4px] w-full mt-12 bg-gradient-to-r from-[#1959AC] via-[#00A651] to-[#5F259F]" />
    </section>
  );
};

export default BenefitsSection;
