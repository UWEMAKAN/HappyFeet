import { handleResponse, handleError } from './apiUtils';

const baseUrl = `${process.env.API_URL}/shoes/`;

// eslint-disable-next-line import/prefer-default-export
export function getShoes() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
