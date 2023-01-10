import { useDispatch, useSelector } from 'react-redux';

import styles from './carousel.module.css';
import { Button, Icon } from 'common/components';
import { carouselActions } from './carousel-slice';
import { projectsActions } from 'features/projects/components/projects-slice';
import { useTimeout } from 'common/hooks';

const Carousel = ({ children, listRef }) => {
  const dispatch = useDispatch();
  const { lastDirection, remainingTime } = useSelector((state) => state.carousel);
  const { moreProjects } = useSelector((state) => state.projects);

  useTimeout(() => {
    const setOne = [...moreProjects.slice(-1), ...moreProjects.slice(0, -1)];
    const setTwo = [...moreProjects.slice(1), ...moreProjects.slice(0, 1)];
    const projects = (lastDirection === 'left' && setOne) || setTwo;

    listRef.current.style.transition = null;
    listRef.current.style.transform = `translate3d(0, 0, 0)`;
    dispatch(carouselActions.setRemainingTime(null));
    dispatch(projectsActions.setMoreProjects([...projects]));
  }, remainingTime);

  const carouselHandler = ({ target }) => {
    const button = target.closest('button');
    const targetWidth = listRef.current.firstElementChild.offsetWidth + 24;
    const direction = button.dataset.goto;
    const directionValue = (direction === 'previous' && 'left') || 'right';
    const transformValue = (direction === 'previous' && targetWidth) || -targetWidth;

    if (!button) return;

    dispatch(carouselActions.setLastDirection(directionValue));
    listRef.current.style.transition = 'transform 200ms ease';
    listRef.current.style.transform = `translate3d(${transformValue}px, 0, 0)`;
    dispatch(carouselActions.setRemainingTime(200));
  };

  return (
    <div className={styles.carousel}>
      {children}

      <div className={styles.carouselNavigation}>
        <Button
          type="button"
          className={styles.carouselButton}
          variant="circle"
          onClick={carouselHandler}
          goto="previous"
        >
          <Icon icon="chevron-left" />
        </Button>
        <Button
          type="button"
          className={styles.carouselButton}
          variant="circle"
          onClick={carouselHandler}
          goto="next"
        >
          <Icon icon="chevron-right" />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
