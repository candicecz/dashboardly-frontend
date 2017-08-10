import React, {Component} from 'react';
import './CreateBookmark.css';
import BookmarkCard from '../elements/BookmarkCard'

export default class CreateBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>CreateBookmark.js Component !!! </h1>
        <BookmarkCard />
      </div>
    );
  }

}
