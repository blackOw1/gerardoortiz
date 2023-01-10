import './text.module.css';

const Text = ({ children, className, variant }) => {
  const Component = variant || 'p';

  return <Component className={className}>{children}</Component>;
};

export default Text;
