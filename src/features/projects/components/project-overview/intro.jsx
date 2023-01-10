import styles from './intro.module.css';
import { SectionLayout } from 'common/layouts';
import { Image, Text } from 'common/components';

const Intro = ({ name, image }) => {
  return (
    <SectionLayout>
      <div className={styles.frameContainer}>
        <div className={styles.frame}>
          <Text className={styles.heading} variant="h1">
            {name}
          </Text>
          <picture className={styles.imageContainer}>
            <Image className={styles.image} sourceUrl={image} />
          </picture>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Intro;
