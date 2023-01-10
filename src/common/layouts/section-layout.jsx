import styles from './section-layout.module.css';

const SectionLayout = ({ children, className }) => {
  const sectionClass = styles.section;
  const classes = (className && `${sectionClass} ${className}`) || sectionClass;

  return <section className={classes}>{children}</section>;
};

export default SectionLayout;
