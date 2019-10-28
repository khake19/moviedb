const getWatchListSelector = (data) => {
  const watchlists = data.results.reduce((accumulator, watchlist) => {
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

export default { getWatchListSelector }
