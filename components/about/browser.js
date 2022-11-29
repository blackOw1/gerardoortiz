import styles from './browser.module.css';
import appImage from 'assets/app.svg';

const Browser = () => {
  return (
    <div className={styles.aboutBrowser}>
      <img src={appImage} alt="window showing lines of code" />
    </div>
  );
};

export default Browser;
