import { SELECTED_PHOTO } from './action';

const defaultState = {
  selected_photo: {}
};

export const selectedPhotoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECTED_PHOTO:
      return {
        ...state,
        selected_photo: action.payload
      };

    default:
      return state;
  }
};
