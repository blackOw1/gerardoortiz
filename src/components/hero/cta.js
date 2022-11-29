import { HashLink as Link } from 'react-router-hash-link';

import styles from './cta.module.css';
import buttonStyles from 'components/ui/button/button.module.css';
import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';
import global from 'global';

const CTA = (props) => {
  const { refs } = props;
  const { projectsRef, aboutRef } = refs;

  const { HEADER_HEIGHT } = global;
  const scrollToSection = (e) => {
    e.preventDefault();
    const target = e.target.closest('a').hash.slice(1);
    let targetRef;

    if (target === aboutRef.current.id) targetRef = aboutRef;
    if (target === projectsRef.current.id) targetRef = projectsRef;

    const mainSectionFlexGap = window.innerWidth <= 768 ? 60 : 120;
    const { offsetTop } = targetRef.current;

    window.scrollTo({ top: offsetTop - (mainSectionFlexGap - HEADER_HEIGHT) });
  };

  return (
    <div className={styles.cta}>
      <Link to="#projects" className={buttonStyles.buttonLink} onClick={scrollToSection}>
        <Button className="buttonPrimary">
          See projects
          <Icon targetIcon="arrow" />
        </Button>
      </Link>
      <Link to="#about" className={buttonStyles.buttonLink} onClick={scrollToSection}>
        <Button className="buttonSecondary">
          About me
          <Icon targetIcon="arrow" />
        </Button>
      </Link>
    </div>
  );
};

export default CTA;
