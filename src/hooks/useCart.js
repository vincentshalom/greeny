import { useSelector, useDispatch } from "react-redux";

import {
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
  clearCart,
  getCartCount,
  getCartTotal,
  getCartItems,
} from "../pages/Cart/cartSlice";

export function useCart() {
  const dispatch = useDispatch();
  const count = useSelector(getCartCount);
  const total = useSelector(getCartTotal);
  const items = useSelector(getCartItems);

  return {
    count,
    total,
    items,
    addToCart: (product, quantity = 1) =>
      dispatch(addItem({ ...product, quantity })),
    removeFromCart: (id) => dispatch(removeItem(id)),
    increaseQuantity: (id) => dispatch(increaseItem(id)),
    decreaseQuantity: (id) => dispatch(decreaseItem(id)),
    clear: () => dispatch(clearCart()),
  };
}
