import { Route, Routes } from 'react-router-dom';

import './App.css';
import MainView from 'views/main-view';
import NotFoundView from 'views/not-found-view';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="*" element={<NotFoundView />} replace />
      </Routes>
    </div>
  );
};

export default App;
