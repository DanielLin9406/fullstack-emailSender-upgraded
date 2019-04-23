import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { asyncFetchUser } from '@app/modules/auth/auth';
import Header from './Header';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ asyncFetchUser }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps)(Header);