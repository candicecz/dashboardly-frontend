import React, {Component} from 'react';
import './CreateBoard.css';
import {browserHistory as history} from 'react-router';
import api from '../../api';

export default class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:''
    };
  }

  handleInput = (e) => {
    e.preventDefault()
      this.setState({
        inputValue:e.target.value
      })
  }

  _handleClick = (e) => {
    e.preventDefault()
    this._fetchData()
    }

  _fetchData = () =>{
    if(this.refs.title.value && this.refs.description.value){
      api.createBoards(this.refs.title.value,this.refs.description.value, localStorage.token)
      .then(res => {
        history.push(`/boards/${res.body[0].id}`)
      })
    }
    else{
      this.setState({error:"Please put in a title and description"})
    }
  }

  render(){
    return (
      <div className="createNewBoard">
        <form>
          Title: <input type="text" maxLength="80" ref="title"/>
          <hr/>
          Description: <input value={this.state.inputValue} maxLength="80" type="text" ref="description" onInput={e => this.handleInput(e)}/>
          {this.state.inputValue.length}/80
          <hr/>
          <button type="submit" onClick={(e) => this._handleClick(e)}>Create</button>
        </form>
        <h3>{this.state.error}</h3>
      </div>
    );
  }

}
