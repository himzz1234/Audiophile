import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-xl px-5 lg:px-0 md:max-w-4xl lg:max-w-6xl mx-auto mt-20 py-14 md:space-y-10 font-manrope text-white flex flex-col items-center md:items-stretch text-center md:text-left justify-between">
      <div className="w-full space-y-5 md:space-y-8 lg:space-y-0 flex flex-col lg:flex-row items-center md:items-start">
        <Image
          src="/assets/shared/desktop/logo.svg"
          width="150"
          height="150"
          alt="logo"
        />
        <ul className="flex md:flex-row flex-col text-white space-y-3 md:space-y-0 md:space-x-10 flex-1 justify-end">
          <li className="uppercase font-medium hover:text-primaryGold duration-150 transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="uppercase font-medium hover:text-primaryGold duration-150 transition-all">
            <Link href="/headphones">Headphones</Link>
          </li>
          <li className="uppercase font-medium hover:text-primaryGold duration-150 transition-all">
            <Link href="/speakers">Speakers</Link>
          </li>
          <li className="uppercase font-medium hover:text-primaryGold duration-150 transition-all">
            <Link href="/earphones">Earphones</Link>
          </li>
        </ul>
      </div>

      <div className="w-full flex md:flex-row flex-col justify-between items-center md:items-end mt-10 md:mt-0 space-y-10 md:space-y-0">
        <div className="w-full lg:w-1/2 space-y-5">
          <p className="leading-[35px] text-[15px]">
            Audiophile is an all in one stop to fulfill your audio needs. We`&pos;`re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we`&pos;`re open 7 days a week.
          </p>
          <p className="text-[15px]">Copyright © 2022. All Rights Reserved</p>
        </div>
        <div className="flex justify-end items-center space-x-8">
          <AiFillFacebook className="text-3xl cursor-pointer" />
          <AiOutlineTwitter className="text-3xl cursor-pointer" />
          <AiOutlineInstagram className="text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
