import { combineReducers } from 'redux';
import shoes from './shoesReducer/shoesReducer';
import apiCallsInProgress from './commonReducers/commonReducer';

const rootReducer = combineReducers({
  shoes,
  apiCallsInProgress
});

export default rootReducer;
