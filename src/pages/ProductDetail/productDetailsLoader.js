import { getProductById } from "../../services/productService";

export async function loader({ params }) {
  const id = params.id;
  if (!id) return;

  const product = await getProductById(id);
  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }
  return product;
}
