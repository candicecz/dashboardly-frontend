import React, { Component } from 'react';
import { Link } from 'react-router';
import onClickOutside from 'react-onclickoutside';
import auth from '../../auth';
import './Menu.css';
import api from '../../api';



class Menu extends Component {
  constructor() {
    super()
    this.state= {
      image: "profile-pic"
    }
  }

  _fetchData = () => {
    api.getMe(localStorage.token)
    .then(response => {
    localStorage.user = response.body.users_id
     this.setState({
        image: response.body.avatarUrl
      })
    })
  }


  componentDidMount(){
    this._fetchData()
  }

  handleClickOutside = () => {
    this.props.closeMenu();
  }

  render() {

    let { closeMenu, show } = this.props
    const isLoggedIn = auth.isLoggedIn()


    return (
      <div className={`menu ${show?"show":""}`}>

        <div className="menu__header">
          <img src={this.state.image} alt="profile-pic" className="menu__avatar"/>
        </div>

        <div className="menu__list">

          <Link to="/" className="menu__item" onClick={closeMenu}>
            Home
          </Link>

          {!isLoggedIn ?
            <Link to="/login" className="menu__item" onClick={closeMenu}>
              Login
            </Link>
          : null}

          {!isLoggedIn ?
            <Link to="/signup" className="menu__item" onClick={closeMenu}>
              Signup
            </Link>
          : null}

          {isLoggedIn ?
            <Link to="/logout" className="menu__item" onClick={closeMenu}>
              Logout
            </Link>

          : null}
        </div>

      </div>
    );
  }

}

export default onClickOutside(Menu);
