import ProductCard from "./ProductCard";

function ProductGrid({ products, emptyMessage = "No products found." }) {
  if (!products?.length) {
    return <p>{emptyMessage}</p>;
  }

  return (
    <ul className="">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductGrid;
