import { v4 as generateKey } from 'uuid';

import styles from './socials-list.module.css';
import socials from 'data/socials';
import { Icon } from 'components/ui/icon';
import { lowerCase } from 'utilities/text-formatter';

const SocialsList = () => {
  return (
    <ul className={styles.footerSocialIcons}>
      {socials.map((social) => {
        const { name, link } = social;

        return (
          <li key={generateKey()} className={styles.footerSocialIconsItem}>
            <a href={link} target="_blank" rel="noreferrer noopener">
              <Icon targetIcon={lowerCase(name)} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialsList;
