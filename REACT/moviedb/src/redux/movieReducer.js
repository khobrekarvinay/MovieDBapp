import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popular: [],
  topRated: [],
  upcoming: [],
  searched: [],
  movieDetails: null, 
  cast: [], 
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    setUpcomingMovies: (state, action) => {
      state.upcoming = action.payload;
    },
    setSearchedMovies: (state, action) => {
      state.searched = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    setMovieCast: (state, action) => { 
      state.cast = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setSearchedMovies,
  setMovieDetails, 
  setMovieCast, 
  setLoading,
  setError,
} = movieSlice.actions;

export default movieSlice.reducer;
