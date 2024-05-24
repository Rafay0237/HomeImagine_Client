import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  productsQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    decrementQty: (state, action) => {
      let newCartItems = state.cartItems.map((item) => {
        if (item.title === action.payload) {
          return {
            ...item,
            qty: item.qty > 1 ? item.qty - 1 : 1
          };
        }
        return item;
      });

      state.cartItems = newCartItems;
    },

    incrementQty: (state, action) => {
      let newCartItems = state.cartItems.map((item) => {
        if (item.title === action.payload) {
          return {
            ...item,
            qty: item.qty < 47 ? item.qty + 1 : item.qty,
          };
        }
        return item;
      });

      state.cartItems = newCartItems;
    },
    removeItem: (state, action) => {
      let newCartItems = state.cartItems.filter(
        (item) => item.title !== action.payload
      );

      state.cartItems = newCartItems;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotal: (state,action) => {
      let cartItems=action.payload

      state.totalAmount= cartItems.reduce(
        (total, item) => total + item.qty * item.price,
        0
      );

      state.productsQty = cartItems.reduce(
        (totalQty, item) => totalQty + item.qty,
        0
      );
    },
  },
});

export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeItem,
  clearCart,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;