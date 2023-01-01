import React, { useState } from "react";
import Header from "../components/Header";
import CountUp from "react-countup";
import Footer from "../components/Footer";
import { IoIosArrowRoundBack, IoIosAlert } from "react-icons/io";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import { AiFillCheckCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import CheckoutModal from "../components/CheckoutModal";

const Checkout = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const items = useSelector((state) => state.cart.cart);
  const total = items.reduce(
    (total, item) => item.quantity * item.price + total,
    0
  );

  return (
    <Layout>
      {modal && <CheckoutModal setModal={setModal} />}
      <Header />

      <section className="max-w-xl md:max-w-4xl px-5 lg:px-0 lg:max-w-6xl mx-auto py-10 font-manrope min-h-[600px]">
        <div
          onClick={() => router.back()}
          href="/headphones"
          className="flex items-center font-medium space-x-2 text-lg w-fit cursor-pointer"
        >
          <IoIosArrowRoundBack />
          <p>Go Back</p>
        </div>

        {!items.length ? (
          <div className="mt-10">
            <h1 className="font-bold text-xl md:text-2xl">
              Your audiophile cart is empty
            </h1>
          </div>
        ) : (
          <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 lg:space-x-28">
            <div className="w-full lg:w-3/4">
              <div className="mt-10 flex items-center justify-between">
                <h1 className="font-bold text-xl md:text-2xl">
                  Your Shopping Cart
                </h1>
                <p className="font-semibold text-[16px] md:text-lg">Price</p>
              </div>

              <div className="mt-10 space-y-8">
                {items.map((item) => (
                  <CheckoutProduct key={item.id} product={item} />
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/4 relative before:absolute before:h-[1px] before:w-full md:before:w-[1px] md:before:h-full before:-top-5 before:bg-gray-300 md:before:-left-10">
              <h2 className="font-semibold text-xl">Subtotal</h2>
              <div className="mt-5">
                {total <= 2000 ? (
                  <small className="font-semibold flex items-center space-x-1 text-[13.2px]">
                    <IoIosAlert className="text-[17.5px] text-red-600" />
                    <p className="text-gray-500">
                      Add <span className="text-red-500">${2000 - total}</span>{" "}
                      items more for free delivery
                    </p>
                  </small>
                ) : (
                  <small className="text-green-600 font-semibold flex items-center space-x-1 text-[13.2px]">
                    <AiFillCheckCircle className="text-[17.5px]" />
                    <p>Your order is eligible for FREE Delivery</p>
                  </small>
                )}

                <div className="mt-5 space-y-5 text-[15px] font-semibold">
                  <h2 className="uppercase flex items-center justify-between">
                    <span>Total</span>
                    <span>${total}</span>
                  </h2>
                  <h2
                    className={`uppercase flex items-center justify-between ${
                      total >= 2000 && "line-through text-gray-400"
                    } `}
                  >
                    <span>Shipping</span>
                    <span>$50</span>
                  </h2>
                  <h2 className="flex items-center justify-between">
                    <span>VAT (Included)</span>
                    <span>${(20 / 100) * total}</span>
                  </h2>
                  <h2 className="text-[17px] flex items-center justify-between relative before:absolute before:w-full before:h-[1px] before:bg-gray-400 before:bottom-8">
                    <span></span>
                    {total >= 2000 ? (
                      <CountUp
                        start={total}
                        end={total + (20 / 100) * total}
                        duration={0.3}
                        decimals={2}
                        prefix="$ "
                      />
                    ) : (
                      <CountUp
                        start={total}
                        end={total + (20 / 100) * total + 50}
                        duration={0.3}
                        decimals={2}
                        prefix="$ "
                      />
                    )}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setModal(true)}
                className="bg-primaryGold text-white w-full mt-6 py-2 rounded-sm shadow-md font-medium"
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        )}
      </section>

      <section id="footer" className="bg-[#191919] snap-start">
        <Footer />
      </section>
    </Layout>
  );
};

export default Checkout;
