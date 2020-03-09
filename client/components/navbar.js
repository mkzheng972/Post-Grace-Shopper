import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav className="navbar navbar-default navbar-fixed-top bg-warning lighten(@gray-base, 33.5%)">
      <div className="container-fluid">
        <Link to="/home" className="btn btn-outline-primary">
          Spicy Noods
        </Link>
        <Link to="/menu" className="btn btn-outline-primary">
          Noodles
        </Link>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/cart" className="btn btn-outline-primary">
              Cart
            </Link>
            <Link to="/user/profile" className="btn btn-outline-primary">
              Profile
            </Link>
            <a
              href="#"
              className="btn btn-outline-secondary"
              onClick={handleClick}
            >
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/cart" className="btn btn-outline-primary">
              Cart
            </Link>
            <Link to="/login" className="btn btn-outline-primary">
              Login
            </Link>
            <Link to="/signup" className="btn btn-outline-primary">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
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
