import styles from './title.module.css';
import { Typography } from 'components/ui';

const Title = () => {
  return (
    <Typography variant="h2" className={styles.aboutHeading}>
      A brief <span className="highlight">history</span> about me
    </Typography>
  );
};

export default Title;
