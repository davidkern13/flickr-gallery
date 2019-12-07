import React from 'react';

import download from'../../media/icons/download.png';
import rotate from'../../media/icons/rotate.png';
import zoomIn from'../../media/icons/zoom-in.png';
import zoomOut from'../../media/icons/zoom-out.png';

const LightboxNav = () => (
  <div className="container-lightbox-nav">
    <div><img src={download} alt={'download'} /></div>
    <div><img src={rotate} alt={'rotate'} /></div>
    <div><img src={zoomIn} alt={'zoomIn'} /></div>
    <div><img src={zoomOut} alt={'zoomOut'} /></div>
  </div>
);

export default LightboxNav;
