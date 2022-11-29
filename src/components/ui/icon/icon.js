import styles from './icon.module.css';
import icons from 'assets/icons/feather-sprite.svg';
import brandIcons from 'assets/icons/fa-brand-sprite.svg';

const iconsDb = new Map([
  ['arrow', { iconPack: icons, icon: 'arrow-right', iconClass: 'fIcon' }],
  ['behance', { iconPack: brandIcons, icon: 'square-behance', iconClass: 'faIcon' }],
  ['codepen', { iconPack: brandIcons, icon: 'codepen', iconClass: 'faIcon' }],
  ['github', { iconPack: brandIcons, icon: 'github-alt', iconClass: 'faIcon' }],
  ['linkedin', { iconPack: brandIcons, icon: 'linkedin', iconClass: 'faIcon' }],
]);

const Icon = (props) => {
  const { className, targetIcon } = props;
  const { iconPack, icon, iconClass } = iconsDb.get(targetIcon);
  const selectedIcon = `${iconPack}#${icon}`;
  const classNames = `${styles[iconClass]} ${className || ''}`;

  return (
    <span>
      <svg className={classNames}>
        <use href={selectedIcon}></use>
      </svg>
    </span>
  );
};

export default Icon;
