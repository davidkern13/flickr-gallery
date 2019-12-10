import React from 'react';

import FontAwesome from 'react-fontawesome';

const FontIcons = ({ handleFlip, handleDuplicate, handleFavorite, handleExpandImg, favorited }) => (
  <div className={'container-font-icons'}>
    <div onClick={handleFlip}>
      <FontAwesome className={'image-icon'} aria-hidden="false"  name="arrows-alt-h" title="flip" />
    </div>
    <div onClick={handleDuplicate}>
      <FontAwesome className={'image-icon'} aria-hidden="false" name="clone" title="clone" />
    </div>
    <div onClick={handleExpandImg}>
      <FontAwesome className={'image-icon'} aria-hidden="false" name="expand" title="expand" />
    </div>
    <div onClick={handleFavorite}>
      <img src={require(favorited ? '../../media/icons/star-active.png' : '../../media/icons/star.png' )} alt={'favorite'} />
    </div>
  </div>
);

export default FontIcons;
