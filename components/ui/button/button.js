import styles from './button.module.css';
import linkClassNamesToLocalStyleSheet from 'utilities/classname-formatter';

const Button = (props) => {
  const { children, className, ...remainingProps } = props;
  const classNames = linkClassNamesToLocalStyleSheet(styles, className);
  const buttonStyles = `${styles.button} ${classNames || ''}`;

  return (
    <button type="button" className={buttonStyles} {...remainingProps}>
      {children}
    </button>
  );
};

export default Button;
