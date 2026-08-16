import { useRef } from "react";
import { Form, useSearchParams, useSubmit } from "react-router-dom";
import { Search } from "lucide-react";
import Button from "./Button";

function SearchBar() {
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  let timerID = useRef(null);

  function handleSearch(e) {
    clearTimeout(timerID.current);
    const form = e.currentTarget.form;
    timerID.current = setTimeout(() => {
      submit(form);
    }, 500);
  }

  return (
    <Form method="GET" action="/search" role="search" className="">
      <input
        type="search"
        name="q"
        placeholder="Search product..."
        defaultValue={searchParams.get("q") ?? ""}
        onChange={handleSearch}
        className=""
        aria-label="Search products"
      />
      <Button type="submit" className="" aria-label="Submit search">
        <Search className="" />
      </Button>
    </Form>
  );
}

export default SearchBar;
