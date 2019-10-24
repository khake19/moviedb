import { createAction } from 'redux-actions';
import types from './types';

const getMovies = createAction(types.GET_MOVIES);

export default {
  getMovies
}
