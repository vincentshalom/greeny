import CheckoutForm from "../../components/forms/CheckoutForm";
import { useSelector } from "react-redux";

function Checkout() {
  const cart = useSelector((store) => store.cart.cart);

  return (
    <section className="">
      <h1>Checkout</h1>
      <CheckoutForm cart={cart} />
    </section>
  );
}

export default Checkout;
