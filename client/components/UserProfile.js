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
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
