import { combineReducers } from 'redux';

/*
 * Import reducer what you need
 * & add to combineReducers
 */
import { getApiReducer } from './api/reducer';
import { searchQueryReducer } from './search/reducer';
import { selectedPhotoReducer } from './modal/reducer';
import { setFavoriteReducer } from './favorite/reducer';

/*
 * The main reducer
 * for combineReducers
 */
export default combineReducers({
  api: getApiReducer,
  query: searchQueryReducer,
  selected_photo: selectedPhotoReducer,
  favorite: setFavoriteReducer
});
