const getWatchListSelector = (state) => {
  const watchlists = state.home.watchlists.results.reduce((accumulator, watchlist) => {
      accumulator.push({
        movieId: watchlist.id,
        title: watchlist.original_title,
        poster: watchlist.poster_path,
        releaseDate: watchlist.release_date
      })
      return accumulator;
  }, [])
  return watchlists
}

export default { getMoviesSelector }
