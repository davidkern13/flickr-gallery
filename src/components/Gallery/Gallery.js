import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Gallery.scss';

import InfoBar from '../../pages/Search/InfoBar';

import { selectedPhoto } from '../../store/modal/action';
import { setToFavorite, removeFromFavorite } from '../../store/favorite/action';

import Image from '../Image';

import {getGalleryWidth, getFindIndex, addOrRemoveItem, jsonParseData} from '../../utils/utils';

class Gallery extends Component {

  static propTypes = {
    query: PropTypes.string,
    api: PropTypes.array,
    page: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      query: this.props.query || 'flamingo',
      images: this.props.api || [],
      favorites: this.props.favorite || [],
      flipList: [],
      galleryWidth: getGalleryWidth()
    };

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      images: nextProps.api,
      query: nextProps.query,
      favorites: nextProps.favorite && (nextProps.favorite) || []
    })
  }

  /*
  * handleFlip - click flip, flip the photo
  */
  handleFlip = (pos) => {

    console.log('handleFlip', pos);
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
    const position_duplicate = getFindIndex(images, dto, 'id')
    this.setState({
      images: [
        ...images.slice(0, position_duplicate),
        dto,
        ...images.slice(position_duplicate)
      ]
    })
  }

  /*
  * handleExpandImg - click expand, open full screen photo
  */
  handleExpandImg = (object) => {
    this.props.selectedPhoto(object);
  }

  /*
 * handleFavorite - add or remove item, into favorite array
 */
  handleFavorite = (item, active) =>{
    let {setToFavorite, removeFromFavorite} = this.props;

    active ?
      removeFromFavorite(item)
    :
      setToFavorite(item)
  }

  /*
  * handleCheckFavorite - check item if favorited
  */
  handleCheckFavorite = (dto) => {
      let { favorites } = this.state,
        checkFavorites = this.props.page === 'favorites' ? this.props.api : favorites,
        favoritesObj = typeof checkFavorites === 'string' ? jsonParseData(checkFavorites) : checkFavorites;

      return favoritesObj !== undefined && favoritesObj.length > 0 ? favoritesObj.filter( item => item.id === dto.id).length > 0 : false;
  }

  render() {
    let { flipList, images, query, galleryWidth } = this.state,
        imagesList = images.map((dto, idx) => {

       let favorited = this.handleCheckFavorite(dto);

        return <Image
          key={'image-' + dto.id + idx}
          dto={Object.assign({}, dto, {position: idx})}
          activeFavorite={favorited}
          galleryWidth={galleryWidth}
          handleFlip={this.handleFlip}
          handleExpandImg={this.handleExpandImg}
          handleDuplicate={this.handleDuplicate}
          handleFavorite={this.handleFavorite}
          isActiveFlip={flipList.includes(idx) ? 'flipped' : ''}
          />;
    })

    return (
      <div className={'container-gallery'}>

        <div className={'gallery-root'}>
          <InfoBar imageCount={imagesList.length} query={query}/>
          {imagesList.length ? imagesList : 'No images result'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

/*
 * connect function to our class
 */
const mapDispatchToProps = {
  selectedPhoto,
  setToFavorite,
  removeFromFavorite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

