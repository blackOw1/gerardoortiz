import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './header.module.css';
import brandLogo from 'assets/logos/gologo.svg';
import { Nav, MobileNav } from 'components/header';
import { Hamburger } from 'components/ui/icon';
import { headerActions } from './header-slice';
import { useScroll } from 'hooks/use-scroll';
import { useEffect } from 'react';
import global from 'global';

const Header = (props) => {
  const { refs } = props;
  const dispatch = useDispatch();
  const scroll = useScroll();
  const { scrollY, scrollDirection } = scroll;
  const { HEADER_HEIGHT } = global;

  const toggleMobileNav = (e) => {
    e.preventDefault();
    dispatch(headerActions.toggleMobileNav());
  };

  const scrollToTop = (e) => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    let value;

    if (scrollDirection === 'down' && scrollY > HEADER_HEIGHT) value = false;
    if (scrollDirection === 'up' && (scrollY < HEADER_HEIGHT || scrollY > HEADER_HEIGHT))
      value = true;

    dispatch(headerActions.setIsHeaderVisible(value));
  }, [dispatch, scrollDirection, scrollY, HEADER_HEIGHT]);

  const setAdditionalHeaderContainerClassNames = () => {
    if (scrollY === 0) return '';
    if (scrollDirection === 'down' && scrollY > HEADER_HEIGHT) return styles.headerFixed;
    if (scrollDirection === 'up' && (scrollY < HEADER_HEIGHT || scrollY > HEADER_HEIGHT))
      return `${styles.headerFixed} ${styles.headerVisible}`;
  };

  const headerContainerClassNames = `${
    styles.headerContainer
  } ${setAdditionalHeaderContainerClassNames()}`;

  return (
    <div className={headerContainerClassNames}>
      <header className={styles.header}>
        <Link to="/" onClick={scrollToTop}>
          <img src={brandLogo} alt="brand logo" />
        </Link>
        <Hamburger onClick={toggleMobileNav} />
        <Nav refs={refs} />
        <MobileNav refs={refs} />
      </header>
    </div>
  );
};

export default Header;
