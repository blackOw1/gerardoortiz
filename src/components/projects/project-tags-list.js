import { v4 as generateKey } from 'uuid';

import styles from './project-tags-list.module.css';
import { Typography } from 'components/ui';

const ProjectTagsList = (props) => {
  const { technologies } = props;

  return (
    <ul className={styles.projectTagsList}>
      {technologies.map((technology) => (
        <li key={generateKey()}>
          <Typography variant="p">{technology}</Typography>
        </li>
      ))}
    </ul>
  );
};

export default ProjectTagsList;
