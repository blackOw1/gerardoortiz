import { v4 as generateKey } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import styles from './navbar-list.module.css';
import { Link, List, ListItem } from 'common/components';
import { getNavbarData } from 'api/data';
import { useResize, useTransform } from 'common/hooks';
import { navbarActions } from './navbar-slice';

const NavbarList = () => {
  const dispatch = useDispatch();
  const resize = useResize();
  const transform = useTransform();
  const links = getNavbarData();
  const isMobileView = resize.innerWidth < 768;
  const { isVisible: isMobileListVisible } = useSelector(
    (state) => state.navbar.mobileView.list
  );

  const navbarLinkHandler = () => {
    dispatch(navbarActions.setIsMobileListVisible(false));
  };

  const mobileStyles = {
    visibility: 'visible',
    transform: transform({ y: '8' }),
  };

  useEffect(() => {
    if (!isMobileView && isMobileListVisible)
      dispatch(navbarActions.setIsMobileListVisible(!isMobileListVisible));
  }, [dispatch, isMobileListVisible, isMobileView]);

  return (
    <List
      style={(isMobileListVisible && isMobileView && mobileStyles) || null}
      className={styles.navbarList}
    >
      {links.map(({ name, link, linkType }) => (
        <ListItem className={styles.navbarListItem} key={generateKey()}>
          <Link
            className={styles.navbarListLink}
            path={link}
            variant={linkType}
            onClick={(isMobileView && navbarLinkHandler) || null}
          >
            {name}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavbarList;
