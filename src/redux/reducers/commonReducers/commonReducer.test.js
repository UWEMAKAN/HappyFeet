import { apiCallStatusReducer, actionTypeEndsInSuccess } from './commonReducer';
import * as commonTypes from '../../constants/commonConstants';
import * as types from '../../constants/shoesConstants';

describe('actionTypeEndsInSuccess', () => {
  test('should return true when action type contains substring _SUCCESS', () => {
    const type = types.LOAD_SHOES_SUCCESS;
    expect.assertions(1);
    expect(actionTypeEndsInSuccess(type)).toBeTruthy();
  });

  test('should return false when action type does not contain substring _SUCCESS', () => {
    const type = commonTypes.API_CALL_BEGIN;
    expect.assertions(1);
    expect(actionTypeEndsInSuccess(type)).toBeFalsy();
  });
});

describe('apiCallStatusReducer', () => {
  test('should return 1 when initial state is 0 and action type is API_CALL_BEGIN', () => {
    const action = { type: commonTypes.API_CALL_BEGIN };
    const apiCallsInProgress = 0;
    expect.assertions(1);
    expect(apiCallStatusReducer(apiCallsInProgress, action)).toBe(1);
  });

  test('should return 0 when initial state is 1 and action type is API_CALL_ERROR', () => {
    const action = { type: commonTypes.API_CALL_ERROR };
    const apiCallsInProgress = 1;
    expect.assertions(1);
    expect(apiCallStatusReducer(apiCallsInProgress, action)).toBe(0);
  });

  test('should return 2 when initial state is 3 and action type is LOAD_SHOES_SUCCESS', () => {
    const action = { type: types.LOAD_SHOES_SUCCESS };
    const apiCallsInProgress = 3;
    expect.assertions(1);
    expect(apiCallStatusReducer(apiCallsInProgress, action)).toBe(2);
  });

  test('should return 0 when initial state is 0 and action type does not satisfy any of these conditions; ends with _SUCCESS, is API_CALL_ERROR or API_CALL_BEGIN', () => {
    const action = { type: 'OTHER_ACTION_TYPES' };
    const apiCallsInProgress = 0;
    expect.assertions(1);
    expect(apiCallStatusReducer(apiCallsInProgress, action)).toBe(0);
  });
});
