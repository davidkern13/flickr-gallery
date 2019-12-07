require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Provider } from 'react-redux';

import App from './App/App';

import store from './../store/store';

class AppComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="index">
          <App/>
        </div>
      </Provider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
