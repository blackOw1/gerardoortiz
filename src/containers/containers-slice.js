import { createSlice } from '@reduxjs/toolkit';

const initialContainersState = {
  about: { offsetTop: null },

  projects: { offsetTop: null },

  contact: { offsetTop: null },
};

export const containersSlice = createSlice({
  name: 'section',
  initialState: initialContainersState,
  reducers: {
    setTopPosition(state, action) {
      const targetElement = action.payload.target;
      state[targetElement].offsetTop = action.payload.value;
    },

    getTopPosition(state, action) {
      const targetElement = action.payload.target;
      return state[targetElement].offsetTop;
    },
  },
});

export const containersActions = containersSlice.actions;
