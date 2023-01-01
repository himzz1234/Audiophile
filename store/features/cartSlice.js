import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },

  reducers: {
    addItemToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },

    removeItemFromCart: (state, action) => {
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload
      );

      const newArr = [...state.cart];

      newArr.splice(index, 1);
      state.cart = newArr;
    },

    increaseItemQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload
      );

      state.cart[index].quantity += 1;
    },

    decreaseItemQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload
      );

      if (state.cart[index].quantity > 1) state.cart[index].quantity -= 1;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
