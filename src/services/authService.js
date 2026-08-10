import { api } from "./api";

export async function login(credentials) {
  return api.post("/login", credentials);
}

export async function signup(userDetails) {
  return api.post("/signup", userDetails);
}
