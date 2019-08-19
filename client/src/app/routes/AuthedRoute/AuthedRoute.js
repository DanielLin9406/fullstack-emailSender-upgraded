import React, { useContext } from 'react';
// import { any } from 'prop-types';
import { paths } from '@app/pages';
import RouteUnit from '../RouteUnit/Container';
import AuthContext from '../../layout/auth/AuthContext';

const AuthedRoute = ({ ...props }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <RouteUnit
      {...props}
      predicate={() => authenticated === true}
      fallbackPath={paths.LANDING}
    />
  );
};
// AuthedRoute.propTypes = {
//   authenticated: any
// };

export default AuthedRoute;
