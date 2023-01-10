import { v4 as generateKey } from 'uuid';

import styles from './tools-used.module.css';
import { SectionLayout } from 'common/layouts';
import { List, ListItem, Text } from 'common/components';

const ToolsUsed = ({ tools }) => {
  return (
    <SectionLayout>
      <Text className={styles.heading} variant="h2">
        Tools used for the project
      </Text>
      <List className={styles.list}>
        {tools.map((tool) => {
          return (
            <ListItem className={styles.listItem} key={generateKey()}>
              {tool}
            </ListItem>
          );
        })}
      </List>
    </SectionLayout>
  );
};

export default ToolsUsed;
