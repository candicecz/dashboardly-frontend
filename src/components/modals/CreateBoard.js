import React, {Component} from 'react';
import './CreateBoard.css';
import {API_HOST} from '../../config';
import {browserHistory as history} from 'react-router';


export default class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:''
    };
  }

  handleInput = (e) => {
    e.preventDefault()
    if (e.target.value.length <= 80){
      this.setState({
        inputValue:e.target.value
      })
    }
  }
  
  _handleClick = (e) => {
    e.preventDefault()
      var fetchObj = {
        method:'POST',
        body: JSON.stringify({
          title:this.refs.title.value,
          description:this.refs.description.value
        })
      }

      fetch(`${API_HOST}/boards`, fetchObj)
        .then(data => data.json())
        .then(res => {
            history.push(`/boards/${res.id}`)
        })
        .catch(
          this.setState({error:"error"})
        )
    }
  // _handleClick = (e) => {
  //   e.preventDefault()
  //   this._fetchData()
  //   }
  //
  // _fetchData = () =>{
  //   console.log(this.props.id, "uuua")
  //   api.createBoards(this.props.id)
  //   .then(res => {
  //     console.log(res)
  //   })
  //
  // }

  render(){
    return (
      <div className="createNewBoard">
        <form>
          Title: <input type="text" ref="title"/>
          <hr/>
          Description: <input value={this.state.inputValue} type="text" ref="description" onInput={e => this.handleInput(e)}/>
          {this.state.inputValue.length}/80
          <hr/>
          <button type="submit" onClick={(e) => this._handleClick(e)}>Create</button>
        </form>
      </div>
    );
  }

}
