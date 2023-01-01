import React from "react";

const ResponsiveImage = ({ mobile, tablet, desktop }) => {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <img
        src={mobile}
        alt="product-image"
        className="rounded-md h-full w-full object-cover"
      />
    </picture>
  );
};

export default ResponsiveImage;
