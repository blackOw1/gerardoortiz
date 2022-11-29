import styles from './paragraph.module.css';
import { Typography } from 'components/ui';
import developer from 'data/developer';

const Paragraph = () => {
  const { email } = developer;
  const mailTo = `mailto:${email}`;

  return (
    <Typography variant="p" className={styles.contactParagraph}>
      Are you interested in working with me or you just want to chat? Then, let's get in touch!
      Email me directly at&nbsp;
      <a href={mailTo} className={styles.contactEmail}>
        {email}
      </a>
      .
    </Typography>
  );
};

export default Paragraph;
