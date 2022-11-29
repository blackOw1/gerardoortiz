import styles from './copyright.module.css';
import { Typography } from 'components/ui';
import developer from 'data/developer';

const Copyright = () => {
  const { name } = developer;

  return (
    <Typography variant="p" className={styles.footerCopyright}>
      &copy; 2022. Designed and built by {name}.
    </Typography>
  );
};

export default Copyright;
