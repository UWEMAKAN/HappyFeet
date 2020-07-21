import { handleResponse, handleError } from './apiUtils';

const response = {
  ok: true,
  json: jest.fn(async () => Promise.resolve([])),
  status: 200,
  text: jest.fn(async () => Promise.resolve('Server side Validation Error'))
};

describe('handleResponse async method', () => {
  test('should resolve and call res.json if response is ok', async () => {
    const res = { ...response };
    const results = await handleResponse(res);
    expect.assertions(2);
    expect(results).toBeInstanceOf(Array);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  test('should reject, call res.text, and throw Error if response status is 400', async () => {
    const status = 400;
    const ok = false;
    const res = { ...response, status, ok };
    try {
      await handleResponse(res);
    } catch (err) {
      expect.assertions(2);
      expect(res.text).toHaveBeenCalledTimes(1);
      expect(err).toEqual(Error('Server side Validation Error'));
    }
  });

  test('should reject, call res.text, and throw Error if response status is 400', async () => {
    const ok = false;
    const res = { ...response, ok };
    try {
      await handleResponse(res);
    } catch (err) {
      expect.assertions(1);
      expect(err).toEqual(Error('Network response was not ok.'));
    }
  });
});

describe('handleError', () => {
  test('should throw Error', () => {
    const error = Error('Handling Error');
    try {
      handleError(error);
    } catch (err) {
      expect.assertions(1);
      expect(err).toEqual(error);
    }
  });
});
