import { api } from "./api";

//Used by the checkout page loader to post the order
export async function placeOrder(order) {
  return api.post("/orders", order);
}

//Used by the order-confirmation page loader to fetch the order by id
export function getOrderById(orderId) {
  return api.get(`/orders/${orderId}`);
}
