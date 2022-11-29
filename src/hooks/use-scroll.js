import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState({
    scrollY: window.scrollY,
    scrollDirection: null,
  });

  const scrollHandler = () => {
    setScroll((prevState) => ({
      scrollY: window.scrollY,
      scrollDirection: (prevState.scrollY < window.scrollY && 'down') || 'up',
    }));
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return scroll;
};
