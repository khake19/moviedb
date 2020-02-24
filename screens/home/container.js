import {connect} from 'react-redux';
import {homeOperations, homeSelectors} from './duck';
import {authOperations} from '../login/duck';
import {bindActionCreators} from 'redux';

const {getTrendingMovies, searchMovies} = homeOperations;
const {logout} = authOperations;
const {getMoviesSelector} = homeSelectors;

const mapStateToProps = state => ({
  session: state.auth.session,
  movies: getMoviesSelector(state),
  loading: state.home.loading,
  error: state.home.error,
});

const mapDispatchToProps = dispatch => {
  return {
    home: bindActionCreators(
      {getTrendingMovies, searchMovies, logout},
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
