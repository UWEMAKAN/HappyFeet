import * as types from '../../constants/commonConstants';
import initialState from '../initialState';

export const actionTypeEndsInSuccess = (type) => (
  type.substring(type.length - 8) === '_SUCCESS'
);

const apiCallStatusReducer = (state = initialState.apiCallsInProgress, action) => {
  if (action.type === types.API_CALL_BEGIN) {
    // eslint-disable-next-line no-console
    console.log(action.type);
    return state + 1;
  }
  if (action.type === types.API_CALL_ERROR
    || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
};

export default apiCallStatusReducer;
