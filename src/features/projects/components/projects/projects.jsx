import { v4 as generateKey } from 'uuid';
import { useSelector } from 'react-redux';

import styles from './projects.module.css';
import { SectionLayout } from 'common/layouts';
import { Card, Link, List, ListItem, Text } from 'common/components';

const Projects = () => {
  const { projects } = useSelector((state) => state.projects);

  return (
    <SectionLayout className={styles.projects}>
      <Text variant="h1">Projects</Text>

      <List className={styles.projectsList}>
        {projects.map(({ name, links, images }) => {
          const path = `/projects${links.route}`;

          return (
            <ListItem key={generateKey()} className={styles.projectsItem}>
              <Link variant="relative" className={styles.projectsLink} path={path}>
                <Card className={styles.projectsCard}>
                  <Text className={styles.projectsText} variant="h2">
                    {name}
                  </Text>
                  <div className={styles.projectsImageContainer}>
                    <picture className={styles.projectsImage}>
                      <img src={images[0]} alt=""></img>
                    </picture>
                  </div>
                </Card>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </SectionLayout>
  );
};

export default Projects;
