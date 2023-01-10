import { useDispatch, useSelector } from 'react-redux';

import styles from './navbar.module.css';
import NavbarList from './navbar-list';
import { Icon, Link } from 'common/components';
import routes from 'config/routes';
import { navbarActions } from './navbar-slice';
import { useToggle } from 'common/hooks';

const Navbar = () => {
  const menuHandler = () => {
    dispatch(navbarActions.setIsMobileListVisible(!isMobileListVisible));
  };

  const [, toggle] = useToggle({ onOpen: menuHandler, onClose: menuHandler });
  const dispatch = useDispatch();
  const { home } = routes;
  const { isVisible: isMobileListVisible } = useSelector(
    (state) => state.navbar.mobileView.list
  );

  return (
    <header className={styles.navContainer}>
      <nav className={styles.nav}>
        <Link variant="relative" path={home}>
          <Icon icon="logo" />
        </Link>
        <NavbarList />
        <Icon icon="menu" onClick={toggle} />
      </nav>
    </header>
  );
};

export default Navbar;
