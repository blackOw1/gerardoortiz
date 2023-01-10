import { Routes, Route } from 'react-router-dom';

import { HomePage, AboutPage, ProjectsPage, ProjectOverviewPage, NotFoundPage } from 'pages';
import scrollToTop from 'common/helpers/scroll-to-top';

const AppRoutes = () => {
  scrollToTop();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:projectName" element={<ProjectOverviewPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
