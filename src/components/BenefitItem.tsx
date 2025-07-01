import Image, { StaticImageData } from 'next/image';

interface BenefitItemProps {
  icon: StaticImageData;
  title: string;
  desc: string;
}

const BenefitItem = ({ icon, title, desc }: BenefitItemProps) => (
  <div className="flex items-start gap-4 mb-6">
    <Image src={icon} alt="icon" width={32} height={32} />
    <div>
      <h4 className="font-semibold text-md text-[#222222]">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  </div>
);

export default BenefitItem;
