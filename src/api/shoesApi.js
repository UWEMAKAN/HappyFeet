import { handleResponse, handleError } from './apiUtils';

const baseUrl = `${process.env.API_URL}/shoes/`;

export default function getShoes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
