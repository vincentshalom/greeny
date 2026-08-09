import { useState } from "react";

export function useLocalStorage(key, initialVal) {
  const [value, setValue] = useState(() => {
    const arr = localStorage.getItem(key);
    return arr ? JSON.stringify(arr) : initialVal;
  });

  function storeToStorage(newVal) {
    setValue(newVal);
    localStorage.setItem(key, JSON.stringify(newVal));
  }

  return [value, storeToStorage];
}
