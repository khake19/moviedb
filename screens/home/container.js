import {connect} from 'react-redux';
import {homeOperations, homeSelectors} from './duck';
import {authOperations} from '../login/duck';
import {bindActionCreators} from 'redux';

const {
  getTrendingMovies,
  getPopularMovies,
  getRefreshMovies,
  searchMovies,
} = homeOperations;
const {logout} = authOperations;
const {getTrendingMoviesSelector, getPopularMoviesSelector} = homeSelectors;

const mapStateToProps = state => ({
  session: state.auth.session,
  trendingMovies: getTrendingMoviesSelector(state),
  popularMovies: getPopularMoviesSelector(state),
  page: state.home.page,
  loading: state.home.loading,
  error: state.home.error,
});

const mapDispatchToProps = dispatch => {
  return {
    home: bindActionCreators(
      {
        getTrendingMovies,
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
