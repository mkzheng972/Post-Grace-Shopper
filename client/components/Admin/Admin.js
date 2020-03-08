import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserList from './UserList'

export class Admin extends Component {
  render() {
    return (
      <div>
        <UserList users={users} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
