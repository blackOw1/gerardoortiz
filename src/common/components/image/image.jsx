import styles from './image.module.css';

const Image = ({ className, sourceUrl, altText }) => {
  return <img className={className} src={sourceUrl} alt={altText} />;
};

export default Image;
