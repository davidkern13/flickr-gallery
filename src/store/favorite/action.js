export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export const setToFavorite = item => ({
  type: ADD_TO_FAVORITE,
  payload: item
});

export const removeFromFavorite = item => ({
  type: REMOVE_FROM_FAVORITE,
  payload: item
});

export const dafaultFavorite = () => ({
  type: REMOVE_FROM_FAVORITE,
});
