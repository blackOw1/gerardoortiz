import { PageLayout } from 'common/layouts';
import { Projects } from 'features/projects/components';
import { Contact } from 'features/contact/components';

const ProjectsPage = () => {
  return (
    <PageLayout>
      <Projects />
      <Contact />
    </PageLayout>
  );
};

export default ProjectsPage;
