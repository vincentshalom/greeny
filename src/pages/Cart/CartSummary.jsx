import { formatCurrency } from "../../utils/formatCurrency";
import { TAX_RATE, FREE_SHIPPING_THRESHOLD } from "../../utils/constants";
import Button from "../../components/ui/Button";

function CartSummary({ subtotal }) {
  const tax = subtotal * TAX_RATE;
  const shipping =
    subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + tax + shipping;
  return (
    <section className="">
      <div className="">
        <ul className="">
          <li className="">
            <p>Subtotal</p>
            <p>{formatCurrency(subtotal)}</p>
          </li>
          <li className="">
            <p>Tax</p>
            <p>{formatCurrency(tax)}</p>
          </li>
          <li className="">
            <p>Shipping</p>
            <p>{shipping === 0 ? "Free" : formatCurrency(shipping)}</p>
          </li>
          <li className="">
            <p>Total</p>
            <p>{formatCurrency(total)}</p>
          </li>
          <li className=""></li>
        </ul>

        <Button className="" disabled={subtotal === 0} to="/checkout">
          Proceed to Checkout
        </Button>
      </div>
    </section>
  );
}

export default CartSummary;
