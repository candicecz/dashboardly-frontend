import React, {Component} from 'react';
import CreateBoard from '../modals/CreateBoard'

export default class AddButton extends Component {
  constructor(props){
    super(props);
    this.state ={
      showComponent:false,
    }
  }

  _handleClick = (e) => {
    e.preventDefault();
    this.setState({
      showComponent:true,
    })
  }

  render(){
    return (
      <div className="add-button">
        <button onClick = {(e) => this._handleClick(e)}><i className="fa fa-plus fa-2x"/></button>
        {this.state.showComponent? <CreateBoard /> : null}
      </div>
    )
  }

}
