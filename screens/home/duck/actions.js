import {createAction} from 'redux-actions';
import types from './types';

const getTrendingMovies = createAction(types.GET_TRENDING_MOVIES_STARTED);
const getTrendingMoviesSuccess = createAction(
  types.GET_TRENDING_MOVIES_SUCCESS,
);
const getTrendingMoviesFailure = createAction(
  types.GET_TRENDING_MOVIES_FAILURE,
);
const getPopularMovies = createAction(types.GET_POPULAR_MOVIES_STARTED);
const getPopularMoviesSuccess = createAction(types.GET_POPULAR_MOVIES_SUCCESS);
const getPopularMoviesFailure = createAction(types.GET_POPULAR_MOVIES_FAILURE);

const getRefreshMovies = createAction(types.GET_REFRESH_MOVIES_STARTED);
const getRefreshMoviesSuccess = createAction(types.GET_REFRESH_MOVIES_SUCCESS);
const getRefreshMoviesFailure = createAction(types.GET_REFRESH_MOVIES_FAILURE);

const searchMovies = createAction(types.SEARCH_MOVIES_STARTED);
const searchMoviesSuccess = createAction(types.SEARCH_MOVIES_SUCCESS);
const searchMoviesFailure = createAction(types.SEARCH_MOVIES_FAILURE);

export default {
  getTrendingMovies,
  getTrendingMoviesSuccess,
  getTrendingMoviesFailure,
  getPopularMovies,
  getPopularMoviesSuccess,
  getPopularMoviesFailure,
  getRefreshMovies,
  getRefreshMoviesSuccess,
  getRefreshMoviesFailure,
  searchMovies,
  searchMoviesSuccess,
  searchMoviesFailure,
};
