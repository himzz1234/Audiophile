import React from "react";
import ButtonShared from "./ButtonShared";
import ResponsiveImage from "./ResponsiveImage";

const Hero = () => {
  return (
    <div className="max-w-xl px-5 lg:px-0 md:max-w-4xl lg:max-w-6xl relative mx-auto text-white flex items-center justify-center lg:items-start lg:justify-start font-manrope">
      <div className="absolute w-[450px] h-[800px] md:w-full md:h-[720px] lg:w-full lg:h-[650px] -top-1/2 translate-y-14 md:translate-y-0 md:-top-20 lg:top-0 left-1/2 -translate-x-1/2 -z-1">
        <ResponsiveImage
          mobile="/assets/home/mobile/image-header.jpg"
          tablet="/assets/home/tablet/image-header.jpg"
          desktop="/assets/home/desktop/image-hero-cropped.jpg"
        />
      </div>
      <div className="space-y-7 pt-32 self-center lg:w-[480px] md:px-0 z-10 lg:text-left text-center">
        <p className="text-[#5e5e5e] text-[16px] md:text-base uppercase font-semibold tracking-[10px]">
          new product
        </p>
        <h1 className="text-4xl md:text-5xl leading-[60px] font-bold">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="leading-[45px] md:leading-[30px] text-[15px] md:text-base">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className="text-[14px] md:text-base">
          <ButtonShared
            text="see product"
            background="primaryGold"
            slug="xx99-mark-two-headphones"
            category="headphones"
            style="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
