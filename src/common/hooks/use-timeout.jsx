import { useEffect, useRef } from 'react';

export default (callback, delay) => {
  const storedCallback = useRef(callback);

  useEffect(() => {
    storedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const timer = setTimeout(() => storedCallback.current(), delay);

    return () => clearTimeout(timer);
  }, [delay]);
};
