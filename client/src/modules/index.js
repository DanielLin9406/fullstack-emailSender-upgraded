import auth from './auth/auth';
import survey from './survey/survey';

export default function combineReducers(state = {}, action) {
  return {
    auth: auth(state.auth, action),
    survey: survey(state.survey, action)
  }
}
