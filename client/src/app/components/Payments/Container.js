import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { asyncHandleToken } from '@app/modules/auth/auth';
import Payments from './Payments';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ asyncHandleToken }, dispatch);

export default connect( null, mapDispatchToProps)(Payments);
