import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllUsers} from '../../store/user'
import SingleUser from './SingleUser'
export class UserList extends Component {
  componentDidMount() {
    this.props.getAllUsers()
  }
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <div className="card text-left " key={user.id}>
            <h1>
              {user.id}. {user.email}
            </h1>
            <SingleUser user={user} />
          </div>
        ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
