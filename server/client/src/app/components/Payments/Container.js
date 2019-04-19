import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { asyncHandleToken } from '../../../modules/auth/auth';
import Payments from './Payments';

// const mapStateToProps = state => ({
//   isLogin: state.auth.isLogin,
// });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ asyncHandleToken }, dispatch);

export default connect( null, mapDispatchToProps)(Payments);
