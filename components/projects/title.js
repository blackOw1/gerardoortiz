import styles from './title.module.css';
import { Typography } from 'components/ui';

const Title = () => {
  return (
    <Typography variant="h2" className={styles.projectsHeading}>
      <span className="highlight">Projects</span> I have worked on
    </Typography>
  );
};

export default Title;
