import axios from 'axios';
// import baseUrl from '@app/modules/host/url';
/*
 * define action name
 */

/*
 * define async action name
 */
export const FETCH_SURVEYS = 'fetch_surveys';
/*
 * state init (scheduledPrice in redux)
 */

export const initialState = {
  survey: []
};

/*
 * auth reducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return Object.assign({}, state, {
        survey: action.payload || false
      });
    default:
      return state;
  }
};

/*
 * export async packaged dispatch
 */

export const asyncFetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');
  dispatch({
    type: FETCH_SURVEYS,
    payload: res.data
  });
};
