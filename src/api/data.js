import projects from './projects';
import socials from './socials';
import unsplash from './unsplash';
import routes from 'config/routes';

export const getProjectsData = () => projects;

export const getNavbarData = () => [
  {
    name: 'About',
    link: routes.about,
    linkType: 'relative',
  },
  {
    name: 'Projects',
    link: routes.projects,
    linkType: 'relative',
  },
  {
    name: 'Contact',
    link: routes.contact,
    linkType: 'absolute',
  },
];

export const getFooterData = () => {
  return {
    links: [
      {
        name: 'Projects',
        link: routes.projects,
        linkType: 'relative',
      },
      {
        name: 'Contact',
        link: routes.contact,
        linkType: 'absolute',
      },
    ],
    socials,
  };
};

export const getUnsplashUrl = () => unsplash;
