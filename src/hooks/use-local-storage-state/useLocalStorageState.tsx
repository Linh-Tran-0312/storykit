import { useEffect, useState } from "react";

const getItem = (key: string) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

function useLocalStorageState<T>(
  key: string,
  defaultValue?: T
): [T, (value: T) => void] {
  const [state, setState] = useState(getItem(key));

  const setItem = (value: T) => {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
    setState(value);
  };
  useEffect(() => {
    if (!getItem(key) && defaultValue) {
      setItem(defaultValue);
    }
  }, [key, defaultValue]);

  return [state, setItem];
}
export default useLocalStorageState;
