import styles from './hero.module.css';
import { Button, Link, Text } from 'common/components';
import { SectionLayout } from 'common/layouts';

const Hero = () => {
  return (
    <SectionLayout className={styles.hero}>
      <span className={styles.hand}></span>

      <Text variant="h1">Hey! I&apos;m Gerardo.</Text>

      <Text variant="p">
        A self-taught developer who likes to code, design, and create things for the web.
      </Text>

      <div className={styles.buttonsContainer}>
        <Link className={styles.link} variant="relative" path="/projects">
          <Button className={styles.buttonPrimary} type="button" variant="primary">
            See projects
          </Button>
        </Link>
        <Link className={styles.link} variant="relative" path="/about">
          <Button className={styles.buttonSecondary} type="button" variant="secondary">
            Learn more
          </Button>
        </Link>
      </div>
    </SectionLayout>
  );
};

export default Hero;
