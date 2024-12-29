import { useEffect, useState } from 'react';

const DEFAULT_DEBOUNCE_TIME = 500;
function useDebounceState<T>(initialValue: T, debouncedTime?: number) {
  const [debouncedState, setDebouncedState] = useState<T>(initialValue);
  const [state, setState] = useState<T>(initialValue);

  const handleStateChange = (value: T) => {
    setState(value);
  };
  useEffect(() => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setDebouncedState(state);
    }, debouncedTime || DEFAULT_DEBOUNCE_TIME);
    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  return {
    state,
    debouncedState,
    setState: handleStateChange,
  };
}
export default useDebounceState;
