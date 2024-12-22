import axios from 'axios';
import {
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setSearchedMovies,
  setLoading,
  setError,
  setMovieDetails,
  setMovieCast,
} from './movieReducer.js';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    dispatch(setPopularMovies(data.results));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchTopRatedMovies = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    dispatch(setTopRatedMovies(data.results));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    dispatch(setUpcomingMovies(data.results));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const searchMovies = (query) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    if (query.trim() === '') {
        dispatch(setSearchedMovies([])); 
        return;
      }
    const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
    dispatch(setSearchedMovies(data.results));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743`);
      dispatch(setMovieDetails(data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError('Failed to fetch movie details.'));
      dispatch(setLoading(false));
    }
  };
  
  export const fetchMovieCast = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743`);
      dispatch(setMovieCast(data.cast));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError('Failed to fetch cast details.'));
      dispatch(setLoading(false));
    }
  };
