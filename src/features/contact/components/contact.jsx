import styles from './contact.module.css';
import { Button, Text } from 'common/components';
import routes from 'config/routes';

const Contact = () => {
  const { contact } = routes;

  return (
    <div className={styles.contactContainer}>
      <a className={styles.contact} href={contact}>
        <Button type="button" variant="outline">
          <Text variant="p">Let&apos;s talk</Text>
          <span className={styles.hand}></span>
        </Button>
      </a>
    </div>
  );
};

export default Contact;
