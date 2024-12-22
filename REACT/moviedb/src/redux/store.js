
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieReducer.js';

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;



















