import { forwardRef } from 'react';

import styles from './about.module.css';
import { Title, Content } from 'components/about';
import { containersActions } from 'containers/containers-slice';

const About = forwardRef((_, ref) => {
  const classNames = `${styles.about} sectionHidden`;

  return (
    <div className={styles.aboutContainer}>
      <section className={classNames} id="about" ref={ref}>
        <Title />
        <Content />
      </section>
    </div>
  );
});

export default About;
