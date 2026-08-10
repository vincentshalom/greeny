import { api } from "./api";

export async function sendMessage(message) {
  return api.post("/contact", message);
}
