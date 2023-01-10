import { PageLayout } from 'common/layouts';
import { Hero } from 'features/hero/components';
import { LatestProject, MoreProjects } from 'features/projects/components';
import { Contact } from 'features/contact/components';

const HomePage = () => {
  return (
    <PageLayout>
      <Hero />
      <LatestProject />
      <MoreProjects />
      <Contact />
    </PageLayout>
  );
};

export default HomePage;
