import { createSlice } from '@reduxjs/toolkit';

const initialProjectsState = {
  selectedProject: 0,

  transformValue: null,

  isCarouselHidden: false,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialProjectsState,
  reducers: {
    setSelectedProject(state, action) {
      const number = action.payload;
      state.selectedProject = +number;
    },
    setTransformValue(state, action) {
      state.transformValue = action.payload;
    },

    setIsCarouselHidden(state, action) {
      state.isCarouselHidden = action.payload;
    },
  },
});

export const projectsActions = projectsSlice.actions;
