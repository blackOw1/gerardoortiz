import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  remainingTime: null,
  lastDirection: null,
};

export const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setRemainingTime(state, action) {
      state.remainingTime = action.payload;
    },
    setLastDirection(state, action) {
      state.lastDirection = action.payload;
    },
  },
});

export const carouselActions = carouselSlice.actions;
