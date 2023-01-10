export default () => {
  const transform = (coords = { x: 0, y: 0, z: 0 }) => {
    return `translate3d(${coords.x ?? 0}px,${coords.y ?? 0}px,${coords.z ?? 0}px)`;
  };

  return transform;
};
