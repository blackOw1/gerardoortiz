import styles from './footer.module.css';
import { SocialsList, Copyright, ReCAPTCHABranding } from 'components/footer';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <SocialsList />
        <Copyright />
        <ReCAPTCHABranding />
      </footer>
    </div>
  );
};

export default Footer;
