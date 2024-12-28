import { useRef, useEffect, useState } from 'react';

function usePrevious<T>(value: T): T | undefined {
  const [preValue, setPrevValue] = useState<T | undefined>();
  const refValue = useRef(undefined);

  useEffect(() => {
    setPrevValue(refValue.current);
    refValue.current = value;
  }, [value]);

  return preValue;
}
export default usePrevious;
