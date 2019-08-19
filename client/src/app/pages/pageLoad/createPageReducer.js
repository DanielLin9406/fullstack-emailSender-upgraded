export const initialState = {
  loadingPromise: undefined,
  loading: false
};

export default () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOAD_LIST':
        return Object.assign({}, state, {
          error: undefined,
          loading: true,
          loadingPromise: action.payload
        });
      case 'LOAD_LIST_SUCCESS':
        return Object.assign({}, state, {
          error: undefined,
          loading: false
        });
      case 'LOAD_LIST_FAILURE':
        return Object.assign({}, state, {
          error: action.payload,
          loading: false
        });
      default:
        return state;
    }
  };
  return reducer;
};
