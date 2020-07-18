import * as types from '../../constants/shoesConstants';
import initialState from '../initialState';

const shoesReducer = (state = initialState.shoes, action) => {
  switch (action.type) {
    case types.LOAD_SHOES_SUCCESS:
      // eslint-disable-next-line no-console
      console.log(initialState.apiCallsInProgress);
      return action.shoes;
    default:
      return state;
  }
};

export default shoesReducer;
