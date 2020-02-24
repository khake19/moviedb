import {handleActions} from 'redux-actions';

import types from './types';

const initialState = {
  movies: {
    results: [],
  },
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
      return {...state, movies: action.payload, error: null, loading: false};
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
