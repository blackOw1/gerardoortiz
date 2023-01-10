import { v4 as generateKey } from 'uuid';

import styles from './favorite-tools-list.module.css';
import { Text, List, ListItem } from 'common/components';

const FavoriteToolsList = ({ tools }) => {
  return (
    <List className={styles.list}>
      {tools.map(({ name, description, image: SVGImage }) => (
        <ListItem className={styles.listItem} key={generateKey()}>
          <div className={styles.logoContainer}>
            <span className={styles.logo}>
              <SVGImage />
            </span>
          </div>
          <div className={styles.contentContainer}>
            <section className={styles.content}>
              <Text className={styles.contentHeading} variant="h3">
                {name}
              </Text>
              <Text className={styles.contentDescription} variant="p">
                {description}
              </Text>
            </section>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default FavoriteToolsList;
