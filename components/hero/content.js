import styles from './content.module.css';
import { Typography } from 'components/ui';
import CTA from './cta';
import Image from './image';

const Content = (props) => {
  const { refs } = props;

  return (
    <div className={styles.heroContent}>
      <div>
        <Typography variant="p" className={styles.heroStrapline}>
          Hi, I'm Gerardo 👋🏻
        </Typography>
        <Typography variant="h1" className={styles.heroHeading}>
          A <span className="highlight">web developer</span> who likes to code, design, and
          create things for the web.
        </Typography>
        <CTA refs={refs} />
      </div>
      <Image />
    </div>
  );
};

export default Content;
