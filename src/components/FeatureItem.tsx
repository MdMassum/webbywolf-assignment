import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface FeatureItemProps {
  img: StaticImageData;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ img, text }) => (
  <div className="flex items-start space-x-4">
    <Image
      src={img}
      alt="Feature"
      width={64}
      height={64}
      className="object-cover rounded-md"
      priority
    />
    <p className="text-sm text-gray-600 max-w-88">{text}</p>
  </div>
);

export default FeatureItem;
