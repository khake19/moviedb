import actions from './actions';
import Config from 'react-native-config';

const getTrendingMovies = options => async dispatch => {
  try {
    dispatch(actions.getTrendingMovies(options));
    const request_movies = await fetch(
      Config.URL + '/trending/all/week?api_key=' + Config.API_KEY,
    );

    const movies = await request_movies.json();
    if ('status_code' in movies) throw movies.status_message;
    dispatch(actions.getTrendingMoviesSuccess(movies));
  } catch (error) {
    dispatch(actions.getTrendingMoviesFailure({error: error}));
  }
};
const getPopularMovies = (options = {page: 1}) => async dispatch => {
  try {
    dispatch(actions.getPopularMovies(options));
    const request_movies = await fetch(
      Config.URL +
        '/movie/popular?api_key=' +
        Config.API_KEY +
        '&language=en-US' +
        '&page=' +
        options.page,
    );

    const movies = await request_movies.json();
    if ('status_code' in movies) throw movies.status_message;
    dispatch(actions.getPopularMoviesSuccess(movies));
  } catch (error) {
    dispatch(actions.getPopularMoviesFailure({error: error}));
  }
};

// This will restart the movie list
const getRefreshMovies = (options = {page: 1}) => async dispatch => {
  try {
    dispatch(actions.getRefreshMovies(options));
    const request_movies = await fetch(
      Config.URL +
        '/movie/popular?api_key=' +
        Config.API_KEY +
        '&language=en-US' +
        '&page=' +
        options.page,
    );

    const movies = await request_movies.json();
    if ('status_code' in movies) throw movies.status_message;
    dispatch(actions.getRefreshMoviesSuccess(movies));
  } catch (error) {
    dispatch(actions.getRefreshMoviesFailure({error: error}));
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
  getTrendingMovies,
  getPopularMovies,
  getRefreshMovies,
  searchMovies,
};
