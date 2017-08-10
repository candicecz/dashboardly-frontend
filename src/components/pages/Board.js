import React, {Component} from 'react';
import api from '../../api';
import BookmarkCard from '../elements/BookmarkCard';
import auth from '../../auth';
import './Board.css';
import AddButton from '../elements/AddButton';
import CreateBookmark from '../modals/CreateBookmark'

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      bookmarks: [],
      updatedAt: ""
    };
  }

  componentDidMount() {
    this.fetchBoardData()
  }

  fetchBoardData = () => {
      Promise.all([
        api.getBoard(this.props.params.id),
        api.getBookmarks(this.props.params.id)
      ])
      .then(res => {
        this.setState({
          title: res[0].body[0].title,
          description: res[0].body[0].description,
          bookmarks: res[1].body
        })
      })
      .catch(console.error)
  }

  _createBookmarkForm = () =>{
    this.setState({
      createBookmark: true
    })
  }

  render() {
    let { bookmarks } = this.state;
    if(!bookmarks) {
      return (
        <div>
          <h1> LOADING from Boards.js </h1>
        </div>
      )
    }
    return (
      <div className="board">
        { bookmarks.map(b =>
          <BookmarkCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            url={b.url}
          />
        )}
        {auth.isLoggedIn() ? <AddButton addButtonClick={this._createBookmarkForm} /> : null}
        {this.state.createBookmark ? <CreateBookmark boardId = {this.props.params.id} /> : null}
      </div>
    );
  }

}
