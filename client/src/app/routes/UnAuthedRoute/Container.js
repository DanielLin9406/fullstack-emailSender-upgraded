import { connect } from 'react-redux';
import { pagePaths } from '@app/pages/pagesInfo';
import UnAuthedRoute from './UnAuthedRoute';

const mapStateToProps = state => ({
  unauthenticated: !state.auth.user
});

const ConnectedUnAuthedRoute = connect(
  mapStateToProps,
  null
)(UnAuthedRoute);
ConnectedUnAuthedRoute.defaultProps = { path: pagePaths.LOGIN };
export default ConnectedUnAuthedRoute;
