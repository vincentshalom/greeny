import { redirect } from "react-router-dom";
import { placeOrder } from "../../services/orderService";
import store from "../../store/store";
import { clearCart } from "../Cart/cartSlice";

export async function checkoutAction({ request }) {
  const formData = await request.formData();
  const orderPayload = Object.fromEntries(formData);
  const orderStatus = await placeOrder(orderPayload);

  store.dispatch(clearCart());
  redirect(`/order-confirmation/${orderStatus.id}`);

  return orderStatus;
}
