import { connect } from 'react-redux';
import { homeOperations } from './duck';
import { authOperations } from '../login/duck';
import { bindActionCreators } from 'redux';

const { getMovies } = homeOperations;
const { logout } = authOperations;
const mapStateToProps = state => ({
  session: state.auth.session,
  movies: state.home.movies
});

const mapDispatchToProps = (dispatch) => {
  return {
    home: bindActionCreators({ getMovies, logout }, dispatch)
  }
};

export default connect(mapStateToProps,  mapDispatchToProps);
