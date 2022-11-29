import { useSelector } from 'react-redux';
import { v4 as generateKey } from 'uuid';

import styles from './projects-list.module.css';
import projects from 'data/projects';
import ProjectTagsList from './project-tags-list';
import CTA from './cta';
import Mockup from './mockup';
import { upperCaseFirstLetter } from 'utilities/text-formatter';
import { Typography } from 'components/ui';

const ProjectsList = () => {
  const { transformValue } = useSelector((state) => state.projects);

  const setTransformStyle = () => {
    return { transform: `translate3d(${transformValue || 0},0,0)` };
  };

  return (
    <ul className={styles.projectsList} style={setTransformStyle()}>
      {projects.map((project) => {
        const { name, summary, technologies, liveSite, repoSite, index, image } = project;
        const projectNumber = upperCaseFirstLetter(index);
        const listItemClassNames = `${styles.projectsListItem} ${
          styles[`project${projectNumber}`]
        } `;
        const headingClassNames = `${styles.projectsListItemHeading} ${
          styles[`project${projectNumber}Heading`]
        }`;

        return (
          <li key={generateKey()} className={listItemClassNames} data-project={projectNumber}>
            <Typography variant="h3" className={headingClassNames}>
              {name}
            </Typography>
            <Typography variant="p" className={styles.projectsListItemParagraph}>
              {summary}
            </Typography>
            <ProjectTagsList technologies={technologies} />
            <CTA liveSite={liveSite} repoSite={repoSite} projectNumber={projectNumber} />
            <Mockup image={image} projectNumber={projectNumber} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectsList;
