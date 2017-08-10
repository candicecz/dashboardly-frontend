import React, {Component} from 'react';
import CreateBoard from '../modals/CreateBoard'
import CreateBookmark from '../modals/CreateBookmark'

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
        <button className="fa fa-plus fa-2x" onClick={this.props.addButtonClick}></button>
      </div>
    )
  }

}
