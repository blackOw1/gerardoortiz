import { configureStore } from '@reduxjs/toolkit';

import { containersSlice } from 'containers/containers-slice';
import { headerSlice } from 'containers/header/header-slice';
import { projectsSlice } from 'components/projects/projects-slice';

const store = configureStore({
  reducer: {
    container: containersSlice.reducer,
    header: headerSlice.reducer,
    projects: projectsSlice.reducer,
  },
});

export default store;
