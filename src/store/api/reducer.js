import { API, API_ERROR } from './action';

const defaultState = {
  api: []
};

export const getApiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case API:
      return {
        ...state,
        api: action.payload
      };

    case API_ERROR:
      return {
        ...state,
        api_err: action.payload
      };

    default:
      return state;
  }
};
