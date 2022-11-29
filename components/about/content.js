import styles from './content.module.css';
import Windows from './windows';
import { Typography } from 'components/ui';

const Content = () => {
  return (
    <div className={styles.aboutContent}>
      <Windows />
      <div className={styles.aboutParagraphs}>
        <Typography variant="p" className={styles.aboutParagraph}>
          Hi there. I am a self-taught developer who loves JavaScript. I decided I wanted to do
          web development because I like to build things. From writing the HTML markup to
          deploying the app, it's an enjoyable experience knowing that I built something great
          that works!
        </Typography>
        <Typography variant="p" className={styles.aboutParagraph}>
          Outside of web development, I enjoy riding the trails with my mountain bike and like
          exploring new restaurants.
        </Typography>
      </div>
    </div>
  );
};

export default Content;
