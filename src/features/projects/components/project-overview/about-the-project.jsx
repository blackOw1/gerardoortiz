import styles from './about-the-project.module.css';
import { SectionLayout } from 'common/layouts';
import { Text } from 'common/components';

const AboutTheProject = ({ description }) => {
  return (
    <SectionLayout>
      <Text className={styles.heading} variant="h2">
        About the project
      </Text>
      <Text className={styles.text} variant="p">
        {description}
      </Text>
    </SectionLayout>
  );
};

export default AboutTheProject;
