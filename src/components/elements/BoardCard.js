import React, {Component} from 'react';
import { Link } from 'react-router';
import './BoardCard.css';
import EditButton from './EditButton';
import EditBoard from '../modals/EditBoard'
import auth from '../../auth'

export default class BoardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _editBoardForm = () =>{
    this.setState({
      editBoard: true
    })
  }

  render() {
    let { title, description, id } = this.props
    return (
      <div>
        <Link to={`/boards/${id}`}>
          <div className="board-card">
            <h2>{ title }</h2>
            <p>{ description }</p>
          </div>
        </Link>

        {auth.isLoggedIn() ? this.props.ownerId == localStorage.user ? <EditButton editButtonClick={this._editBoardForm}  /> :null : null}
        {this.state.editBoard ? <EditBoard id={id} title={title} description={description}/> : null}
      </div>
    );
  }

}
