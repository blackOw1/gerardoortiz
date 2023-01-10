import styles from './button.module.css';
import formatText from 'common/helpers/format-text';

const Button = ({ children, className, type, variant, onClick, goto }) => {
  const buttonClass = styles.button;
  const buttonVariant = `button${formatText(variant, 'uppercaseFirstCharacter')}`;
  const classes =
    (className && `${buttonClass} ${styles[buttonVariant]} ${className}`) ||
    `${buttonClass} ${styles[buttonVariant]}`;

  return (
    <button className={classes} type={type} onClick={onClick} data-goto={goto}>
      {children}
    </button>
  );
};

export default Button;
