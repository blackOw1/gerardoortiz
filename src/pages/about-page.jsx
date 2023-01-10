import { PageLayout } from 'common/layouts';
import { AboutMe } from 'features/about-me/components';
import { Contact } from 'features/contact/components';
import { FavoriteTools } from 'features/tools';

const AboutPage = () => {
  return (
    <PageLayout>
      <AboutMe />
      <FavoriteTools />
      <Contact />
    </PageLayout>
  );
};

export default AboutPage;
