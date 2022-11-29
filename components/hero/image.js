import styles from './image.module.css';
import heroImage from 'assets/developer.svg';

const Image = () => {
  return (
    <div className={styles.heroImageContainer}>
      <img src={heroImage} alt="person using a laptop" className={styles.heroImage} />
    </div>
  );
};

export default Image;
