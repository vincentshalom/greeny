function CartItem({ product }) {
  return (
    <li>
      <figure class="flex-align-center g-half">
        <div>
          <img src="img/small_orange.svg" alt="orange" />
        </div>
        <figcaption class="flex-col g-half">
          <h4>Fresh Orange</h4>
          <p>
            <span class="num_of_product">1</span> x
            <span class="unit_cost">12.00</span>
          </p>
        </figcaption>
      </figure>
      <button class="delete_item_from_cart">X</button>
    </li>
  );
}

export default CartItem;
