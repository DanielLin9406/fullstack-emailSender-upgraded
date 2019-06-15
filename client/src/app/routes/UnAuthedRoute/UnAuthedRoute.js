import React from 'react';
import { pagePaths } from '@app/pages/pagesInfo';
import { string, any } from 'prop-types';
import RouteUnit from '../RouteUnit/Container';

const UnAuthedRoute = ({ path, unauthenticated, ...props }) => {
  return (
    <RouteUnit
      {...props}
      path={path}
      predicate={() => unauthenticated}
      fallbackPath={pagePaths.LANDING}
    />
  );
};
UnAuthedRoute.propTypes = {
  unauthenticated: any,
  path: string
};

export default UnAuthedRoute;
