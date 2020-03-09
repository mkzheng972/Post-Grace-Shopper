import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserList from './UserList'
import {getAllUsers} from '../../store/user'

export class Admin extends Component {
  componentDidMount() {
    this.props.getAllUsers()
  }
  render() {
    // console.log('admin -- all users', this.props.users)
    return (
      <div>
        <UserList users={this.props.users} />
        {/* {this.props.users.map(user => (
          <div className="all-users" key={user.id}>
            <h1>{user.email}</h1>
          </div>
        ))} */}
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
