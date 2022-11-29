import styles from './card.module.css';

const Card = (props) => {
  const { children, className, ...otherProps } = props;
  const { card } = styles;
  const classes = `${card} ${className || ''}`;

  return (
    <div {...otherProps} className={classes}>
      {children}
    </div>
  );
};

export default Card;
