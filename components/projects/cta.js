import styles from './cta.module.css';
import buttonStyles from 'components/ui/button/button.module.css';
import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';

const CTA = (props) => {
  const { liveSite, repoSite, projectNumber } = props;
  const buttonPrimaryClassNames = `buttonProjectPrimary buttonProject${projectNumber}Primary`;
  const buttonSecondaryClassNames = `buttonProjectSecondary buttonProject${projectNumber}Secondary`;

  return (
    <div className={styles.cta}>
      <a
        href={liveSite}
        target="_blank"
        rel="noreferrer noopener"
        className={buttonStyles.buttonLink}
      >
        <Button className={buttonPrimaryClassNames}>
          Live site
          <Icon targetIcon="arrow" />
        </Button>
      </a>
      <a
        href={repoSite}
        target="_blank"
        rel="noreferrer noopener"
        className={buttonStyles.buttonLink}
      >
        <Button className={buttonSecondaryClassNames}>
          Repo
          <Icon targetIcon="arrow" />
        </Button>
      </a>
    </div>
  );
};

export default CTA;
