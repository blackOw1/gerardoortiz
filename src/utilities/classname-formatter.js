const linkClassNamesToLocalStyleSheet = (stylesModule, classNames = '') => {
  return classNames
    .split(' ')
    .map((className) => stylesModule[className])
    .join(' ');
};

export default linkClassNamesToLocalStyleSheet;
