import { createAction } from 'redux-actions';
import types from './types';

const loginStarted = createAction(types.LOGIN_STARTED);
const loginSuccess =  createAction(types.LOGIN_SUCCESS, (payload) => payload);
const loginFailure = createAction(types.LOGIN_FAILURE, (error) => error);
const logout = createAction(types.LOGOUT);
export default {
  loginStarted,
  loginSuccess,
  loginFailure,
  logout
};
