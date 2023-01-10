import { useDispatch, useSelector } from 'react-redux';

import { AppRoutes } from './routes';
import { navbarActions } from 'common/layouts/navbar/navbar-slice';

const App = () => {
  const dispatch = useDispatch();
  const { isVisible: isMobileListVisible } = useSelector(
    (state) => state.navbar.mobileView.list
  );

  const hideMobileListHandler = () => {
    if (isMobileListVisible) dispatch(navbarActions.setIsMobileListVisible(false));
  };

  return (
    <div className="App" onClick={hideMobileListHandler} role="none">
      <AppRoutes />
    </div>
  );
};

export default App;
