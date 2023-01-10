const List = ({ children, className, style }) => {
  return (
    <ul style={style} className={className}>
      {children}
    </ul>
  );
};

export default List;
