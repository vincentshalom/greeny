import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../pages/Cart/cartSlice";
import { CART_STORAGE_KEY } from "../utils/constants";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const cartState = store.getState().cart;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));
});

export default store;
