export const API = 'API';
export const API_ERROR = 'API_ERROR';

export const getApi = api => ({
  type: API,
  payload: api
});

export const apiError = err => ({
  type: API_ERROR,
  payload: err
});
