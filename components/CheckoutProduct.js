import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from "../store/features/cartSlice";

const CheckoutProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex space-x-5">
      <div>
        <Image
          src={product.image.desktop.substring(1, product.image.desktop.length)}
          width="120"
          height="120"
          className="rounded-md"
          alt="product-image"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <h1 className="font-semibold text-[16.5px] mb-1">{product.name}</h1>
          <small className="text-gray-500">Eligible for free shipping</small>
        </div>
        <div className="flex items-center space-x-5">
          <div className="bg-[#f2f2f2] flex items-center justify-between px-3 w-[100px] h-[35px]">
            <small
              onClick={() => dispatch(decreaseItemQuantity(product.id))}
              className="text-lg font-bold cursor-pointer"
            >
              -
            </small>
            <p className="flex-1 text-center">{product.quantity}</p>
            <small
              onClick={() => dispatch(increaseItemQuantity(product.id))}
              className="text-lg font-bold cursor-pointer"
            >
              +
            </small>
          </div>

          <small
            onClick={() => dispatch(removeItemFromCart(product.id))}
            className="relative before:absolute before:w-[1.45px] before:h-full before:right-12 before:bg-gray-200 font-semibold cursor-pointer text-gray-500"
          >
            Delete
          </small>
        </div>
      </div>

      <div>
        <h3 className="font-semibold">${product.price}</h3>
      </div>
    </div>
  );
};

export default CheckoutProduct;
