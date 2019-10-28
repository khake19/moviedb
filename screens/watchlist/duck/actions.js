import types from './types';
import { createAction } from 'redux-actions';

const getWatchList = createAction(types.GET_WATCHLIST_STARTED);
const getWatchListSuccess = createAction(types.GET_WATCHLIST_SUCCESS);
const getWatchListFailure = createAction(types.GET_WATCHLIST_FAILURE);

export default {
  getWatchList,
  getWatchListSuccess,
  getWatchListFailure
}
