import { createAction } from 'redux-actions';
import types from './types';

const getMovie = createAction(types.GET_MOVIE_STARTED);
const getMovieSuccess = createAction(types.GET_MOVIE_SUCCESS);
const getMovieFailure = createAction(types.GET_MOVIE_FAILURE);

const getReviews = createAction(types.GET_REVIEWS_STARTED);
const getReviewsSuccess = createAction(types.GET_REVIEWS_SUCCESS);
const getReviewsFailure = createAction(types.GET_REVIEWS_FAILURE);

const getRatings = createAction(types.GET_RATINGS_STARTED);
const getRatingsSuccess = createAction(types.GET_RATINGS_SUCCESS);
const getRatingsFailure = createAction(types.GET_RATINGS_FAILURE);

const postRating = createAction(types.POST_RATING_STARTED);
const postRatingSuccess = createAction(types.POST_RATING_SUCCESS);
const postRatingFailure = createAction(types.POST_RATING_FAILURE);

const deleteRating = createAction(types.DELETE_RATING_STARTED);
const deleteRatingSuccess = createAction(types.DELETE_RATING_SUCCESS);
const deleteRatingFailure = createAction(types.DELETE_RATING_FAILURE);

const addWatchList = createAction(types.ADD_WATCHLIST_STARTED);
const addWatchListSuccess = createAction(types.ADD_WATCHLIST_SUCCESS);
const addWatchListFailure = createAction(types.ADD_WATCHLIST_FAILURE);


export default {
  getMovies,
  getMovieSuccess,
  getMovieFailure,

  getReviews,
  getReviewsSuccess,
  getReviewsFailure,

  getRatings,
  getRatingsSuccess,
  getRatingsFailure,

  postRating,
  postRatingSuccess,
  postRatingFailure,

  deleteRating,
  deleteRatingSuccess,
  deleteRatingFailure,

  addWatchList,
  addWatchListSuccess,
  addWatchListFailure
}
