import MainLayout from './main-layout';
import { Navbar } from './navbar';
import { Footer } from './footer';

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </>
  );
};

export default PageLayout;
