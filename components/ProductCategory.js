import React from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/router";

const ProductCategory = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row items-center space-y-32 md:space-y-0 md:space-x-5 font-manrope mt-48">
      <div className="bg-[#fafafa] w-full md:w-1/3 h-48 relative">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          width="200"
          height="200"
          className="absolute -top-1/2 left-1/2 -translate-x-1/2"
          alt="product-image"
        />

        <h2 className="uppercase text-lg font-semibold mt-24 text-center">
          Headphones
        </h2>

        <div
          onClick={() => router.push("/headphones")}
          className="cursor-pointer flex items-center justify-center mt-3 space-x-2 text-primaryGold"
        >
          <p className="uppercase font-semibold">shop</p>
          <FaAngleRight />
        </div>
      </div>
      <div className="bg-[#fafafa] w-full md:w-1/3  h-48 relative">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          width="200"
          height="200"
          className="absolute -top-1/2 left-1/2 -translate-x-1/2"
          alt="product-image"
        />

        <h2 className="uppercase text-lg font-semibold mt-24 text-center">
          Speakers
        </h2>

        <div
          onClick={() => router.push("/speakers")}
          className="cursor-pointer flex items-center justify-center mt-3 space-x-2 text-primaryGold"
        >
          <p className="uppercase font-semibold">shop</p>
          <FaAngleRight />
        </div>
      </div>
      <div className="bg-[#fafafa] w-full md:w-1/3  h-48 relative">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          width="200"
          height="200"
          className="absolute -top-1/2 left-1/2 -translate-x-1/2"
          alt="product-image"
        />

        <h2 className="uppercase text-lg font-semibold mt-24 text-center">
          Earphones
        </h2>

        <div
          onClick={() => router.push("/earphones")}
          className="cursor-pointer flex items-center justify-center mt-3 space-x-2 text-primaryGold"
        >
          <p className="uppercase font-semibold">shop</p>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
