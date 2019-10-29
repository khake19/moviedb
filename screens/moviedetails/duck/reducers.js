import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
    details: {
      loading: false,
      error: null
    },
    ratings: {
      results: [],
      loading: false,
      error: null
    },
    reviews: {
      results: [],
      loading: false,
      error: null
    },
    post_rating: {
      success: true,
      loading: false,
      error: null
    },
    delete_rating: {
      success: true,
      loading: false,
      error: null
    },
    add_watchlist: {
      success: true,
      loading: false,
      error: null
    }
};

export default handleActions(
  {
    [types.GET_MOVIE_STARTED]: (state) => {
      console.log(types.GET_MOVIE_STARTED)
      return {...state, details: { loading: true, error:null } }
    },
    [types.GET_MOVIE_SUCCESS]: (state, action) => {
      console.log(types.GET_MOVIE_SUCCESS)
      return {...state, details: {...action.payload, error: null, loading: false} }
    },
    [types.GET_MOVIE_FAILURE]: (state, action) => {
      console.log(types.GET_MOVIE_FAILURE)
      return {...state, details: { loading: false, error: action.payload.error } }
    },


    [types.GET_REVIEWS_STARTED]: (state) => {
      console.log(types.GET_REVIEWS_STARTED)
      return {...state, reviews:{results: [], loading: true, error:null} }
    },
    [types.GET_REVIEWS_SUCCESS]: (state, action) => {
      console.log(types.GET_REVIEWS_SUCCESS)
      return {...state, reviews: { ...action.payload, error: null, loading: false} }
    },
    [types.GET_REVIEWS_FAILURE]: (state, action) => {
      console.log(types.GET_REVIEWS_FAILURE)
      return {...state, reviews: {results: [], loading: false, error: action.payload.error } }
    },


    [types.GET_RATINGS_STARTED]: (state) => {
      console.log(types.GET_RATINGS_STARTED)
      return {...state, ratings: { results: [], loading: true, error:null} }
    },
    [types.GET_RATINGS_SUCCESS]: (state, action) => {
      console.log(types.GET_RATINGS_SUCCESS)
      return {...state, ratings: {...action.payload, error: null, loading: false } }
    },
    [types.GET_RATINGS_FAILURE]: (state, action) => {
      console.log(types.GET_RATINGS_FAILURE)
      return {...state, ratings: { results: [], loading: false, error: action.payload.error } }
    },


    [types.POST_RATING_STARTED]: (state) => {
      console.log(types.POST_RATING_STARTED)
      return {...state, post_rating: { success: false, loading: true, error:null } }
    },
    [types.POST_RATING_SUCCESS]: (state, action) => {
      console.log(types.POST_RATING_SUCCESS)
      return {...state,  post_rating: { success: true, error: null, loading: false } }
    },
    [types.POST_RATING_FAILURE]: (state, action) => {
      console.log(types.POST_RATING_FAILURE)
      return {...state, post_rating: { success: false, loading: false, error: action.payload.error } }
    },


    [types.DELETE_RATING_STARTED]: (state) => {
      console.log(types.DELETE_RATING_STARTED)
      return {...state, delete_rating: { success: false, loading: true, error:null } }
    },
    [types.DELETE_RATING_SUCCESS]: (state, action) => {
      console.log(types.DELETE_RATING_SUCCESS)
      return {...state, delete_rating: { success: true, error: null, loading: false } }
    },
    [types.DELETE_RATING_FAILURE]: (state, action) => {
      console.log(types.DELETE_RATING_FAILURE)
      return {...state, delete_rating: { success: false, loading: false, error: action.payload.error } }
    },


    [types.ADD_WATCHLIST_STARTED]: (state) => {
      console.log(types.ADD_WATCHLIST_STARTED)
      return {...state, add_watchlist: { success: false, loading: true, error:null } }
    },
    [types.ADD_WATCHLIST_SUCCESS]: (state, action) => {
      console.log(types.ADD_WATCHLIST_STARTED)
      return {...state, add_watchlist: { success: true, error: null, loading: false } }
    },
    [types.ADD_WATCHLIST_FAILURE]: (state, action) => {
      console.log(types.ADD_WATCHLIST_STARTED)
      return {...state, add_watchlist: { success: false, loading: false, error: action.payload.error } }
    },
  },
  initialState
);
