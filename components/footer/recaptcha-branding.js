import styles from './recaptcha-branding.module.css';
import { Typography } from 'components/ui';
import reCAPTCHALinks from 'data/recaptcha-links';

const ReCAPTCHABranding = () => {
  const { privacyPolicyLink, termsOfServiceLink } = reCAPTCHALinks;

  return (
    <Typography variant="p" className={styles.footerNotice}>
      This site is protected by reCAPTCHA and the Google&nbsp;
      <a href={privacyPolicyLink} className={styles.footerHighlight}>
        Privacy Policy
      </a>
      &nbsp;and&nbsp;
      <a href={termsOfServiceLink} className={styles.footerHighlight}>
        Terms of Service
      </a>
      &nbsp;apply.
    </Typography>
  );
};

export default ReCAPTCHABranding;
