import styles from './footer.module.css';
import { SocialsList, Copyright } from 'components/footer';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <SocialsList />
        <Copyright />
      </footer>
    </div>
  );
};

export default Footer;
