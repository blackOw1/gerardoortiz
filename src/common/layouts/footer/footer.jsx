import styles from './footer.module.css';
import { Text } from 'common/components';
import FooterList from './footer-list';
import getCurrentYear from 'common/helpers/date';

const Footer = () => {
  const year = getCurrentYear();

  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Text variant="p">&copy; {year} Gerardo Ortiz</Text>
          <FooterList />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
