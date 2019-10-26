import auth from '../screens/login/duck';
import home from '../screens/home/duck';
import { combineReducers } from 'redux';

export default combineReducers({
  auth,
  home
});
