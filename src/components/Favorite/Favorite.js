import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Favorite.scss';

import Header from '../../pages/Favorites/Header';
import Navbar from '../../navigationUrl/Navbar';

import Gallery from '../Gallery';
import Modal from '../Modal';

class Favorite extends Component {

  render(){

    let { favorite , query } = this.props;

    return (
      <div className={'container-favorite'}>
        {/*Gallery Image Modal*/}
        <Modal />
        {/*Header Component*/}
        <Header count={favorite ? favorite.length : 0}/>
        {/*Navbar*/}
        <Navbar />
        {/*Gallery Component*/}
        <Gallery
          query={'My collection'}
          api={favorite || []}
          page={'favorites'}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    query: state.query.tag,
    favorite: state.favorite.favorite
  };
};

/*
 * connect function to our class
 */
const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);
