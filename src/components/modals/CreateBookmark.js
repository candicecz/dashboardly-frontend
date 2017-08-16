import React, {Component} from 'react';
import './CreateBookmark.css';
import api from '../../api';
import {browserHistory as history} from 'react-router';

export default class CreateBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:''
    };
  }

  _handleInput = (e) => {
    //e.preventDefault()
    if (e.target.value.length <= 80){
      this.setState({
        inputValue:e.target.value
      })
    }
  }
  _handleClick = (e) => {
    //e.preventDefault()
    this._fetchData()
  }


  _fetchData = () => {
    if(this.refs.title.value && this.refs.url.value){
      api.createBookmarks(this.props.boardId, this.refs.title.value, this.refs.url.value, this.refs.description.value, localStorage.token)
      .then(res => {
        history.createhref(this.ref.url.value)
      })
    }
    else {
      console.error('missing bookmark title or url')
    }
  }

  render() {
    return (
      <div>
        <form>
          URL: <input type="text" ref="url" maxLength="80"/>
          <hr/>
          TITLE: <input type="text" ref="title" maxLength="80"/>
          <hr/>
          DESCRIPTION: <input type="text" ref="description" value={this.state.inputValue} onInput={(e)=>this._handleInput(e)} maxLength="80"/>
          {80-this.state.inputValue.length}
          <hr/>
          <button type="submit" onClick={(e) => this._handleClick(e)}>Create</button>
        </form>

      </div>
    );
  }

}
