import styles from './more-projects.module.css';
import { Text } from 'common/components';
import { SectionLayout } from 'common/layouts';
import MoreProjectsList from './more-projects-list';

const MoreProjects = () => {
  return (
    <SectionLayout className={styles.moreProjects}>
      <Text className={styles.heading} variant="h2">
        More projects I worked on
      </Text>
      <MoreProjectsList />
    </SectionLayout>
  );
};

export default MoreProjects;
