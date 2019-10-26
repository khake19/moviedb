import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
    login: {
      loading: false,
      error: false,
      success: false,
      isLoggedIn: false
    }
};

export default handleActions(
  {
    [types.LOGIN]: state => ({ ...state, loading: true, error: false }),
  },
  initialState
);
