import { getAllProducts } from "../../services/productService";

export async function productsLoader() {
  const products = await getAllProducts();
  if (!products.length) return [];
  return products;
}
