import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.scss';
import Gallery from '../Gallery';
import Search from '../Search';
import Modal from '../Modal';
import LoadingSpinner from 'components/LoadingSpinner';

import {fetchData} from '../../api/api';
import {apiError, getApi} from '../../store/api/action';
import { getGalleryWidth, checkEmptyObject } from '../../utils/utils';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      favorite: [],
      pagination: 1,
      loadingPagination:false,
      tag: this.props.query || '',
      galleryWidth: getGalleryWidth()
    };
  }

  getImages(tag, pagination) {
    let { getApi } = this.props;
    fetchData(tag, getApi, apiError, pagination);
  }

  componentDidMount() {
    let { tag, pagination } = this.state;
    this.getImages(tag, pagination);
  }

  componentWillReceiveProps(nextProps) {

    let { tag } = this.state,
      { data : { api }, query } = nextProps;

    //check if different query search
    if(tag !== query) {
      this.getImages(query, 1);
      this.setState({images: api, tag: query, loadingPagination:false})
    }

    this.setState({favorite: nextProps.favorite});

    //check if api data has value & first time get data
    if(api.length > 0)
      this.setState({images: api})
  }


  componentWillMount(){
    window.addEventListener('scroll', this.handleInfiniteScrolle);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleInfiniteScrolle);
  }

  handleInfiniteScrolle = (event) => {

    //check bottom page
    if ((event.path[1].innerHeight + event.path[1].scrollY) >= document.body.offsetHeight) {
      let { tag, pagination } = this.state;

       //set pagiantion state
       this.setState((prevState) => ({
         pagination: prevState.pagination + 1,
         loadingPagination: true
       }));

      //call api with new pagination
      this.getImages(tag, pagination+1);
    }
  }


  render() {

    let { tag, images, loadingPagination } = this.state;

    return (
      <div className={'app-root'}>
        {/*Gallery Image Modal*/}
        <Modal />
        {/*Search Component*/}
        <Search />
        {/*Gallery Component*/}
        <div className={'container-gallery'}>

          {checkEmptyObject(images) ?
              <LoadingSpinner />
            :
            <div className={'gallery-root'}>
              <Gallery
                query={tag}
                api={images}
                page={'app'}
                {...this.state.favorite}
              />
            </div>
          }

          {loadingPagination &&
            <div className={'load-more flex-center'}>
              <LoadingSpinner />
            </div>
          }

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.api,
    query: state.query.tag,
    favorite: state.favorite
  };
};

/*
 * connect function to our class
 */
const mapDispatchToProps = {
  getApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

