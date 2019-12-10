/*
* Get body with
*/
export const getGalleryWidth = () =>{
  try {
    return document.body.clientWidth;
  } catch (e) {
    return 1000;
  }
}

/*
* Get body height
*/
export const getGalleryHeight = () =>{
  try {
    return document.body.clientHeight;
  } catch (e) {
    return 1000;
  }
}

/*
* Sort images for Justified gallery
* @param array
* @return array
*/
export const sortDataToTag = (data) => {
  let arr = [];
  return data.reduce((acc, item, idx) => {
    if((idx+1) % 5 === 0){
      acc['row'] = [...acc['row'] || [], arr];
      arr = [];
    }else{
      arr.push(item);
    }
    return acc;
  }, []);
}

/*
* Find index from array by key
* @param array
* @param object
* @param string
* @return integer
*/
export const getFindIndex = (arr, obj, key) => {
  return arr.findIndex( (item) => {return item[key] === obj[key]});
}

/*
* Concat or remove from array state
* @param array
* @param integer
*/
export const addOrRemoveItem = (state, pos) => {
  return !state.flipList.includes(pos) ? [...state.flipList, pos] : state.flipList.filter(el => el !== pos)
}

/*
* Create object of image
* @return object
*/
export const selectedImageObject = (e, urlImage, dto, classStyle, open, position) => {
  return Object.assign({}, {url: urlImage}, {style: classStyle}, {event: e.nativeEvent}, dto, {open: open}, {position: position});
}

/*
* Check empty object
* @param object
* @param boolean
*/
export const checkEmptyObject = (obg) =>{
  return Object.keys(obg).length === 0;
}

/*
* Animation for Magnific Gallery
*/
export const Animation = (animTargets, animDuration, animBaseFrequency, animScale, animEasing ) =>{
  return {
    targets: animTargets,
    duration: animDuration,
    baseFrequency: animBaseFrequency,
    scale: animScale,
    easing: animEasing,
  }
}

/*
* Parse json
* @param object
*/
export const jsonParseData = (data) => {
  return JSON.parse(data);
}

/*
* Stringify json
* @param object
*/
export const jsonStringify = (data) => {
  return JSON.stringify(data);
}

/*
* Remove duplicate object from array
* @param object
* @return array
*/
export const removeDuplicateObjects = (data) => {
  return data.reduce((unique, o) => {
    if(!unique.some(obj => obj.id === o.id)) {
      unique.push(o);
    }
    return unique;
  },[]);
}
