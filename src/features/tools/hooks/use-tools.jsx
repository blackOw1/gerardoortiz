import { ReactComponent as cssModulesImage } from 'common/assets/svg/css-modules.svg';
import { ReactComponent as expressImage } from 'common/assets/svg/express.svg';
import { ReactComponent as figmaImage } from 'common/assets/svg/figma.svg';
import { ReactComponent as htmlImage } from 'common/assets/svg/html.svg';
import { ReactComponent as javascriptImage } from 'common/assets/svg/javascript.svg';
import { ReactComponent as mongodbImage } from 'common/assets/svg/mongodb.svg';
import { ReactComponent as nodejsImage } from 'common/assets/svg/nodejs.svg';
import { ReactComponent as postmanImage } from 'common/assets/svg/postman.svg';
import { ReactComponent as reactImage } from 'common/assets/svg/react.svg';
import { ReactComponent as reactRouterImage } from 'common/assets/svg/react-router.svg';
import { ReactComponent as reduxImage } from 'common/assets/svg/redux.svg';
import { ReactComponent as vsCodeImage } from 'common/assets/svg/vs-code.svg';

const useTools = () => {
  const data = [
    {
      name: 'VS Code',
      description: 'My go-to code editor',
      image: vsCodeImage,
    },
    {
      name: 'Figma',
      description: 'Design tool to build UIs',
      image: figmaImage,
    },
    {
      name: 'JavaScript',
      description: 'Programming language',
      image: javascriptImage,
    },
    {
      name: 'React',
      description: 'JavaScript library',
      image: reactImage,
    },
    {
      name: 'React Router',
      description: 'React routing library',
      image: reactRouterImage,
    },
    {
      name: 'Redux',
      description: 'State management',
      image: reduxImage,
    },
    {
      name: 'CSS Modules',
      description: 'Local CSS scoping',
      image: cssModulesImage,
    },
    {
      name: 'HTML',
      description: 'Markup language',
      image: htmlImage,
    },
    {
      name: 'Node.js',
      description: 'JavaScript runtime engine',
      image: nodejsImage,
    },
    {
      name: 'Express',
      description: 'Node.js framework',
      image: expressImage,
    },
    {
      name: 'MongoDB',
      description: 'Document database',
      image: mongodbImage,
    },
    {
      name: 'Postman',
      description: 'Backend API testing',
      image: postmanImage,
    },
  ];

  return data;
};

export default useTools;
