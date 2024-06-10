'use client'
import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './settings';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export default store;
