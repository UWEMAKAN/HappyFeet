import shoesReducer from './shoesReducer';
import * as types from '../../constants/shoesConstants';
import * as commonTypes from '../../constants/commonConstants';
import { shoes } from '../../../../tools/mockData';

describe('ShoesReducer', () => {
  test('should return array of shoes when action type is LOAD_SHOES_SUCCESS', () => {
    const action = { type: types.LOAD_SHOES_SUCCESS, shoes };
    const initialState = [];
    const results = shoesReducer(initialState, action);
    expect.assertions(1);
    expect(results).toEqual(shoes);
  });

  test('should return array of shoes when action type is not LOAD_SHOES_SUCCESS', () => {
    const action = { type: commonTypes.API_CALL_BEGIN, shoes };
    const initialState = [];
    const results = shoesReducer(initialState, action);
    expect.assertions(1);
    expect(results).toEqual([]);
  });
});
