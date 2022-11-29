import styles from './technologies.module.css';
import { Title, StackList } from 'components/technologies';

const Technologies = () => {
  const classNames = `${styles.stack} sectionHidden`;

  return (
    <div className={styles.stackContainer}>
      <section className={classNames}>
        <Title />
        <StackList />
      </section>
    </div>
  );
};

export default Technologies;
