import React from 'react';
import { hot } from 'react-hot-loader';
import RouteUnit from '../RouteUnit/Container';
import HelmetLayout from '../../layout/helmet/HelmetLayout';

const BaseRoute = ({ ...props }) => {
  return (
    <HelmetLayout>
      <RouteUnit
        {...props}
        predicate={() => {
          return true;
        }}
      />
    </HelmetLayout>
  );
};

export default hot(module)(BaseRoute);
