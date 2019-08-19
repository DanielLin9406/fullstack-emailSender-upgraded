import axios from 'axios';

export const INIT_AUTH = 'INIT_AUTH';
export const RELOAD_AUTH = 'RELOAD_AUTH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const initialState = {
  initialized: false,
  authenticated: null,
  user: undefined,
  error: undefined
};

export default function authReducer(state = initialState, action) {
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
}

const createAsyncInitAuthUser = dispatch => async () => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: INIT_AUTH,
    payload: res.data
  });
};

const createAsyncReloadAuthUser = dispatch => async () => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: RELOAD_AUTH,
    payload: res.data
  });
};

const createAsyncHandleLogin = dispatch => async () => {
  try {
    const res = await axios.get('/auth/google');
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

const createAsyncHandleLogout = dispatch => async () => {
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

// //TODO 修改到stripe
const createAsyncHandleToken = dispatch => async token => {
  const res = await axios.post('/api/stripe', token);
  dispatch({
    type: INIT_AUTH,
    payload: res.data
  });
};

// //TODO 修改到survey
const createAsyncSubmitSurvey = dispatch => async (values, history) => {
  const res = await axios.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({
    type: INIT_AUTH,
    payload: res.data
  });
};

const createFunction = {
  createAsyncInitAuthUser,
  createAsyncReloadAuthUser,
  createAsyncHandleLogin,
  createAsyncHandleLogout,
  createAsyncHandleToken,
  createAsyncSubmitSurvey
};

export { createFunction };
