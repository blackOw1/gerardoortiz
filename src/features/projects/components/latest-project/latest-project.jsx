import { useSelector } from 'react-redux';

import styles from './latest-project.module.css';
import { Button, Card, Link, Text } from 'common/components';
import { SectionLayout } from 'common/layouts';
import routes from 'config/routes';

const LatestProject = () => {
  const { latestProject } = useSelector((state) => state.projects);
  const [{ links, images }] = latestProject;
  const { liveSite, route } = links;
  const selectedImage = images.slice(-1);
  const projectPath = `${routes.projects}${route}`;

  return (
    <SectionLayout>
      <Card className={styles.latestProject}>
        <Text className={styles.heading} variant="h2">
          Check out my latest project
        </Text>

        <div className={styles.buttons}>
          <Link
            className={styles.link}
            variant="absolute"
            path={liveSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className={styles.buttonPrimary}>
              See website
            </Button>
          </Link>
          <Link className={styles.link} variant="relative" path={projectPath}>
            <Button variant="secondary" className={styles.buttonSecondary}>
              Learn more
            </Button>
          </Link>
        </div>

        <div className={styles.projectImageContainer}>
          <picture className={styles.projectImage}>
            <source srcSet={selectedImage} media="(min-width: 320px)" />
            <img src={selectedImage} alt="project screenshot" />
          </picture>
        </div>
      </Card>
    </SectionLayout>
  );
};

export default LatestProject;
