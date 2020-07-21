import { apiCallBegin, apiCallError } from './apiStatusActions';
import * as types from '../../constants/commonConstants';

test('should return action type API_CALL_BEGIN', () => {
  const action = apiCallBegin();
  expect.assertions(1);
  expect(action).toEqual({ type: types.API_CALL_BEGIN });
});

test('should return action type API_CALL_ERROR', () => {
  const action = apiCallError();
  expect.assertions(1);
  expect(action).toEqual({ type: types.API_CALL_ERROR });
});
