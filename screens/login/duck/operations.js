import actions from './actions';

const getMovies = options => dispatch =>
  dispatch(actions.getMovies(options));

export default {
  getMovies
};
