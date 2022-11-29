import styles from './title.module.css';
import { Typography } from 'components/ui';

const Title = () => {
  return (
    <Typography variant="h2" className={styles.contactHeading}>
      Let's <span className={styles.contactHighlight}>connect</span>
    </Typography>
  );
};

export default Title;
