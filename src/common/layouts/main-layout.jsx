import { useRef } from 'react';

import styles from './main-layout.module.css';
import { useTransform, useTimeout } from 'common/hooks';

const MainLayout = ({ children }) => {
  const transform = useTransform();
  const mainRef = useRef();

  useTimeout(() => {
    mainRef.current.style.transform = transform({ y: 0 });
    mainRef.current.style.opacity = 1;
  }, 0);

  return (
    <main
      className={styles.main}
      style={{ transform: transform({ y: 24 }), opacity: 0 }}
      ref={mainRef}
    >
      {children}
    </main>
  );
};

export default MainLayout;
