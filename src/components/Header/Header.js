import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service.js'
import userContext from '../../context/UserContext'
import UserContext from '../../context/UserContext'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink(){
    return (
      <div>
        <span>
          {this.context.user.name}
        </span>
        <nav className='nav'>
          <Link 
          onClick={this.handleLogoutClick} 
          to='/login'>
          Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink(){
    return (
      <nav className='nav'>
        <Link to='/login'>Login</Link>
        {' ' }
        <Link to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        {TokenService.hasAuthToken()
        ? this.renderLogoutLink()
        : this.renderLoginLink()}

        <h1 id="header_text">
          <Link to='/'>
            Zip Pal
          </Link>
        </h1>
      </header>
    );
  }
}

export default Header