import { useState, useEffect } from "react";

export function useDebounce(query, delay = 400) {
  const [value, setvalue] = useState(query);
  useEffect(() => {
    const timer = setTimeout(() => {
      setvalue(query);
    }, delay);

    return () => clearTimeout(timer);
  }, [query, delay]);

  return value;
}
