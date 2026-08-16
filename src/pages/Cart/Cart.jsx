import { useCart } from "../../hooks/useCart";
import CartItem from "../../components/cart/CartItem";
import Button from "../../components/ui/Button";
import { LucideCircleX } from "lucide-react";

function Cart() {
  const { total, items } = useCart();

  return (
    <section class="homepage_13_shopping_cart_section">
      <div class="shopping_cart_container">
        {items.length === 0 ? (
          <p className="">Your cart is empty</p>
        ) : (
          <div class="content_container flex-col g-1">
            <div class="shopping_cart_header flex-justify-align g-half">
              <h2>
                Shopping Cart (<span class="totalItemsInCart"> 2 </span>)
              </h2>
              <Button type="button" onClick={""} className="">
                <LucideCircleX />
              </Button>
            </div>
            <div class="shopping_cart_body">
              <ul class="flex-col g-1">
                {items.map((product) => {
                  return <CartItem key={product.id} product={product} />;
                })}
              </ul>
            </div>
            <div class="shopping_cart_footer flex-col g-1">
              <div class="flex-justify-align g-half">
                <h3 className="">2 Product(s)</h3>
                <p className="">$26.00</p>
              </div>
              <Button to="/cart" className="">
                Proceed to Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
