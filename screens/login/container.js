import { connect } from 'react-redux';
import { authOperations } from './duck';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return {
    session: state.auth.session,
    loading: state.auth.loading,
    error: state.auth.error
}};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: bindActionCreators(authOperations, dispatch)
  }
};

export default connect(mapStateToProps,  mapDispatchToProps);
