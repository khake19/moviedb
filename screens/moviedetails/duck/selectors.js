const getDetailsSelector = (details) => {
  const movie = details;
  return {
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path,
    overview: movie.overview,
    releaseDate: movie.release_date
  }
}

const getReviewsSelector = (data) => {
  const reviews = data.results.reduce((accumulator, review) => {
      accumulator.push({
        author: review.author,
        content: review.content,
        id: review.id,
        url: review.url
      })
      return accumulator;
  }, [])
  return reviews;
}

const getRatingsSelector = (data) => {
  const ratings = data.results.reduce((accumulator, rating) => {
      accumulator.push({
        title: rating.title,
        id: rating.id,
        overview: rating.overview,
        rating: rating.rating
      })
      return accumulator;
  }, [])
  return ratings;
}

export default { getDetailsSelector, getRatingsSelector,  getReviewsSelector };
