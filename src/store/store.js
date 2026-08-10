import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../pages/Cart/cartSlice";
import authReducer from "../pages/Auth/authSlice";
import { CART_STORAGE_KEY, AUTH_STORAGE_KEY } from "../utils/constants";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

let prevAuth = store.getState().auth;
let prevCart = store.getState().cart;

store.subscribe(() => {
  const { auth, cart } = store.getState();

  if (auth !== prevAuth) {
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
    prevAuth = auth;
  }
  if (cart !== prevCart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    prevCart = cart;
  }
});

export default store;
