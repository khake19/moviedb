import {connect} from 'react-redux';
import {homeOperations, homeSelectors} from './duck';
import {authOperations} from '../login/duck';
import {bindActionCreators} from 'redux';

const {getPopularMovies, getRefreshMovies, searchMovies} = homeOperations;
const {logout} = authOperations;
const {getMoviesSelector} = homeSelectors;

const mapStateToProps = state => ({
  session: state.auth.session,
  movies: getMoviesSelector(state),
  page: state.home.page,
  loading: state.home.loading,
  error: state.home.error,
  refreshing: state.home.refreshing,
});

const mapDispatchToProps = dispatch => {
  return {
    home: bindActionCreators(
      {
        getPopularMovies,
        getRefreshMovies,
        searchMovies,
        logout,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
