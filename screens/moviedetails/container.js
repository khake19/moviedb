import { connect } from 'react-redux';
import { movieDetailsOperations, movieDetailsSelectors } from './duck';
import { bindActionCreators } from 'redux';

const {
  getDetailsSelector,
  getRatingsSelector,
  getReviewsSelector
} = movieDetailsSelectors;

const {
  getDetails,
  getReviews,
  getRatings,
  postRating,
  deleteRating,
  addWatchList
} = movieDetailsOperations;

const mapStateToProps = state => {
  return {
    session: state.auth.session,
    ratings: getRatingsSelector(state.movie.ratings),
    reviews: getReviewsSelector(state.movie.reviews),
    detals: getDetailsSelector(state.movie.details),
    post_rating: state.movie.post_rating,
    delete_rating: state.movie.delete_rating,
    add_watchlist: state.movie.add_watchlist
}};

const mapDispatchToProps = (dispatch) => {
  return {
    movie: bindActionCreators({
      getDetails,
      getReviews,
      getRatings,
      postRating,
      deleteRating,
      addWatchList
    }, dispatch)
  }
};

export default connect(mapStateToProps,  mapDispatchToProps);
