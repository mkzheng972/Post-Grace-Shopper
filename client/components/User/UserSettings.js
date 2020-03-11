import React, {Component} from 'react'
import {connect} from 'react-redux'
import UpdateUser from './UpdateUser'

export class UserSettings extends Component {
  render() {
    const {firstName, lastName, email, imageUrl} = this.props.user
    return (
      <div>
        <h2>Your Settings</h2>
        <div>
          <p>Current First Name: {firstName}</p>
          <p>Current Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <img src={imageUrl} width="230" height="230" />
        </div>
        <UpdateUser />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(UserSettings)
