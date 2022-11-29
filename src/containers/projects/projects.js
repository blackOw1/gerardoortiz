import { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './projects.module.css';
import { Title, ProjectsList, Carousel } from 'components/projects';
import { projectsActions } from 'components/projects/projects-slice';
import { useResize } from 'hooks/use-resize';
import global from 'global';

const Projects = forwardRef((_, ref) => {
  const dispatch = useDispatch();
  const resize = useResize();
  const classNames = `${styles.projects} sectionHidden`;
  const { isCarouselHidden } = useSelector((state) => state.projects);
  const { MEDIA_BREAKPOINT_LG } = global;

  useEffect(() => {
    const isTargetBreakpoint = resize.innerWidth < MEDIA_BREAKPOINT_LG;
    dispatch(projectsActions.setIsCarouselHidden((isTargetBreakpoint && true) || false));

    isTargetBreakpoint && dispatch(projectsActions.setSelectedProject(0));
    isTargetBreakpoint && dispatch(projectsActions.setTransformValue(0));
  }, [resize, dispatch, MEDIA_BREAKPOINT_LG]);

  return (
    <div className={styles.projectsContainer}>
      <section className={classNames} id="projects" ref={ref}>
        <Title />
        <ProjectsList />
        {!isCarouselHidden && <Carousel />}
      </section>
    </div>
  );
});

export default Projects;
