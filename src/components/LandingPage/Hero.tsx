import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import heroImg from '@/../public/images/hero_img.png'
import Button from "../Button";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center min-h-screen bg-white text-[#222222]">
      {/* Left Part */}
      <div className="w-full md:w-1/2 px-6 md:px-12 py-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold ">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
          elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
          morbi libero imperdiet neque.
        </p>

        {/* Subscribe input and button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="example@mail.com"
            className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none "
          />
          <Button>Subscribe →</Button>
        </div>

        {/* Note with check icon */}
        <div className="flex items-center space-x-2 text-[#0546D2] font-medium mt-2">
          <FaCheckCircle className="text-xl" />
          <span>No credit required!</span>
        </div>
      </div>

      {/* Right Part */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-screen clip-hero">
        <Image
          src={heroImg}
          alt="Motorcycle Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
