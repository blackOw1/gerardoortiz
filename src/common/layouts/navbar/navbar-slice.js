import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileView: {
    list: {
      isVisible: false,
    },
  },
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setIsMobileListVisible(state, action) {
      state.mobileView.list.isVisible = action.payload;
    },
  },
});

export const navbarActions = navbarSlice.actions;
