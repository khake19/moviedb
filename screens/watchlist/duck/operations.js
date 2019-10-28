import actions from './actions';

const getWatchList = options => async dispatch => {
    try {

      //need a environment to add settings
      const apiKey = 'f7f6f9484a1e7c9382424a4c95fb2946';
      const url = 'https://api.themoviedb.org/3';

      const { sessionId, accountId } = options;

      dispatch(actions.getWatchList());
      const request = await fetch(url + '/account/'+ accountId +'/watchlist/movies?api_key='+ apiKey +'&language=en-US&sort_by=created_at.asc&page=1&session_id=' + sessionId);

      const response = await request.json();

      if ('status_code' in response) throw response.status_message;
      dispatch(actions.getWatchListSuccess(response));
    }
    catch(error) {
      dispatch(actions.getWatchListFailure({error: error}));
    }
}

export default {
  getWatchList
};
