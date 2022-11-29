import styles from './logo.module.css';

const Logo = (props) => {
  const { name, image } = props;

  return <img src={image} alt={name} className={styles.logo} />;
};

export default Logo;
