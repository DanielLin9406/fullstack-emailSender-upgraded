import axios from 'axios';

export const FETCH_SURVEYS = 'fetch_surveys';

export const initialState = {
  survey: [],
  loadingPromise: undefined,
  loading: false
};

export default function surveyReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_LIST':
      return Object.assign({}, state, {
        loadingPromise: action.loadingPromise,
        loading: true
      });
    case FETCH_SURVEYS:
      return Object.assign({}, state, {
        survey: action.payload || false,
        loading: false
      });
    default:
      return state;
  }
}

const createAsyncFetchSurveys = dispatch => async () => {
  const request = axios.get('/api/surveys');
  const res = await request;
  dispatch({
    type: FETCH_SURVEYS,
    payload: res.data
  });
};

const createFunction = {
  createAsyncFetchSurveys
};

export { createFunction };
