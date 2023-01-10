import styles from './icon.module.css';
import sprite from 'common/assets/svg/sprite.svg';
import { ReactComponent as BrandLogo } from 'common/assets/brand/logo.svg';

const Icon = ({ icon, className, onClick }) => {
  const iconBase = (
    <span className={styles.iconContainer}>
      <svg className={styles.icon}>
        <use href={`${sprite}#${icon}`}></use>
      </svg>
    </span>
  );

  const iconMenu = (
    <span
      className={styles.iconMenuContainer}
      onClick={onClick}
      onKeyUp={onClick}
      role="button"
      tabIndex={0}
    >
      <span className={styles.iconMenu}></span>
    </span>
  );

  const iconLogo = (
    <span className={className}>
      <BrandLogo />
    </span>
  );

  const iconElements = new Map([
    ['menu', iconMenu],
    ['logo', iconLogo],
  ]);

  const targetIcon = iconElements.get(icon) || iconBase;

  return targetIcon;
};

export default Icon;
