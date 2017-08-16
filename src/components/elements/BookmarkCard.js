import React, {Component} from 'react';
import './BookmarkCard.css';
import auth from '../../auth';
import EditButton from './EditButton';
import EditBookmark from '../modals/EditBookmark'

export default class BookmarkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _editBookmarkForm = () =>{
    this.setState({
      editBookmark: true
    })
  }
  render() {
    console.log(this.props.boardId,"unpres")
    let { title, description, url } = this.props
    return (
      <div>
      <a className="bookmark-card" href={url}>
        <div>
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>
        <img src={""} alt={title}/>
      </a>
      {auth.isLoggedIn() ?  <EditButton editButtonClick={this._editBookmarkForm}  /> : null}
      {this.state.editBookmark ? <EditBookmark boardId={this.props.boardId} title={title} description={description} url={url}/> : null}
    </div>
    );
  }

}
