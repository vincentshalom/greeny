import { api } from "./api";

export async function placeOrder(order) {
  return api.post("/order", order);
}
