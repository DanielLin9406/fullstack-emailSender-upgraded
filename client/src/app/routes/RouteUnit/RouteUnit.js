import React from 'react';
import { any, string } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const EnrichRoute = ({ predicate, fallbackPath = '/', ...props }) => {
  return predicate() ? <Route {...props} /> : <Redirect to={fallbackPath} />;
};

EnrichRoute.propTypes = {
  predicate: any,
  fallbackPath: string
};

export default EnrichRoute;
