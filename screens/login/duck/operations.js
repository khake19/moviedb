import actions from './actions';

const login = options => dispatch =>
  dispatch(actions.login(options));

export default {
  login
};
