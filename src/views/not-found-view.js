import { Link } from 'react-router-dom';

import styles from './not-found-view.module.css';
import headerStyles from 'containers/header/header.module.css';
import buttonStyles from 'components/ui/button/button.module.css';
import { Button } from 'components/ui';
import brandLogo from 'assets/logos/gologo.svg';

const NotFoundView = () => {
  return (
    <>
      <div className={headerStyles.headerContainer}>
        <header className={headerStyles.header}>
          <Link to="/">
            <img src={brandLogo} alt="brand logo" />
          </Link>
        </header>
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>404</h1>
        <p className={styles.paragraph}>
          Oh no! It looks like the page you were looking for doesn't exist.
        </p>
        <Link to="/" className={buttonStyles.buttonLink}>
          <Button className="buttonPrimary">Back to home</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFoundView;
