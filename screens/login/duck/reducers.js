import { handleActions } from 'redux-actions';

import types from './types';

const initialState = {
    session: {
      sessionId: '',
      accountId: '',
      username: '',
      fullname: ''
    },
    loading: false,
    error: null
};

export default handleActions(
  {
    [types.LOGIN_STARTED]: (state) => {
      console.log(types.LOGIN_STARTED)
      return {...state, loading: true, error:null}
    },
    [types.LOGIN_SUCCESS]: (state, action) => {
      console.log(types.LOGIN_SUCCESS)
      return {...state, session: action.payload, error: null, loading: false}
    },
    [types.LOGIN_FAILURE]: (state, action) => {
      console.log(types.LOGIN_FAILURE)
      return {...state, loading: false, error: action.payload.error}
    }
  },
  initialState
);
