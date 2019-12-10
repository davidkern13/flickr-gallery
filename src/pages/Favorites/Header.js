import React from 'react';

const Header = ({count}) => (
  <div className="app-header favorite">
    <div className="app-content favorite">
      <div className="container-image">
        <img src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'} alt={'name'} />
      </div>
      <div className="wrap-title favorite flex-center">
        <h1>Loren Kern</h1>

        <div className="container-personal-info flex-center">
          <div><p>75 Followings •</p></div>
          <div><p>118 Followers •</p></div>
          <div><p>{count} photos</p></div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
