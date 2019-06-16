import { connect } from 'react-redux';
import AuthedRoute from './AuthedRoute';

const mapStateToProps = state => ({
  authenticated: state.auth.user
});

export default connect(
  mapStateToProps,
  null
)(AuthedRoute);
