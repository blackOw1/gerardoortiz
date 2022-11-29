import styles from './title.module.css';
import { Typography } from 'components/ui';

const Title = () => {
  return (
    <Typography variant="h2" className={styles.stackHeading}>
      The <span className="highlight">stack</span> I use
    </Typography>
  );
};

export default Title;
