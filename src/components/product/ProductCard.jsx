import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { id, name, title, description, img } = product;
  return (
    <li className="">
      <article class="">
        <Link to={`/products/${id}`} className="">
          <img src="img/green_apples.svg" alt="green_apples" />
          <span class="">Sale 50%</span>
          <button class="">
            <CiHeart />
          </button>
        </Link>
        <div class="">
          <div class="">
            <h3 class="">Green Apples</h3>
            <p class="">
              <span class="">$14.99</span>
              <span class=""> $20.00</span>
            </p>
            <p class="">
              <img src="img/rating_4.svg" alt="star rating" />
            </p>
          </div>
          <div class="">
            <button class="">
              <HiOutlineShoppingBag size={16} />
            </button>
          </div>
        </div>
      </article>
    </li>
  );
}

export default ProductCard;
