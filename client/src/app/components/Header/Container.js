import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { asyncInitAuthUser, asyncHandleLogout } from '@app/modules/auth/auth';
import Header from './Header';

const mapStateToProps = state => ({
  user: state.auth.user,
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ asyncInitAuthUser, asyncHandleLogout }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
