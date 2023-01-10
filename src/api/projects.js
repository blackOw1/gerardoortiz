import imagePokemonApi01 from 'common/assets/images/pokemon-api-01.png';
import imagePokemonApi02 from 'common/assets/images/pokemon-api-02.png';
import imagePokemonApi03 from 'common/assets/images/pokemon-api-03.png';
import imageNues01 from 'common/assets/images/nues-01.png';
import imageNues02 from 'common/assets/images/nues-02.png';
import imageUniversityFinder01 from 'common/assets/images/university-finder-01.png';
import imageUniversityFinder02 from 'common/assets/images/university-finder-02.png';
import imageSushitama01 from 'common/assets/images/sushitama-01.png';
import imageSushitama02 from 'common/assets/images/sushitama-02.png';

export default [
  {
    name: 'Pokemon API',
    summary: 'API created by me that contains data about Pokemon.',
    description:
      'Pokemon API is an API that contains data about Pokemon, moves, TMs, and HMs from generation 1. The backend was created by me using Node.js. The frontend was created using React. All routes are handled by React Router. Light mode and dark mode have been implemented. Full documentation can be found via the website.',
    links: {
      liveSite: 'https://pokemon-api.devgerardoortiz.com',
      repoSite: 'https://github.com/blackOw1/pokemon-api',
      route: '/pokemon-api',
    },
    toolsUsed: ['React', 'React Router', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    images: [imagePokemonApi01, imagePokemonApi02, imagePokemonApi03],
    slug: 'pokemon-api',
  },
  {
    name: 'Nues',
    summary: 'A news application that allows you to search for news from various sources.',
    description:
      'Nues is a news application that displays a list of news from various sources by utilizing the Newscatcher API. I have implemented code to only refresh the content every 30 minutes to reduce the number of API calls. The app also features a search page to search for more news.',
    links: {
      liveSite: 'https://nues.devgerardoortiz.com',
      repoSite: 'https://github.com/blackOw1/nues',
      route: '/nues',
    },
    toolsUsed: ['React', 'React Router', 'Redux', 'Newscatcher API'],
    images: [imageNues01, imageNues02],
    slug: 'nues',
  },
  {
    name: 'University Finder',
    summary: 'An app where you can search for universities nearby or in a given location.',
    description:
      "Find universities nearby or in a given location. The app utilizes the Geolocation API to get the client's location, uses the Yelp API to get locations, and uses the Mapbox API to set the locations on the map. The app can also fetch reviews using the Yelp API for a given university. There is also a search functionality to search for universities as well. NOTE: If the app does not load, please refresh the page.",
    links: {
      liveSite: 'https://university-finder-us.cyclic.app/',
      repoSite: 'https://github.com/blackOw1/university-finder',
      route: '/university-finder',
    },
    toolsUsed: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Yelp API',
      'Hipolabs API',
    ],
    images: [imageUniversityFinder01, imageUniversityFinder02],
    slug: 'university-finder',
  },
  {
    name: 'Sushitama',
    summary: 'A sushi restaurant application serving authentic Japanese food.',
    description:
      'Sushitama is a website that serves authentic Japanese food. The website is fully responsive on all screens! The website was built using HTML, CSS, and JavaScript.',
    links: {
      liveSite: 'https://sushitama.netlify.app',
      repoSite: 'https://github.com/blackOw1/sushitama',
      route: '/sushitama',
    },
    toolsUsed: ['HTML', 'CSS', 'JavaScript', 'Parcel'],
    images: [imageSushitama01, imageSushitama02],
    slug: 'sushitama',
  },
];
