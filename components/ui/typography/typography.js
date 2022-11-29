import styles from './typography.module.css';

const Typography = (props) => {
  const { children, variant, className } = props;

  if (variant === 'h1') return <h1 className={className}>{children}</h1>;
  if (variant === 'h2') return <h2 className={className}>{children}</h2>;
  if (variant === 'h3') return <h3 className={className}>{children}</h3>;
  if (variant === 'p') return <p className={className}>{children}</p>;
};

export default Typography;
