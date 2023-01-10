import { useEffect, useState } from 'react';

export default () => {
  const [resize, setResize] = useState({
    innerWidth: window.innerWidth,
  });

  const resizeHandler = () => {
    setResize({
      innerWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return resize;
};
