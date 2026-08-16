import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../ui/Spinner";
import ProductGrid from "../product/ProductGrid";

function Search() {
  const { query, data } = useLoaderData();
  const navigation = useNavigation();

  const isSearching =
    navigation.state === "loading" &&
    navigation.location?.pathname === "/search";

  return (
    <div>
      <h1 className="">
        {query ? `Results for "${query}"` : "Search products"}
      </h1>

      {isSearching ? (
        <Spinner />
      ) : (
        <ProductGrid
          products={data}
          emptyMessage={
            query
              ? `No products matched "${query}".`
              : "Start typing to search products."
          }
        />
      )}
    </div>
  );
}

export default Search;
