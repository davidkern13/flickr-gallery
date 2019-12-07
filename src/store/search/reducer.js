import { SEARCH_QUERY } from './action';

const defaultState = {
  tag: 'flamingo'
};

export const searchQueryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        tag: action.payload
      };

    default:
      return state;
  }
};
