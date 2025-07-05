import { useState } from 'react';

type UseCountUpReturn = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useCountUp = (): UseCountUpReturn => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(prev => prev + 1);
  };

  const decrement = (): void => {
    setCount(prev => prev - 1);
  };

  return { count, increment, decrement };
};

export default useCountUp;