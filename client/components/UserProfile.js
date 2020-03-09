import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class UserProfile extends Component {
  render() {
    return (
      <div>
        <h2>Your Profile</h2>
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
