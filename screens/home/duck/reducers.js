import {handleActions} from 'redux-actions';

import types from './types';

const initialState = {
  movies: {
    results: [],
  },
  page: 1,
  loading: false,
  error: null,
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
    [types.SEARCH_MOVIES_STARTED]: state => {
      return {...state, loading: true, error: null};
    },
    [types.SEARCH_MOVIES_SUCCESS]: (state, action) => {
      return {...state, movies: action.payload, error: null, loading: false};
    },
    [types.SEARCH_MOVIES_FAILURE]: (state, action) => {
      return {...state, loading: false, error: action.payload.error};
    },
  },
  initialState,
);
