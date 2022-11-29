import { v4 as generateKey } from 'uuid';

import styles from './stack-list.module.css';
import techStack from 'data/tech-stack';
import { Typography } from 'components/ui';
import { Logo } from 'components/ui/logo';

const StackList = () => {
  return (
    <ul className={styles.stackList}>
      {techStack.map((stack) => {
        const { name, image } = stack;

        return (
          <li key={generateKey()} className={styles.stackListItem}>
            <div className={styles.stackListItemContainer}>
              <Logo image={image} name={name} />
              <Typography className={styles.stackListItemTitle} variant="p">
                {name}
              </Typography>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default StackList;
