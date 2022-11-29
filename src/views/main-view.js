import { useRef } from 'react';

import styles from './main-view.module.css';
import { Header } from 'containers/header';
import { Hero } from 'containers/hero';
import { About } from 'containers/about';
import { Projects } from 'containers/projects';
import { Technologies } from 'containers/technologies';
import { Contact } from 'containers/contact';
import { Footer } from 'containers/footer';

const MainView = () => {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Header refs={{ aboutRef, projectsRef, contactRef }} />
      <main className={styles.main} id="main">
        <Hero refs={{ projectsRef, aboutRef }} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Technologies />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </>
  );
};

export default MainView;
