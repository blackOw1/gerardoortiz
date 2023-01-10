import styles from './see-it-in-action.module.css';
import { SectionLayout } from 'common/layouts';
import { Icon, Link, List, ListItem, Text } from 'common/components';

const SeeItInAction = ({ liveSite, repoSite }) => {
  return (
    <SectionLayout>
      <Text className={styles.heading} variant="h2">
        See it in action!
      </Text>
      <div>
        <List className={styles.list}>
          <ListItem className={styles.listItem}>
            <Link
              className={styles.link}
              variant="absolute"
              path={liveSite}
              target="_blank"
              rel="noopener norefferer"
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon}>
                  <Icon icon="globe" />
                </span>
              </div>
              <Text className={styles.text} variant="p">
                Live site
              </Text>
            </Link>
          </ListItem>
          <ListItem className={styles.listItem}>
            <Link
              className={styles.link}
              variant="absolute"
              path={repoSite}
              target="_blank"
              rel="noopener norefferer"
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon}>
                  <Icon icon="github" />
                </span>
              </div>
              <Text className={styles.text} variant="p">
                Source code
              </Text>
            </Link>
          </ListItem>
        </List>
      </div>
    </SectionLayout>
  );
};

export default SeeItInAction;
