import { useLoaderData } from "react-router-dom";

function Products() {
  const products = useLoaderData();
  return (
    <section className="">
      <div className="">Products Page</div>
    </section>
  );
}

export default Products;
