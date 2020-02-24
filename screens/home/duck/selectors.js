const getTrendingMoviesSelector = state => {
  const movies = state.home.movies.results.reduce((accumulator, movie) => {
    accumulator.push({
      movieId: movie.id,
      title: movie.original_title,
      poster: movie.poster_path,
      releaseDate: movie.release_date,
    });
    return accumulator;
  }, []);
  return movies;
};

const getPopularMoviesSelector = state => {
  const movies = state.home.movies.results.reduce((accumulator, movie) => {
    accumulator.push({
      movieId: movie.id,
      title: movie.original_title,
      poster: movie.poster_path,
      releaseDate: movie.release_date,
    });
    return accumulator;
  }, []);
  return movies;
};

export default {getTrendingMoviesSelector, getPopularMoviesSelector};
