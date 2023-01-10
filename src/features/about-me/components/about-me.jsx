import styles from './about-me.module.css';
import { SectionLayout } from 'common/layouts';
import { Card, Text, Image, Link } from 'common/components';
import { getUnsplashUrl } from 'api/data';

const AboutMe = () => {
  const { apiUrl } = getUnsplashUrl();

  return (
    <SectionLayout className={styles.about}>
      <Text className={styles.aboutHeading} variant="h1">
        About me
      </Text>

      <Text className={styles.aboutSummary} variant="p">
        Hi there. I am a self-taught developer who loves JavaScript. I decided I wanted to do
        web development because I like to build things. From writing the HTML markup to
        deploying the app, it&apos;s an enjoyable experience knowing that I built something
        great that works! Outside of web development, I enjoy riding the trails with my mountain
        bike and like exploring new restaurants.
      </Text>

      <Text className={styles.aboutSummary} variant="p">
        <Link className={styles.aboutSummaryLink} variant="relative" path="/projects">
          View my projects
        </Link>
        &nbsp;to see what I have worked on.
      </Text>

      <Card className={styles.aboutImageCard}>
        <picture className={styles.aboutImageContainer}>
          <Image className={styles.aboutImage} sourceUrl={apiUrl} altText="laptop" />
        </picture>
        <span className={styles.aboutImageCredit}>
          Photo by&nbsp;
          <Link
            className={styles.aboutImageCreditLink}
            variant="absolute"
            path="https://unsplash.com/@wasdrew?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Andras Vas
          </Link>
          &nbsp;on&nbsp;
          <Link
            className={styles.aboutImageCreditLink}
            variant="absolute"
            path="https://unsplash.com/photos/Bd7gNnWJBkU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Unsplash
          </Link>
        </span>
      </Card>
    </SectionLayout>
  );
};

export default AboutMe;
