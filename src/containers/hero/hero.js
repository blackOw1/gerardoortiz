import styles from './hero.module.css';
import { Content } from 'components/hero';

const Hero = (props) => {
  const { refs } = props;

  return (
    <div className={styles.heroContainer}>
      <section className={`${styles.hero} sectionHidden`}>
        <Content refs={refs} />
      </section>
    </div>
  );
};

export default Hero;
