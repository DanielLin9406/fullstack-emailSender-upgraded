import axios from 'axios';

export const FETCH_SURVEYS = 'fetch_surveys';

export const initialState = {
  survey: []
};

export default function surveyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return Object.assign({}, state, {
        survey: action.payload || false
      });
    default:
      return state;
  }
}

const createAsyncFetchSurveys = dispatch => async () => {
  const res = await axios.get('/api/surveys');
  dispatch({
    type: FETCH_SURVEYS,
    payload: res.data
  });
};

const createFunction = {
  createAsyncFetchSurveys
};

export { createFunction };
