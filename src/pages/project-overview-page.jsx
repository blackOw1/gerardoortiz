import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PageLayout } from 'common/layouts';
import { AboutTheProject, Intro, SeeItInAction, ToolsUsed } from 'features/projects/components';
import { Contact } from 'features/contact/components';

const ProjectOverviewPage = () => {
  const { projects } = useSelector((state) => state.projects);
  const { projectName } = useParams();
  const { name, description, links, toolsUsed, images } = projects.find(
    (project) => project.slug === projectName
  );

  return (
    <PageLayout>
      <Intro name={name} image={images[1]} />
      <AboutTheProject description={description} />
      <ToolsUsed tools={toolsUsed} />
      <SeeItInAction liveSite={links.liveSite} repoSite={links.repoSite} />
      <Contact />
    </PageLayout>
  );
};

export default ProjectOverviewPage;
