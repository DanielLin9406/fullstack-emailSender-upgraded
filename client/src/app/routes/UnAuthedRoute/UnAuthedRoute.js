import React, { useContext } from 'react';
import { paths } from '@app/pages';
// import { string, any } from 'prop-types';
import RouteUnit from '../RouteUnit/Container';
import AuthContext from '../../layout/auth/AuthContext';

const UnAuthedRoute = ({ ...props }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <RouteUnit
      {...props}
      predicate={() => !authenticated}
      fallbackPath={paths.LANDING}
    />
  );
};
// UnAuthedRoute.propTypes = {
//   unauthenticated: any,
//   path: string
// };

export default UnAuthedRoute;
