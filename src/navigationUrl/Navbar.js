
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
          <ul className="navbar-nav">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><Link to={'/favorites'} className="nav-link">Favorites</Link></li>
          </ul>
        </nav>
    );
  }
}

export default Navbar;
