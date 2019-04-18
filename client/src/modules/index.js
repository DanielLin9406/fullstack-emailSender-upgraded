import scheduledPrice from './scheduled-price/scheduledPrice';
import auth from './auth/auth';

export default function combineReducers(state = {}, action) {
  return {
    auth: auth(state.auth, action),
    scheduledPrice: scheduledPrice(state.scheduledPrice, action),
  }
}
