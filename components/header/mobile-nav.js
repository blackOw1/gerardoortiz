import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as generateKey } from 'uuid';

import styles from './mobile-nav.module.css';
import sections from 'data/sections';
import { upperCaseFirstLetter } from 'utilities/text-formatter';
import { headerActions } from 'containers/header/header-slice';
import { useResize } from 'hooks/use-resize';
import { useScroll } from 'hooks/use-scroll';
import global from 'global';

const MobileNav = (props) => {
  const { refs } = props;
  const { aboutRef, projectsRef, contactRef } = refs;
  const dispatch = useDispatch();
  const { isMobileNavOpen, isHeaderVisible } = useSelector((state) => state.header);
  const resize = useResize();
  const scroll = useScroll();
  const { MEDIA_BREAKPOINT_MD, HEADER_HEIGHT } = global;
  const sectionData = [...sections.values()];
  const classNames = `${styles.mobileNav} ${
    (!isMobileNavOpen && styles.mobileNavHidden) || ''
  }`;

  useEffect(() => {
    const isTargetBreakpoint = resize.innerWidth < MEDIA_BREAKPOINT_MD;

    if (isMobileNavOpen && (!isTargetBreakpoint || (!isHeaderVisible && scroll.scrollY)))
      dispatch(headerActions.setIsMobileNavOpen(false));
  }, [dispatch, isMobileNavOpen, resize, isHeaderVisible, scroll, MEDIA_BREAKPOINT_MD]);

  const scrollToSection = (e) => {
    e.preventDefault();
    const target = e.target.hash.slice(1);
    let targetRef;

    if (target === aboutRef.current.id) targetRef = aboutRef;
    if (target === projectsRef.current.id) targetRef = projectsRef;
    if (target === contactRef.current.id) targetRef = contactRef;

    const mainSectionFlexGap = window.innerWidth <= MEDIA_BREAKPOINT_MD ? 60 : 120;
    const { offsetTop } = targetRef.current;

    window.scrollTo({ top: offsetTop - (mainSectionFlexGap - HEADER_HEIGHT) });
    dispatch(headerActions.toggleMobileNav());
  };

  return (
    <nav className={classNames}>
      <ul className={styles.mobileNavList}>
        {sectionData.map((section) => (
          <li key={generateKey()} className={styles.mobileNavListItem}>
            <Link
              to={section.path}
              className={styles.mobileNavListItemLink}
              onClick={scrollToSection}
            >
              {upperCaseFirstLetter(section.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
