import { removeDuplicateObjects, jsonStringify, jsonParseData } from '../utils/utils';

/*
* Check localstorage data by key
* @param string
* @return array
*/
export const initialLocalStorageData = (key) => {

  let data = jsonParseData(getLocalStorageData(key));

  return data
}

/*
* Get localstorage data by key
* @param string
* @return array
*/
export const getLocalStorageData = (key) => {
  return localStorage.getItem(key)
}

/*
* Set to localstorage selected item
* @param string
* @param object
* @return array
*/
export const setLocalStorageData = (key, item) => {

  let data = (getLocalStorageData(key)), //get current local date
      newFavoriteArray = []; //empty array to pass data

  //check if initial data is empty
  validationDataObject(data) ? data = [] : data = jsonParseData(data)

  //concate selected object to favorite list
  newFavoriteArray = [...data, ...[Object.assign({}, item)]];

  //set new local data
  localStorage.setItem(key, jsonStringify(newFavoriteArray));

  return newFavoriteArray;
}

/*
* Remove selected item from localstorage
* @param string
* @param object
* @return array
*/
export const removeLocalStorageData = (key, item) => {

  let data = getLocalStorageData(key); //get current local date

  //check if initial data is empty
  validationDataObject(data) ? data = [] : data = jsonParseData(data);

  //create new favorite array after remove
  let newFavoriteArray = removeDuplicateObjects(data).filter(el => el.id !== item.id);

  //set new local data
  localStorage.setItem(key, jsonStringify(newFavoriteArray));

  return newFavoriteArray;
}

/*
* Validation object
* @param object
* @return boolean
*/
const validationDataObject = data => {
  return data === null || data === undefined || data === '';
}
