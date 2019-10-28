import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { watchListSelectors, watchListOperations } from './duck';

const { getWatchList } = watchListOperations;
const { getWatchListSelector } = watchListSelectors;

const mapStateToProps = state => {
  return {
    session: state.auth.session,
    watchlists: getWatchListSelector(state.watchlist.watchlists),
    loading: state.watchlist.loading,
    error: state.watchlist.error
}};

const mapDispatchToProps = (dispatch) => {
  return {
    watchlist: bindActionCreators({ getWatchList }, dispatch)
  }
};

export default connect(mapStateToProps,  mapDispatchToProps);
