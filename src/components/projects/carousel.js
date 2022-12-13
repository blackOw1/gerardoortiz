import { useDispatch, useSelector } from 'react-redux';

import styles from './carousel.module.css';
import { projectsActions } from './projects-slice';

const Carousel = () => {
  const dispatch = useDispatch();
  const carouselNavigationTabClassName = styles.carouselNavigationTab;
  const carouselSelected = `${carouselNavigationTabClassName} ${styles.carouselNavigationTabSelected}`;
  const { selectedProject } = useSelector((state) => state.projects);

  const carouselHandler = (e) => {
    const targetDot = e.target.closest('[data-id]');

    if (!targetDot) return;

    const { id } = targetDot.dataset;
    const value = (id === 0 && `${id}`) || `-${id * 872}px`;

    dispatch(projectsActions.setTransformValue(value));
    dispatch(projectsActions.setSelectedProject(id));
  };

  const setClassName = (id) => {
    return (id === selectedProject && carouselSelected) || carouselNavigationTabClassName;
  };

  return (
    <div className={styles.carouselNavigation} onClick={carouselHandler}>
      <div className={setClassName(0)} data-id="0"></div>
      <div className={setClassName(1)} data-id="1"></div>
      <div className={setClassName(2)} data-id="2"></div>
      <div className={setClassName(3)} data-id="3"></div>
    </div>
  );
};

export default Carousel;
