import noop from 'lodash/noop';
import React from 'react';
import { initialState } from './authReducer';

export default React.createContext({
  ...initialState,
  dispatch: noop
});
