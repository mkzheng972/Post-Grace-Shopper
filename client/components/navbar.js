import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="navbar">
    <div className="navbar-image-container">
      <Link to="/home" className="navbar-image-link">
        <img src="/images/ramen.svg" className="navbar-image" />
      </Link>
    </div>
    {isLoggedIn ? (
      <div className="navbar-wrapper">
        {/* The navbar will show these links after you log in */}
        <Link to="/menu" className="navbar-link">
          Noodles
        </Link>
        <Link to="/cart" className="navbar-link">
          Cart
        </Link>
        <Link to="/user/profile" className="navbar-link">
          Profile
        </Link>
        <Link to="/login" className="navbar-link" onClick={handleClick}>
          Logout
        </Link>
      </div>
    ) : (
      <div className="navbar-wrapper">
        {/* The navbar will show these links before you log in */}
        <Link to="/menu" className="navbar-link">
          Noodles
        </Link>
        <Link to="/cart" className="navbar-link">
          Cart
        </Link>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/signup" className="navbar-link">
          Sign Up
        </Link>
      </div>
    )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
