import React, {Component} from 'react';
import './CreateBookmark.css';
import {browserHistory as history} from 'react-router';
import api from '../../api';

export default class EditBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:''
    };
  }

  _handleInput = (e) => {
    e.preventDefault()
      this.setState({
        inputValue:e.target.value
      })
  }

  _handleClick = (e) => {
    this._fetchData()
    }

  _fetchData = () =>{
    if(this.refs.title.value && this.refs.url.value){
      api.editBookmarks(this.props.boardId, this.refs.title.value, this.refs.description.value, this.refs.url.value, localStorage.token)
      .then(res => {
          history.push(`/boards/`)
      })
    }
    else {
      console.error("Must have a title url, and description")
      this.setState({error:"Must have a title and description"})
    }
  }

  render(){
    console.log(this.props)
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
