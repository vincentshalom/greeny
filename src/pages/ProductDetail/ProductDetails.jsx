import { useLoaderData } from "react-router-dom";

function ProductDetails() {
  const product = useLoaderData();
  return (
    <section className="">
      <div className="">ProductDetails Page</div>
    </section>
  );
}

export default ProductDetails;
