import * as types from '../../constants/shoesConstants';
import initialState from '../initialState';

const shoesReducer = (state = initialState.shoes, action) => {
  switch (action.type) {
    case types.LOAD_SHOES_SUCCESS:
      return action.shoes;
    default:
      return state;
  }
};

export default shoesReducer;
