import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
    watchlists: {
      results: []
    },
    loading: false,
    error: null
};

export default handleActions(
  {
    [types.GET_WATCHLIST_STARTED]: (state) => {
      console.log(types.GET_WATCHLIST_STARTED)
      return {...state, loading: true, error:null}
    },
    [types.GET_WATCHLIST_SUCCESS]: (state, action) => {
      console.log(types.GET_WATCHLIST_SUCCESS)
      return {...state, watchlists: action.payload, error: null, loading: false}
    },
    [types.GET_WATCHLIST_FAILURE]: (state, action) => {
      console.log(types.GET_WATCHLIST_FAILURE)
      return {...state, loading: false, error: action.payload.error}
    }
  },
  initialState
);
