import noop from 'lodash/noop';
import { createContext } from 'react';

export default initialState =>
  createContext({ ...initialState, dispatch: noop });
