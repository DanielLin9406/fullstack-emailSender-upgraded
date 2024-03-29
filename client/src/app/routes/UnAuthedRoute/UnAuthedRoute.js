import React from 'react';
import { paths } from '@app/pages';
import { string, any } from 'prop-types';
import RouteUnit from '../RouteUnit/Container';

const UnAuthedRoute = ({ path, unauthenticated, ...props }) => {
  return (
    <RouteUnit
      {...props}
      path={path}
      predicate={() => unauthenticated}
      fallbackPath={paths.LANDING}
    />
  );
};
UnAuthedRoute.propTypes = {
  unauthenticated: any,
  path: string
};

export default UnAuthedRoute;
