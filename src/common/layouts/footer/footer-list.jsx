import { v4 as generateKey } from 'uuid';

import styles from './footer-list.module.css';
import { Icon, Link, List, ListItem } from 'common/components';

import { getFooterData } from 'api/data';

const FooterList = () => {
  const { links, socials } = getFooterData();

  return (
    <nav className={styles.footerListContainer}>
      <List className={styles.linksList}>
        {links.map(({ name, link, linkType }) => (
          <ListItem key={generateKey()}>
            <Link className={styles.linksListLink} path={link} variant={linkType}>
              {name}
            </Link>
          </ListItem>
        ))}
      </List>

      <ul className={styles.socialsList}>
        {socials.map(({ name, link }) => {
          const socialName = name.toLowerCase();

          return (
            <ListItem className={styles.link} key={generateKey()}>
              <Link path={link} target="_blank" rel="noopener noreferrer">
                <Icon icon={socialName} />
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default FooterList;
