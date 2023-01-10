import { Link as RRDLink } from 'react-router-dom';

const Link = ({ children, className, path, variant = 'absolute', target, rel, onClick }) => {
  return (
    (variant === 'relative' && (
      <RRDLink className={className} to={path} onClick={onClick}>
        {children}
      </RRDLink>
    )) || (
      <a className={className} href={path} target={target} rel={rel}>
        {children}
      </a>
    )
  );
};

export default Link;
