import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
    movies: {
      results: []
    },
    loading: false,
    error: null
};

export default handleActions(
  {
    [types.GET_MOVIES_STARTED]: (state) => {
      console.log(types.GET_MOVIES_STARTED)
      return {...state, loading: true, error:null}
    },
    [types.GET_MOVIES_SUCCESS]: (state, action) => {
      console.log(types.GET_MOVIES_SUCCESS)
      return {...state, movies: action.payload, error: null, loading: false}
    },
    [types.GET_MOVIES_FAILURE]: (state, action) => {
      console.log(types.GET_MOVIES_FAILURE)
      return {...state, loading: false, error: action.payload.error}
    },
    [types.SEARCH_MOVIES_STARTED]: (state) => {
      console.log(types.SEARCH_MOVIES_STARTED)
      return {...state, loading: true, error:null}
    },
    [types.SEARCH_MOVIES_SUCCESS]: (state, action) => {
      console.log(types.SEARCH_MOVIES_SUCCESS)
      return {...state, movies: action.payload, error: null, loading: false}
    },
    [types.SEARCH_MOVIES_FAILURE]: (state, action) => {
      console.log(types.SEARCH_MOVIES_FAILURE)
      return {...state, loading: false, error: action.payload.error}
    }
  },
  initialState
);
