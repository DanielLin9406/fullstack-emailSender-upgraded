import axios from 'axios';
// import baseUrl from '@app/modules/host/url';
/*
 * define action name
 */

/*
 * define async action name
 */
export const INIT_AUTH = 'INIT_AUTH';
export const RELOAD_AUTH = 'RELOAD_AUTH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

/*
 * state init (scheduledPrice in redux)
 */

export const initialState = {
  initialized: false,
  authenticated: null,
  user: undefined,
  error: undefined
};

/*
 * auth reducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_AUTH:
      return Object.assign({}, state, {
        user: action.payload,
        authenticated: !!action.payload
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload,
        initialized: true,
        authenticated: !!action.payload,
        error: undefined
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        user: undefined,
        authenticated: false,
        error: action.payload
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        user: undefined,
        authenticated: false,
        error: undefined
      });
    case LOGOUT_FAILURE:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
};

/*
 * export sync packaged dispatch
 */

/*
 * export async packaged dispatch
 */

export const asyncInitAuthUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: INIT_AUTH,
    payload: res.data
  });
};

export const asyncHandleLogin = token => async dispatch => {
  try {
    const res = await axios.post('/api/stripe', token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: e.message
    });
  }
};

export const asyncHandleLogout = () => async dispatch => {
  try {
    const res = await axios.get('/api/logout');
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: LOGOUT_FAILURE,
      payload: e.message
    });
  }
};

export const asyncHandleToken = tokenId => async dispatch => {
  const res = await axios.post('/api/stripe', tokenId);
  dispatch({
    type: INIT_AUTH,
    payload: res.data
  });
};

export const asyncSubmitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({
    type: INIT_AUTH,
    payload: res.data
  });
};
