import { configureStore } from '@reduxjs/toolkit';

import { carouselSlice } from 'common/components/carousel/carousel-slice';
import { projectsSlice } from 'features/projects/components/projects-slice';
import { navbarSlice } from 'common/layouts/navbar/navbar-slice';

const store = configureStore({
  reducer: {
    carousel: carouselSlice.reducer,
    navbar: navbarSlice.reducer,
    projects: projectsSlice.reducer,
  },
});

export default store;
