import * as types from '../../constants/shoesConstants';
import * as shoesApi from '../../../api/shoesApi';
import { apiCallBegin, apiCallError } from '../commonActions/apiStatusActions';

export const loadShoesSuccess = (shoes) => (
  { type: types.LOAD_SHOES_SUCCESS, shoes }
);

export const loadShoes = () => (dispatch) => {
  dispatch(apiCallBegin());
  return shoesApi.getShoes()
    .then((shoes) => {
      dispatch(loadShoesSuccess(shoes));
    })
    .catch((err) => {
      dispatch(apiCallError(err));
      throw err;
    });
};
