import React from 'react';
import { any } from 'prop-types';
import { pagePaths } from '@app/pages/pagesInfo';
import RouteUnit from '../RouteUnit/Container';

const AuthedRoute = ({ authenticated, ...props }) => {
  return (
    <RouteUnit
      {...props}
      predicate={() =>
        Object.prototype.toString.call(authenticated) === '[object Object]'
      }
      fallbackPath={pagePaths.LANDING}
    />
  );
};
AuthedRoute.propTypes = {
  authenticated: any
};

export default AuthedRoute;
