import React from "react";
import Link from "next/link";
import data from "../public/data.json";
import ResponsiveImage from "./ResponsiveImage";

const ProductsRecod = ({ item }) => {
  const category = data.find(
    (dataItem) => dataItem.slug === item.slug
  ).category;
  return (
    <div className="space-y-6 flex flex-col items-center">
      <div className="h-80 w-full md:h-full">
        <ResponsiveImage
          mobile={item.image.mobile.substring(1, item.image.mobile.length)}
          tablet={item.image.tablet.substring(1, item.image.tablet.length)}
          desktop={item.image.desktop.substring(1, item.image.desktop.length)}
        />
      </div>

      <h2 className="text-center text-xl font-semibold">{item.name}</h2>
      <button className="bg-primaryGold shadow-md text-white uppercase px-5 py-2.5 rounded-sm">
        <Link href={`/${category}/${item.slug}`}>See Product</Link>
      </button>
    </div>
  );
};

export default ProductsRecod;
