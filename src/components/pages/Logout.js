import React, {Component} from 'react';
import { Link } from 'react-router'
import auth from '../../auth'

export default class Logout extends Component {

  componentDidMount() {
    auth.logout()
    // this.props.router.push('/')
  }

  render() {
    return (
      <div>
        <p>Logged Out! <Link to="/login">log back in</Link></p>
      </div>
    )
  }
}
