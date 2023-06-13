import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import data from "../public/data.json";
import { addItemToCart } from "../store/features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import ProductsRecod from "./ProductsRecod";
import ResponsiveImage from "./ResponsiveImage";

const ProductDetails = ({ product }) => {
  const [count, setCount] = useState(1);
  const router = useRouter();
  const items = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const successAlert = () =>
    toast.success("Item added to cart", { hideProgressBar: true });

  const failAlert = () =>
    toast.error("Item already added to cart", { hideProgressBar: true });

  const addItem = (slug) => {
    const item = data.find((item) => item.slug === slug);

    const product = {
      id: item.id,
      name: item.name,
      slug: item.slug,
      image: item.image,
      price: item.price,
      category: item.category,
      quantity: count,
    };

    if (items.findIndex((item) => item.slug === product.slug) > -1) {
      failAlert();
    } else {
      dispatch(addItemToCart(product));

      successAlert();
    }
  };

  return (
    <>
      <Header />

      <section className="max-w-xl md:max-w-4xl px-5 lg:px-0 lg:max-w-6xl mx-auto py-10 font-manrope">
        <div
          onClick={() => router.back()}
          className="flex cursor-pointer font-medium items-center space-x-2 text-lg w-fit"
        >
          <IoIosArrowRoundBack />
          <p>Go Back</p>
        </div>

        <main className="mt-14">
          <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-10 lg:space-x-20">
            <div className="space-y-4 md:space-y-6 mt-5 md:mt-0 w-full md:w-1/2 order-2 md:order-1">
              {product.new && (
                <p className="uppercase tracking-[8px] text-primaryGold">
                  New Product
                </p>
              )}

              <h1 className="text-[22px] md:text-4xl font-bold uppercase">
                {product.name}
              </h1>
              <p className="text-[#888888] leading-[30px]">
                {product.description}
              </p>
              <h4 className="font-bold text-lg md:text-xl">${product.price}</h4>
              <div className="flex space-x-5">
                <div className="bg-[#f2f2f2] flex items-center justify-between px-3 w-[100px]">
                  <small
                    onClick={() =>
                      count > 1 && setCount((prevCount) => prevCount - 1)
                    }
                    className="text-lg font-bold cursor-pointer"
                  >
                    -
                  </small>
                  <p className="flex-1 text-center">{count}</p>
                  <small
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                    className="text-lg font-bold cursor-pointer"
                  >
                    +
                  </small>
                </div>
                <button
                  onClick={() => addItem(product.slug)}
                  className="bg-primaryGold text-white shadow-md uppercase px-5 py-2 rounded-sm active:scale-95 transition-all duration-150"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="flex w-full md:w-1/2 justify-end order-1 md:order-2">
              <div className="md:h-full h-96 w-full">
                <ResponsiveImage
                  mobile={product.image.mobile.substring(
                    1,
                    product.image.mobile.length
                  )}
                  tablet={product.image.tablet.substring(
                    1,
                    product.image.tablet.length
                  )}
                  desktop={product.image.desktop.substring(
                    1,
                    product.image.desktop.length
                  )}
                />
              </div>
            </div>
          </div>

          <div className="my-20 space-y-5">
            <h1 className="uppercase text-2xl font-semibold">Features</h1>
            <p className="leading-[30px]">
              {product.features.replace(".", "\n\n")}
            </p>
          </div>

          <div>
            <h1 className="uppercase text-2xl font-semibold">In the box</h1>
            <div className="space-y-4 mt-7 md:mt-5">
              {product.includes.map((item, index) => (
                <div className="flex justify-between" key={index}>
                  <p className="text-primaryGold flex-1 text-left md:text-center">
                    {item.quantity}x
                  </p>
                  <h4 className="w-[200px] text-right">{item.item}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:gap-x-5 gap-y-5 grid-cols-1 md:grid-cols-3 my-20 h-full md:h-[500px]">
            {Object.keys(product.gallery).map((key, index) => {
              return (
                <div
                  className={`${
                    index == 1
                      ? "md:h-[500px] row-span-2 col-span-2"
                      : "md:h-60"
                  }`}
                  key={index}
                >
                  <ResponsiveImage
                    mobile={product.gallery[key].mobile.substring(
                      1,
                      product.gallery[key].mobile.length
                    )}
                    tablet={product.gallery[key].tablet.substring(
                      1,
                      product.gallery[key].tablet.length
                    )}
                    desktop={product.gallery[key].desktop.substring(
                      1,
                      product.gallery[key].desktop.length
                    )}
                  />
                </div>
              );
            })}
          </div>

          <div>
            <h3 className="uppercase text-2xl font-semibold text-center">
              You may also like
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between mt-10 space-y-10 md:space-y-0 md:space-x-10">
              {product.others.map((item, index) => (
                <ProductsRecod item={item} key={index} />
              ))}
            </div>
          </div>
        </main>
      </section>

      <section id="footer" className="bg-[#191919] snap-start">
        <Footer />
      </section>

      <ToastContainer autoClose={1500} className="w-20" />
    </>
  );
};

export default ProductDetails;
