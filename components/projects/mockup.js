import styles from './mockup.module.css';

const Mockup = (props) => {
  const { image, projectNumber } = props;

  const classNames = `${styles.projectsListItemImage} ${
    styles[`projectsListItemImage${projectNumber}`]
  }`;

  return <img src={image} alt="project mockup" className={classNames} />;
};

export default Mockup;
