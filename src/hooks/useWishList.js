import { useLocalStorage } from "./useLocalStorage";

export function useWishList() {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  function addToWishlist(product) {
    setWishlist((list) => {
      if (list.some((item) => item.id === product.id)) return list;
    });
  }

  function removeFromWishlist(id) {
    setWishlist((list) => {
      list.filter((item) => item.id !== id);
    });
  }

  function isInWishlist(id) {
    setWishlist((list) => {
      list.some((item) => item.id === id);
    });
  }

  return [wishlist, addToWishlist, removeFromWishlist, isInWishlist];
}
