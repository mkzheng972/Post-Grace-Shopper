import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleUser} from '../../store/user'
import UpdateUser from './UpdateUser'

export class UserSettings extends Component {
  render() {
    const {firstName, lastName, email} = this.props.user
    return (
      <div>
        <h2>Your Settings</h2>
        <div>
          <p>Current First Name: {firstName}</p>
          <p>Current Last Name: {lastName}</p>
          <p>Email: {email}</p>
        </div>
        <UpdateUser />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings)
