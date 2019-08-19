import noop from 'lodash/noop';
import React from 'react';
import { initialState } from './surveyReducer';

export default React.createContext({
  ...initialState,
  dispatch: noop
});
