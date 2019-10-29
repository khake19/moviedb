import actions from './actions';

const url = 'https://api.themoviedb.org/3';
const apiKey = 'f7f6f9484a1e7c9382424a4c95fb2946'

// API Status Codes of MovieDb
// 1	200	Success.
// 2	501	Invalid service: this service does not exist.
// 3	401	Authentication failed: You do not have permissions to access the service.
// 4	405	Invalid format: This service doesn't exist in that format.
// 5	422	Invalid parameters: Your request parameters are incorrect.
// 6	404	Invalid id: The pre-requisite id is invalid or not found.
// 7	401	Invalid API key: You must be granted a valid key.
// 8	403	Duplicate entry: The data you tried to submit already exists.
// 9	503	Service offline: This service is temporarily offline, try again later.
// 10	401	Suspended API key: Access to your account has been suspended, contact TMDb.
// 11	500	Internal error: Something went wrong, contact TMDb.
// 12	201	The item/record was updated successfully.
// 13	200	The item/record was deleted successfully.
// 14	401	Authentication failed.
// 15	500	Failed.
// 16	401	Device denied.
// 17	401	Session denied.
// 18	400	Validation failed.
// 19	406	Invalid accept header.
// 20	422	Invalid date range: Should be a range no longer than 14 days.
// 21	200	Entry not found: The item you are trying to edit cannot be found.
// 22	400	Invalid page: Pages start at 1 and max at 1000. They are expected to be an integer.
// 23	400	Invalid date: Format needs to be YYYY-MM-DD.
// 24	504	Your request to the backend server timed out. Try again.
// 25	429	Your request count (#) is over the allowed limit of (40).
// 26	400	You must provide a username and password.
// 27	400	Too many append to response objects: The maximum number of remote calls is 20.
// 28	400	Invalid timezone: Please consult the documentation for a valid timezone.
// 29	400	You must confirm this action: Please provide a confirm=true parameter.
// 30	401	Invalid username and/or password: You did not provide a valid login.
// 31	401	Account disabled: Your account is no longer active. Contact TMDb if this is an error.
// 32	401	Email not verified: Your email address has not been verified.
// 33	401	Invalid request token: The request token is either expired or invalid.
// 34	401	The resource you requested could not be found.

const getDetails = options => async dispatch => {
    try {
      const { movieId } = options;

      dispatch(actions.getMovie());
      const request = await fetch(url + '/movie/'+ movieId +'?api_key='+ apiKey +'&language=en-US')

      const response = await request.json()
      if ('status_code' in response) throw response.status_message
      dispatch(actions.getMovieSuccess(response));
    }
    catch(error) {
      dispatch(actions.getMovieFailure({error: error}));
    }
}

const getReviews = options => async dispatch => {
  try {
    const { movieId } = options;

    dispatch(actions.getReviews());
    const request = await fetch(url + '/movie/'+ movieId +'/reviews?api_key='+ apiKey +'&language=en-US')

    const response = await request.json()
    if ('status_code' in response) throw response.status_message
    dispatch(actions.getReviewsSuccess(response));
  }
  catch(error) {
    dispatch(actions.getReviewsFailure({error: error}));
  }
}


const getRatings = options => async dispatch => {
  try {
    const { accountId, sessionId } = options;

    dispatch(actions.getRatings());
    const request = await fetch(url + '/account/'+ accountId +'/rated/movies?api_key='+ apiKey +'&language=en-US&session_id=' + sessionId)

    const response = await request.json()
    if ('status_code' in response) throw response.status_message
    dispatch(actions.getRatingsSuccess(response));
  }
  catch(error) {
    dispatch(actions.getRatingsFailure({error: error}));
  }
}

const postRating = options => async dispatch => {
    try {
      const { movieId, sessionId, value } = options;

      dispatch(actions.postRating());
      const request = await fetch(url + '/movie/'+ movieId +'/rating?api_key='+ apiKey +'&session_id=' + sessionId, {
        method: 'POST',
        body: JSON.stringify({value}),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const response = await request.json()

      // status code 1: Success.
      // status code 12: The item/record was updated successfully.
      if ('status_code' in response && response.status_code !== 1 && response.status_code !== 12) throw response.status_message
      dispatch(actions.postRatingSuccess(response));
    }
    catch(error) {
      dispatch(actions.postRatingFailure({error: error}));
    }
}

const deleteRating = options => async dispatch => {
    try {
      const { movieId, sessionId } = options;

      dispatch(actions.deleteRating());
      const request = await fetch(url + '/movie/'+ movieId +'/rating?api_key='+ apiKey +'&session_id=' + sessionId, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const response = await request.json()

      // status code 1: Success.
      // status code 13: The item/record was deleted successfully.
      if ('status_code' in response && response.status_code !== 1 && response.status_code !== 13) throw response.status_message
      dispatch(actions.deleteRatingSuccess(response));
    }
    catch(error) {
      dispatch(actions.deleteRatingFailure({error: error}));
    }
}

const addWatchList = options => async dispatch => {
    try {
      const { accountId, sessionId, mediaId, mediaType='movie', watchList=true } = options;

      dispatch(actions.addWatchList());
      const request = await fetch(url + '/account/'+ accountId +'/watchlist?api_key='+ apiKey +'&session_id=' + sessionId, {
        method: 'POST',
        body: JSON.stringify({
          media_type: mediaType,
          media_id: mediaId,
          watchlist: watchList
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const response = await request.json()

      // status code 1: Success.
      // status code 12: The item/record was updated successfully.
      if ('status_code' in response && response.status_code !== 1 && response.status_code !== 12) throw response.status_message
      dispatch(actions.addWatchListSuccess(response));
    }
    catch(error) {
      dispatch(actions.addWatchListFailure({error: error}));
    }
}

export default {
  getDetails,
  getReviews,
  getRatings,
  postRating,
  deleteRating,
  addWatchList
};
