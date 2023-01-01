import React from "react";
import data from "../public/data.json";
import ButtonShared from "./ButtonShared";
import ResponsiveImage from "./ResponsiveImage";

const ProductList = ({ category }) => {
  const items = data.filter((item) => item.category === category);
  return (
    <div className="space-y-20">
      {items.map((item, index) => {
        return (
          <div
            className="grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:grid-cols-2"
            key={item.id}
          >
            <div className={index % 2 == 0 ? "lg:order-1" : "lg:order-2"}>
              <div className="h-96  lg:h-full">
                <ResponsiveImage
                  mobile={item.categoryImage.mobile.substring(
                    1,
                    item.categoryImage.mobile.length
                  )}
                  tablet={item.categoryImage.tablet.substring(
                    1,
                    item.categoryImage.tablet.length
                  )}
                  desktop={item.categoryImage.desktop.substring(
                    1,
                    item.categoryImage.desktop.length
                  )}
                />
              </div>
            </div>
            <div
              className={
                index % 2 == 0
                  ? "lg:order-2 space-y-4 md:space-y-5 lg:ml-14 text-center lg:text-left"
                  : "lg:order-1 space-y-4 md:space-y-5 lg:mr-14 text-center lg:text-left"
              }
            >
              {item.new && (
                <p className="uppercase tracking-[8px] text-primaryGold">
                  New Product
                </p>
              )}

              <h1 className="text-[24px] md:text-[30px] lg:text-4xl font-bold uppercase">
                {item.name}
              </h1>
              <p className="text-gray-600 text-[15.5px] lg:text-[17px] leading-[35px]">
                {item.description}
              </p>
              <div className="text-white">
                <div className="text-[13.5px] md:text-base">
                  <ButtonShared
                    text="See Product"
                    background="primaryGold"
                    slug={item.slug}
                    category="headphones"
                    style="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
