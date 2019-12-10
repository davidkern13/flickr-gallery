import React from 'react';

const InfoBar = ({imageCount, query}) => (
  <div className={'container-gallery-info flex-center'} style={{maxWidth: 1300 + 'px', width: 100 + '%',padding: '0px 0px 30px', margin: '0 auto'}}>
    <div className={'container-count-pht'}>
      <p className={'pth'}>Photos: <span>{imageCount}</span></p>
      <p>•</p>
      <p className={'tag'}>Tag: <span>{query}</span></p>
    </div>
    <div>
      <button className={'button-grid icons-grid-regular'}></button>
      <button className={'button-grid icons-grid-module'}></button>
    </div>
  </div>

);

export default InfoBar;
