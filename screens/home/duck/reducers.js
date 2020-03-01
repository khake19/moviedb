import {handleActions} from 'redux-actions';

import types from './types';

const initialState = {
  movies: {
    results: [],
  },
  page: 1,
  loading: false,
  error: null,
  refreshing: false,
};

export default handleActions(
  {
    [types.GET_TRENDING_MOVIES_STARTED]: state => {
      return {...state, loading: true, error: null};
    },
    [types.GET_TRENDING_MOVIES_SUCCESS]: (state, action) => {
      return {...state, movies: action.payload, error: null, loading: false};
    },
    [types.GET_TRENDING_MOVIES_FAILURE]: (state, action) => {
      return {...state, loading: false, error: action.payload.error};
    },
    [types.GET_POPULAR_MOVIES_STARTED]: state => {
      return {...state, loading: true, error: null};
    },
    [types.GET_POPULAR_MOVIES_SUCCESS]: (state, action) => {
      const {payload} = action;
      const {movies} = state;

      let results = [];

      // refreshing our app will not empty our store sense we persist data
      // we make sure that refreshing app would not add the same list of movies
      //TODO:: this should be in our test coverage
      if (payload.page == 1) results = payload.results;
      else if (payload.page <= state.page) results = movies.results;
      else if (payload.page > state.page)
        results = [...movies.results, ...payload.results];

      return {
        ...state,
        movies: {results},
        page: payload.page,
        loading: false,
        error: null,
      };
    },
    [types.GET_POPULAR_MOVIES_FAILURE]: (state, action) => {
      return {...state, loading: false, error: action.payload.error};
    },
    [types.GET_REFRESH_MOVIES_STARTED]: state => {
      return {...state, error: null, refreshing: true, loading: false};
    },
    [types.GET_REFRESH_MOVIES_SUCCESS]: (state, action) => {
      return {
        ...state,
        movies: {results: action.payload.results},
        error: null,
        page: action.payload.page,
        refreshing: false,
        loading: false,
      };
    },
    [types.GET_REFRESH_MOVIES_FAILURE]: (state, action) => {
      return {
        ...state,
        error: action.payload.error,
        refreshing: false,
      };
    },
    [types.SEARCH_MOVIES_STARTED]: state => {
      return {...state, loading: true, error: null};
    },
    [types.SEARCH_MOVIES_SUCCESS]: (state, action) => {
      const {payload} = action;
      const {movies} = state;

      let results = [];

      // refreshing our app will not empty our store sense we persist data
      // we make sure that refreshing app would not add the same list of movies
      //TODO:: this should be in our test coverage
      if (payload.page == 1) results = payload.results;
      else if (payload.page <= state.page) results = movies.results;
      else if (payload.page > state.page)
        results = [...movies.results, ...payload.results];

      return {
        ...state,
        movies: {results},
        page: payload.page,
        loading: false,
        error: null,
      };
    },
    [types.SEARCH_MOVIES_FAILURE]: (state, action) => {
      return {...state, loading: false, error: action.payload.error};
    },
  },
  initialState,
);
