import { searchProducts } from "../../services/productService";

export async function searchLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q")?.trim() ?? "";

  const data = query ? await searchProducts(query) : [];
  return { query, data };
}
