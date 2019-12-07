export const getGalleryWidth = () =>{
  try {
    return document.body.clientWidth;
  } catch (e) {
    return 1000;
  }
}

export const getGalleryHeight = () =>{
  try {
    return document.body.clientHeight;
  } catch (e) {
    return 1000;
  }
}

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

export const getFindIndex = (arr, obj, key) => {
  return arr.findIndex( (item) => {return item[key] === obj[key]});
}

export const addOrRemoveItem = (state, pos) => {
  return !state.flipList.includes(pos) ? [...state.flipList, pos] : state.flipList.filter(el => el !== pos)
}


export const selectedImageObject = (e, urlImage, dto, classStyle, open, position) => {
  return Object.assign({}, {url: urlImage}, {style: classStyle}, {event: e.nativeEvent}, dto, {open: open}, {position: position});
}

export const checkEmptyObject = (obg) =>{
  return Object.keys(obg).length === 0;
}

export const Animation = (animTargets, animDuration, animBaseFrequency, animScale, animEasing ) =>{
  return {
    targets: animTargets,
    duration: animDuration,
    baseFrequency: animBaseFrequency,
    scale: animScale,
    easing: animEasing,
  }
}
