import React from 'react';
import { Switch } from 'react-router-dom';

import UnAuthedRoute from '../routes/UnAuthedRoute/Container';
import AuthedRoute from '../routes/AuthedRoute/Container';
import GeneralRoute from '../routes/GeneralRoute/Container';
import getAllPages from './helper';
import { pagesInfo } from './pagesInfo';

export default () => (
  <Switch>
    {getAllPages(pagesInfo)
      .filter(pageObj => pageObj.component !== undefined)
      .map(pageObj => {
        switch (pageObj.authType) {
          case 'authed':
            return (
              <AuthedRoute
                key={pageObj.path}
                exact
                path={pageObj.path}
                component={pageObj.component}
              />
            );
          case 'unAuthed':
            return (
              <UnAuthedRoute
                key={pageObj.path}
                exact
                path={pageObj.path}
                component={pageObj.component}
              />
            );
          default:
            return (
              <GeneralRoute
                key={pageObj.path}
                exact
                path={pageObj.path}
                component={pageObj.component}
              />
            );
        }
      })}
  </Switch>
);
