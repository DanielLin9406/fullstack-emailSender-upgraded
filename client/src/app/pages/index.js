import React from 'react';
import { Switch } from 'react-router-dom';

import UnAuthedRoute from '../routes/UnAuthedRoute/Container';
import AuthedRoute from '../routes/AuthedRoute/Container';
import BaseRoute from '../routes/BaseRoute/Container';
import getAllPages from './helper';
import { pagesInfo } from './pagesInfo';

export default () => (
  <Switch>
    {getAllPages(pagesInfo)
      .filter(pageObj => pageObj.component !== undefined)
      .map(pageObj => {
        switch (pageObj.authType) {
          case 'authed':
            return <AuthedRoute exact key={pageObj.path} {...pageObj} />;
          case 'unAuthed':
            return <UnAuthedRoute exact key={pageObj.path} {...pageObj} />;
          default:
            return <BaseRoute exact key={pageObj.path} {...pageObj} />;
        }
      })}
  </Switch>
);
