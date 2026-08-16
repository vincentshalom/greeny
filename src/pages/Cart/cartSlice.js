import { createSlice } from "@reduxjs/toolkit";
import { CART_STORAGE_KEY } from "../../utils/constants";

export function loadFromLocalStorage() {
  try {
    const storedItems = localStorage.getItem(CART_STORAGE_KEY);
    return storedItems ? JSON.parse(storedItems) : { cart: [] };
  } catch {
    return { cart: [] };
  }
}

const initialState = {
  cart: loadFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const itemExists = state.cart.find((item) => item.id === product.id);
      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: product.quantity || 1 });
      }
    },

    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseItem(state, action) {
      const product = state.cart.find((item) => item.id === action.payload);
      if (!product) return;

      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== product.id);
      }
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, removeItem, increaseItem, decreaseItem, clearCart } =
  cartSlice.actions;

export function totalItemsInCart() {}

export const getCartItems = (state) => state.cart.items;
export const getCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const getCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;
