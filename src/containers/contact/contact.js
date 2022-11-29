import { forwardRef } from 'react';

import styles from './contact.module.css';
import { Title, Paragraph } from 'components/contact';

const Contact = forwardRef((_, ref) => {
  const classNames = `${styles.contact} sectionHidden`;

  return (
    <div className={styles.contactContainer}>
      <section className={classNames} id="contact" ref={ref}>
        <Title />
        <Paragraph />
      </section>
    </div>
  );
});

export default Contact;
