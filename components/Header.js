import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { elastic as Menu } from "react-burger-menu";

const Header = () => {
  const items = useSelector((state) => state.cart.cart);
  const router = useRouter();

  return (
    <header className="sticky top-0 bg-[#191919] py-8 shadow-lg z-20 font-manrope">
      <div className="lg:max-w-6xl lg:px-10 mx-auto flex items-center justify-between">
        <div className="relative lg:hidden">
          <Menu>
            <ul className="space-y-5 text-white mr-40">
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
          </Menu>
        </div>

        <div className="flex-1 flex justify-center lg:justify-start ml-[50px] md:ml-[65px] lg:ml-0">
          <Image
            src="/assets/shared/desktop/logo.svg"
            width="150"
            height="150"
            alt="logo"
          />
        </div>

        <ul className="hidden lg:flex items-center text-white space-x-10 mr-40">
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

        <div
          className="relative cursor-pointer lg:mr-0 mr-[25px] md:mr-[45px]"
          onClick={() => router.push("/checkout")}
        >
          <div className="absolute w-3.5 h-3.5 bg-primaryGold rounded-full -right-1 -top-1 flex items-center justify-center">
            <small className="font-bold text-[10px]">
              {items.reduce((total, item) => item.quantity + total, 0)}
            </small>
          </div>
          <BsCart2 className="text-white text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
