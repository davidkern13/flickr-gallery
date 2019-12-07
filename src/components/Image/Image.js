import React from 'react';
import PropTypes from 'prop-types';

import './Image.scss';

import FontIcons from './FontIcons';

import { selectedImageObject } from '../../utils/utils';

class Image extends React.PureComponent {
  static propTypes = {
    dto: PropTypes.object,
    galleryWidth: PropTypes.number,
    position: PropTypes.number,
    handleFlip: PropTypes.func,
    handleExpandImg: PropTypes.func,
    handleDuplicat: PropTypes.func,
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

    let { dto, isActiveFlip, position } = this.props,
        urlImage = this.urlFromDto(dto),
        imageStyle = this.imageSize();

    return (
      <div className={`image-root image-root-${position}`} style={imageStyle}>

        <img
          className={`${isActiveFlip}`}
          style={imageStyle}
          src={urlImage}
          alt={dto.title}
        />

        <FontIcons
          handleFlip={() => this.props.handleFlip(position)}
          handleDuplicate={() => this.props.handleDuplicate(dto)}
          handleExpandImg={(e) => this.props.handleExpandImg(selectedImageObject(e, urlImage, dto, `.image-root-${position}`, true, position))}
        />

      </div>
    );
  }
}

export default Image;
