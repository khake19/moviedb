import { createAction } from 'redux-actions';
import types from './types';

const getMovies = createAction(types.GET_MOVIES_STARTED);
const getMoviesSuccess = createAction(types.GET_MOVIES_SUCCESS);
const getMoviesFailure = createAction(types.GET_MOVIES_FAILURE);


const searchMovies = createAction(types.SEARCH_MOVIES_STARTED);
const searchMoviesSuccess = createAction(types.SEARCH_MOVIES_SUCCESS);
const searchMoviesFailure = createAction(types.SEARCH_MOVIES_FAILURE);
export default {
  getMovies,
  getMoviesSuccess,
  getMoviesFailure,
  searchMovies,
  searchMoviesSuccess,
  searchMoviesFailure
}
