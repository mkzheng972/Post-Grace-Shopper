import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserList from './UserList'
import {getAllUsers} from '../../store/user'

export class Admin extends Component {
  componentDidMount() {
    this.props.getAllUsers()
  }
  render() {
    return (
      <div>
        <UserList users={this.props.users} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
