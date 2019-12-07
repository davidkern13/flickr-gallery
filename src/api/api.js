/*
 * Fetch data from url
 * @param - string
 * @param - function
 */
import axios from 'axios';

export const fetchData = (tag, getApi, apiError) => {

  const getImagesUrl = `services/rest/?method=flickr.photos.search&api_key=522c1f9009ca3609bcbaf08545f067ad&tags=${tag}&tag_mode=any&per_page=100&format=json&safe_search=1&nojsoncallback=1`;
  const baseUrl = 'https://api.flickr.com/';
  axios({
    url: getImagesUrl,
    baseURL: baseUrl,
    method: 'GET'
  })
    .then(res => res.data)
    .then(res => {
      if (
        res &&
        res.photos &&
        res.photos.photo &&
        res.photos.photo.length > 0
      ) {
        getApi(res.photos.photo);
        //this.setState({images: res.photos.photo});
      }else{
        apiError('error api');
      }
    }).catch( err => {
      apiError(err);
    });

};
