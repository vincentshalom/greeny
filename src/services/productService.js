import { api } from "./api";

export async function getAllProducts() {
  return api.get("/products");
}

export async function getProductById(id) {
  return api.get(`/products/${id}`);
}

export async function searchProducts(query) {
  const encodedQuery = encodeURIComponent(query);
  return api.get(`/products/?search?q=${encodedQuery}`);
}

export async function getCategories() {
  return api.get("/products/catgeories");
}

export async function getProductByCategory(category) {
  return api.get(`/products/categories/${category}`);
}
