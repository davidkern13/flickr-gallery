import React from 'react';
import './App.scss';
import Gallery from '../Gallery';
import Search from '../Search';
import Modal from '../Modal';

class App extends React.Component {
  render() {
    return (
      <div className="app-root">
        {/*Gallery Image Modal*/}
        <Modal />
        {/*Search Component*/}
        <Search />
        {/*Gallery Component*/}
        <Gallery/>
      </div>
    );
  }
}

export default App;
