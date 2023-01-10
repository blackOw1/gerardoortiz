import { createSlice } from '@reduxjs/toolkit';

import { getProjectsData } from 'api/data';

const projects = getProjectsData();

const initialState = {
  projects,
  moreProjects: Array(3).fill(projects.slice(1, 4)).flat(),
  latestProject: projects.slice(0, 1),
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setMoreProjects(state, action) {
      state.moreProjects = action.payload;
    },
  },
});

export const projectsActions = projectsSlice.actions;
