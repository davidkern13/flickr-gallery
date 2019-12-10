import React from 'react';

import HomePage from '../App';
import Favorite from '../Favorite';

import history from './history';

import { Router, Route, Switch } from 'react-router-dom';


function CustomRoute() {
  return (
      <Router  history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/favorites" component={Favorite} />
        </Switch>
      </Router>
  );
}

export default CustomRoute;
