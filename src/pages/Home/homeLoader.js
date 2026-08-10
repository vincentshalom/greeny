import { getAllProducts } from "../../services/productService";

export async function homeloader() {
  const products = await getAllProducts();
  return products;
}
