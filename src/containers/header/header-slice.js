import { createSlice } from '@reduxjs/toolkit';

const initialHeaderState = {
  isMobileNavOpen: false,
  isHeaderVisible: true,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState: initialHeaderState,
  reducers: {
    toggleMobileNav(state) {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
    setIsMobileNavOpen(state, action) {
      state.isMobileNavOpen = action.payload;
    },
    setIsHeaderVisible(state, action) {
      state.isHeaderVisible = action.payload;
    },
  },
});

export const headerActions = headerSlice.actions;
