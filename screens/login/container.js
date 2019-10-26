import { connect } from 'react-redux';
import { homeOperations } from './duck';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  auth: state.auth.login
});

const mapDispatchToProps = (dispatch) => {
  return {
    auth: bindActionCreators(homeOperations, dispatch)
  }
};

export default connect(mapStateToProps,  mapDispatchToProps);
