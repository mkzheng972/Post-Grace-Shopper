import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class UserProfile extends Component {
  render() {
    const {user} = this.props
    return (
      <div>
        <div>
          <h2>Hello {user.firstName}!</h2>
          <h4>Your current profile</h4>
          {user.imageUrl === null ? (
            <p>No Image Available</p>
          ) : (
            <img src={user.imageUrl} />
          )}
          <p>Current First Name: {user.firstName}</p>
          <p>Current Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
        </div>
        <Link to="/user/settings">
          <p>Your Settings</p>
        </Link>
        <Link to="/user/orders">
          <p>Your Order History</p>
        </Link>
        {this.props.user.isAdmin ? (
          <Link to="/admin/userList">
            <p>Admin Page User List</p>
          </Link>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
