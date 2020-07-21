import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import * as shoesActions from './shoesActions';
import * as types from '../../constants/shoesConstants';
import * as commonTypes from '../../constants/commonConstants';
import { shoes } from '../../../../tools/mockData';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Shoes Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('loadShoes Thunk', () => {
    test('should create API_CALL_BEGIN and LOAD_SHOES_SUCCESS when loading shoes', async () => {
      fetchMock.mock('*', {
        body: shoes,
        headers: { 'content-type': 'application/json' }
      });

      const expectedActions = [
        { type: commonTypes.API_CALL_BEGIN },
        { type: types.LOAD_SHOES_SUCCESS, shoes }
      ];

      const store = mockStore({ shoes: [] });
      await store.dispatch(shoesActions.loadShoes());
      expect.assertions(1);
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('should create API_CALL_BEGIN and API_CALL_ERROR when loading shoes fails', async () => {
      fetchMock.mock('*', { throws: Error('Network Connectivity Error') });

      const expectedActions = [
        { type: commonTypes.API_CALL_BEGIN },
        { type: commonTypes.API_CALL_ERROR }
      ];

      const store = mockStore({ shoes: [] });
      try {
        await store.dispatch(shoesActions.loadShoes());
      } catch (err) {
        expect.assertions(2);
        expect(store.getActions()).toEqual(expectedActions);
        expect(err).toEqual(Error('Network Connectivity Error'));
      }
    });
  });

  describe('loadShoesSuccess Action', () => {
    test('should return the type: LOAD_SHOES_SUCCESS and shoes', () => {
      const action = shoesActions.loadShoesSuccess(shoes);
      const expectedAction = { type: types.LOAD_SHOES_SUCCESS, shoes };
      expect.assertions(1);
      expect(action).toEqual(expectedAction);
    });
  });
});
