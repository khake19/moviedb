import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
    movies: {
      result: []
    }
};

export default handleActions(
  {
    [types.GET_MOVIES]: state => ({ ...state, loading: true, fetched: false }),
  },
  initialState
);
