import React from 'react'
import RouteUnit from '../RouteUnit/Container';
import { pagePaths } from '@app/pages/pagesInfo'

const AuthedRoute = ({ authenticated, ...props }) => {
  return (
    <RouteUnit
      {...props}
      predicate={() => authenticated}
      fallbackPath={pagePaths.LOGIN}
    />
  )
}

export default AuthedRoute;