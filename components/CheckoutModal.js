import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../store/features/cartSlice";

const CheckoutModal = ({ setModal }) => {
  const [loading, setLoading] = useState(true);
  const items = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const total = items.reduce(
    (total, item) => item.quantity * item.price + total,
    0
  );

  const closeModal = () => {
    router.push("/");
    setModal(false);

    items.forEach((item) => dispatch(removeItemFromCart(item.id)));
  };

  return (
    <div className="font-manrope absolute flex justify-center py-40 top-0 right-0 left-0 w-full min-h-screen bottom-0 bg-black/80 z-40">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, y: 60 }}
          className="fixed shadow-xl bg-white w-[90%] h-[65%] sm:w-[400px] sm:h-[420px] md:h-[420px] md:w-[550px] rounded-md flex flex-col"
        >
          <motion.div className="flex flex-col justify-center py-5 px-5 flex-1">
            <motion.div className="flex-1 flex flex-col items-center space-y-7">
              <div className="mt-6">
                <Image
                  src="/assets/shared/desktop/logo-dark.svg"
                  width="150"
                  height="150"
                />
              </div>
              <div className="text-center space-y-1">
                <h2 className="font-bold uppercase text-[18.5px] md:text-[22.5px]">
                  Thank you for your order
                </h2>
                <p className="text-gray-500 font-medium text-[14px] md:text-[15px]">
                  You will receive an email confirmation shortly
                </p>
              </div>
              <div className="flex-1 flex flex-col sm:flex-row w-full">
                <div className="bg-[#f2f2f2] sm:w-2/3 h-full rounded-l-md pr-5 sm:pr-2">
                  <div className="flex items-center">
                    <Image
                      src={items[0].image.mobile.substring(
                        1,
                        items[0].image.mobile.length
                      )}
                      width="80"
                      height="80"
                    />
                    <div className="space-y-1 flex-1">
                      <h4 className="font-bold">
                        {items[0].name
                          .toUpperCase()
                          .replace(items[0].category.toUpperCase(), " ")}
                      </h4>
                      <h4 className="text-[14px] text-gray-600">
                        ${items[0].price}
                      </h4>
                    </div>
                    <h4>x {items[0].quantity}</h4>
                  </div>
                  <div className="relative sm:before:absolute before:w-full before:h-[1.5px] before:bg-gray-300">
                    {items.length > 1 && (
                      <h4 className="px-5 py-2 text-[14.5px]">
                        and {items.length - 1} more order(s)
                      </h4>
                    )}
                  </div>
                </div>
                <div className="bg-[#191919] py-2 px-5 sm:py-0 sm:px-0 sm:space-y-1 sm:w-1/3 h-full sm:rounded-r-md rounded-b-md flex items-center justify-between sm:justify-center flex-row sm:flex-col">
                  <h4 className="text-white uppercase">Subtotal</h4>
                  {total >= 2000 ? (
                    <h2 className="text-[17px] uppercase text-white font-bold">
                      ${total + (20 / 100) * total}
                    </h2>
                  ) : (
                    <h2 className="text-[17px] uppercase text-white font-bold">
                      ${total + (20 / 100) * total + 50}
                    </h2>
                  )}
                </div>
              </div>
            </motion.div>
            <button
              className="w-full mt-10 uppercase text-[16.5px] bg-primaryGold text-white py-2.5 rounded-sm active:scale-95 duration-150 transition-all shadow-md"
              onClick={closeModal}
            >
              Back to Home
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CheckoutModal;
