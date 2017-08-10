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

  _handleSignup = () => {
    this.setState({
      email: this.refs.email.value,
      password:this.refs.password.value
    })

    var fetchObj = {
      method:'POST',
      body: JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    }

    fetch(`${API_HOST}/auth/users`, fetchObj)
      .then(res => {
        if(this.state.email && this.state.password){
          this.props.router.push('/login')
        }
      })//here if you wanted you could redirect the user to being signed in by doing '/'
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
