import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './action';
import { initialLocalStorageData, setLocalStorageData, removeLocalStorageData } from '../../LocalStorage/localstorage';
const favDefault = initialLocalStorageData('favorite');

const defaultState = {
  favorite: favDefault
};

export const setFavoriteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:

      return {
        ...state,
        favorite: setLocalStorageData('favorite', action.payload) || []
      };

    case REMOVE_FROM_FAVORITE:

      return {
        ...state,
        favorite: removeLocalStorageData('favorite',action.payload) || []
      };

    default:
      return state;
  }
};
