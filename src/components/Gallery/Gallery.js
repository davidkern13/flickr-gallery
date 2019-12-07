import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

import './Gallery.scss';

import { getApi, apiError } from '../../store/api/action';
import { selectedPhoto } from '../../store/modal/action';
import { fetchData } from '../../api/api';

import Image from '../Image';
import LoadingSpinner from '../LoadingSpinner';

import {getGalleryWidth, getFindIndex, addOrRemoveItem, checkEmptyObject} from '../../utils/utils';

class Gallery extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      tag: this.props.query || '',
      images: [],
      flipList: [],
      galleryWidth: getGalleryWidth()
    };
  }

  getImages(tag) {
    fetchData(tag, this.props.getApi, apiError);
  }

  componentDidMount() {
    let { tag } = this.state;
    this.getImages(tag);
    this.setState({
      galleryWidth: getGalleryWidth()
    });
  }

  componentWillReceiveProps(prevProps) {

    let { tag } = this.state,
        { data : { api }, query } = prevProps;

    //check if different query search
    if(tag !== query) {
      this.getImages(query);
      this.setState({images: api, tag: query})
    }

    //check if api data has value & first time get data
    if(api.length > 0)
      this.setState({images: api})
  }

  /*
  * handleFlip - click flip, flip the photo
  */
  handleFlip = (pos) => {
    this.setState((prevState) => ({
      ...prevState,
      flipList: addOrRemoveItem(prevState, pos)
    }));
  }

  /*
  * handleClone - click clone, clone photo into current state
  */
  handleDuplicate = (dto) => {
    let { images } = this.state;
    const position_duplicate = getFindIndex(images, dto, 'id');

    this.setState({
      images: [
        ...this.state.images.slice(0, position_duplicate),
        dto,
        ...this.state.images.slice(position_duplicate)
      ]
    })
  }

  /*
  * handleExpandImg - click expand, open full screen photo
  */
  handleExpandImg = (object) => {
    this.props.selectedPhoto(object);
  }

  render() {
    let { images, flipList } = this.state,
      imagesList =  images.map((dto, idx) => {
      return <Image
        key={'image-' + dto.id + idx}
        dto={dto}
        position={idx}
        handleFlip={this.handleFlip}
        handleExpandImg={this.handleExpandImg}
        handleDuplicate={this.handleDuplicate}
        isActiveFlip={flipList.includes(idx) ? 'flipped' : ''}
        galleryWidth={this.state.galleryWidth}/>;
    })

    return (
      <div className="container-gallery">
        {checkEmptyObject(imagesList) ?
          <div>
            <LoadingSpinner />
          </div>
          :
          <div className="gallery-root">
            {imagesList}
          </div>

        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.api,
    query: state.query.tag
  };
};

/*
 * connect function to our class
 */
const mapDispatchToProps = {
  getApi,
  selectedPhoto
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

