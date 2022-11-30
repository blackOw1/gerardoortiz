import imageUniversityFinder from 'assets/mockups/university-finder-mockup.svg';
import imageNues from 'assets/mockups/nues-mockup.svg';
import imageSushitama from 'assets/mockups/sushitama-mockup.svg';

const projects = [
  {
    name: 'Nues',
    summary: `Nues is a news application that displays a list of news from various sources by utilizing the Newscatcher API. I have implemented code to only refresh the content every 30 minutes to reduce the number of API calls. The app also features a search page to search for more news.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Express', 'Parcel', 'Newscatcher API'],
    liveSite: 'https://nues.devgerardoortiz.com',
    repoSite: 'https://github.com/blackOw1/nues',
    index: 'two',
    image: imageNues,
  },
  {
    name: 'University Finder',
    summary: `Find universities nearby or in a given location. The app utilizes the Geolocation API to get the client's location, uses the Yelp API to get locations, and uses the Mapbox API to set the locations on the map. The app can also fetch reviews using the Yelp API for a given university. There is also a search functionality to search for universities as well. NOTE: If the app does not load, please refresh the page.`,
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Express',
      'MongoDB',
      'Yelp API',
      'Hipolabs API',
    ],
    liveSite: 'https://university-finder-us.cyclic.app/',
    repoSite: 'https://github.com/blackOw1/university-finder',
    index: 'one',
    image: imageUniversityFinder,
  },
  {
    name: 'Sushitama',
    summary: `Sushitama is a website that serves authentic Japanese food. The website is fully responsive on all screens! The website was built using HTML, CSS, and JavaScript.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Parcel'],
    liveSite: 'https://sushitama.netlify.app',
    repoSite: 'https://github.com/blackOw1/sushitama',
    index: 'three',
    image: imageSushitama,
  },
];

export default projects;
