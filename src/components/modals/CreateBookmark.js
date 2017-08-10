import React, {Component} from 'react';
import './CreateBookmark.css';
import BookmarkCard from '../elements/BookmarkCard'
import api from '../../api';
import {API_HOST} from '../../config';
import {browserHistory as history} from 'react-router';

export default class CreateBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleClick = (e) => {
    e.preventDefault()
    this._fetchData()
  }

  _fetchData = () => {
    api.createBookmarks(this.props.boardId)
    .then(res => {

        history.push(`/boards/${res.body.boardId}`)
    })

  }

  render() {
    return (
      <div>
        <form>
          URL: <input type="text" ref="url"/>
          <hr/>
          TITLE: <input type="text" ref="title"/>
          <hr/>
          DESCRIPTION: <input type="text" ref="description"/>
          <hr/>
          <button type="submit" onClick={(e) => this._handleClick(e)}>Create</button>
        </form>

      </div>
    );
  }

}
