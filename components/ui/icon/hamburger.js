import styles from './hamburger.module.css';

const Hamburger = (props) => {
  const { className } = props;
  const classNames = `${className || ''} ${styles.hamburgerContainer}`;

  return (
    <div className={classNames} {...props}>
      <div className={styles.hamburger}></div>
    </div>
  );
};

export default Hamburger;
