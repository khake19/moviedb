const getMoviesSelector = (state) => {
  const movies = state.home.movies.results.reduce((accumulator, currentValue) => {
      accumulator.push({
        movieId: currentValue.id,
        title: currentValue.original_title,
        poster: currentValue.poster_path,
        releaseDate: currentValue.release_date
      })
      return accumulator;
  }, [])
  return movies
}

export default { getMoviesSelector }
