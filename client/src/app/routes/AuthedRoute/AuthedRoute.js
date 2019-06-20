import React from 'react';
import { any } from 'prop-types';
import { paths } from '@app/pages';
import RouteUnit from '../RouteUnit/Container';

const AuthedRoute = ({ authenticated, ...props }) => {
  return (
    <RouteUnit
      {...props}
      predicate={() => authenticated}
      fallbackPath={paths.LANDING}
    />
  );
};
AuthedRoute.propTypes = {
  authenticated: any
};

export default AuthedRoute;
