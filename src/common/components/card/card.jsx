import styles from './card.module.css';

const Card = ({ children, className, bgColor }) => {
  const cardClass = styles.card;
  const classes = (className && `${cardClass} ${className}`) || cardClass;

  return <div className={classes}>{children}</div>;
};

export default Card;
