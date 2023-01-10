import { useRef } from 'react';
import { v4 as generateKey } from 'uuid';
import { useSelector } from 'react-redux';

import styles from './more-projects-list.module.css';
import { Card, Carousel, Text } from 'common/components';

const MoreProjectsList = () => {
  const listRef = useRef();
  const { moreProjects } = useSelector((state) => state.projects);

  return (
    <Carousel listRef={listRef}>
      <ul className={styles.moreProjectsList} ref={listRef}>
        {moreProjects.map(({ name, summary, links }) => {
          const projectRoute = `/projects${links.route}`;

          return (
            <li key={generateKey()}>
              <a className={styles.cardContainer} href={projectRoute}>
                <Card className={styles.card}>
                  <Text className={styles.moreProjectsListTitle} variant="h3">
                    {name}
                  </Text>
                  <Text variant="p">{summary}</Text>
                </Card>
              </a>
            </li>
          );
        })}
      </ul>
    </Carousel>
  );
};

export default MoreProjectsList;
