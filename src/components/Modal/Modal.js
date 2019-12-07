import React, { Component } from 'react';
import { connect } from 'react-redux';

import Lightbox from './Lightbox';

import { selectedPhoto } from '../../store/modal/action';
import { checkEmptyObject } from '../../utils/utils';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalPhoto: {}
    };
  }

  componentWillReceiveProps(prevProps) {

    let { obj : { selected_photo } } = prevProps,
        { modalPhoto } = this.state,
        emptyState = checkEmptyObject(modalPhoto);

    if(emptyState)
      this.setState({modalPhoto: selected_photo})

     if(!emptyState && selected_photo.id !== modalPhoto.id){
       this.setState({modalPhoto: selected_photo})
     }

  }

  handleCloseModal = () =>{
    this.props.selectedPhoto({});
  }

  render() {
    let { modalPhoto } = this.state;

    return (
      <div>
        {!checkEmptyObject(modalPhoto) &&
          <Lightbox photo={modalPhoto} close={this.handleCloseModal}/>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    obj: state.selected_photo,
  };
};

/*
 * connect function to our class
 */
const mapDispatchToProps = {
  selectedPhoto
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
