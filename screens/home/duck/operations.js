import actions from './actions';
import Config from 'react-native-config';

const getMovies = options => async dispatch => {
  try {
    //need an environment to add settings
    const url = 'https://api.themoviedb.org/3';
    const apiKey = 'f7f6f9484a1e7c9382424a4c95fb2946';

    dispatch(actions.getMovies(options));
    const request_movies = await fetch(
      Config.URL + '/trending/all/week?api_key=' + Config.API_KEY,
    );

    const movies = await request_movies.json();
    if ('status_code' in movies) throw movies.status_message;
    dispatch(actions.getMoviesSuccess(movies));
  } catch (error) {
    dispatch(actions.getMoviesFailure({error: error}));
  }
};

const searchMovies = text => async dispatch => {
  try {
    dispatch(actions.searchMovies());
    const search_movies = await fetch(
      Config.URL + '/search/movie?api_key=' + Config.API_KEY + '&query=' + text,
    );

    const movies = await search_movies.json();
    if ('errors' in movies) throw movies[0];

    dispatch(actions.searchMoviesSuccess(movies));
  } catch (error) {
    dispatch(actions.searchMoviesFailure({error: error}));
  }
};
export default {
  getMovies,
  searchMovies,
};
