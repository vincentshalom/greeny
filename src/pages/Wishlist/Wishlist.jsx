import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Wishlist() {
  const wishlist = useLocalStorage("wishlist", []);
  return (
    <section className="">
      <div className="">Wishlist</div>
    </section>
  );
}

export default Wishlist;
