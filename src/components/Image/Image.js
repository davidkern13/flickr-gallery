import React from 'react';
import PropTypes from 'prop-types';

import './Image.scss';

import FontIcons from './FontIcons';

import { selectedImageObject } from '../../utils/utils';

class Image extends React.PureComponent {
  static propTypes = {
    dto: PropTypes.object,
    activeFavorite: PropTypes.bool,
    galleryWidth: PropTypes.number,
    handleFlip: PropTypes.func,
    handleExpandImg: PropTypes.func,
    handleDuplicat: PropTypes.func,
    handleFavorite: PropTypes.func,
    isActiveFlip: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      size: 300
    };
  }

  calcImageSize = () => {
    const {galleryWidth} = this.props;
    const targetSize = 300;
    const imagesPerRow = Math.round(galleryWidth / targetSize);
    const size = (galleryWidth / imagesPerRow);
    this.setState({
      size
    });
  }

  componentDidMount() {
    this.calcImageSize();
  }

  urlFromDto = (dto) => {
    return `https://farm${dto.farm}.staticflickr.com/${dto.server}/${dto.id}_${dto.secret}.jpg`;
  }

  imageSize = () => {
    let { size } = this.state;
    return Object.assign({} ,
      {width: size + 'px'},
      {height: size + 'px'},
      {objectFit: 'cover'})
  }

  render() {

    let { dto, activeFavorite, isActiveFlip, handleFlip, handleDuplicate, handleFavorite, handleExpandImg } = this.props,
        urlImage = this.urlFromDto(dto),
        imageStyle = this.imageSize();

    return (
      <div className={`image-root image-root-${dto.position}`} style={imageStyle}>

        <img
          className={`${isActiveFlip}`}
          style={imageStyle}
          src={urlImage}
          alt={dto.title}
        />

        <FontIcons
          handleFlip={() => handleFlip(dto.position)}
          handleDuplicate={() => handleDuplicate(dto)}
          handleFavorite={() => handleFavorite(dto, activeFavorite)}
          handleExpandImg={(e) => handleExpandImg(selectedImageObject(e, urlImage, dto, `.image-root-${dto.position}`, true, dto.position))}
          favorited={activeFavorite}
        />

      </div>
    );
  }
}

export default Image;
