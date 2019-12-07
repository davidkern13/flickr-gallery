import React, { Component } from 'react';
import './Modal.scss';

import anime from 'animejs';
import PropTypes from 'prop-types';
import LoadingSpinner from '../LoadingSpinner';
import LightboxNav from './LightboxNav';

import { Animation } from '../../utils/utils';

class Lightbox extends Component {
  static propTypes = {
    photo: PropTypes.object,
    close: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      imageStatus: false,
      resize: false
    };
  }

  componentDidMount() {
    anime(Animation('.lightbox-photo', 350, 0, [0.5, 1], 'easeInQuad'));
  }

  handleClose = () =>{
    anime(Object.assign({}, Animation('.lightbox-photo', 300, 0, [1, 0], 'easeInQuad'),{complete :this.closeLightbox}));
  }

  closeLightbox = () => {
    this.props.close();
  }

  handleImageLoaded = () => {
    this.setState({ imageStatus: true });
  }

  handleImageErrored = () => {
    this.setState({ imageStatus: null });
  }

  handleFullSize = () => {
    this.setState({resize: !this.state.resize})
  }

  changeImageSize = () => {
    let { resize } = this.state;
    return Object.assign({} ,
  {width: resize ? 90 + '%' : 100 + '%'},
          {height: resize ? 90 + '%' : 100 + '%'},
          {maxWidth: resize ? 'inherit' : 800 + 'px'},
          {maxHeight: resize ? 'inherit' : 800 + 'px'})
  }

  render() {

    let { imageStatus } = this.state,
        { photo } = this.props,
        resizeStyle = this.changeImageSize();

    return (
      <div className="modal">
        <div className="modal-overlay" onClick={this.handleClose}></div>
        <LightboxNav />
        <div className="modal-content" style={resizeStyle}>
            <img
              className="lightbox-photo"
              src={photo.url}
              style={{display: imageStatus ? 'block' : 'none'}}
              onLoad={this.handleImageLoaded}
              onError={this.handleImageErrored}
              onClick={this.handleFullSize}
              alt={photo.title}
            />

          {!imageStatus &&
            <div className="center-v-h">
              <LoadingSpinner />
            </div>
          }

          {imageStatus == null &&
            <div className="center-v-h">
              <p className="error-txt">Image load failed try another time</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Lightbox;
