import styles from './input.module.css';

const Input = ({ className, type, ...rest }) => {
  const inputClass = styles.input;
  const classes = (className && `${inputClass} ${className}`) || styles.input;

  return <input className={classes} {...rest} />;
};

export default Input;
