require('normalize.css/normalize.css');
require('styles/App.css');

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import CustomRoute from '../components/Navigation/Route';

import store from './../store/store';

class AppComponent extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="index">
          <CustomRoute />
        </div>
      </Provider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
