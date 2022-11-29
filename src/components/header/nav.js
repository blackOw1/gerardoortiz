import { HashLink as Link } from 'react-router-hash-link';
import { v4 as generateKey } from 'uuid';

import styles from './nav.module.css';
import sections from 'data/sections';
import { upperCaseFirstLetter } from 'utilities/text-formatter';
import global from 'global';

const Nav = (props) => {
  const { refs } = props;
  const { aboutRef, projectsRef, contactRef } = refs;
  const sectionData = [...sections.values()];
  const { MEDIA_BREAKPOINT_MD, HEADER_HEIGHT } = global;

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
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {sectionData.map((section) => (
          <li className={styles.navListItem} key={generateKey()}>
            <Link
              to={section.path}
              className={styles.navListItemLink}
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

export default Nav;
