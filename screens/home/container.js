import { connect } from 'react-redux';
import { homeOperations } from './duck';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  movies: state.home.movies
});

const mapDispatchToProps = (dispatch) => {
  return {
    home: bindActionCreators(homeOperations, dispatch)
  }
};

export default connect(mapStateToProps,  mapDispatchToProps);
