import React from "react";
import Image from "next/image";
import ButtonShared from "./ButtonShared";
import ProductCategory from "./ProductCategory";
import ResponsiveImage from "./ResponsiveImage";

const Products = () => {
  return (
    <div className="max-w-lg px-5 lg:px-0 md:max-w-4xl lg:max-w-6xl mx-auto font-manrope">
      <ProductCategory />

      <div className="flex flex-col lg:flex-row items-center bg-primaryGold space-y-10 lg:space-y-0 lg:space-x-20 mt-40 mb-20 rounded-md py-5 lg:py-0 lg:pt-10 px-10 md:px-40">
        <div className="h-40 md:h-60 lg:h-full">
          <ResponsiveImage
            mobile="/assets/home/mobile/image-speaker-zx9.png"
            tablet="/assets/home/tablet/image-speaker-zx9.png"
            desktop="/assets/home/desktop/image-speaker-zx9.png"
          />
        </div>
        <div className="text-white md:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl uppercase font-bold">
            ZX9 Speaker
          </h1>
          <p className="md:text-base text-[15px] leading-[30px] mt-5 md:mt-0">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </p>
          <div className="mt-10 md:mt-0 text-[14px] md:text-base">
            <ButtonShared
              text="See Product"
              background="black"
              slug="zx9-speaker"
              category="speakers"
              style="fill"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:h-[300px] relative mt-20 mb-20 rounded-md">
        <div className="h-52 md:h-full">
          <ResponsiveImage
            mobile="/assets/home/mobile/image-speaker-zx7.jpg"
            tablet="/assets/home/tablet/image-speaker-zx7.jpg"
            desktop="/assets/home/desktop/image-speaker-zx7.jpg"
          />
        </div>
        <div className="absolute top-10 md:top-24 left-5 md:left-14 space-y-4 md:space-y-7">
          <h2 className="font-semibold text-[22px] md:text-3xl uppercase">
            ZX7 SPEAKER
          </h2>
          <div className="text-[14px] md:text-base">
            <ButtonShared
              text="See Product"
              background="transparent"
              slug="zx7-speaker"
              category="speakers"
              style="bordered"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row md:h-[300px] space-y-5 md:space-y-0 md:space-x-10">
        <div className="h-60 md:w-1/2 md:h-full">
          <ResponsiveImage
            mobile="/assets/home/mobile/image-earphones-yx1.jpg"
            tablet="/assets/home/tablet/image-earphones-yx1.jpg"
            desktop="/assets/home/desktop/image-earphones-yx1.jpg"
          />
        </div>

        <div className="bg-[#f2f2f2] md:w-1/2 lg:w-[600px] h-60 md:h-full rounded-md flex flex-col justify-center items-center md:items-start space-y-7 px-5 md:px-10">
          <h2 className="font-semibold text-[22px] md:text-3xl uppercase">
            YX1 EARPHONES
          </h2>
          <div className="text-[14px] md:text-base">
            <ButtonShared
              text="See Product"
              background="transparent"
              slug="yx1-earphones"
              category="speakers"
              type="bordered"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
