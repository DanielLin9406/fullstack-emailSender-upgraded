import React from 'react';
import { hot } from 'react-hot-loader';
import RouteUnit from '../RouteUnit/Container';
import BaseLayout from '../../layout/BaseLayout';

const GeneralRoute = ({ ...props }) => {
  return (
    <BaseLayout>
      <RouteUnit
        {...props}
        predicate={() => {
          return true;
        }}
      />
    </BaseLayout>
  );
};

export default hot(module)(GeneralRoute);
