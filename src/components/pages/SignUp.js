import React, {Component} from 'react';
// import auth from '../../auth'
import './SignUp.css';
import {API_HOST} from '../../config';


// const ENTER = 13;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleSignup = (e) => {
      e.preventDefault();
      api.requestSignup(this.refs.email.value, this.refs.password.value)
      .then(data => data.json())
      .then(res => {
        console.log('signup ', res)
        if(this.refs.email.value && this.refs.password.value){
          this.props.router.push('/login')
        }
      .catch(
        this.setState({error:"Please put in a username or password"})
      )

    }

  render() {
    return (
      <div className="signup">
        <input type="text" ref="email"
          onKeyUp={this._handleTyping}
        />
        <input type="password" ref="password"
          onKeyUp={this._handleTyping}
        />
        <button onClick={this._handleSignup}>Signup</button>
        <h3>{this.state.error}</h3>
      </div>
    );
  }

}
