import auth from '../screens/login/duck';
import home from '../screens/home/duck';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  auth,
  home
});


// NOTE: answer by dan abramov himself - creator of redux
// NOTE: https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
export default (state, action) => {
  if (action.type === 'screens/auth/LOGOUT') {
    state = undefined
  }
  return reducers(state, action)
}
