import React from "react";
import Image from "next/image";
import ResponsiveImage from "./ResponsiveImage";

const About = () => {
  return (
    <div className="max-w-xl px-5 lg:px-0 md:max-w-4xl lg:max-w-6xl mx-auto pt-24 md:pt-40 font-manrope flex flex-col lg:flex-row lg:items-center">
      <div className="space-y-2 md:space-y-7 order-2 lg:order-1 w-full lg:w-1/2 mt-5 lg:mt-0">
        <h1 className="text-[28.5px] md:text-[32px] text-center lg:text-left lg:text-5xl leading-[45px] md:leading-[60px] lg:w-[500px] font-semibold">
          BRINGING YOU THE <span className="text-primaryGold">BEST</span> AUDIO
          GEAR
        </h1>
        <p className="text-[#5e5e5e] leading-[35px] text-[16px] lg:text-[17px] text-center lg:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex justify-end order-1 lg:order-2">
        <div className="h-80 md:h-full">
          <ResponsiveImage
            mobile="/assets/shared/mobile/image-best-gear.jpg"
            tablet="/assets/shared/tablet/image-best-gear.jpg"
            desktop="/assets/shared/desktop/image-best-gear.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
