import React, {Component} from 'react';
import './SignUp.css';
import api from "../../api"

// const ENTER = 13;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleSignup = (e) => {
    e.preventDefault();
    api.requestSignup(this.refs.email.value, this.refs.password.value)
    .then(res => {
      if(this.refs.email.value && this.refs.password.value){
        this.props.router.push('/login')
      }
    })//here if you wanted you could redirect the user to being signed in by doing '/'
    .catch(
      this.setState({error:"Please put in a valid email and password(minimum 12 characters)"})
    )
    //
  }

  render() {
    return (
      <div className="signup">
        <input placeholder="email" type="text" ref="email"
          onKeyUp={this._handleTyping}
        />
        <input placeholder="password" type="password" ref="password"
          onKeyUp={this._handleTyping}
        />
        <button onClick={this._handleSignup}>Signup</button>
        <h3>{this.state.error}</h3>
      </div>
    );
  }

}
