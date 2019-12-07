import React from 'react';
import './Search.scss';

import { connect } from 'react-redux';
import {searchQuery} from '../../store/search/action';
import { TITLE, SUB_TITLE, SEARCH_PLACEHOLDER, DEFAULT_VALUE } from '../../enum/search';

class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      tag: '',
      trending: DEFAULT_VALUE
    };
  }

  handeTagSelected = (tag, value) =>{
    //set new state
    this.setState({[tag]: value})
    //set new query to store
    this.props.searchQuery(value);
  }

  render() {

    let { tag, trending } = this.state;

    return (
      <div className="app-root">

        <div className="app-header">
          <div className="app-content">
            <div className="wrap-title">
              <h1>{TITLE}</h1>
              <p>{SUB_TITLE}</p>
            </div>

            <input className="app-input" onChange={e => this.handeTagSelected('tag', e.target.value)} value={tag} placeholder={SEARCH_PLACEHOLDER}/>

            <div className="wrap-trending">
              <h4>Trending: </h4>
              {trending.map( (item, idx) => <span key={idx} onClick={() => this.handeTagSelected('tag', item)}>{item}{trending.length-1 !== idx ? ',' : ''}</span>)}
            </div>
          </div>
        </div>

      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    query: state.query
  };
};

/*
 * connect function to our class
 */
const mapDispatchToProps = {
  searchQuery
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

